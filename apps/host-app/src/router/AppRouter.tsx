import { Suspense, createElement } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        { routes.map((route, index) => <Route key={index} path={route.path} element={createElement(route.component)} />) }
      </Routes>
    </Suspense>
  )
}

export default AppRouter