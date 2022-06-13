/* @refresh reload */

import { Component } from "solid-js"
import {
  SceneContext,
  SceneContextProvider as Scene,
} from "../../context/SceneContext"
import { RenderContextProvider as Render } from "../../context/RenderContext"
import Tile, { TILE_SCALE, TILE_SIZE } from "../../components/Tile"
import { Canvas } from "../../components/Canvas"
import TextureLoader from "@Components/Texture/TextureLoader"
import styles from "./Home.module.css"
import { mapping } from "@Components/Texture/mapping"
import { Descriptor } from "@Components/Texture/main/descriptor"
import { Script } from "@Components/GameObject"
import { Link } from "solid-app-router"

const Home: Component = () => {
  const beforeRender: Script = ctx => {
    // ctx.render.translate((-TILE_SIZE * TILE_SCALE) / 2, 0);
    ctx.render.translate(innerWidth / 2, 0)
  }

  return (
    <>
      <Link class={styles.link} href="/test">
        Go to Test
      </Link>
      <TextureLoader load={[mapping.main]}>
        <Render>
          <Canvas />
          <Scene beforeRender={beforeRender}>
            <Tile texture={Descriptor.Grass.Normal} x={0} y={0} />
            <Tile texture={Descriptor.Grass.Normal} x={1} y={0} />
            <Tile texture={Descriptor.Grass.Normal} x={0} y={1} />
            <Tile texture={Descriptor.Grass.Normal} x={1} y={1} />
          </Scene>
        </Render>
      </TextureLoader>
    </>
  )
}

export default Home
