/* @refresh reload */

import { Component } from "solid-js"
import { mapping } from "@Textures/mapping"
import Descriptor from "@Components/Texture/main/descriptor"
import { Link } from "solid-app-router"
import {
  Camera,
  CameraProps,
  Canvas,
  TextureLoader,
  SceneContextProvider as Scene,
  RenderContextProvider as Render
} from "Engine"
import Tile, { TILE_PX } from "../../Components/Tile"
import RenderLayer from "Engine/src/Components/RenderLayer"

const Test: Component = () => {
  const CameraProps: CameraProps = {
    Speed: 15,
    x: innerWidth / 2 + TILE_PX / 2,
    y: TILE_PX * 2.95
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

            {/*
                Tiles need to be in a ASCENDING order, or the rendering order will be
                wrong so the isometric illusion will be broken.
            */}

            <RenderLayer>
              <Tile texture={Descriptor.Grass.Normal} x={-2} y={0} />
              <Tile texture={Descriptor.Grass.Normal} x={-1} y={-1} />
              <Tile texture={Descriptor.Grass.Normal} x={-1} y={0} />
              <Tile texture={Descriptor.Grass.Normal} x={0} y={-1} />
              <Tile texture={Descriptor.Grass.Normal} x={0} y={0} />
              <Tile texture={Descriptor.Grass.Normal} x={1} y={0} />
              <Tile texture={Descriptor.Grass.Normal} x={0} y={1} />
              <Tile texture={Descriptor.Grass.Normal} x={1} y={1} />
            </RenderLayer>

            <RenderLayer>
              <Tile texture={Descriptor.Grass.Bits} x={-1} y={-1} />
              <Tile texture={Descriptor.Grass.Bits} x={0} y={-1} />
              <Tile texture={Descriptor.Tree.Normal} x={-1.5} y={-0.75} />
            </RenderLayer>

          </Scene>
        </Render>
      </TextureLoader>
    </>
  )
}

export default Test
