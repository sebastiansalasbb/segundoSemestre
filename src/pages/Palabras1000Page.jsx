import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import palabrasDB1000 from "../db/palabrasDB1000";

function Palabras1000Page() {

  const pregunta = useLoaderData();
  const { nPregunta } = useParams()
  const navigate = useNavigate();


  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [mostrarExplicacion, setMostrarExplicacion] = useState(false);

  const handleRespuestaClick = (indice) => {
    setRespuestaSeleccionada(indice);
    setMostrarExplicacion(true);
  };

  const siguientePreguntaId = parseInt(nPregunta) + 1;

  let bsOffcanvas = useRef(null)

  useEffect(() => {
    bsOffcanvas.current = new bootstrap.Offcanvas('#offcanvasBottom')
    console.log(bsOffcanvas);



  }, [])

  // Genera un ID aleatorio dentro del rango de las preguntas disponibles
  const generarPreguntaAleatoria = () => {
    const totalPreguntas = palabrasDB1000.length;
    let idAleatorio;

    do {
      idAleatorio = Math.floor(Math.random() * totalPreguntas) + 1; // Genera un ID entre 1 y el total de preguntas
    } while (idAleatorio === parseInt(nPregunta)); // Asegúrate de que no sea la misma pregunta actual

    return idAleatorio;
  };


  const handleNextButton = () => {

    bsOffcanvas.current.hide(); // Ocultar el offcanvas

    // Después de un breve retraso, redirigir a la siguiente pregunta
    const preguntaAleatoria = generarPreguntaAleatoria();
    setTimeout(() => {
      navigate(`/palabras1000/${preguntaAleatoria}`);
    }, 300); // Esperamos 300ms para cerrar el offcanvas y luego redirigir
  };
  return (
    <Layout>
      <>
        {/* Card de la pregunta */}
        <div className="card shadow-lg text-bg-dark">
          <h5 className="card-header">Pregunta {pregunta.id}</h5>
          <div className="card-body">
            <h5 className="card-title text-center text-warning">{pregunta.pregunta}</h5>

            <ul className="mt-5 d-flex flex-column gap-3  bg-dark">
              {pregunta.respuestas.map((respuesta, index) => (
                <li key={index} className="list-group-item bg-dark text-light">
                  <button
                    className="btn btn-outline-light w-100"
                    onClick={() => handleRespuestaClick(index)}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasBottom"
                  >
                    {respuesta}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Offcanvas para mostrar la explicación */}
        <div
          className="offcanvas offcanvas-bottom text-bg-dark"
          data-bs-backdrop="static"
          tabIndex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasBottomLabel">Explicación de la respuesta</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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

                {/* Botón para la siguiente pregunta */}
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
      </>
    </Layout>
  );
}

export default Palabras1000Page;