import { Vector2 } from "./Utils"

export function IsoToCartesian(
  isoX: number,
  isoY: number,
  textureSize: Vector2
): Vector2 {
  return {
    x: isoX * 0.5 * textureSize.x + isoY * -0.5 * textureSize.y,
    y: isoX * 0.25 * textureSize.x + isoY * 0.25 * textureSize.y,
  }
}
