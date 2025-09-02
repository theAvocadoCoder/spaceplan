import { create } from "zustand";

interface UIState {
  mode: "3d" | "2d",
  toggleMode: () => void,
}

export const useUIStore = create<UIState>((set) => ({
  mode: "2d",
  toggleMode: () => set((state) => ({ mode: state.mode === "2d" ? "3d" : "2d" }))
}))