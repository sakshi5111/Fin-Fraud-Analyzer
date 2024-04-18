import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [backgroundColor, setBackgroundColor] = useState("");

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

  const isMenuOpen = useSelector((store) => store.user.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div>
      <div className="mt-10 w-full shadow-lg  md:h-full md:relative bg-white absolute">
        <ul className="px-8 text-2xl cursor-pointer font-semibold ">
          <div>
            <img
              className="md:h-36 h-40 md:px-5 mt-2 md:mt-6 mx-auto"
              alt="user-icon"
              src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
            />
          </div>
          <div
            className="flex py-4 rounded-lg px-2 my-4"
            style={{
              backgroundColor: backgroundColor === "dashboard" ? "#911c1c" : "",
              color: backgroundColor === "dashboard" ? "#ffffff" : "#000000",
            }}
            onClick={() => setBackgroundColor("dashboard")}>
            <i className="fa-solid fa-house px-2 mt-1"></i>
            <li>
              <Link to={"/dashboard/charts"}>Dashboard</Link>
            </li>
          </div>
          <div
            className="flex py-4 rounded-lg px-2 my-4"
            style={{
              backgroundColor: backgroundColor === "upload" ? "#911c1c" : "",
              color: backgroundColor === "upload" ? "#ffffff" : "#000000",
            }}
            onClick={() => setBackgroundColor("upload")}>
            <i className="fa-solid fa-upload px-2 mt-1"></i>
            <li>
              <Link to={"/dashboard/upload"}>Upload</Link>
            </li>
          </div>
          <div
            className="flex py-4 rounded-lg px-2 my-4"
            style={{
              backgroundColor: backgroundColor === "filters" ? "#911c1c" : "",
              color: backgroundColor === "filters" ? "#ffffff" : "#000000",
            }}
            onClick={() => setBackgroundColor("filters")}>
            <i className="fa-solid fa-filter px-2 mt-1"></i>
            <li>
              <Link to={"/dashboard/filters"}>Filters</Link>
            </li>
          </div>
          <div
            className="flex py-4 rounded-lg px-2 my-4"
            style={{
              backgroundColor: backgroundColor === "user" ? "#911c1c" : "",
              color: backgroundColor === "user" ? "#ffffff" : "#000000",
            }}
            onClick={() => setBackgroundColor("user")}>
            <i className="fa-solid fa-user px-2 mt-1"></i>
            <li>
              <Link to={"/dashboard/user"}>User</Link>
            </li>
          </div>
          <div
            className="flex py-4 rounded-lg px-2 my-4"
            style={{
              backgroundColor: backgroundColor === "signout" ? "#911c1c" : "",
              color: backgroundColor === "signout" ? "#ffffff" : "#000000",
            }}
            onClick={() => {
              setBackgroundColor("signout");
              handleSignOut();
            }}>
            <i className="fa-solid fa-power-off px-2 mt-1"></i>
            <li>Sign Out</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
