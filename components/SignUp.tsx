import React from "react";

interface LoginProps {
  setSignIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<LoginProps> = ({ setSignIsOpen }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
      onClick={() => setSignIsOpen(false)} // Close SignUp when clicking outside
    >
      {/* SignUp box */}
      <div
        className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 relative text-white flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          onClick={() => setSignIsOpen(false)}
          className="absolute top-2 right-2 text-gray-300"
        >
          ✖
        </button>
        <form className="flex flex-col w-[320px]">
          <h2 className="text-3xl font-bold mb-4 text-center">Sign Up</h2>

          <div className="flex flex-col my-4">
            <label className="text-lg text-gray-300">Yourname:</label>
            <input
              placeholder="Enter yourname"
              className="bg-gray-800 px-2 py-2 text-center rounded-md"
            />
          </div>

          <div className="flex flex-col my-4">
            <label className="text-lg text-gray-300">Email:</label>
            <input
              placeholder="Enter your mail"
              className="bg-gray-800 px-2 py-2 text-center rounded-md"
            />
          </div>

          <div className="flex flex-col my-4">
            <label className="text-lg text-gray-300">Username:</label>
            <input
              placeholder="Enter username"
              className="bg-gray-800 px-2 py-2 text-center rounded-md"
            />

            <label className="text-lg text-gray-300">Password:</label>
            <input
              placeholder="Enter password"
              className="bg-gray-800 px-2 py-2 text-center rounded-md mb-4"
            />

            <button className="bg-sky-400/20 py-2 rounded-md font-bold text-sky-500 border-2 border-sky-500">
              Sign Up
            </button>
          </div>

          <div className="m-0 p-0">
            <p className="text-sm text-center pb-2">Already have an account?</p>
            <button
              className="bg-green-500/90 text-gray-900 px-2 py-2 w-full rounded-md max-w-sm"
              onClick={(e) => {
                e.stopPropagation(); // Prevent event propagation
                setSignIsOpen(false); // Close SignUp and return to Login
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;