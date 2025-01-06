import { Link } from "react-router-dom"
import Layout from "../../Layout/Layout"

function AlfabetoDashboradPage() {
    return (
        <Layout>
            <h1 className="fs-1 ">Asignaturas</h1>
            <div className="text-uppercase d-flex flex-column gap-3">
                <Link className="btn btn-info"
                    to="/inglesII/alfabeto/1" role="button">A1: Alfabeto</Link>

            </div>
        </Layout>
    )
}

export default AlfabetoDashboradPage