import azureIAGdb from "./azureIAGdb";

const getQAzureIAG = (idQ) => {
    return azureIAGdb.find((e) => e.id == idQ)
}



export default getQAzureIAG;