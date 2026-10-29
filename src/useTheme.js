import { useEffect, useState } from "react";

const isLight = () => document.documentElement.classList.contains("light");

// Dark is the default; "light" is stored only when the visitor switches
export const useTheme = () => {
  const [light, setLight] = useState(isLight);

  useEffect(() => {
    // Keep every component that uses this hook in sync
    const observer = new MutationObserver(() => setLight(isLight()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const next = !isLight();
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit
    }
  };

  return { light, toggle };
};
