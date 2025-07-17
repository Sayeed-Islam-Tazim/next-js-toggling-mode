"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div
        className={`w-full h-screen transition-all  duration-300 ease-in ${mode}`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
