import React from "react";
import Card from "./Card";
import Draw from "@mui/icons-material/Draw";
import { LightbulbOutlined } from "@mui/icons-material";

const Cards = () => {
  const data = [
    {
      title: "Create vibrant & playful image with lots of details",
      icon: <Draw className="text-white" />,
    },
    {
      title: "Evaluate and rank common camera categories",
      icon: <LightbulbOutlined className="text-white" />,
    },
    {
      title: "Revise my writing and fix my grammar",
      icon: <Draw className="text-white" />,
    },
    {
      title: "Draft an email with a packing list for an upcoming trip",
      icon: <Draw className="text-white" />,
    },
  ];
  return (
    <div className="flex gap-2 w-full py-5 mt-0 sm:mt-10 overflow-x-auto flex-nowrap">
      {data.map((v, i) => (
        <Card key={i} title={v.title} icon={v.icon} />
      ))}
    </div>
  );
};

export default Cards;
