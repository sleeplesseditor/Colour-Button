import * as React from 'react';
import './App.css';

export function replaceCamelWithSpaces(colourName) {
  return colourName.replace(/\B([A-Z])\B/g, ' $1');
} 

function App() {
  const [buttonColour, setButtonColour] = React.useState('MediumVioletRed');
  const [disableButton, setDisableButton] = React.useState(false);
  const newButtonColour = buttonColour === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div className="App">
      <button
        disabled={disableButton}
        onClick={() => setButtonColour(newButtonColour)}
        style={{ backgroundColor: disableButton ? 'gray' : buttonColour }}
      >
        Change to {replaceCamelWithSpaces(newButtonColour)}
      </button>
      <input
        id="disable-button-checkbox"
        onClick={(e) => setDisableButton(e.target.checked)}
        type="checkbox" 
      />
      <label htmlFor="disable-button-checkbox">{`${disableButton ? 'Enable' : 'Disable'} Button`}</label>
    </div>
  );
}

export default App;
