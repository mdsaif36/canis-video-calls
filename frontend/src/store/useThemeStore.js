import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("Canis-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("streamify-theme", theme);
    set({ theme });
  },
}));