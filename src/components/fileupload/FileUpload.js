import { csvParse } from 'd3'; 
import { useState } from 'react';

function FileUpload({loadChartData, inputRef}) {
  const [ fileUploaded, setFileUploaded ] = useState(null);
  const [ csvData, setCsvData ] = useState([]);
  const [ error, setError ] = useState("");

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setFileUploaded(file)
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (evnt) {
          const parsedData = csvParse(evnt.target.result);
          setCsvData(parsedData);
          loadChartData(parsedData);
      }
      reader.onerror = function (evnt) {
          setError("file loading error")
      }
    }
  }
  return (
    <div className="fileupload">
        <input ref={inputRef} type="file" id="myfile" name="file_upload" onChange={onFileChange} />
        {error && error}
        <div className='scrollbox'>
        {csvData.length === 0 ? null : <p>Uploaded file contains {csvData.length} rows</p> }
      </div>
    </div>
  );
}

export default FileUpload;