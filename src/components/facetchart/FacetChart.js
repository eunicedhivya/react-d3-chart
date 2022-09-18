
import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const FacetChart = ({}) => {
  
  const svgRef = useRef(null);

  const [ chartData, setChartData ] = useState([]);

  useEffect(() => {
    // Generate Chart

    // set the dimensions and margins of the graph
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    // parse the date / time
    var parseTime = d3.timeParse("%d-%b-%y");

    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // define the line
    // var valueline = d3.line()
    // .x(function(d) { return x(d[dateLabel]); })
    // .y(function(d) { return y(d[linePlotLabel]); });

    // d3.select(svgRef.current).html(null)

    var svg = d3.select(svgRef.current).attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

//   chartData.forEach(function(d) {
//       d[dateLabel] = parseTime(d[dateLabel]);
//       d[linePlotLabel] = +d[linePlotLabel];
//   });

//   x.domain(d3.extent(chartData, function(d) { return d[dateLabel]; }));
//   y.domain([0, d3.max(chartData, function(d) { return d[linePlotLabel]; })]);


//   svg.append("path")
//       .data([chartData])
//       .attr("class", "line")
//       .attr("d", valueline)
//       .attr("fill", "none")
//       .attr("stroke", "#000000")
//       .attr("stroke-width", 3);

//   // Add the X Axis
//   svg.append("g")
//       .attr("transform", "translate(0," + height + ")")
//       .call(d3.axisBottom(x));

  // Add the Y Axis
//   svg.append("g")
//       .call(d3.axisLeft(y));

  

    


  }, [chartData, svgRef.current]); // redraw chart if data changes


  return <svg ref={svgRef} />;
};

export default FacetChart;