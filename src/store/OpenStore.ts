import { create } from "zustand";

interface IOpenStore {
  openTooltipProfile: boolean;
  setOpenTooltipProfile: (value: boolean) => void;
}

export const useOpen = create<IOpenStore>((set) => ({
  openTooltipProfile: false,
  setOpenTooltipProfile: (value: boolean) => {
    set(() => ({ openTooltipProfile: value }));
  },
}));
