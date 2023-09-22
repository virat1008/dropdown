import React from 'react';
import Dropdown from './drpdown';
import './App.css'

const App = () => {
  const dropdownItems = ['Yes',  'Probably Not'];

  return (
    <div className="App">
      <h1>Should you use a dropdown</h1>
      <Dropdown  items={dropdownItems} />
    </div>
  );
};

export default App;
