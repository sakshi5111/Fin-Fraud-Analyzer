import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="grid md:grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex justify-between md:justify-start md:col-span-1">
        {isMenuOpen ? (
          <img
            onClick={handleToggleMenu}
            className="h-10 cursor-pointer mx-2"
            alt="close menu"
            src="https://cdn.icon-icons.com/icons2/3257/PNG/512/close_icon_206100.png"
          />
        ) : (
          <img
            onClick={handleToggleMenu}
            className="h-10 cursor-pointer mx-2"
            alt="menu"
            src="https://cdn-icons-png.freepik.com/512/9534/9534625.png"
          />
        )}
        <img
          className="h-10 cursor-pointer"
          src="https://securseed.com/wp-content/uploads/2023/06/securseed_Color_D-5.png"
          alt="logo"
        />
      </div>
      <div className="hidden md:block col-span-10 text-end">
        <input
          className="w-1/3 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-300 p-2 rounded-r-full bg-red-800">
          <i className="fa-solid fa-magnifying-glass px-2"></i>
        </button>
      </div>
      <div className="col-span-1 hidden md:block">
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
