export interface GameObject {
  name: string;
  type: string;
  scripts: Array<(e: GameObject) => void>;
}
