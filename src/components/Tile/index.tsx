import { Component, onCleanup, onMount } from "solid-js";
import { useRenderContext } from "../../context/RenderContext";
import { useSceneContext } from "../../context/SceneContext";
import { GameObject } from "../GameObject";

const Tile: Component = () => {
  const ctx = useRenderContext();
  const scene = useSceneContext();
  const render = ctx.getRender();

  let ref: GameObject;

  function Draw() {
    render.beginPath();
    render.fillStyle = "black";
    render.rect(100, 100, 100, 100);
    render.stroke();

    render.font = "5rem sans-serif";
    render.fillText("hello", 1000, 500);
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
