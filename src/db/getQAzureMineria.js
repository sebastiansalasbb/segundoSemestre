
import azureMineriaDB from "./azureMineriaDB";

const getQAzureMineria = (idQ) => {
    return azureMineriaDB.find((e) => e.id == idQ)
}



export default getQAzureMineria;