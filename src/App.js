import './App.css';
import FileUpload from './components/fileupload/FileUpload';
import { useState, useRef } from "react";
import LineChart from './components/linechart/LineChart';
import * as d3 from "d3";
import DemoPg from './pages/DemoPg';
import FacetChartPg from './pages/FacetChartPg'; 
import HomePg from './pages/HomePg'; 
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Switch>
        <Route path="/" exact>
          <HomePg />
        </Route>
        <Route path="/demo" exact>
          <DemoPg />
        </Route>
        <Route path="/facet-chart">
          <FacetChartPg />
        </Route>
        <Route path="**">
          <div>404</div>
        </Route>
       </Switch>
    </div>
  );
}

export default App;
