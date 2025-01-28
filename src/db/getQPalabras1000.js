import palabrasDB1000 from "./palabrasDB1000";

const getQPalabras1000 = (idQ) => {
  return palabrasDB1000.find((e) => e.id == idQ);
};

export default getQPalabras1000;
