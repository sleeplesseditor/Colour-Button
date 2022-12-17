import * as React from 'react';
import './App.css';

function App() {
  const [buttonColour, setButtonColour] = React.useState('red');
  const [disableButton, setDisableButton] = React.useState(false);
  const newButtonColour = buttonColour === 'red' ? 'blue' : 'red';

  return (
    <div className="App">
      <button
        disabled={disableButton}
        onClick={() => setButtonColour(newButtonColour)}
        style={{ backgroundColor: disableButton ? 'gray' : buttonColour }}
      >
        Change to {newButtonColour}
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
