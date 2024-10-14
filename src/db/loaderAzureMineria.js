

import getQAzureMineria from "./getQAzureMineria"

const loaderAzureMineria = ({ params }) => {
    return getQAzureMineria(params.nPregunta)
}

export default loaderAzureMineria