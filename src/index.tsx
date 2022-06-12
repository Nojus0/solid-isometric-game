/* @refresh reload */
import { Route, Router, Routes } from "solid-app-router";
import { render } from "solid-js/web";
import Home from "./pages/home/Home";
import Test from "./pages/test/Test";

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/test" component={Test} />
      </Routes>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
