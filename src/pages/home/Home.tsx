/* @refresh reload */

import { Component } from "solid-js";
import {
  SceneContext,
  SceneContextProvider as Scene,
} from "../../context/SceneContext";
import { RenderContextProvider as Render } from "../../context/RenderContext";
import Tile, { TILE_SIZE } from "../../components/Tile";
import { Canvas } from "../../components/Canvas";
import TextureLoader from "@Components/Texture/TextureLoader";
import styles from "./Home.module.css";
import { mapping } from "@Components/Texture/mapping";
import { Descriptor } from "@Components/Texture/main/descriptor";

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
    <TextureLoader load={[mapping.main]}>
      <Render>
        <Canvas class={styles.player} />
        <Scene beforeRender={beforeRender}>
          <Tile texture={Descriptor.Grass.Normal} x={0} y={0} />
        </Scene>
      </Render>
    </TextureLoader>
  );
};

export default App;
