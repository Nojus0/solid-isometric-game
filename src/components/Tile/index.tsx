/* @refresh reload */

import { IsoToCartesian } from "@Components/Math/IsoToCartesian"
import { Component } from "solid-js"
import { createGameObject, ScriptParameters } from "../GameObject"
import { TextureDescriptor } from "../Texture/main/descriptor"
import { mapping } from "../Texture/mapping"
import { gTextures } from "../Texture/TextureLoader"

export const TILE_SIZE = 32
export const TILE_SCALE = 8
export const TILE_HALF = TILE_SIZE / 2
export const TILE_PX = TILE_SIZE * TILE_SCALE 
export interface Tile {
  texture: TextureDescriptor
  x: number
  y: number
}

const Tile: Component<Tile> = p => {
  createGameObject({
    name: "Grass",
    type: "Tile",
    scripts: [Tick],
  })

  function Tick(ctx: ScriptParameters) {
    ctx.render.save()

    var a = IsoToCartesian(p.x, p.y, p.texture.size)

    ctx.render.drawImage(
      gTextures.get(mapping.main)!,
      p.texture.pos.x,
      p.texture.pos.y,
      p.texture.size.x,
      p.texture.size.y,
      a.x * TILE_SCALE - (p.texture.size.x * TILE_SCALE) / 2,
      a.y * TILE_SCALE - p.texture.size.y * TILE_SCALE,
      p.texture.size.x * TILE_SCALE,
      p.texture.size.y * TILE_SCALE
    )
    ctx.render.restore()
  }

  return null
}

export default Tile
