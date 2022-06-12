import { Component } from "solid-js";
import { SceneContextProvider as Scene } from "../../context/SceneContext";
import { RenderContextProvider as Render } from "../../context/RenderContext";
import Tile from "../../components/Tile";
import { Canvas } from "../../components/Canvas";

const App: Component = () => {
  return (
    <Render>
      <Canvas />
      <Scene>
        <Tile />
      </Scene>
    </Render>
  );
};

export default App;
