import getQAlfabeto from "./getQAlfabeto";

const loaderAlfabeto = ({ params }) => {
    return getQAlfabeto(params.nPregunta);
};

export default loaderAlfabeto;
