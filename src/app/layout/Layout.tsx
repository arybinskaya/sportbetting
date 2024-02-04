import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="h-screen w-full bg-slate-900 pt-6">
      <Outlet />
    </div>
  );
};
