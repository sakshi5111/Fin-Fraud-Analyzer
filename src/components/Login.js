import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { checkValidateData } from "../utils/validate";
import { bg_url } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate email and password

    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    //sign in/ sign up
    if (!isSignIn) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="">
      <div className="absolute">
        <img className="h-screen w-screen" alt="bg-img" src={bg_url} />
      </div>
      <div className="pl-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="absolute mt-32 w-4/12 p-12 text-black rounded-lg">
          <h1 className="text-center py-4 text-5xl font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full rounded-md p-4 my-3 bg-[#FFF6F6] opacity-60 border-solid border-black border-2"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="w-full rounded-md p-4 my-3 bg-[#FFF6F6] opacity-60 border-solid border-black border-2"
          />
          <input
            ref={password}
            type="password"
            placeholder="Passsword"
            className="w-full rounded-md p-4 my-3 bg-[#FFF6F6] opacity-60 border-solid border-black border-2"
          />
          <p className="text-red-500 text-lg">{errorMessage}</p>
          <button
            className="w-full bg-[#b03131] text-xl rounded-md p-4 my-4 hover:bg-[#07072D] text-white"
            onClick={handleButtonClick}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <div>
            <p className="text-center p-2">
              {isSignIn ? "New user? " : "Already registered? "}
              <b className="text-bold cursor-pointer" onClick={toggleSignIn}>
                {isSignIn ? "Sign Up" : "Sign In"}
              </b>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
