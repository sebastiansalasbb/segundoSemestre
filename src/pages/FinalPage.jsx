import { Link } from "react-router-dom";

function FinalPage() {


    return (
        <div className="container vh-100 bg-dark text-bg-dark d-flex flex-column align-items-center justify-content-center gap-5">
            <h1>Test Comnpleto</h1>
            <p>Felicitaciones</p>
            <Link className="btn btn-light" to="/" role="button">Volver a Home</Link>

        </div>
    )

}

export default FinalPage