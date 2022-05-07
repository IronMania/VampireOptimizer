import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PowerupSelectionFactory } from './powerup-selection-factory';

function App() {
  const name = 'Josh Perez';
  const powerup= PowerupSelectionFactory.create()
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Overall Costs are {powerup.overallCost()}
        </p>

      </header>
    </div>
  );
}

export default App;
