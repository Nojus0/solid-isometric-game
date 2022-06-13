/* @refresh reload */

import {
  createContext,
  onCleanup,
  onMount,
  ParentProps,
  useContext,
} from "solid-js";
import { GameObject, Script, ScriptParameters } from "../components/GameObject";
import { useRenderContext } from "./RenderContext";

function createSceneContext() {
  const gameObjects = new Set<GameObject>();

  function addObject(obj: GameObject) {
    gameObjects.add(obj);
    console.clear();
    console.table(Array.from(gameObjects));
  }

  function removeObjectRef(deleteObject: GameObject) {
    gameObjects.delete(deleteObject);
    console.clear();
    console.table(Array.from(gameObjects));
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

export interface SceneProps {
  beforeRender?: Script;
  afterRender?: Script;
}

export function SceneContextProvider(p: ParentProps<SceneProps>) {
  const Scene = createSceneContext();
  const RenderContext = useRenderContext();

  const render = RenderContext.getRender();
  const canvasRef = RenderContext.getCanvas();

  let isCleanup = false;
  const context: any = {
    render,
    canvasRef,
  };

  onCleanup(() => {
    isCleanup = true;
  });

  function loop() {
    if (isCleanup) return;

    render.save();

    render.imageSmoothingEnabled = false;
    render.clearRect(0, 0, canvasRef.width, canvasRef.height);

    p.beforeRender && p.beforeRender(context);

    for (const gameObject of Scene.gameObjects) {
      for (const script of gameObject.scripts) {
        context.gameObject = gameObject;
        script(context as ScriptParameters);
      }
    }

    p.afterRender && p.afterRender(context);

    render.restore();

    requestAnimationFrame(loop);
  }

  onMount(() => requestAnimationFrame(loop));

  return (
    <SceneContext.Provider value={Scene}>{p.children}</SceneContext.Provider>
  );
}
