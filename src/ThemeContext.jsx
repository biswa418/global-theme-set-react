import { useState, useEffect, useContext, createContext } from "react";

const ThemeContext = createContext({
  dark: false,
  toggle: () => {}
});

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  const applyTheme = (theme) => {
    const root = document.getElementsByTagName("html")[0];
    const app = theme ? "dark-theme" : "light-theme";
    root.className = app;
  };

  useEffect(() => {
    if (dark) {
      setDark(true);
    } else {
      setDark(false);
    }

    applyTheme(dark);
  }, [dark]);

  const toggle = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
