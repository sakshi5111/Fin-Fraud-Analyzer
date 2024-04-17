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
      <div className="mt-10 shadow-lg h-full">
        <ul className="px-8 text-2xl cursor-pointer font-semibold">
          <div>
            <img
              className="h-36 px-5 mt-6"
              alt="user-icon"
              src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
            />
          </div>
          <div
            className="flex py-4 rounded-lg px-2 my-4"
            style={{
              backgroundColor: backgroundColor === "dashboard" ? "#911c1c" : "",
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
