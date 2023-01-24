import React from "react";
import { Link } from "react-router-dom";
import { ai_logo } from "../assets";
const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center bg-white sm:px-6 px-4 py-4 border-b border-b-gray-300">
        <Link to="/">
          <img
            src={ai_logo}
            alt="website-logo"
            className="w-24 object-contain"
          />
        </Link>
        <Link
          to="/create-post"
          className="font-Jost font-medium bg-teal-400 text-black px-6 py-2 rounded-md"
        >
          CREATE
        </Link>
      </div>
    </>
  );
};

export default Navbar;
