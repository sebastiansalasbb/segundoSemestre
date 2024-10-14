import { Link } from "react-router-dom"
import Layout from "../Layout/Layout"

function MenuIAPage() {
    return (
        <Layout>
            <h1 className="fs-1 ">Menu Azure IA</h1>
            <div className="text-uppercase d-flex flex-column gap-3">
                <Link className="btn btn-success"
                    to="/menu-azure-ia/unidad-1/1" role="button">Introduccióna AI</Link>
                <Link className="btn btn-success"
                    to="/azure-ia/1" role="button">Computer Vision</Link>
            </div>
        </Layout>
    )
}

export default MenuIAPage