import azureComputeVisionDb from "./azureComputeVisionDb";
import azureIAdb from "./azureIAdb"

const getQAzureCV = (idQ) => {
    return azureComputeVisionDb.find((e) => e.id == idQ)
}



export default getQAzureCV;