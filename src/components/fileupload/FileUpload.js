import { csvParse } from 'd3'; 
import { useState } from 'react';

function FileUpload() {
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
      }
      reader.onerror = function (evnt) {
          setError("file loading error")
      }
    }
  }
  return (
    <header className="fileupload">
        <input type="file" id="myfile" name="file_upload" onChange={onFileChange} />
        {error && error}
        <div className='scrollbox'>
        {csvData.length === 0 ? null : <p>Uploaded file contains {csvData.length} rows</p> }
      </div>
    </header>
  );
}

export default FileUpload;