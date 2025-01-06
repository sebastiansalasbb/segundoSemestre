import alfabetoDB from "./alfabetoDB";

const getQAlfabeto = (idQ) => {
    return alfabetoDB.find((e) => e.id == idQ);
};

export default getQAlfabeto;
