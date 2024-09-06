import React, { useContext } from "react";
import Cards from "../Cards/Cards";
import { SendOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Context } from "../../../context/Context";

const Body = () => {
  const {
    user,
    input,
    setInput,
    onSent,
    showResult,
    recentPrompt,
    resultData,
    loading,
  } = useContext(Context);
  return (
    <div className="body w-full mt-8 px-5">
      <div className="container w-full sm:w-[850px] mx-auto flex flex-col justify-between h-[80vh] sm:h-[84vh]">
        {!showResult ? (
          <>
            <div className="greet font-[Bold2]">
              <h1 className="hello text-[40px] sm:text-[58px] leading-tight tracking-tight">
                <span>Hello, {user.displayName.split(" ")[0]}</span>
              </h1>
              <h1 className="text-[40px] sm:text-[58px] leading-tight tracking-tight text-[#444746]">
                How can I help you today?
              </h1>
            </div>
            <Cards />
          </>
        ) : (
          <div className="result h-[60vh]">
            <div className="result-title flex gap-2 items-center font-semibold">
              <img
                className="h-8 w-8 rounded-full object-cover"
                src={user?.photoURL}
                alt=""
              />
              <p>{recentPrompt}</p>
            </div>
            <div className="resultdata flex gap-3 h-[90%] sm:h-[100%] overflow-auto mt-5">
              <img
                className="animate-pulse h-5 w-5 sticky top-0"
                src="/favicon.png"
                alt=""
              />
              {loading ? (
                <div className="loader w-full flex flex-col gap-3">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  className="tracking-wide leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}
        <div className="input-container h-28 w-full">
          <div className="input w-full flex items-center justify-between bg-[#1E1F20] rounded-full px-5">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="bg-[#1E1F20] outline-none w-full px-2 py-5 tracking-wide rounded-full"
              placeholder="Enter a prompt here"
              type="text"
            />
            <IconButton onClick={() => onSent()}>
              <SendOutlined className="text-white" />
            </IconButton>
          </div>
          <p className="text-xs text-center opacity-70 mt-2">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. <u>Your privacy and Gemini Apps</u>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
