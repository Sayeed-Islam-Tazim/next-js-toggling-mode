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
      <div className="">L</div>
      <div className="">D</div>
      <div
        className={`bg-green-100 rounded-xl h-4 w-4 absolute ${
          mode === "dark" ? "right-2" : "left-2"
        }`}
      />
    </div>
  );
};

export default ModeToggler;
