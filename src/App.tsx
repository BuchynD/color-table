import React, { useState } from 'react';

function App() {
  const [blue, setBlue] = useState(0);

  const redAndGreenValues = [];

  for (let i = 0; i < 256; i++) {
    for (let j = 0; j < 256; j++) {
      redAndGreenValues.push([i, j]);
    }
  }

  return (
    <div className="wrapper">
      <div>
        <div className="table grid">
          {redAndGreenValues.map(([red, green]) => <div
            className="cell"
            style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
            key={red * 256 + green}></div>)}
        </div>
      </div>
      <div className="slider">
        <span>Blue:</span>
        <input type="range" min={0} max={255} value={blue} onChange={event => setBlue(parseInt(event.target.value))} />
        <input type="number" min={0} max={255} step={1} value={blue} onChange={event => setBlue(parseInt(event.target.value))} />
      </div>
    </div>
  );
}

export default App;
