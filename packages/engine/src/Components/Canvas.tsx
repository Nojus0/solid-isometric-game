/* @refresh reload */

import { batch, createComputed, JSX, onCleanup, onMount } from "solid-js";
import { useRenderContext } from "../Context/RenderContext";

function SetCanvasSize(canvas: HTMLCanvasElement) {
  canvas.style.height = "100%";
  canvas.style.width = "100%";


  canvas.height = innerHeight * devicePixelRatio;
  canvas.width = innerWidth * devicePixelRatio;
}

export function Canvas(p: JSX.CanvasHTMLAttributes<HTMLCanvasElement>) {
  const ctx = useRenderContext();

  const Canvas = (<canvas {...p}></canvas>) as HTMLCanvasElement;

  const Rendering2DContext = Canvas.getContext("2d");

  if (!Rendering2DContext) {
    throw new Error(`[Canvas Component] Couldn't get 2D Context.`);
  }

  batch(() => {
    ctx.setCanvasRef(Canvas);
    ctx.setRender(Rendering2DContext);
  });

  SetCanvasSize(Canvas);

  const handleResize = () => SetCanvasSize(Canvas);

  addEventListener("resize", handleResize);
  onCleanup(() => removeEventListener("resize", handleResize));

  return Canvas;
}
