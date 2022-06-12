/* @refresh reload */

import {
  batch,
  createContext,
  createMemo,
  createSignal,
  ParentProps,
  useContext,
} from "solid-js";

function createRenderContext() {
  const [canvasRef, setCanvasRef] = createSignal<HTMLCanvasElement>();
  const [renderContext2d, setRender] = createSignal<CanvasRenderingContext2D>();

  function getRender() {
    const a = renderContext2d();

    if (!a) {
      throw new Error(
        "[createRenderContext] tried to access 2d context api without it set."
      );
    }

    return a;
  }

  function getCanvas() {
    const b = canvasRef();

    if (!b) {
      throw new Error(
        "[createRenderContext] tried to access canvas without it being set."
      );
    }

    return b;
  }

  return {
    setCanvasRef,
    setRender,
    getCanvas,
    getRender,
  };
}

export type RenderContext = ReturnType<typeof createRenderContext>;

export const RenderContext = createContext<RenderContext>();
export const useRenderContext = () => {
  const ctx = useContext(RenderContext);

  if (!ctx) {
    throw new Error("[Render Context] was not found.");
  }

  return ctx;
};

export function RenderContextProvider(p: ParentProps) {
  const ctx = createRenderContext();
  return (
    <RenderContext.Provider value={ctx}>{p.children}</RenderContext.Provider>
  );
}
