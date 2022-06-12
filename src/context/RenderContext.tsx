import {
  batch,
  createContext,
  createSignal,
  ParentProps,
  useContext,
} from "solid-js";

function createRenderContext() {
  const [canvasRef, setCanvasRef] = createSignal<HTMLCanvasElement | null>();
  const [render, setRender] = createSignal<CanvasRenderingContext2D | null>();
  return {
    canvasRef,
    setCanvasRef,
    render,
    setRender,
  };
}

type T = ReturnType<typeof createRenderContext>;

export const RenderContext = createContext<T>();
export const useRenderContext = () => useContext(RenderContext);

export function RenderContextProvider(p: ParentProps) {
  const ctx = createRenderContext();
  return (
    <RenderContext.Provider value={ctx}>{p.children}</RenderContext.Provider>
  );
}

export function Canvas() {
  const ctx = useRenderContext();
  
  if (!ctx) {
    console.error("[Canvas Component] -> No render context found.");
    return null;
  }


  // * Run before first Render *
  const OnContext = (element: HTMLCanvasElement) => {
    const api = element.getContext("2d");

    if (!api) {
      return console.error(`[Canvas Component] Couldn't get 2D Context.`);
    }

    batch(() => {
      ctx.setCanvasRef(element);
      ctx.setRender(api);
    });
  };

  return <canvas ref={OnContext}></canvas>;
}
