import { Link } from "react-router-dom"

function DashboardPage() {
    return (
        <>
            <h1 className="fs-1 ">Tests</h1>
            <div className="text-uppercase d-flex flex-column gap-3">
                <Link className="btn btn-info"
                    to="/antropologia/1" role="button">Antropología</Link>
                <Link className="btn btn-info"
                    to="/menu-azure-ia" role="button">Microsoft Certified: Azure AI</Link>
                <Link className="btn btn-info"
                    to="/matematicas/1" role="button">Matematicas</Link>
            </div>
        </>
    )
}

export default DashboardPage