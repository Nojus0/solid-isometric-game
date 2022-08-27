/* @refresh reload */
import { Route, Router, Routes } from "solid-app-router"
import { lazy, Suspense } from "solid-js"
import { render } from "solid-js/web"
import Home from "./Pages/home"

const TestRoute = lazy(() => import("./Pages/test"))

render(
  () => (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/test" component={TestRoute} />
        </Routes>
      </Suspense>
    </Router>
  ),
  document.getElementById("root") as HTMLElement
)
