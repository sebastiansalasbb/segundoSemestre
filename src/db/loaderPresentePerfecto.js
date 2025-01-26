import getPresentePerfecto from "./getPresentePerfecto";

const loaderPresentePerfecto = ({ params }) => {
  return getPresentePerfecto(params.nPregunta);
};

export default loaderPresentePerfecto;
