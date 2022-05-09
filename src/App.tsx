import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PowerupSelectionFactory } from './powerup-selection-factory';
import { PowerUp } from './powerups/powerup';
import { PowerupSelection } from './powerup-selection';

function App() {
  //let powerupSelection = PowerupSelectionFactory.create()

  function increaseLevel(powerup: PowerUp){
    //powerupSelection = powerupSelection.setPowerupLevel(powerup.name, powerup.Level +1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Vampire Survivors Optimizer
        </p>
        <PowerupSelection></PowerupSelection>
      </header>
    </div>
  );
}

export default App;
