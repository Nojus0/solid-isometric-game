/* @refresh reload */

import { Component } from "solid-js";
import {
  SceneContext,
  SceneContextProvider as Scene,
} from "../../context/SceneContext";
import { RenderContextProvider as Render } from "../../context/RenderContext";
import Tile from "../../components/Tile";
import { Canvas } from "../../components/Canvas";

const App: Component = () => {
  function beforeRender(
    _: SceneContext,
    render: CanvasRenderingContext2D,
    canvasRef: HTMLCanvasElement
  ) {
    render.clearRect(0, 0, canvasRef.width, canvasRef.height);
    render.imageSmoothingEnabled = false;
    render.translate(innerWidth / 2, innerHeight / 4);
    render.scale(5, 5);
  }

  return (
    <Render>
      <Canvas />
      <Scene beforeRender={beforeRender}>
        <Tile x={1} y={0} index={0} />
        <Tile x={2} y={0} index={1} />
      </Scene>
    </Render>
  );
};

export default App;
