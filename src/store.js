import { create } from 'zustand'

export const useDeskStore = create((set) => ({
  openApp: null,
  setOpenApp: (name) => set({ openApp: name }),
}))
