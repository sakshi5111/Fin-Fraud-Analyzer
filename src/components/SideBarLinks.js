import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const SideBarLinks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
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
    <div>
      <div className="mt-10">
        <ul className="px-8 text-2xl cursor-pointer font-semibold">
          <div className="flex py-4 hover:bg-[#911c1c] hover:text-white rounded-lg px-2 my-4">
            <i className="fa-solid fa-house px-2 mt-1"></i>
            <li className="">Dashboard </li>
          </div>
          <div className="flex py-4 hover:bg-[#911c1c] hover:text-white rounded-lg px-2 my-4">
            <i className="fa-solid fa-upload px-2 mt-1"></i>
            <li>Upload</li>
          </div>
          <div className="flex py-4 hover:bg-[#911c1c] hover:text-white rounded-lg px-2 my-4">
            <i className="fa-solid fa-filter px-2 mt-1"></i>
            <li>Filters</li>
          </div>
          <div className="flex py-4 hover:bg-[#911c1c] hover:text-white rounded-lg px-2 my-4">
            <i className="fa-solid fa-user px-2 mt-1"></i>
            <li>User</li>
          </div>
          <div className="flex py-4 hover:bg-[#911c1c] hover:text-white rounded-lg px-2 my-4">
            <i className="fa-solid fa-power-off px-2 mt-1"></i>
            <li onClick={handleSignOut}>Sign Out</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBarLinks;
