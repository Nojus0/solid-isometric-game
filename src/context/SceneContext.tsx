import {
  createContext,
  createSignal,
  onMount,
  ParentProps,
  useContext,
} from "solid-js";
import { GameObject } from "../components/GameObject";
import { useRenderContext } from "./RenderContext";

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

type T = ReturnType<typeof createSceneContext>;

export const SceneContext = createContext<T>();
export const useSceneContext = () => {
  const ctx = useContext(SceneContext);

  if (!ctx) {
    throw new Error("[Scene Context] was not found");
  }

  return ctx;
};

export function SceneContextProvider(p: ParentProps) {
  const ctx = createSceneContext();

  const renderContext = useRenderContext();
  const render = renderContext.getRender();
  const canvasRef = renderContext.getCanvas();

  function loop() {
    render.clearRect(0, 0, canvasRef.width, canvasRef.height);
    for (const gameObject of ctx.gameObjects) {
      for (const script of gameObject.scripts) {
        script(gameObject);
      }
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);

  return (
    <SceneContext.Provider value={ctx}>{p.children}</SceneContext.Provider>
  );
}
