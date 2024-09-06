import React, { useContext, useState } from "react";
import { Context } from "../../../context/Context";
import { Close, Logout } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Navbar = () => {
  const { user, setuser } = useContext(Context);
  const [open, setopen] = useState(false);
  const showProfile = () => {
    setopen(true);
  };
  const hideProfile = () => {
    setopen(false);
  };
  const Signout = () => {
    setuser(null);
  };
  return (
    <div className="w-full pl-14 pr-5 sm:px-5 py-6 flex justify-between items-center">
      <div
        className={
          open
            ? "absolute font-[Bold] z-[999] top-0 right-0 h-screen w-full sm:top-20 sm:right-6 sm:h-80 sm:w-[400px] bg-[#1E1F20] rounded-xl shadow-lg shadow-black p-3 flex flex-col items-center gap-3"
            : "hidden"
        }
      >
        <div className="flex items-center justify-center relative w-full mt-2 sm:mt-0">
          <h1 className="text-sm">{user.email}</h1>
          <div
            onClick={hideProfile}
            className="close hover:bg-zinc-700  rounded-full duration-200 absolute right-0"
          >
            <IconButton>
              <Close sx={{ fontSize: 20 }} className="text-white" />
            </IconButton>
          </div>
        </div>
        <img
          className="rounded-full mt-16 sm:mt-2 w-32 h-32"
          src={user.photoURL}
          alt=""
        />
        <h1 className="text-xl text-zinc-200 font-semibold">
          Hi, {user.displayName.split(" ")[0]}!
        </h1>
        <button
          onClick={Signout}
          className="flex gap-1 items-center px-6 py-3 rounded-full bg-[#131314] hover:bg-[#38383b] duration-300"
        >
          <Logout sx={{ fontSize: 20 }} />
          <h1 className="text-zinc-300 text-sm font-semibold">Sign out</h1>
        </button>
        <div className="terms flex gap-5 text-xs text-zinc-300 mt-auto">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
      <h1 className="text-xl font-[Bold] text-zinc-300">Gemini</h1>
      <img
        onClick={showProfile}
        className="w-8 h-8 object-cover rounded-full cursor-pointer"
        src={user?.photoURL}
        alt=""
      />
    </div>
  );
};

export default Navbar;
