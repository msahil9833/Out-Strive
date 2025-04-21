import React from "react";
import { Outlet } from "react-router-dom";
import { HomeHeader } from "../pages/Home";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <div
        style={{
          padding: "1rem 0",
        }}
      >
        <HomeHeader />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
