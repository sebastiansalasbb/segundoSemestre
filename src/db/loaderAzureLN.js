
import getQAzureLN from "./getQAzureLN"

const loaderAzureLN = ({ params }) => {
    return getQAzureLN(params.nPregunta)
}

export default loaderAzureLN