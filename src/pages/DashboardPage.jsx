import { Link } from "react-router-dom"

function DashboardPage() {
    return (
        <>
            <h1 className="fs-1 ">Tests</h1>
            <div className="text-uppercase">
                <Link className="btn btn-info"
                    to="/antropologia/1" role="button">Antropología</Link>
            </div>
        </>
    )
}

export default DashboardPage