import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => handleToggleMenu()}
          className="h-10 cursor-pointer mx-2"
          alt="menu"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />
        <img
          className="h-10 cursor-pointer"
          src="https://securseed.com/wp-content/uploads/2023/06/securseed_Color_D-5.png"
          alt="logo"
        />
      </div>
      <div className="col-span-10 text-end">
        <input
          className="w-1/3 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-300 p-2 rounded-r-full bg-red-800">
          <i className="fa-solid fa-magnifying-glass px-2"></i>
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-10 cursor-pointer"
          alt="user-logo"
          src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
