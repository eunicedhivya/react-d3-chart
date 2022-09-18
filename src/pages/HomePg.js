import { Link } from "react-router-dom";

function HomePg() {
  return (
    <div className="container page homepg">
        <h1>Chart generator on file upload</h1>
        <Link className="btn" to="/demo"> Demo </Link>
        <Link className="btn" to="/facet-chart"> Facet Chart Demo </Link>


    </div>
  )
}

export default HomePg