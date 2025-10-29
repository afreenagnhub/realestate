import React, { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState("dark");




  useEffect(() => {
    if (darkMode === "dark") {
     document.documentElement.classList.add("dark");
    } else {
     document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);


    const toggleDarkMode = () => {
    setDarkMode((prev) => (prev ===  "dark" ? "light" : "dark"));
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const 
useDarkMode = () => useContext(DarkModeContext);