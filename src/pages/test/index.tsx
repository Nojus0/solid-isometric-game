/* @refresh reload */

import { Component } from "solid-js"
import { SceneContextProvider as Scene } from "@Context/SceneContext"
import { RenderContextProvider as Render } from "@Context/RenderContext"
import Tile, { TILE_PX, TILE_SCALE, TILE_SIZE } from "@Components/Tile"
import { Canvas } from "@Components/Canvas"
import TextureLoader from "@Components/Texture/TextureLoader"
import { mapping } from "@Components/Texture/mapping"
import Descriptor from "@Components/Texture/main/descriptor"
import Camera, { CameraProps } from "@Components/Camera"
import { Link } from "solid-app-router"

const Test: Component = () => {
  const CameraProps: CameraProps = {
    Speed: 15,
    x: innerWidth / 2,
    y: TILE_PX * 1.5,
  }

  return (
    <>
      <Link class="link" href="/">
        Go to Home
      </Link>
      <TextureLoader load={[mapping.main]}>
        <Render>
          <Canvas />
          <Scene>
            <Camera camera={CameraProps} />
            <Tile texture={Descriptor.Grass.Normal} x={0} y={0} />
            <Tile texture={Descriptor.Tree.Normal} x={-1} y={-1} />
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
  )
}

export default Test
