// import { Provider } from "react-redux";
// import Body from "./components/Body";
// import appStore from "./utils/appStore";
// import Login from "./components/Login";
// import Header from "./components/Header";

// function App() {
//   return (
//     <div className="">
//       <Provider store={appStore}>
//         <Login />
//         <Header/>

//       </Provider>
//     </div>
//   );
// }

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "/upload",
//     element: <Upload />,
//   },
//   {
//     path: "/filters",
//     element: <Filters />,
//   },
//   {
//     path: "./user",
//     element: <User />,
//   },
// ]);

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Upload from "./components/Upload";
import Filters from "./components/Filters";
import User from "./components/User";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="">
      <Provider store={appStore}>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="dashboard" element={<Body />}>
                <Route path="charts" element={<Dashboard />} />
                <Route path="upload" element={<Upload />} />
                <Route path="filters" element={<Filters />} />
                <Route path="user" element={<User />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </Provider>
    </div>
  );
};

export default App;
