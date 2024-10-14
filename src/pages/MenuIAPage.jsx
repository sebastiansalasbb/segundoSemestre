import { Link } from "react-router-dom"
import Layout from "../Layout/Layout"

function MenuIAPage() {
    return (
        <Layout>
            <h1 className="fs-1 ">Menu Azure IA</h1>
            <div className="text-uppercase d-flex flex-column gap-3">
                <Link className="btn btn-success"
                    to="/menu-azure-ia/unidad-1/1" role="button">Introducción a AI</Link>
                <Link className="btn btn-success"
                    to="/menu-azure-ia/unidad-2/1" role="button">Computer Vision</Link>
                <Link className="btn btn-success"
                    to="/menu-azure-ia/unidad-3/1" role="button">Procesamiento de lenguaje natural</Link>
                <Link className="btn btn-success"
                    to="/menu-azure-ia/unidad-4/1" role="button">Minería de conocimiento e inteligencia de documentos</Link>
                <Link className="btn btn-success"
                    to="/menu-azure-ia/unidad-5/1" role="button">Inteligencia artificial generativa</Link>
            </div>
        </Layout>
    )
}

export default MenuIAPage