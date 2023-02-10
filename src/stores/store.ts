import { create } from "zustand";

interface IStore {
  count: number;
  increase: () => void;
}

export const useStore = create<IStore>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));
