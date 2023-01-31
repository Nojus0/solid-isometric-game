/* @refresh reload */

import { Component } from "solid-js"
import { mapping } from "@Textures/mapping"
import { Link } from "solid-app-router"
import {
  Camera,
  CameraProps,
  Canvas,
  GameObject,
  RenderContextProvider as Render,
  SceneContextProvider as Scene,
  TextureLoader
} from "Engine"
import Tile, { TILE_PX } from "../../Components/Tile"
import { d_main } from "@Textures/main/descriptor"


const Test: Component = () => {
  const CameraProps: CameraProps = {
    Speed: 15,
    x: innerWidth / 2 + TILE_PX / 2,
    y: TILE_PX * 2.95
  }

  type Map = Array<[string, number, number, number, number]>

  const ActiveMap: Map = [
    ["Cobblestone::Normal", 0, 0, 2, 2],
    ["Cobblestone::Small", -1, -1, 1, 1]
  ]

  function MapToTiles(e: Map) {
    const Result = ActiveMap.map((tile_arr) => {
      const Objs: GameObject[] = []

      for (let x = 0; x < tile_arr[3]; x++) {
        for (let y = 0; y < tile_arr[4]; y++) {
          const tileList = <Tile texture={d_main.get(tile_arr[0])!} x={tile_arr[1] + x}
                                 y={tile_arr[2] + y} /> as unknown as GameObject
          Objs.push(tileList)
        }

      }

      return Objs as unknown as Element
    })

    return Result
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

            {
              MapToTiles(ActiveMap)
            }

          </Scene>
        </Render>
      </TextureLoader>
    </>
  )
}

export default Test
