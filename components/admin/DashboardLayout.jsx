import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="p-4 sm:ml-72">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
