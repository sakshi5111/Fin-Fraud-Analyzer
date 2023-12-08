import React, { useEffect } from "react";
import { user_avatar } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import SideBar from "./SideBar";
// import logo from "../img/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, sign up we add user in the store
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        navigate("/dashboard");
      } else {
        // User is signed out then it will remove from the store
        dispatch(removeUser());
        navigate("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      <div className="w-screen bg-[#6044ed] flex justify-between text-white">
        {/* <img className="w-44" src={logo} alt="logo" /> #07072D*/}
        <p className="pt-4 font-bold text-6xl pl-10">LOGO</p>
        {user && (
          <div className="pr-2 pt-4 flex">
            <img
              className="w-10 h-10 rounded-[50%] bg-white"
              alt="user-icon"
              src={user_avatar}
            />
            <p className="font-bold cursor-pointer pl-4 pt-2 hover:text-purple-400">
              <i
                className="fa-solid fa-right-from-bracket"
                onClick={handleSignOut}></i>
            </p>
          </div>
        )}
      </div>
      <div>
        <SideBar />
      </div>
    </div>
  );
};

export default Header;
