import matematicasDB from "./matematicasDB"


const getQMatematicas = (idQ) => {
    return matematicasDB.find((e) => e.id == idQ)
}

export default getQMatematicas