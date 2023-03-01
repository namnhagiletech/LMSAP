import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext<any | undefined>(undefined);

const ThemeContextUpdate = createContext<any | undefined>(undefined);

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeContextUpdate);
}

export function ThemeProvider({ children }: any) {
  const [showSider, setShowSider] = useState<boolean>(false);
  const toggleSider = () => setShowSider((prevSider) => !prevSider);

  return (
    <ThemeContext.Provider value={showSider}>
      <ThemeContextUpdate.Provider value={toggleSider}>
        {children}
      </ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  );
}
