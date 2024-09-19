import * as React from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded]);

  if (!isLoaded) return "Loading...";

  return (
    <div className="md:flex">
      <SideBar />
      <div className="px-500 py-400 w-full bg-beige-100">
        <Outlet />
      </div>
    </div>
  );
}
