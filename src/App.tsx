import React, { useState } from 'react';

function App() {
  const [blue, setBlue] = useState(0);

  const greenValues = [];

  for (let i = 0; i < 256; i++) {
    greenValues.push(i);
  }

  return (
    <div className="wrapper">
      <div className="table">
        <div className="red axis"></div>
        <div className="green axis"></div>
        {greenValues.map(green => <div
          className="cell"
          style={{ background: `linear-gradient(rgb(0, ${green}, ${blue}), rgb(255, ${green}, ${blue}))` }}
          key={green}></div>)}
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
