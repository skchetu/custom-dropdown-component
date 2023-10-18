import React, { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  const [selectedOptionsSingle, setSelectedOptionsSingle] = useState([]);
  const [selectedOptionsMulti, setSelectedOptionsMulti] = useState([]);

  // list of hours in a day
  var hours = [];
  for (let i = 1; i <= 24; i++) {
    hours.push(i.toString());
  }

  // list of 10 colors
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white', 'brown'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Custom dropdown component</h1>
      </header>
      <section>
        <h2>Single-Select Option example</h2>
        <p>How many hours a day do you sleep?</p>
        <div className="component-display">
          <Dropdown
            selectedOptions={selectedOptionsSingle}
            onChange={(options) => setSelectedOptionsSingle(options)}
            options={hours}
            placeholder="Select a single option..."
            label="Select number of hours:"
        />
        </div>
        <p>You sleep for {selectedOptionsSingle} hours!</p>
      </section>
      <section>
        <h2>Multi-Select Option example</h2>
        <p>What are your favorite colors?</p>
        <div className="component-display">
          <Dropdown
            selectedOptions={selectedOptionsMulti}
            onChange={(options) => setSelectedOptionsMulti(options)}
            options={colors}
            placeholder="Select multiple options..."
            label="Select colors:"
            multiselect
          />
        </div>
        <p>Your favorite colors include {selectedOptionsMulti.length === 0 ? 'none' : selectedOptionsMulti.join(', ')}.</p>
      </section>
    </div>
  );
}

export default App;