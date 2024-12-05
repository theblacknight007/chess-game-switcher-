import React from 'react';
import { FactionSelector } from './components/FactionSelector';
import { Sword } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2">
            <Sword className="h-6 w-6 text-indigo-600" />
            <h1 className="text-xl font-bold text-gray-900">Faction Selector</h1>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-5 sm:p-6">
            <FactionSelector />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;