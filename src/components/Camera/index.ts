/* @refresh reload */

import { Component } from "solid-js"
import { createGameObject, ScriptParameters } from "../GameObject"

export interface CameraProps {
  Speed: number
  x: number
  y: number
  OnMove?: (x: number, y: number) => void
}

// Precise coords with tile scale?
const Camera: Component<{ camera: CameraProps }> = p => {
  const Keyboard = new Map<string, boolean>([])

  function Draw(ctx: ScriptParameters) {
    var isW = Keyboard.get("w")
    var isS = Keyboard.get("s")
    var isA = Keyboard.get("a")
    var isD = Keyboard.get("d")

    if (isW) {
      p.camera.y += p.camera.Speed
    }
    if (isS) {
      p.camera.y -= p.camera.Speed
    }
    if (isA) {
      p.camera.x += p.camera.Speed
    }
    if (isD) {
      p.camera.x -= p.camera.Speed
    }

    if (isW || isS || isA || isD) {
      p.camera.OnMove && p.camera.OnMove(p.camera.x, p.camera.y)
    }

    ctx.render.translate(p.camera.x, p.camera.y)
  }
  console.log(`render`)

  createGameObject({
    name: "MovementCamera",
    type: "Camera",
    scripts: [Draw],
  })

  onkeydown = e => {
    Keyboard.set(e.key, true)
  }

  onkeyup = e => {
    Keyboard.set(e.key, false)
  }

  return null
}

export default Camera
