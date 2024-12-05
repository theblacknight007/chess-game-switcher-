import { create } from 'zustand';
import { FactionId } from '../types/faction';
import { factions } from '../data/factions';

interface FactionState {
  currentFaction: FactionId;
  setFaction: (faction: FactionId) => void;
}

export const useFaction = create<FactionState>((set) => ({
  currentFaction: 'default',
  setFaction: (faction) => set({ currentFaction: faction }),
}));