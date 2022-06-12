import { Vector2 } from "../../Math/Utils";

export interface TextureDescriptor {
  name: string;
  pos: Vector2;
  size: Vector2;
}

export const Descriptor = {
  Grass: {
    Normal: {
      name: "Grass_Normal",
      pos: { x: 0, y: 0 },
      size: { x: 32, y: 32 },
    },
  },
};
