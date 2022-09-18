
import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import {outputdata} from "../../data/outputdata";

const FacetChart = ({}) => {
  
  const svgRef = useRef(null);

  const [ chartData, setChartData ] = useState([]);

  useEffect(() => {
    // Generate Chart
    // console.log(outputdata);
    // set the dimensions and margins of the graph
    const margin = {top: 20, right: 20, bottom: 30, left: 50}
    const width = 960;
    const height = 500;

    const padding = 30;
    const doublePadding = padding * 2;

    const plotHeight = height - padding * 2;
    const plotWidth = (width - doublePadding)/outputdata.length - padding;

    // Create the SVG container
    const svg = d3.select(svgRef.current)
        .attr("width", margin.left+width+margin.right)
        .attr("height", margin.top+height+margin.bottom+(padding*outputdata.length));

    const xScale = d3.scaleLinear()
        .range([0, plotHeight]);
            
    const yScale = d3.scaleLinear()
        .range([plotWidth,0]);

    // Create the main group of all subplots
    const g = svg.append("g")
        .attr("class", "allsubplots")
        .attr("transform","translate("+[margin.left,margin.top]+")")

    const subplots = g.selectAll("subplot")
        .data(outputdata)
        .enter()
        .append("g")
        .attr("class", "subplot")
        .attr("transform", function(d,i) {
            return "translate("+[i*(padding+plotWidth)+padding, padding]+")";
        })

    subplots.append("rect")
        .attr("width",plotWidth)
        .attr("height",plotHeight)
        .attr("class","bg")
        .attr("fill","#ddd")

    subplots.selectAll("dots")
        .data(function(d){ return d.data; })
        .enter()
        .append("circle")
        .attr("r", 15)
        .attr("cx", 25)
        .attr("cy", 25)

  

    


  }, [outputdata, svgRef.current]); // redraw chart if data changes


  return <svg ref={svgRef} />;
};

export default FacetChart;