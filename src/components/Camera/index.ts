/* @refresh reload */

import { Component, onCleanup, onMount } from "solid-js";
import { createGameObject, ScriptParameters } from "../GameObject";

export interface Camera {
  Speed: number
}

// Precise coords with tile scale?
const Camera: Component<Camera> = (p) => {
  let MovementX = innerWidth / 8;
  let MovementY = 0;
  const Keyboard = new Map<string, boolean>([]);

  function Draw(ctx: ScriptParameters) {
    if (Keyboard.get("w")) {
      MovementY += p.Speed;
    }
    if (Keyboard.get("s")) {
      MovementY -= p.Speed;
    }
    if (Keyboard.get("a")) {
      MovementX += p.Speed;
    }
    if (Keyboard.get("d")) {
      MovementX -= p.Speed;
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
