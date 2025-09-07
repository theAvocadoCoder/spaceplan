import { create } from "zustand";

interface UIState {
  mode: "3D" | "2D",
  toggleMode: () => void,
}

export const useUIStore = create<UIState>((set) => ({
  mode: "2D",
  toggleMode: () => set((state) => ({ mode: state.mode === "2D" ? "3D" : "2D" }))
}))