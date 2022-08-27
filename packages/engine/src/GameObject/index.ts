import { useSceneContext } from "../Context/SceneContext"
import { Component, onCleanup, onMount } from "solid-js"

export type Script = (params: ScriptParameters) => void

export interface ScriptParameters {
  render: CanvasRenderingContext2D
  canvasRef: HTMLCanvasElement
  gameObject?: GameObject
}

export interface GameObject {
  name: string
  type: string
  scripts: Array<Script>
}

export function createGameObject(gameObject: GameObject) {
  const Scene = useSceneContext()

  onMount(() => {
    Scene.addObject(gameObject)
  })

  onCleanup(() => Scene.removeObjectRef(gameObject))

  return gameObject
}

/**
 * Wrapper for createGameObject. A Component that just calls createGameObject
 * NOTE: Doesn't return the created GameObject.
 */
export const GameObject: Component<GameObject> = (p) => {
  createGameObject(p)
  return null
}
