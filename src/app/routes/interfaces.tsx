import { ComponentType } from "react";

export interface RouteConfig {
  label: string;
  path: string;
  key: RouteName;
  component: ComponentType;
}

export enum RouteName {
  HomePage = "HomePage",
  EventDetails = "EventDetails",
}

export type Containers = RouteName.HomePage | RouteName.EventDetails;
