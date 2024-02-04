import { generatePath, useNavigate, Params } from "react-router-dom";
import { Containers, RouteConfig, RouteName } from "./interfaces";
import HomePage from "../../components/HomePage";
import EventDetails from "../../components/EventDetails";

export const containerPaths: { [key in Containers]: string } = {
  [RouteName.HomePage]: "/home",
  [RouteName.EventDetails]: "/details/:id",
};

const routes: Record<RouteName, RouteConfig> = {
  [RouteName.HomePage]: {
    label: "Home",
    key: RouteName.HomePage,
    path: "/home",
    component: HomePage,
  },
  [RouteName.EventDetails]: {
    label: "EventDetails",
    path: "/details/:id",
    key: RouteName.EventDetails,
    component: EventDetails,
  },
};

export const allRoutes = Object.values(routes);

export function useGotoRoute(
  name: RouteName
): (params?: Params<string>) => void {
  const navigate = useNavigate();
  const route = routes[name];
  return function gotoRoute(params) {
    const path = generatePath(route.path, params);
    navigate(path);
  };
}

export function generateRoutePath({
  name,
  params,
}: {
  name: RouteName;
  params?: Params<string>;
}): string {
  const route = routes[name];
  return generatePath(route.path, params);
}
