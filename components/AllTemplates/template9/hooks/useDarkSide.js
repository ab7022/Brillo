import { useState, useEffect } from "react";

export default function useDarkSide() {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const [theme, setTheme] = useState(localStorage.theme || systemTheme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (theme !== systemTheme) {
      localStorage.theme = theme;
    } else {
      localStorage.removeItem("theme");
    }
  }, [theme, colorTheme, systemTheme]);

  return [colorTheme, setTheme];
}
