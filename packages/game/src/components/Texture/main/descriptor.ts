import { Vector2 } from "Engine"

export interface TextureDescriptor {
  name: string
  pos: Vector2
  size: Vector2
}

const Descriptor = {
  Grass: {
    Normal: {
      name: "Grass_Normal",
      pos: { x: 0, y: 0 },
      size: { x: 32, y: 32 },
    },
    Small: {
      name: "Grass_Small",
      pos: { x: 0, y: 32 },
      size: { x: 32, y: 32 },
    },
    Bits: {
      name: "Grass_Bits",
      pos: { x: 0, y: 64 },
      size: { x: 32, y: 32 },
    },
  },
  Cobblestone: {
    Normal: {
      name: "Cobblestone_Normal",
      pos: { x: 32, y: 0 },
      size: { x: 32, y: 32 },
    },
    Small: {
      name: "Cobblestone_Small",
      pos: { x: 32, y: 32 },
      size: { x: 32, y: 32 },
    },
    Bits: {
      name: "Cobblestone_Bits",
      pos: { x: 32, y: 64 },
      size: { x: 32, y: 32 },
    },
  },
  Dirt: {
    Normal: {
      name: "Dirt_Normal",
      pos: { x: 64, y: 0 },
      size: { x: 32, y: 32 },
    },
    Small: {
      name: "Dirt_Small",
      pos: { x: 64, y: 32 },
      size: { x: 32, y: 32 },
    },
  },
  Sand: {
    Normal: {
      name: "Sand_Normal",
      pos: { x: 96, y: 0 },
      size: { x: 32, y: 32 },
    },
    Small: {
      name: "Sand_Small",
      pos: { x: 96, y: 32 },
      size: { x: 32, y: 32 },
    },
  },
  GrassAutumn: {
    Normal: {
      name: "GrassAutumn_Normal",
      pos: { x: 128, y: 0 },
      size: { x: 32, y: 32 },
    },
    Small: {
      name: "GrassAutumn_Small",
      pos: { x: 128, y: 32 },
      size: { x: 32, y: 32 },
    },
  },
  Campfire: {
    Normal: {
      name: "Campfire_Normal",
      pos: { x: 160, y: 0 },
      size: { x: 32, y: 32 },
    },
  },
  // ! The Tree Top is the Anchor change it to render on the Bottom !
  Tree: {
    Normal: {
      name: "Tree_Normal",
      pos: { x: 320, y: 0 },
      size: { x: 32, y: 64 },
    },
  },
}

export default Descriptor
