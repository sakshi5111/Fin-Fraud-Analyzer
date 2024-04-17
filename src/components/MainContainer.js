import React from "react";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="flex-1">
      <Outlet /> {/* This will render the child components */}
    </div>
  );
};

export default MainContainer;
