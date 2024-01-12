import React from "react";
import { global } from "styled-jsx/css";

interface ButtonProps {
  color: "brown" | "white";
  title: string;
}

const Button = ({ color, title }: ButtonProps) => {
  return (
    <button
      className={`flex items-center m-auto rounded-md shadow-md px-4 py-2 hover:bg-slate-800 hover:font-bold
        ${color == "brown" && "bg-yellow-900 text-white"}
        ${color == "white" && "bg-white text-black "} `}
    >
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
