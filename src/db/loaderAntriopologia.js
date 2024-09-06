import getQAntropologia from "./getQAntropologia"

const loaderAntropologia = ({ params }) => {
    return getQAntropologia(params.nPregunta)
}

export default loaderAntropologia