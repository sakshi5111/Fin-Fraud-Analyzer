import React from "react";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Upload from "./Upload";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/upload",
      element: <Upload />,
    },
  ]);

  return (
    <div className="">
      {/* <img
        className="w-full h-full object-cover"
        src="https://securseed.com/wp-content/uploads/2023/06/website-bg2.png?id=7716"
        alt="bg"
      /> */}
      <div className="">
        <div className="">
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </div>
  );
};

export default Body;
