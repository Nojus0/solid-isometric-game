import { Component } from "solid-js";
import { useRenderContext } from "../../context/RenderContext";

const Tile: Component = () => {
  const renderCtx = useRenderContext();

  if (!renderCtx) {
    console.error(`[Tile Component] -> Render context not found.`);
    return null;
  }

  const canvasRef = renderCtx.canvasRef();

  if (!canvasRef) {
    console.error("[Tile Component] -> Canvas not set.");
    return null;
  }


  return null;
};

export default Tile;
