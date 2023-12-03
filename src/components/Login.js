import React, { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="">
      <img
        className="w-full absolute"
        src="https://img.freepik.com/free-vector/abstract-watercolor-pastel-background_87374-139.jpg?w=996&t=st=1698753307~exp=1698753907~hmac=ace1af2071949ca0322fdbe850f144c1f7f2a93671466ade6e7dd700318054e3"
        alt="img"
      />
      <div>
        <form className="w-4/12 absolute p-12 my-32 mx-auto right-0 left-0 bg-[#8fdef7] bg-opacity-70 text-black rounded-lg">
          <h1 className="text-center py-4 text-3xl font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-md p-4 my-3 bg-[#FFF6F6]"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            className="w-full rounded-md p-4 my-3 bg-[#FFF6F6]"
          />
          <input
            type="password"
            placeholder="Passsword"
            className="w-full rounded-md p-4 my-3 bg-[#FFF6F6]"
          />
          <button className="w-full bg-[#5fc3f5] rounded-md p-4 my-4 hover:bg-[#62bce9]">
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
