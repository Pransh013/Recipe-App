import { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

const Auth = () => {
  const [registered, setRegistered] = useState(true);
  return (
    <>
      {registered ? (
        <div className="w-[25%] mx-auto mt-24 flex flex-col items-center justify-center gap-12 bg-teal-700 p-10 rounded-lg">
          <Login />
          <div className="flex flex-col gap-2">
            <p className=" font-semibold">Don't have an account?</p>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setRegistered(false);
              }}
              className="border-2 border-black px-2 py-1 rounded-md text-teal-600 bg-white font-semibold"
            >
              Create account
            </button>
          </div>
        </div>
      ) : (
        <div className="w-[25%] mx-auto mt-24 flex flex-col items-center justify-center gap-12 bg-teal-700 p-10 rounded-lg">
          <Register />
          <div className="flex flex-col gap-2">
            <p className=" font-semibold">Already have an account?</p>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setRegistered(true);
              }}
              className="border-2 border-black px-8 py-1 rounded-md text-teal-600 bg-white font-semibold"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth;
