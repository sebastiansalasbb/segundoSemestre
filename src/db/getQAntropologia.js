import antropologiaDB from "./AntropologiaDB"

const getQAntropologia = (idQ) => {
    return antropologiaDB.find((e) => e.id == idQ)
}

export default getQAntropologia