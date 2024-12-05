import { Faction } from '../types/faction';

export const factions: Record<string, Faction> = {
  zelnar: {
    id: 'zelnar',
    name: "Zel'Nar Collective",
    description: "Advanced psionic civilization with sleek, crystalline technology",
    theme: {
      primary: '#2563eb',
      secondary: '#1d4ed8',
      accent: '#60a5fa'
    },
    chessPieces: {
      pawn: '/assets/factions/zelnar/pawn.glb',
      rook: '/assets/factions/zelnar/rook.glb',
      knight: '/assets/factions/zelnar/knight.glb',
      bishop: '/assets/factions/zelnar/bishop.glb',
      queen: '/assets/factions/zelnar/queen.glb',
      king: '/assets/factions/zelnar/king.glb'
    },
    preview: 'https://images.unsplash.com/photo-1614728894747-a83421789f10?auto=format&fit=crop&q=80'
  },
  grulnok: {
    id: 'grulnok',
    name: "Grulnok Dominion",
    description: "Warlike empire with industrial, brutalist aesthetics",
    theme: {
      primary: '#dc2626',
      secondary: '#b91c1c',
      accent: '#f87171'
    },
    chessPieces: {
      pawn: '/assets/factions/grulnok/pawn.glb',
      rook: '/assets/factions/grulnok/rook.glb',
      knight: '/assets/factions/grulnok/knight.glb',
      bishop: '/assets/factions/grulnok/bishop.glb',
      queen: '/assets/factions/grulnok/queen.glb',
      king: '/assets/factions/grulnok/king.glb'
    },
    preview: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80'
  }
};