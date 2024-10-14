
import getQAzureCV from "./getQAzureCV"
import getQAzureIA from "./getQAzureIA"
import getQAzureIAG from "./getQAzureIAG"

const loaderAzureIAG = ({ params }) => {
    return getQAzureIAG(params.nPregunta)
}

export default loaderAzureIAG