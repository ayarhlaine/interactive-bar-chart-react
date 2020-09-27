import React, { useState } from 'react';
import Radio from "@material-ui/core/Radio";
import './App.css';
import BarChart from './BarChart/BarChart';
import data from './data/data';

function App() {
  const [selected, setSelected] = useState('US');
  const handleChange = (e) => {
    setSelected(e.target.value);
  }
  return (
    <div className="App">
      <h1>Interactive Bar Chart</h1>
      <BarChart
          width={800}
          height={450}
          data={
            selected === "US" ? data.USData : data.JapanData
          }
          yAxisTitle={`${selected} GDP growth`}
        />
      <div className="App__selector">
      <Radio
            checked={selected === "US"}
            onChange={handleChange}
            value="US"
            name="radio-button-demo"
            inputProps={{ "aria-label": "US" }}
          />
          US
          <Radio
            checked={selected === "Japan"}
            onChange={handleChange}
            value="Japan"
            name="radio-button-demo"
            inputProps={{ "aria-label": "Japan" }}
          />
          Japan
      </div>
    </div>
  );
}

export default App;
