/* @refresh reload */

import { Component } from "solid-js";
import {
  SceneContext,
  SceneContextProvider as Scene,
} from "@Context/SceneContext";
import { RenderContextProvider as Render } from "@Context/RenderContext";
import Tile from "@Components/Tile";
import { Canvas } from "@Components/Canvas";
import TextureLoader from "@Components/Texture/TextureLoader";
import styles from "../home/Home.module.css";
import { mapping } from "@Components/Texture/mapping";
import { Descriptor } from "@Components/Texture/main/descriptor";
import Camera from "@Components/Camera";
import { Script } from "@Components/GameObject";
import { Link } from "solid-app-router";

const Test: Component = () => {
  const beforeRender: Script = (ctx) => {
    ctx.render.imageSmoothingEnabled = false;
    ctx.render.clearRect(0, 0, ctx.canvasRef.width, ctx.canvasRef.height);
    // render.translate(-16, 0);
    // render.translate(innerWidth / 2, 0);

    ctx.render.scale(6, 6);
  };
  return (
    <>
      <Link class={styles.link} href="/">
        Go to Home
      </Link>
      <TextureLoader load={[mapping.main]}>
        <Render>
          <Canvas />
          <Scene beforeRender={beforeRender}>
            <Camera />
            <Tile texture={Descriptor.Grass.Normal} x={0} y={0} />
            <Tile texture={Descriptor.Grass.Small} x={0} y={1} />
            <Tile texture={Descriptor.Grass.Bits} x={0} y={2} />

            <Tile texture={Descriptor.Cobblestone.Normal} x={1} y={0} />
            <Tile texture={Descriptor.Cobblestone.Small} x={1} y={1} />
            <Tile texture={Descriptor.Cobblestone.Bits} x={1} y={2} />

            <Tile texture={Descriptor.Dirt.Normal} x={2} y={0} />
            <Tile texture={Descriptor.Dirt.Small} x={2} y={1} />

            <Tile texture={Descriptor.Sand.Normal} x={3} y={0} />
            <Tile texture={Descriptor.Sand.Small} x={3} y={1} />

            <Tile texture={Descriptor.GrassAutumn.Normal} x={4} y={0} />
            <Tile texture={Descriptor.GrassAutumn.Small} x={4} y={1} />

            <Tile texture={Descriptor.Campfire.Normal} x={5} y={0} />

            <Tile texture={Descriptor.Tree.Normal} x={5} y={-1} />
          </Scene>
        </Render>
      </TextureLoader>
    </>
  );
};

export default Test;
