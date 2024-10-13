import azureIAdb from "./azureIAdb"

const getQAzureIA = (idQ) => {
    return azureIAdb.find((e) => e.id == idQ)
}



export default getQAzureIA