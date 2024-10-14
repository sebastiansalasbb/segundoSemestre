
import getQAzureCV from "./getQAzureCV"
import getQAzureIA from "./getQAzureIA"

const loaderAzureCV = ({ params }) => {
    return getQAzureCV(params.nPregunta)
}

export default loaderAzureCV