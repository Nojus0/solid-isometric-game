/* @refresh reload */

import { Component, onCleanup, onMount } from "solid-js";
import { useRenderContext } from "../../context/RenderContext";
import { useSceneContext } from "../../context/SceneContext";
import {
  createGameObject,
  GameObject,
  Script,
  ScriptParameters,
} from "../GameObject";

const Camera: Component = (p) => {
  let MovementX = 0;
  let MovementY = 0;
  const Speed = 3;
  const Keyboard = new Map<string, boolean>([]);

  function Draw(ctx: ScriptParameters) {
    if (Keyboard.get("w")) {
      MovementY += Speed;
    }
    if (Keyboard.get("s")) {
      MovementY -= Speed;
    }
    if (Keyboard.get("a")) {
      MovementX += Speed;
    }
    if (Keyboard.get("d")) {
      MovementX -= Speed;
    }

    ctx.render.translate(MovementX, MovementY);
  }

  createGameObject({
    name: "MovementCamera",
    type: "Camera",
    scripts: [Draw],
  });

  onkeydown = (e) => {
    Keyboard.set(e.key, true);
  };

  onkeyup = (e) => {
    Keyboard.set(e.key, false);
  };

  return null;
};

export default Camera;
