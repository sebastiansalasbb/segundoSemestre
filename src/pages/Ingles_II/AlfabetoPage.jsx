import { useEffect, useRef, useState } from "react";
import Layout from "../../Layout/Layout";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

function AlfabetoPage() {
    const pregunta = useLoaderData();
    const { nPregunta } = useParams();
    const navigate = useNavigate();

    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
    const [mostrarExplicacion, setMostrarExplicacion] = useState(false);

    const siguientePreguntaId = parseInt(nPregunta) + 1;
    let bsOffcanvas = useRef(null);

    useEffect(() => {
        bsOffcanvas.current = new bootstrap.Offcanvas("#offcanvasBottom");
    }, []);

    const handleRespuestaClick = (indice) => {
        const audio = new Audio(pregunta.respuestas[indice]); // Reproducir audio
        audio.play();

        setRespuestaSeleccionada(indice);

    };

    const handleNextButton = () => {
        bsOffcanvas.current.hide();
        setTimeout(() => {
            navigate(`/inglesII/alfabeto/${siguientePreguntaId}`);
        }, 300);
    };

    const handleConfirm = () => {
        setMostrarExplicacion(true);
    }

    return (
        <Layout>
            <div className="card shadow-lg text-bg-dark">
                <h5 className="card-header">Pregunta {pregunta.id}</h5>
                <div className="card-body">
                    <h5 className="card-title text-center text-warning">{pregunta.pregunta}</h5>

                    <ul className="my-5 d-flex flex-column gap-3 bg-dark align-items-center justify-content-center p-0 ">
                        {pregunta.respuestas.map((respuesta, index) => (
                            <li key={index} className=
                                "list-group-item bg-dark text-light w-100">
                                <button
                                    className=
                                    {`btn w-100 btn-outline-light ${respuestaSeleccionada === index ? "border border-warning-subtle" : ""} `}

                                    onClick={() => handleRespuestaClick(index)}

                                >
                                    Opción {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button
                            className="btn btn-info w-100"
                            onClick={() => handleConfirm()}
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasBottom"
                            disabled={respuestaSeleccionada === null}
                        >
                            Ver Respuesta
                        </button>
                    </div>
                </div>
            </div>

            <div
                className="offcanvas offcanvas-bottom text-bg-dark"
                data-bs-backdrop="static"
                tabIndex="-1"
                id="offcanvasBottom"
                aria-labelledby="offcanvasBottomLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasBottomLabel">
                        Explicación de la respuesta
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body small">
                    {mostrarExplicacion && (
                        <>
                            {respuestaSeleccionada === pregunta.respuestaCorrecta ? (
                                <p className="text-success fs-4">¡Correcto! 🎉</p>
                            ) : (
                                <p className="text-danger fs-4">Respuesta incorrecta. 😔</p>
                            )}
                            <p>{pregunta.explicacion}</p>

                            <div className="mt-4">
                                <button
                                    onClick={handleNextButton}
                                    className="btn btn-outline-warning"
                                >
                                    Siguiente Pregunta
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default AlfabetoPage;
