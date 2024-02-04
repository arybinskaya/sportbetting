import { ToastProvider } from "react-toast-notifications";
import { AppRoutes } from "./app/routes";

const App = () => {
  return (
    <>
      <ToastProvider>
        <AppRoutes />
      </ToastProvider>
    </>
  );
};

export default App;
