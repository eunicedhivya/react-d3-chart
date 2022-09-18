import './App.css';
import FileUpload from './components/fileupload/FileUpload';
import { useState } from "react";
import LineChart from './components/linechart/LineChart';
// import LineChart from './components/barchart/LineChart';
import SelectField from './components/selectfield/SelectField';

function App() {
  const [ chartData, setChartData ] = useState([]);
  const [ dateLabel, setDateLabel ] = useState("choose field");
  const [ linePlotLabel , setLinePlotLabel ] = useState("choose field");
  const [ toggle , setToggle ] = useState(false);

  const loadChartData = (input) => {
    setChartData(input);
  }
  const displayChart = () => {
    setToggle(true);
  }
  const changeFieldValue = (fieldval, fieldtype) => {
    if(fieldtype === "datefield"){
      setDateLabel(fieldval);
    }
    if(fieldtype === "lineplotfield"){
      setLinePlotLabel(fieldval);
    }
  }
  const handleDateChange = (event) => {
    setDateLabel(event.target.value);
  };
  const handleLinePlotChange = (event) => {
    setLinePlotLabel(event.target.value);
  };
  const clearChart = (event) => {
    setChartData([])
    setDateLabel("choose field");
    setLinePlotLabel("choose field");
  };

  return (
    <div className="App">
      <header>
        <div className='container'>
          <FileUpload loadChartData={loadChartData} />
          <div className='settings'>
            <div className='dataselection'>
              {chartData.length > 0 && 
                (
                  <div>
                    <p>Choose Date Field</p>
                    <select onChange={handleDateChange} value={dateLabel}>
                      <option value="choose field">choose field</option>
                      {Object.keys(chartData[0]).map((names) => {
                          return (
                              <>
                              <option key={names} value={names}>{names}</option>
                              </>
                          )
                      })}
                  </select>
                  </div>
                )
              }
              {chartData.length > 0 && 
                (
                  <div>
                    <p>Choose Plot Value Field</p>
                    <select onChange={handleLinePlotChange} value={linePlotLabel}>
                      <option value="choose field">choose field</option>
                      {Object.keys(chartData[0]).map((names) => {
                          return (
                              <>
                              <option key={names} value={names}>{names}</option>
                              </>
                          )
                      })}
                  </select>
                  </div>
                )
              }
            </div>

            { (linePlotLabel !== "choose field" && dateLabel !== "choose field") && 
              <>
              <button onClick={displayChart}>Generate Line Chart</button>
              <button onClick={clearChart}>Clear</button>
              </>
            }
            

          </div>

        </div>

      </header>

      {
        toggle && (chartData.length > 0 ? <LineChart 
        chartData={chartData}
        dateLabel={dateLabel}
        linePlotLabel={linePlotLabel}
      /> : "upload data")
      }
      
    </div>
  );
}

export default App;
