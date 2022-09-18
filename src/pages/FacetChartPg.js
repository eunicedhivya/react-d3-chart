import FacetChart from "../components/facetchart/FacetChart"
function FacetChartPg() {
  return (
    <div className="container page facetchartpg">
      <h2> Facet Chart Demo</h2>
      <p> Sample dataset with 3 columns and 1000 rows data. No of subplots will change dynamically based on no of columns from transformed data</p>
      <FacetChart />
    </div>
  )
}

export default FacetChartPg