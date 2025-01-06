import { Link } from "react-router-dom"

function DashboardPage() {
    return (
        <>
            <h1 className="fs-1 ">Tests</h1>
            <div className="text-uppercase d-flex flex-column gap-3">
                <Link className="btn btn-info"
                    to="/inglesII" role="button">Ingles II</Link>

            </div>
        </>
    )
}

export default DashboardPage