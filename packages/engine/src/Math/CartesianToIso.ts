import { Vector2 } from "./Utils"

export function CartesianToIso(
  x: number,
  y: number,
  textureSize: Vector2
): Vector2 {
  return {
    x: 0.5 * (x / textureSize.x + y / textureSize.x),
    y: 0.5 * (-x / textureSize.x + y / textureSize.x)
  }
}
