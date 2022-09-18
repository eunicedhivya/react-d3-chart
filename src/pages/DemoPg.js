import FileUpload from '../components/fileupload/FileUpload';
import { useState, useRef } from "react";
import LineChart from '../components/linechart/LineChart';
import * as d3 from "d3";

function DemoPg() {
  const [ chartData, setChartData ] = useState([]);
  const [ csvData, setCsvData ] = useState([]);
  const [ dateLabel, setDateLabel ] = useState("choose field");
  const [ color, setColor ] = useState("#ffffff");
  const [ linePlotLabel , setLinePlotLabel ] = useState("choose field");
  const [ toggle , setToggle ] = useState(false);

  const inputRef = useRef(null);

  const svgRef = useRef(null);

  const resetFileInput = () => {
    inputRef.current.value = null;
  };

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
  const handleLineColorChange = (event) => {
    setColor(event.target.value);
  };
  const clearChart = (event) => {
    d3.select(svgRef.current).html(null);
    setChartData([])
    setCsvData([])
    setDateLabel("choose field");
    setLinePlotLabel("choose field");
    setColor("#ffffff");
    setToggle(false);
    resetFileInput();
  };

  return (
    <div className="App">
      <header>
        <div className='container'>
          <FileUpload 
            loadChartData={loadChartData}
            inputRef={inputRef}
            csvData={csvData}
            setCsvData={setCsvData}
            svgRef={svgRef}
           />
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
              {chartData.length > 0 && 
                (
                  <div>
                    <p>Choose line color</p>
                    <input type="color" id="favcolor" onChange={handleLineColorChange} name="favcolor" value={color} />
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

      <div className="chartcontainer">
      {
        toggle && (chartData.length > 0 ? <LineChart 
        chartData={chartData}
        dateLabel={dateLabel}
        linePlotLabel={linePlotLabel}
        color={color}
        svgRef={svgRef}
      /> : "upload data")
      }
      </div>
      
    </div>
  );
}

export default DemoPg;
