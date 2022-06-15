/* @refresh reload */
import { Route, Router, Routes } from "solid-app-router"
import { lazy, Suspense } from "solid-js"
import { render } from "solid-js/web"
import Home from "./pages/home"

const TestRoute = lazy(() => import("./pages/test"))

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
