import React from 'react';
import { Faction } from '../types/faction';
import { Shield } from 'lucide-react';

interface FactionCardProps {
  faction: Faction;
  isSelected: boolean;
  onSelect: () => void;
}

export function FactionCard({ faction, isSelected, onSelect }: FactionCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`relative overflow-hidden rounded-lg p-4 transition-all duration-300 ${
        isSelected
          ? `ring-2 ring-${faction.theme.accent} bg-${faction.theme.primary}/10`
          : 'hover:bg-gray-50'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Shield
            className={`h-10 w-10 ${
              isSelected ? `text-${faction.theme.primary}` : 'text-gray-400'
            }`}
          />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{faction.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{faction.description}</p>
        </div>
      </div>
      <div className="mt-4">
        <img
          src={faction.preview}
          alt={faction.name}
          className="h-48 w-full object-cover rounded-md"
        />
      </div>
    </button>
  );
}