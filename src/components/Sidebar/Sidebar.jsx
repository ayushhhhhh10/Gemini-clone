import {
  Add,
  ChatBubbleOutline,
  Help,
  LocalActivityOutlined,
  Menu,
  Settings,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [menuClick, setMenuClick] = useState(false);
  const { onSent, previousPrompt, setRecentPrompt, setShowResult } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  const clickHandler = () => {
    setMenuClick(!menuClick);
  };

  return (
    <div
      className={
        menuClick
          ? "absolute sm:relative w-full sm:w-[350px] h-full bg-[#1E1F20] flex flex-col items-start pl-3 justify-between pt-4 pb-12 duration-500 ease-in-out z-[999]"
          : "absolute sm:relative w-16 h-full sm:bg-[#1E1F20] flex flex-col px-2 justify-between pt-4 pb-12 duration-500 ease-in-out"
      }
    >
      <div>
        <div
          onClick={clickHandler}
          className="menu hover:bg-zinc-700 w-fit rounded-full p-0.5 duration-200"
        >
          <IconButton>
            <Menu sx={{ fontSize: 25 }} className="text-white" />
          </IconButton>
        </div>
        <div
          className={
            menuClick
              ? "new-chat flex bg-[#1A1A1C] gap-4 w-fit pl-2 pr-4 py-2 items-center rounded-3xl cursor-pointer mt-10"
              : "hidden"
          }
          onClick={() => {
            setRecentPrompt("");
            setShowResult(false);
          }}
        >
          <Add className="text-zinc-500" />
          <h3 className="text-zinc-500 text-sm font-semibold">New chat</h3>
        </div>
        <div className={menuClick ? "recent-tab px-2 mt-5" : "hidden"}>
          <h1>Recent</h1>
          <div className="mt-2 flex flex-col gap-2 overflow-auto h-96">
            {previousPrompt.map((item, index) => (
              <div
                onClick={() => loadPrompt(item)}
                key={index}
                className="recent w-full px-4 py-1 hover:bg-[#282A2C] duration-200 flex items-center gap-2 rounded-2xl cursor-pointer"
              >
                <ChatBubbleOutline sx={{ fontSize: 18 }} />
                <p className="h-6 overflow-hidden">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="icons hidden sm:flex flex-col px-2 gap-3">
        <Help sx={{ fontSize: 20 }} />
        <LocalActivityOutlined sx={{ fontSize: 20 }} />
        <Settings sx={{ fontSize: 20 }} />
      </div>
    </div>
  );
};

export default Sidebar;
