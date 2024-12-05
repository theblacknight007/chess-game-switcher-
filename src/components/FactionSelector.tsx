import React from 'react';
import { factions } from '../data/factions';
import { FactionCard } from './FactionCard';
import { useFaction } from '../hooks/useFaction';

export function FactionSelector() {
  const { currentFaction, setFaction } = useFaction();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {Object.values(factions).map((faction) => (
        <FactionCard
          key={faction.id}
          faction={faction}
          isSelected={currentFaction === faction.id}
          onSelect={() => setFaction(faction.id)}
        />
      ))}
    </div>
  );
}