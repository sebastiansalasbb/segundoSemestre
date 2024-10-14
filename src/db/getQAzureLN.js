
import azureLenguajeNaturalDB from "./azureLenguajeNaturalDB";

const getQAzureLN = (idQ) => {
    return azureLenguajeNaturalDB.find((e) => e.id == idQ)
}



export default getQAzureLN;