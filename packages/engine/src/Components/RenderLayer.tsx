import { ParentProps } from "solid-js"

/**
 * Pseudo component does nothing just returns the children that are passed to it.
 */
function RenderLayer(p: ParentProps) {
  return p.children
}

export default RenderLayer