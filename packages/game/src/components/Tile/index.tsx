/* @refresh reload */

import { Component } from "solid-js"
import {
  Interval,
  createGameObject,
  GameObject,
  gTextures,
  IsoToCartesian,
  ScriptParameters,
  Vector2,
} from "Engine"
import { TextureDescriptor } from "../Texture/main/descriptor"
import { mapping } from "../Texture/mapping"

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

  return <GameObject name="Tile" type="Tile" scripts={[Tick]}></GameObject>
}


export default Tile
