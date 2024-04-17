import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import MainContainer from "./MainContainer";
import Upload from "./Upload";
import User from "./User";
import Filters from "./Filters";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

const Body = () => {
  return (
    // <Router>
    <div>
      <div>
        <Header />
        <div className="flex">
          <SideBar />
          <MainContainer>
            <Routes>
              <Route path="charts" element={<Dashboard />} />
              <Route path="upload" element={<Upload />} />
              <Route path="user" element={<User />} />
              <Route path="filters" element={<Filters />} />
            </Routes>
          </MainContainer>
        </div>
      </div>
    </div>
  );
};

export default Body;
