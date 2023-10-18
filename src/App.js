import React, { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white', 'brown'];

  return (
    <div className="App">
      <div className="Container">
        <Dropdown
          selectedOptions={selectedOptions}
          onChange={(options) => setSelectedOptions(options)}
          options={colors}
          label="Please make a selection:"
        />
      </div>
    </div>
  );
}

export default App;
