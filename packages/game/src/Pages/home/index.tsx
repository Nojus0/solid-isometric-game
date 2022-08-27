/* @refresh reload */

import { Component } from "solid-js"
import {
  RenderContextProvider,
  SceneContextProvider as Scene,
  ScriptParameters,
  TextureLoader,
} from "Engine"
import { Canvas } from "Engine"
import { mapping } from "@Textures/mapping"
import Descriptor from "@Textures/main/descriptor"
import { Link } from "solid-app-router"
import Tile, { TILE_PX } from "@Components/Tile"

const Home: Component = () => {
  function beforeRender(ctx: ScriptParameters) {
    // ctx.render.translate((-TILE_SIZE * TILE_SCALE) / 2, 0);
    ctx.render.translate(innerWidth / 2 + TILE_PX / 2, TILE_PX * 1.5)
  }

  return (
    <>
      <Link class="link" href="/test">
        Go to Test
      </Link>
      <TextureLoader load={[mapping.main]}>
        <RenderContextProvider>
          <Canvas />
          <Scene beforeRender={beforeRender}>
            <Tile texture={Descriptor.Grass.Normal} x={0} y={0} />
            <Tile texture={Descriptor.Grass.Normal} x={1} y={0} />
            <Tile texture={Descriptor.Grass.Normal} x={0} y={1} />
            <Tile texture={Descriptor.Grass.Normal} x={1} y={1} />
          </Scene>
        </RenderContextProvider>
      </TextureLoader>
    </>
  )
}

export default Home
