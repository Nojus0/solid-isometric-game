import { Component } from "solid-js";
import { SceneContextProvider } from "../../context/SceneContext";
import { Canvas, RenderContextProvider } from "../../context/RenderContext";

const App: Component = () => {
  return (
    <RenderContextProvider>
      <SceneContextProvider>
        <Canvas />
      </SceneContextProvider>
    </RenderContextProvider>
  );
};

export default App;
