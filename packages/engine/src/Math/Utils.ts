export interface Vector2 {
  x: number
  y: number
}
export interface Vector3 {
  x: number
  y: number
  z: number
}

export function lerp(value1: number, value2: number, amount: number) {
  amount = amount < 0 ? 0 : amount;
  amount = amount > 1 ? 1 : amount;
  return value1 + (value2 - value1) * amount;
}

// Function that takes in movement value and normalizes it to a value between 0 and 1.
export function NormalizeVector2(v: Vector2) {
  const length = Math.sqrt(v.x * v.x + v.y * v.y);
  if (length > 0) {
    v.x /= length;
    v.y /= length;
  }
  return v;
}