import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { allRoutes, generateRoutePath } from "./helpers";
import { RouteConfig, RouteName } from "./interfaces";

export function UnauthenticatedRoutes(): JSX.Element {
  return (
    <Routes>
      <Route element={<Outlet />}>
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
