import React, { useContext } from "react";
import { Context } from "../../../context/Context";

const Card = ({ title, icon }) => {
  const { setInput } = useContext(Context);
  return (
    <div
      onClick={() => setInput(title)}
      className="h-[200px] w-[200px] bg-[#1E1F20] hover:bg-[#333537] duration-300 cursor-pointer rounded-xl p-4 flex flex-col justify-between flex-shrink-0"
    >
      <h1 className="font-semibold">
        <span>{title}</span>
      </h1>
      <div className="icon h-10 w-10 rounded-full bg-[#131314] flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
};

export default Card;
