import { getTheme } from "@/lib/localStorage";
import React, { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext({});

const ThemeProvider = (props: any) => {
  const theme = getTheme();
  const [color, setColor] = useState("");

  useEffect(() => {
    if (theme) {
      setColor(theme);
    } else {
      setColor("orange");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};
export default ThemeProvider;
