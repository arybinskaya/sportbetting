import { Routes, Route, Navigate } from "react-router-dom";
import { allRoutes, generateRoutePath } from "./helpers";
import { RouteConfig, RouteName } from "./interfaces";
import { Layout } from "../layout";

export function UnauthenticatedRoutes(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        {allRoutes.map(({ label, component: Element, path }: RouteConfig) => {
          return <Route key={label} element={<Element />} path={path} />;
        })}
        <Route
          key={-1}
          path="*"
          element={
            <Navigate
              to={{
                pathname: generateRoutePath({ name: RouteName.HomePage }),
              }}
            />
          }
        />
      </Route>
    </Routes>
  );
}
