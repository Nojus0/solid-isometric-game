/* @refresh reload */

import { Component, onCleanup, onMount } from "solid-js";
import { useRenderContext } from "../../context/RenderContext";
import { useSceneContext } from "../../context/SceneContext";
import { GameObject } from "../GameObject";
import { Vector2 } from "../Math/Utils";

export const TILE_SIZE = 32;

let loading = true;
export const texture = new Image();
texture.src = "/Grass.png";
texture.onload = () => (loading = false);

const Tile: Component<Vector2 & { index: number }> = (p) => {
  const ctx = useRenderContext();
  const scene = useSceneContext();
  const render = ctx.getRender();

  let ref: GameObject;

  function Draw() {
    if (loading) return;
    render.save();

    render.drawImage(
      texture,
      TILE_SIZE * p.index,
      0,
      TILE_SIZE,
      TILE_SIZE,
      (p.x * 0.5 * TILE_SIZE) + (p.y * -0.5 * TILE_SIZE),
      (p.x * 0.25 * TILE_SIZE) + (p.y * 0.25 * TILE_SIZE),
      TILE_SIZE,
      TILE_SIZE
    );
    render.restore();
  }

  onMount(() => {
    ref = {
      name: "Grass",
      type: "Tile",
      scripts: [Draw],
    };
    scene.addObject(ref);
  });

  onCleanup(() => {
    const a = scene.gameObjects.size;
    scene.removeObjectRef(ref);
    if (scene.gameObjects.size == a) {
      console.error("After cleanup GameObject is not removed");
    }
  });

  return null;
};

export default Tile;
