import './App.css';
// import * as d3 from 'd3'; 
import { csvParse } from 'd3'; 
import { useState } from 'react';

function App() {
  const [ csvData, setCsvData ] = useState([]);
  const [ error, setError ] = useState("");

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (evnt) {
          const parsedData = csvParse(evnt.target.result);
          setCsvData(parsedData);
      }
      reader.onerror = function (evnt) {
          setError("file loading error")
      }
    }
  }
  return (
    <div className="App">
      <header className="fileupload">
        <input type="file" id="myfile" name="file_upload" onChange={onFileChange} />
        {error && error}
      </header>
      <div className='scrollbox'>
        {csvData.length === 0 ? null : JSON.stringify(csvData) }
      </div>
    </div>
  );
}

export default App;
