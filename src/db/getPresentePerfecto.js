import PresentePerfectoDb from "./PresentePerfectoDb";

const getPresentePerfecto = (idQ) => {
  return PresentePerfectoDb.find((e) => e.id == idQ);
};

export default getPresentePerfecto;
