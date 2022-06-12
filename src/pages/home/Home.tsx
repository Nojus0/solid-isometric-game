/* @refresh reload */

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
        <Tile x={0} y={0} index={0}/>
        <Tile x={1} y={0} index={1}/>
        <Tile x={2} y={0} index={2}/>
        <Tile x={3} y={0} index={3}/>
      </Scene>
    </Render>
  );
};

export default App;
