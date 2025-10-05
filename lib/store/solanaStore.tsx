import { create } from 'zustand';

type SolanaActions = {
  increaseSolBy: (rewardValue: number) => void;
};
type SolanaState = {
  solCount: number;
  actions: SolanaActions;
};

const useSolanaStore = create<SolanaState>((set) => ({
  solCount: 103110,
  actions: {
    increaseSolBy: (rewardValue) =>
      set((state) => ({ solCount: state.solCount + rewardValue })),
  },
}));

export function useSolActions() {
  return useSolanaStore((state) => state.actions);
}
export function useSolCount() {
  return useSolanaStore((state) => state.solCount);
}
