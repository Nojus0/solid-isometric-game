/* @refresh reload */

import { Component, onCleanup, onMount } from "solid-js";
import { useRenderContext } from "../../context/RenderContext";
import { useSceneContext } from "../../context/SceneContext";
import { createGameObject, GameObject, ScriptParameters } from "../GameObject";
import { TextureDescriptor } from "../Texture/main/descriptor";
import { mapping } from "../Texture/mapping";
import { gTextures } from "../Texture/TextureLoader";

export const TILE_SIZE = 32;

export interface Tile {
  texture: TextureDescriptor;
  x: number;
  y: number;
}

const Tile: Component<Tile> = (p) => {
  function Draw(ctx: ScriptParameters) {
    ctx.render.save();
    ctx.render.drawImage(
      gTextures.get(mapping.main)!,
      p.texture.pos.x,
      p.texture.pos.y,
      p.texture.size.x,
      p.texture.size.y,
      p.x * 0.5 * TILE_SIZE + p.y * -0.5 * TILE_SIZE,
      p.x * 0.25 * TILE_SIZE + p.y * 0.25 * TILE_SIZE,
      p.texture.size.x,
      p.texture.size.y
    );
    ctx.render.restore();
  }

  createGameObject({
    name: "Grass",
    type: "Tile",
    scripts: [Draw],
  });

  return null;
};

export default Tile;
