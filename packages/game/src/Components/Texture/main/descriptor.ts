import { Vector2 } from "Engine"

export interface TextureDescriptor {
  pos: Vector2
  size: Vector2
}

export const d_main = new Map<string, TextureDescriptor>([
  ["Grass::Normal", { pos: { x: 0, y: 0 }, size: { x: 32, y: 32 } }],
  ["Grass::Small", { pos: { x: 0, y: 32 }, size: { x: 32, y: 32 } }],
  ["Grass::Bits", { pos: { x: 0, y: 64 }, size: { x: 32, y: 32 } }],
  ["Cobblestone::Normal", { pos: { x: 32, y: 0 }, size: { x: 32, y: 32 } }],
  ["Cobblestone::Small", { pos: { x: 32, y: 32 }, size: { x: 32, y: 32 } }],
  ["Cobblestone::Bits", { pos: { x: 32, y: 64 }, size: { x: 32, y: 32 } }],
  ["Dirt::Normal", { pos: { x: 64, y: 0 }, size: { x: 32, y: 32 } }],
  ["Dirt::Small", { pos: { x: 64, y: 32 }, size: { x: 32, y: 32 } }],
  ["Sand::Normal", { pos: { x: 96, y: 0 }, size: { x: 32, y: 32 } }],
  ["Sand::Small", { pos: { x: 96, y: 32 }, size: { x: 32, y: 32 } }],
  ["GrassAutumn::Normal", { pos: { x: 128, y: 0 }, size: { x: 32, y: 32 } }],
  ["GrassAutumn::Small", { pos: { x: 128, y: 32 }, size: { x: 32, y: 32 } }],
  ["Campfire::Normal", { pos: { x: 160, y: 0 }, size: { x: 32, y: 32 } }],
  ["Tree::Normal", { pos: { x: 320, y: 0 }, size: { x: 32, y: 64 } }]
])
