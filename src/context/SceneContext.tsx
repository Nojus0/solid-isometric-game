/* @refresh reload */

import { createContext, createEffect, ParentProps, useContext } from "solid-js";
import { GameObject, Script, ScriptParameters } from "../components/GameObject";
import { RenderContext, useRenderContext } from "./RenderContext";

function createSceneContext() {
  const gameObjects = new Set<GameObject>();

  function addObject(obj: GameObject) {
    gameObjects.add(obj);
  }

  function removeObjectRef(deleteObject: GameObject) {
    gameObjects.delete(deleteObject);
  }

  createEffect(() => {
    console.table(Array.from(gameObjects));
  });

  return {
    gameObjects,
    addObject,
    removeObjectRef,
  };
}

export type SceneContext = ReturnType<typeof createSceneContext>;

export const SceneContext = createContext<SceneContext>();
export const useSceneContext = () => {
  const ctx = useContext(SceneContext);

  if (!ctx) {
    throw new Error("[Scene Context] was not found");
  }

  return ctx;
};

export interface Scene {
  beforeRender?: Script;
  afterRender?: Script;
}

export function SceneContextProvider(p: ParentProps<Scene>) {
  const Scene = createSceneContext();
  const RenderContext = useRenderContext();

  const render = RenderContext.getRender();
  const canvasRef = RenderContext.getCanvas();

  const Context: any = {
    render,
    canvasRef,
  };

  function loop() {
    render.save();

    p.beforeRender && p.beforeRender(Context);

    for (const gameObject of Scene.gameObjects) {
      for (const script of gameObject.scripts) {
        Context.gameObject = gameObject;
        script(Context as ScriptParameters);
      }
    }

    p.afterRender && p.afterRender(Context);

    render.restore();

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  return (
    <SceneContext.Provider value={Scene}>{p.children}</SceneContext.Provider>
  );
}
