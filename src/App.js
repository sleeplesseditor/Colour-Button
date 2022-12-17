import * as React from 'react';
import './App.css';

function App() {
  const [buttonColour, setButtonColour] = React.useState('red');
  const newButtonColour = buttonColour === 'red' ? 'blue' : 'red';

  return (
    <div className="App">
      <button
        onClick={() => setButtonColour(newButtonColour)}
        style={{ backgroundColor: buttonColour}}
      >
        Change to {newButtonColour}
      </button>
    </div>
  );
}

export default App;
