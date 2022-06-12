/* @refresh reload */

import { batch, onCleanup, onMount } from "solid-js";
import { useRenderContext } from "../../context/RenderContext";

export function Canvas() {
  const ctx = useRenderContext();

  // * Run before first Render *
  const OnCanvasRef = (element: HTMLCanvasElement) => {
    const api = element.getContext("2d");

    if (!api) {
      return console.error(`[Canvas Component] Couldn't get 2D Context.`);
    }

    batch(() => {
      ctx.setCanvasRef(element);
      ctx.setRender(api);
    });

    SetCanvasSize(element);
  };

  function SetCanvasSize(canvas: HTMLCanvasElement) {
    canvas.style.height = "100%";
    canvas.style.width = "100%";
    canvas.height = innerHeight;
    canvas.width = innerWidth;
  }

  onMount(() => {
    const element = ctx.getCanvas();

    if (!element) {
      console.error(
        "[Canvas Component] onMount() -> Canvas Element not captured."
      );
      return;
    }

    const handleResize = () => SetCanvasSize(element);

    addEventListener("resize", handleResize);
    onCleanup(() => removeEventListener("resize", handleResize));
  });

  return <canvas ref={OnCanvasRef}></canvas>;
}
