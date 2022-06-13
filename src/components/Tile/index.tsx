/* @refresh reload */

import { Component } from "solid-js"
import { createGameObject, ScriptParameters } from "../GameObject"
import { TextureDescriptor } from "../Texture/main/descriptor"
import { mapping } from "../Texture/mapping"
import { gTextures } from "../Texture/TextureLoader"

export const TILE_SIZE = 32
export const TILE_SCALE = 8

export interface Tile {
  texture: TextureDescriptor
  x: number
  y: number
}

const Tile: Component<Tile> = p => {
  function Draw(ctx: ScriptParameters) {
    ctx.render.save()
    ctx.render.drawImage(
      gTextures.get(mapping.main)!,
      p.texture.pos.x,
      p.texture.pos.y,
      p.texture.size.x,
      p.texture.size.y,
      p.x * 0.5 * p.texture.size.x * TILE_SCALE +
        p.y * -0.5 * p.texture.size.y * TILE_SCALE,
      p.x * 0.25 * p.texture.size.x * TILE_SCALE +
        p.y * 0.25 * p.texture.size.y * TILE_SCALE,
      p.texture.size.x * TILE_SCALE,
      p.texture.size.y * TILE_SCALE
    )
    ctx.render.restore()
  }

  createGameObject({
    name: "Grass",
    type: "Tile",
    scripts: [Draw],
  })

  return null
}

export default Tile
