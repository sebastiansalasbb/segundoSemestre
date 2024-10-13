
import getQAzureIA from "./getQAzureIA"

const loaderAzureIA = ({ params }) => {
    return getQAzureIA(params.nPregunta)
}

export default loaderAzureIA