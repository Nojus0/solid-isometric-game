/* @refresh reload */

import { createContext, ParentProps, useContext } from "solid-js";
import { GameObject } from "../components/GameObject";
import { RenderContext, useRenderContext } from "./RenderContext";

function createSceneContext() {
  const gameObjects = new Set<GameObject>();

  function addObject(obj: GameObject) {
    gameObjects.add(obj);
  }

  function removeObjectRef(deleteObject: GameObject) {
    gameObjects.delete(deleteObject);
  }

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
  beforeRender?: (
    Scene: SceneContext,
    DrawApiContext: CanvasRenderingContext2D,
    CanvasRef: HTMLCanvasElement,
    RenderContext: RenderContext
  ) => void;

  afterRender?: (
    Scene: SceneContext,
    DrawApiContext: CanvasRenderingContext2D,
    CanvasRef: HTMLCanvasElement,
    RenderContext: RenderContext
  ) => void;
}

export function SceneContextProvider(p: ParentProps<Scene>) {
  const ctx = createSceneContext();

  const renderContext = useRenderContext();
  const render = renderContext.getRender();
  const canvasRef = renderContext.getCanvas();

  function loop() {
    render.save();
    if (p.beforeRender) {
      p.beforeRender(ctx, render, canvasRef, renderContext);
    }

    for (const gameObject of ctx.gameObjects) {
      for (const script of gameObject.scripts) {
        script(gameObject);
      }
    }

    if (p.afterRender) {
      p.afterRender(ctx, render, canvasRef, renderContext);
    }

    render.restore();

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  return (
    <SceneContext.Provider value={ctx}>{p.children}</SceneContext.Provider>
  );
}
