import FacetChart from "../components/facetchart/FacetChart"
function FacetChartPg() {
  return (
    <div className="container page facetchartpg">
      <h2> Facet Chart Demo</h2>
      <p> Sample dataset with 3 columns and 1000 rows data subplots depend on the no of columns in dataset</p>
      <FacetChart />
    </div>
  )
}

export default FacetChartPg