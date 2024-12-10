
import getQMatematicas from "./getQMatematicas"

const loaderMatematicas = ({ params }) => {
    return getQMatematicas(params.nPregunta)
}

export default loaderMatematicas