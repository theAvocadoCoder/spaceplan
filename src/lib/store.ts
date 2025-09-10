import type { RoomSchema } from "@/schemas/room";
import { create } from "zustand";

interface UIState {
  mode: "3D" | "2D",
  toggleMode: () => void,
  currentRoom: RoomSchema,
  editRoom: (prop: keyof RoomSchema, value: RoomSchema[keyof RoomSchema]) => void
}

export const useUIStore = create<UIState>((set) => ({
  mode: "2D",
  currentRoom: {
    width: 10, depth: 10, name: "", description: ""
  },
  toggleMode: () => set((state) => (
    { mode: state.mode === "2D" ? "3D" : "2D" }
  )),
  editRoom: (prop, value) => set((state) => ({ 
    currentRoom: { ...state.currentRoom,
      [prop]: value
    }
  }))
}))