/* @refresh reload */

import { Component, createContext, createSignal, Show } from "solid-js";
import {
  SceneContext,
  SceneContextProvider as Scene,
} from "../../context/SceneContext";
import { RenderContextProvider as Render } from "../../context/RenderContext";
import Tile, { TILE_SIZE } from "../../components/Tile";
import { Canvas } from "../../components/Canvas";
import TextureLoader from "../../components/Texture/TextureLoader";
import styles from "./Home.module.css";
const App: Component = () => {
  function beforeRender(
    _: SceneContext,
    render: CanvasRenderingContext2D,
    canvasRef: HTMLCanvasElement
  ) {
    render.imageSmoothingEnabled = false;
    render.clearRect(0, 0, canvasRef.width, canvasRef.height);
    // render.translate(-16, 0);
    render.translate(innerWidth / 2, 0);

    render.scale(8, 8);
  }

  return (
    <TextureLoader load={["/Grass.png"]}>
      <Render>
        <Canvas class={styles.player} />
        <Scene beforeRender={beforeRender}>
          <Tile x={0} y={0} index={0} />
          <Tile x={1} y={0} index={2} />
          <Tile x={2} y={0} index={2} />
        
        </Scene>
      </Render>
    </TextureLoader>
  );
};

export default App;
