import { Link } from "react-router-dom"

function DashboardPage() {
    return (
        <>
            <h1 className="fs-1 ">Tests</h1>
            <div className="text-uppercase d-flex flex-column gap-3">
                <Link className="btn btn-info"
                    to="/presente-perfecto/1" role="button">Ingles II</Link>

                <Link className="btn btn-info"
                    to="/palabras1000/1" role="button">Ingles 1000</Link>

            </div>
        </>
    )
}

export default DashboardPage