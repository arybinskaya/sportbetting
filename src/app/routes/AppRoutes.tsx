import { BrowserRouter as Router } from "react-router-dom";
import { UnauthenticatedRoutes } from "./UnauthenticatedRoutes";

export const AppRoutes = (): JSX.Element => {
  return (
    <Router>
      <UnauthenticatedRoutes />
    </Router>
  );
};
