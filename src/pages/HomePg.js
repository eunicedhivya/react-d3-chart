import { Link } from "react-router-dom";

function HomePg() {
  return (
    <div className="container page homepg">
        <h1>Chart generator on file upload</h1>
        <Link className="btn" to="/demo"> Task Demo </Link>
        <Link className="btn" to="/facet-chart"> Custom chart Demo (WIP)</Link>
    </div>
  )
}

export default HomePg