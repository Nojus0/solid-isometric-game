/* @refresh reload */

import { Component } from "solid-js"
import { createGameObject, GameObject, ScriptParameters } from "../GameObject"
import { lerp, NormalizeVector2, Vector2 } from "../Math/Utils"

export interface CameraProps {
  Speed: number
  x: number
  y: number
  OnMove?: (x: number, y: number) => void
}

// Precise coords with tile scale?
export const Camera: Component<{ camera: CameraProps }> = p => {
  const Keyboard = new Map<string, boolean>([])

  // createGameObject({
  //   name: "MovementCamera",
  //   type: "Camera",
  //   scripts: [Draw],
  // })

  const RealPos: Vector2 = {
    x: p.camera.x,
    y: p.camera.y,
  }

  function Tick(ctx: ScriptParameters) {
    var isW = Keyboard.get("w")
    var isS = Keyboard.get("s")
    var isA = Keyboard.get("a")
    var isD = Keyboard.get("d")

    if (isW && isA) {
      RealPos.x += p.camera.Speed / Math.sqrt(2)
      RealPos.y += p.camera.Speed / Math.sqrt(2)
    } else if (isW && isD) {
      RealPos.x -= p.camera.Speed / Math.sqrt(2)
      RealPos.y += p.camera.Speed / Math.sqrt(2)
    } else if (isS && isA) {
      RealPos.x += p.camera.Speed / Math.sqrt(2)
      RealPos.y -= p.camera.Speed / Math.sqrt(2)
    } else if (isS && isD) {
      RealPos.x -= p.camera.Speed / Math.sqrt(2)
      RealPos.y -= p.camera.Speed / Math.sqrt(2)
    } else if (isW) {
      RealPos.y += p.camera.Speed
    } else if (isS) {
      RealPos.y -= p.camera.Speed
    } else if (isA) {
      RealPos.x += p.camera.Speed
    } else if (isD) {
      RealPos.x -= p.camera.Speed
    }

    p.camera.x = Math.floor(lerp(p.camera.x, RealPos.x, 0.15))
    p.camera.y = Math.floor(lerp(p.camera.y, RealPos.y, 0.15))

    if (isW || isS || isA || isD) {
      p.camera.OnMove && p.camera.OnMove(p.camera.x, p.camera.y)
    }

    ctx.render.translate(p.camera.x, p.camera.y)
  }

  onkeydown = e => {
    Keyboard.set(e.key.toLowerCase(), true)
  }

  onkeyup = e => {
    Keyboard.set(e.key.toLocaleLowerCase(), false)
  }

  return (
    <GameObject
      name="MovementCamera"
      type="Camera"
      scripts={[Tick]}
    ></GameObject>
  )
}
