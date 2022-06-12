import { createContext, createSignal, ParentProps, useContext } from "solid-js";
import { GameObject } from "../components/GameObject";

function createSceneContext() {
  const [gObjects, setGObjects] = createSignal<GameObject[]>([]);

  function addObject(obj: GameObject) {
    setGObjects((p) => [...p, obj]);
  }

  return {
    gObjects,
    setGObjects,
    addObject,
  };
}

type T = ReturnType<typeof createSceneContext>;

export const SceneContext = createContext<T>();
export const useSceneContext = () => useContext(SceneContext);

export function SceneContextProvider(p: ParentProps) {
  const ctx = createSceneContext();

  return (
    <SceneContext.Provider value={ctx}>{p.children}</SceneContext.Provider>
  );
}
