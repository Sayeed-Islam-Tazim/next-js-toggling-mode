"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ModeToggler = () => {
  // const mode: "dark" | "light" = "dark";
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div
      className="flex items-center gap-2 border-2 border-green-100 rounded-xl px-2 py-1 relative cursor-pointer"
      onClick={toggle}
    >
      <div className="">🌚</div>
      <div className="">🌞</div>
      <div
        className={`bg-green-100 rounded-xl h-5 w-5 absolute ${
          mode === "dark" ? "right-2" : "left-2"
        }`}
      />
    </div>
  );
};

export default ModeToggler;
