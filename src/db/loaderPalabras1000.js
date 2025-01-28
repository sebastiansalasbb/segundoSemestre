import getQPalabras1000 from "./getQPalabras1000";

const loaderPalabras1000 = ({ params }) => {
  return getQPalabras1000(params.nPregunta);
};

export default loaderPalabras1000;
