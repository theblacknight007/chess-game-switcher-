export interface ChessPieces {
  pawn: string;
  rook: string;
  knight: string;
  bishop: string;
  queen: string;
  king: string;
}

export interface Faction {
  id: string;
  name: string;
  description: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  chessPieces: ChessPieces;
  preview: string;
}

export type FactionId = 'zelnar' | 'grulnok' | 'default';