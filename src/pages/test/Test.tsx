/* @refresh reload */

import { Component } from "solid-js";
import {
  SceneContext,
  SceneContextProvider as Scene,
} from "@Context/SceneContext";
import { RenderContextProvider as Render } from "@Context/RenderContext";
import Tile, { TILE_SCALE } from "@Components/Tile";
import { Canvas } from "@Components/Canvas";
import TextureLoader from "@Components/Texture/TextureLoader";
import styles from "../home/Home.module.css";
import { mapping } from "@Components/Texture/mapping";
import { Descriptor } from "@Components/Texture/main/descriptor";
import Camera from "@Components/Camera";
import { Script } from "@Components/GameObject";
import { Link } from "solid-app-router";

const Test: Component = () => {
  return (
    <>
      <Link class={styles.link} href="/">
        Go to Home
      </Link>
      <TextureLoader load={[mapping.main]}>
        <Render>
          <Canvas />
          <Scene>
            <Camera Speed={15}/>
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

            <Tile texture={Descriptor.Tree.Normal} x={6} y={0} />
          </Scene>
        </Render>
      </TextureLoader>
    </>
  );
};

export default Test;
