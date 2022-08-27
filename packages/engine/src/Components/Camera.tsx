/* @refresh reload */

import { Component } from "solid-js"
import { GameObject, ScriptParameters } from "../GameObject"
import { lerp, Vector2 } from "../Math/Utils"
import useKeyboard from "../Hooks/useKeyboard"

export interface CameraProps {
  Speed: number
  x: number
  y: number
  OnMove?: (x: number, y: number) => void
}

// Precise coords with tile scale?
export const Camera: Component<{ camera: CameraProps }> = p => {

  const Keyboard = useKeyboard()

  const MathSqrt2 = Math.sqrt(2)

  const RealPos: Vector2 = {
    x: p.camera.x,
    y: p.camera.y,
  }

  function Tick(ctx: ScriptParameters) {
    const isW = Keyboard.get("w")
    const isS = Keyboard.get("s")
    const isA = Keyboard.get("a")
    const isD = Keyboard.get("d")

    if (isW && isA) {
      RealPos.x += p.camera.Speed / MathSqrt2
      RealPos.y += p.camera.Speed / MathSqrt2
    } else if (isW && isD) {
      RealPos.x -= p.camera.Speed / MathSqrt2
      RealPos.y += p.camera.Speed / MathSqrt2
    } else if (isS && isA) {
      RealPos.x += p.camera.Speed / MathSqrt2
      RealPos.y -= p.camera.Speed / MathSqrt2
    } else if (isS && isD) {
      RealPos.x -= p.camera.Speed / MathSqrt2
      RealPos.y -= p.camera.Speed / MathSqrt2
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


  return (
    <GameObject
      name="MovementCamera"
      type="Camera"
      scripts={[Tick]}
    ></GameObject>
  )
}
