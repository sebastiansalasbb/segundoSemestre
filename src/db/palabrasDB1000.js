const palabrasDB1000 = [
  {
    id: 1,
    pregunta: "¿Qué significa 'the' en español?",
    respuestas: ["el, la, los, las", "ser o estar", "tener"],
    respuestaCorrecta: 0,
    explicacion:
      "La palabra 'the' es un artículo definido que se usa para especificar un sustantivo.",
  },
  {
    id: 2,
    pregunta: "¿Qué significa 'be' en español?",
    respuestas: ["estar o ser", "haber", "hacer"],
    respuestaCorrecta: 0,
    explicacion: "'Be' es un verbo auxiliar que significa 'ser' o 'estar'.",
  },
  {
    id: 3,
    pregunta: "¿Qué significa 'of' en español?",
    respuestas: ["de", "por", "en"],
    respuestaCorrecta: 0,
    explicacion:
      "'Of' se utiliza para indicar posesión o relación, y significa 'de'.",
  },
  {
    id: 4,
    pregunta: "¿Qué significa 'and' en español?",
    respuestas: ["y", "o", "pero"],
    respuestaCorrecta: 0,
    explicacion:
      "'And' se utiliza para conectar palabras o ideas, y significa 'y'.",
  },
  {
    id: 5,
    pregunta: "¿Qué significa 'a' en español?",
    respuestas: ["un, una", "de", "a (preposición)"],
    respuestaCorrecta: 0,
    explicacion: "'A' es un artículo indefinido que significa 'un' o 'una'.",
  },
  {
    id: 6,
    pregunta: "¿Qué significa 'to' en español?",
    respuestas: ["a, hacia", "con", "en"],
    respuestaCorrecta: 0,
    explicacion:
      "'To' se usa para indicar dirección o propósito, y significa 'a' o 'hacia'.",
  },
  {
    id: 7,
    pregunta: "¿Qué significa 'in' en español?",
    respuestas: ["en, dentro de", "sobre", "por"],
    respuestaCorrecta: 0,
    explicacion:
      "'In' significa 'en' o 'dentro de' y se usa para indicar ubicación.",
  },
  {
    id: 8,
    pregunta: "¿Qué significa 'he' en español?",
    respuestas: ["él", "ellos", "su"],
    respuestaCorrecta: 0,
    explicacion: "'He' es un pronombre que significa 'él'.",
  },
  {
    id: 9,
    pregunta: "¿Qué significa 'have' en español?",
    respuestas: ["tener, haber", "hacer", "decir"],
    respuestaCorrecta: 0,
    explicacion: "'Have' es un verbo que significa 'tener' o 'haber'.",
  },
  {
    id: 10,
    pregunta: "¿Qué significa 'it' en español?",
    respuestas: ["eso", "ello", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'It' se usa para referirse a cosas o animales, y significa 'eso' o 'ello'.",
  },
  {
    id: 11,
    pregunta: "¿Qué significa 'that' en español?",
    respuestas: ["eso, que", "aquel", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'That' significa 'eso' o 'aquel', y también se usa como conjunción para decir 'que'.",
  },
  {
    id: 12,
    pregunta: "¿Qué significa 'for' en español?",
    respuestas: ["para", "por", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion: "'For' significa 'para' o 'por' dependiendo del contexto.",
  },
  {
    id: 13,
    pregunta: "¿Qué significa 'they' en español?",
    respuestas: ["ellos, ellas", "su", "ello"],
    respuestaCorrecta: 0,
    explicacion: "'They' es un pronombre que significa 'ellos' o 'ellas'.",
  },
  {
    id: 14,
    pregunta: "¿Qué significa 'I' en español?",
    respuestas: ["yo", "él", "ellos"],
    respuestaCorrecta: 0,
    explicacion: "'I' es un pronombre personal que significa 'yo'.",
  },
  {
    id: 15,
    pregunta: "¿Qué significa 'with' en español?",
    respuestas: ["con", "para", "hacia"],
    respuestaCorrecta: 0,
    explicacion: "'With' significa 'con' y se usa para expresar compañía.",
  },
  {
    id: 16,
    pregunta: "¿Qué significa 'as' en español?",
    respuestas: ["como", "que", "sobre"],
    respuestaCorrecta: 0,
    explicacion: "'As' significa 'como' en comparaciones o funciones.",
  },
  {
    id: 17,
    pregunta: "¿Qué significa 'not' en español?",
    respuestas: ["no", "sin", "nunca"],
    respuestaCorrecta: 0,
    explicacion: "'Not' se utiliza para negar una oración y significa 'no'.",
  },
  {
    id: 18,
    pregunta: "¿Qué significa 'on' en español?",
    respuestas: ["sobre, en", "por", "para"],
    respuestaCorrecta: 0,
    explicacion:
      "'On' significa 'sobre' o 'en' y se usa para indicar posición.",
  },
  {
    id: 19,
    pregunta: "¿Qué significa 'she' en español?",
    respuestas: ["ella", "ellos", "tú"],
    respuestaCorrecta: 0,
    explicacion: "'She' es un pronombre personal que significa 'ella'.",
  },
  {
    id: 20,
    pregunta: "¿Qué significa 'at' en español?",
    respuestas: ["en", "a", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion: "'At' puede significar 'en' o 'a' dependiendo del contexto.",
  },
  {
    id: 21,
    pregunta: "¿Qué significa 'by' en español?",
    respuestas: ["por, cerca de", "hacia", "a través de"],
    respuestaCorrecta: 0,
    explicacion: "'By' significa 'por' o 'cerca de', dependiendo del contexto.",
  },
  {
    id: 22,
    pregunta: "¿Qué significa 'this' en español?",
    respuestas: ["este, esta, esto", "aquel, aquello", "ese, eso"],
    respuestaCorrecta: 0,
    explicacion:
      "'This' significa 'este', 'esta' o 'esto' y se usa para señalar algo cercano.",
  },
  {
    id: 23,
    pregunta: "¿Qué significa 'we' en español?",
    respuestas: ["nosotros", "ellos", "usted"],
    respuestaCorrecta: 0,
    explicacion: "'We' es un pronombre que significa 'nosotros'.",
  },
  {
    id: 24,
    pregunta: "¿Qué significa 'you' en español?",
    respuestas: ["tú, usted", "él", "ellos"],
    respuestaCorrecta: 0,
    explicacion:
      "'You' significa 'tú', 'usted' en singular y también 'ustedes' en plural.",
  },
  {
    id: 25,
    pregunta: "¿Qué significa 'do' en español?",
    respuestas: ["hacer", "decir", "ir"],
    respuestaCorrecta: 0,
    explicacion:
      "'Do' significa 'hacer' y también se usa como auxiliar en preguntas y negaciones.",
  },
  {
    id: 26,
    pregunta: "¿Qué significa 'but' en español?",
    respuestas: ["pero", "porque", "aunque"],
    respuestaCorrecta: 0,
    explicacion: "'But' es una conjunción que significa 'pero'.",
  },
  {
    id: 27,
    pregunta: "¿Qué significa 'from' en español?",
    respuestas: ["de, desde", "por", "hacia"],
    respuestaCorrecta: 0,
    explicacion:
      "'From' se utiliza para indicar origen o punto de partida, y significa 'de' o 'desde'.",
  },
  {
    id: 28,
    pregunta: "¿Qué significa 'or' en español?",
    respuestas: ["o", "y", "pero"],
    respuestaCorrecta: 0,
    explicacion: "'Or' es una conjunción que significa 'o'.",
  },
  {
    id: 29,
    pregunta: "¿Qué significa 'which' en español?",
    respuestas: ["cuál, que", "quién", "dónde"],
    respuestaCorrecta: 0,
    explicacion:
      "'Which' significa 'cuál' o 'que' y se usa para especificar una opción.",
  },
  {
    id: 30,
    pregunta: "¿Qué significa 'one' en español?",
    respuestas: ["uno", "algún", "primero"],
    respuestaCorrecta: 0,
    explicacion: "'One' significa 'uno' como número o pronombre.",
  },
  {
    id: 31,
    pregunta: "¿Qué significa 'would' en español?",
    respuestas: ["haría, sería", "ser", "haber"],
    respuestaCorrecta: 0,
    explicacion:
      "'Would' es un verbo modal que se usa para expresar condiciones y significa 'haría' o 'sería'.",
  },
  {
    id: 32,
    pregunta: "¿Qué significa 'all' en español?",
    respuestas: ["todo, todos", "algún", "ningún"],
    respuestaCorrecta: 0,
    explicacion: "'All' significa 'todo' o 'todos'.",
  },
  {
    id: 33,
    pregunta: "¿Qué significa 'will' en español?",
    respuestas: ["voluntad, futuro", "debería", "hacer"],
    respuestaCorrecta: 0,
    explicacion:
      "'Will' significa 'voluntad' y también se usa para indicar futuro.",
  },
  {
    id: 34,
    pregunta: "¿Qué significa 'there' en español?",
    respuestas: ["ahí, allí", "donde", "qué"],
    respuestaCorrecta: 0,
    explicacion: "'There' significa 'ahí' o 'allí'.",
  },
  {
    id: 35,
    pregunta: "¿Qué significa 'say' en español?",
    respuestas: ["decir", "ver", "hacer"],
    respuestaCorrecta: 0,
    explicacion: "'Say' significa 'decir'.",
  },
  {
    id: 36,
    pregunta: "¿Qué significa 'who' en español?",
    respuestas: ["quién", "qué", "cuándo"],
    respuestaCorrecta: 0,
    explicacion: "'Who' significa 'quién'.",
  },
  {
    id: 37,
    pregunta: "¿Qué significa 'make' en español?",
    respuestas: ["hacer", "tomar", "dar"],
    respuestaCorrecta: 0,
    explicacion: "'Make' significa 'hacer'.",
  },
  {
    id: 38,
    pregunta: "¿Qué significa 'when' en español?",
    respuestas: ["cuándo", "dónde", "qué"],
    respuestaCorrecta: 0,
    explicacion:
      "'When' significa 'cuándo' y se usa para preguntar sobre tiempo.",
  },
  {
    id: 39,
    pregunta: "¿Qué significa 'can' en español?",
    respuestas: ["poder", "saber", "tener"],
    respuestaCorrecta: 0,
    explicacion: "'Can' es un verbo modal que significa 'poder'.",
  },
  {
    id: 40,
    pregunta: "¿Qué significa 'more' en español?",
    respuestas: ["más", "mucho", "poco"],
    respuestaCorrecta: 0,
    explicacion: "'More' significa 'más'.",
  },
  {
    id: 41,
    pregunta: "¿Qué significa 'if' en español?",
    respuestas: ["si", "aunque", "cuando"],
    respuestaCorrecta: 0,
    explicacion: "'If' significa 'si' y se usa para condiciones.",
  },
  {
    id: 42,
    pregunta: "¿Qué significa 'no' en español?",
    respuestas: ["no", "nunca", "sin"],
    respuestaCorrecta: 0,
    explicacion: "'No' se usa para negar algo y significa 'no'.",
  },
  {
    id: 43,
    pregunta: "¿Qué significa 'man' en español?",
    respuestas: ["hombre", "mujer", "niño"],
    respuestaCorrecta: 0,
    explicacion: "'Man' significa 'hombre'.",
  },
  {
    id: 44,
    pregunta: "¿Qué significa 'out' en español?",
    respuestas: ["afuera", "adentro", "arriba"],
    respuestaCorrecta: 0,
    explicacion: "'Out' significa 'afuera' o 'hacia afuera'.",
  },
  {
    id: 45,
    pregunta: "¿Qué significa 'other' en español?",
    respuestas: ["otro", "algún", "ningún"],
    respuestaCorrecta: 0,
    explicacion: "'Other' significa 'otro'.",
  },
  {
    id: 46,
    pregunta: "¿Qué significa 'so' en español?",
    respuestas: ["así, tan", "entonces", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'So' significa 'así', 'tan' o 'entonces', dependiendo del contexto.",
  },
  {
    id: 47,
    pregunta: "¿Qué significa 'what' en español?",
    respuestas: ["qué", "cuál", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'What' significa 'qué' o 'cuál', y se usa en preguntas sobre cosas o conceptos.",
  },
  {
    id: 48,
    pregunta: "¿Qué significa 'time' en español?",
    respuestas: ["tiempo", "vez", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Time' significa 'tiempo' o 'vez', y se usa en diferentes contextos relacionados con la medición temporal.",
  },
  {
    id: 49,
    pregunta: "¿Qué significa 'up' en español?",
    respuestas: ["arriba", "abajo", "adentro"],
    respuestaCorrecta: 0,
    explicacion: "'Up' significa 'arriba' o 'hacia arriba'.",
  },
  {
    id: 50,
    pregunta: "¿Qué significa 'go' en español?",
    respuestas: ["ir", "venir", "salir"],
    respuestaCorrecta: 0,
    explicacion:
      "'Go' significa 'ir' y se usa para describir movimiento o acción hacia otro lugar.",
  },
  {
    id: 51,
    pregunta: "¿Qué significa 'about' en español?",
    respuestas: ["sobre, acerca de", "debajo", "en frente de"],
    respuestaCorrecta: 0,
    explicacion:
      "'About' significa 'sobre' o 'acerca de' y se usa para indicar un tema o referencia.",
  },
  {
    id: 52,
    pregunta: "¿Qué significa 'than' en español?",
    respuestas: ["que", "cuando", "porque"],
    respuestaCorrecta: 0,
    explicacion: "'Than' significa 'que' y se usa para comparar dos elementos.",
  },
  {
    id: 53,
    pregunta: "¿Qué significa 'into' en español?",
    respuestas: ["dentro de", "hacia", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Into' significa 'dentro de' o 'hacia', y se usa para indicar movimiento o dirección.",
  },
  {
    id: 54,
    pregunta: "¿Qué significa 'could' en español?",
    respuestas: ["podría", "puede", "podría ser"],
    respuestaCorrecta: 0,
    explicacion:
      "'Could' es el pasado del verbo 'can', y significa 'podría' o 'podía'.",
  },
  {
    id: 55,
    pregunta: "¿Qué significa 'state' en español?",
    respuestas: ["estado", "afirmar", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'State' significa 'estado' como sustantivo o 'afirmar' como verbo.",
  },
  {
    id: 56,
    pregunta: "¿Qué significa 'only' en español?",
    respuestas: ["solo", "únicamente", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Only' significa 'solo' o 'únicamente', y se usa para limitar algo.",
  },
  {
    id: 57,
    pregunta: "¿Qué significa 'new' en español?",
    respuestas: ["nuevo", "reciente", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion: "'New' significa 'nuevo' o 'reciente'.",
  },
  {
    id: 58,
    pregunta: "¿Qué significa 'year' en español?",
    respuestas: ["año", "mes", "día"],
    respuestaCorrecta: 0,
    explicacion: "'Year' significa 'año'.",
  },
  {
    id: 59,
    pregunta: "¿Qué significa 'some' en español?",
    respuestas: ["algunos", "varios", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion: "'Some' significa 'algunos' o 'varios'.",
  },
  {
    id: 60,
    pregunta: "¿Qué significa 'take' en español?",
    respuestas: ["tomar, llevar", "dar", "quitar"],
    respuestaCorrecta: 0,
    explicacion: "'Take' significa 'tomar' o 'llevar'.",
  },
  {
    id: 61,
    pregunta: "¿Qué significa 'come' en español?",
    respuestas: ["venir", "ir", "quedarse"],
    respuestaCorrecta: 0,
    explicacion: "'Come' significa 'venir'.",
  },
  {
    id: 62,
    pregunta: "¿Qué significa 'these' en español?",
    respuestas: ["estos, estas", "esos, esas", "aquellos, aquellas"],
    respuestaCorrecta: 0,
    explicacion: "'These' significa 'estos' o 'estas'.",
  },
  {
    id: 63,
    pregunta: "¿Qué significa 'know' en español?",
    respuestas: ["saber, conocer", "pensar", "recordar"],
    respuestaCorrecta: 0,
    explicacion: "'Know' significa 'saber' o 'conocer'.",
  },
  {
    id: 64,
    pregunta: "¿Qué significa 'see' en español?",
    respuestas: ["ver", "mirar", "observar"],
    respuestaCorrecta: 0,
    explicacion: "'See' significa 'ver'.",
  },
  {
    id: 65,
    pregunta: "¿Qué significa 'use' en español?",
    respuestas: ["usar", "decir", "hacer"],
    respuestaCorrecta: 0,
    explicacion: "'Use' significa 'usar'.",
  },
  {
    id: 66,
    pregunta: "¿Qué significa 'get' en español?",
    respuestas: ["obtener", "dar", "ir"],
    respuestaCorrecta: 0,
    explicacion: "'Get' significa 'obtener' o 'conseguir'.",
  },
  {
    id: 67,
    pregunta: "¿Qué significa 'like' en español?",
    respuestas: ["gustar", "querer", "desear"],
    respuestaCorrecta: 0,
    explicacion: "'Like' significa 'gustar'.",
  },
  {
    id: 68,
    pregunta: "¿Qué significa 'then' en español?",
    respuestas: ["entonces", "después", "antes"],
    respuestaCorrecta: 0,
    explicacion: "'Then' significa 'entonces' o 'después'.",
  },
  {
    id: 69,
    pregunta: "¿Qué significa 'first' en español?",
    respuestas: ["primero", "último", "segundo"],
    respuestaCorrecta: 0,
    explicacion: "'First' significa 'primero'.",
  },
  {
    id: 70,
    pregunta: "¿Qué significa 'any' en español?",
    respuestas: ["cualquier", "ningún", "algún"],
    respuestaCorrecta: 0,
    explicacion: "'Any' significa 'cualquier'.",
  },
  {
    id: 71,
    pregunta: "¿Qué significa 'work' en español?",
    respuestas: ["trabajo", "estudio", "viaje"],
    respuestaCorrecta: 0,
    explicacion: "'Work' significa 'trabajo'.",
  },
  {
    id: 72,
    pregunta: "¿Qué significa 'now' en español?",
    respuestas: ["ahora", "después", "antes"],
    respuestaCorrecta: 0,
    explicacion: "'Now' significa 'ahora'.",
  },
  {
    id: 73,
    pregunta: "¿Qué significa 'may' en español?",
    respuestas: ["poder", "deber", "tener"],
    respuestaCorrecta: 0,
    explicacion:
      "'May' significa 'poder' en un contexto de posibilidad o permiso.",
  },
  {
    id: 74,
    pregunta: "¿Qué significa 'such' en español?",
    respuestas: ["tal", "muy", "poco"],
    respuestaCorrecta: 0,
    explicacion: "'Such' significa 'tal' o 'tan'.",
  },
  {
    id: 75,
    pregunta: "¿Qué significa 'give' en español?",
    respuestas: ["dar", "tomar", "recibir"],
    respuestaCorrecta: 0,
    explicacion: "'Give' significa 'dar'.",
  },
  {
    id: 76,
    pregunta: "¿Qué significa 'over' en español?",
    respuestas: ["sobre", "bajo", "en"],
    respuestaCorrecta: 0,
    explicacion: "'Over' significa 'sobre' o 'encima de'.",
  },
  {
    id: 77,
    pregunta: "¿Qué significa 'think' en español?",
    respuestas: ["pensar", "decir", "recordar"],
    respuestaCorrecta: 0,
    explicacion: "'Think' significa 'pensar'.",
  },
  {
    id: 78,
    pregunta: "¿Qué significa 'most' en español?",
    respuestas: ["la mayoría", "muy", "poco"],
    respuestaCorrecta: 0,
    explicacion: "'Most' significa 'la mayoría'.",
  },
  {
    id: 79,
    pregunta: "¿Qué significa 'even' en español?",
    respuestas: ["incluso", "siempre", "nunca"],
    respuestaCorrecta: 0,
    explicacion: "'Even' significa 'incluso'.",
  },
  {
    id: 80,
    pregunta: "¿Qué significa 'find' en español?",
    respuestas: ["encontrar", "perder", "buscar"],
    respuestaCorrecta: 0,
    explicacion: "'Find' significa 'encontrar'.",
  },
  {
    id: 81,
    pregunta: "¿Qué significa 'day' en español?",
    respuestas: ["día", "semana", "mes"],
    respuestaCorrecta: 0,
    explicacion: "'Day' significa 'día'.",
  },
  {
    id: 82,
    pregunta: "¿Qué significa 'also' en español?",
    respuestas: ["también", "además", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion: "'Also' significa 'también' o 'además'.",
  },
  {
    id: 83,
    pregunta: "¿Qué significa 'after' en español?",
    respuestas: ["antes", "después", "ahora"],
    respuestaCorrecta: 1,
    explicacion:
      "'After' significa 'después' y se usa para indicar un evento posterior en el tiempo.",
  },
  {
    id: 84,
    pregunta: "¿Qué significa 'way' en español?",
    respuestas: ["camino", "forma, manera", "dirección"],
    respuestaCorrecta: 2,
    explicacion:
      "'Way' significa 'forma' o 'manera', aunque también puede referirse a un 'camino'.",
  },
  {
    id: 85,
    pregunta: "¿Qué significa 'many' en español?",
    respuestas: ["pocos", "muchos", "algunos"],
    respuestaCorrecta: 1,
    explicacion:
      "'Many' significa 'muchos' y se utiliza para referirse a una cantidad grande en plural.",
  },
  {
    id: 86,
    pregunta: "¿Qué significa 'must' en español?",
    respuestas: ["debe ser", "deber", "podría"],
    respuestaCorrecta: 2,
    explicacion:
      "'Must' significa 'deber' y se usa para expresar obligación o necesidad.",
  },
  {
    id: 87,
    pregunta: "¿Qué significa 'look' en español?",
    respuestas: ["ver", "mirar", "observar"],
    respuestaCorrecta: 2,
    explicacion:
      "'Look' significa 'mirar' y se utiliza para referirse al acto de dirigir la vista hacia algo.",
  },
  {
    id: 88,
    pregunta: "¿Qué significa 'before' en español?",
    respuestas: ["después", "antes", "durante"],
    respuestaCorrecta: 1,
    explicacion:
      "'Before' significa 'antes' y se usa para indicar algo que sucede previamente en el tiempo.",
  },
  {
    id: 89,
    pregunta: "¿Qué significa 'great' en español?",
    respuestas: ["pequeño", "genial, grande", "mediocre"],
    respuestaCorrecta: 2,
    explicacion:
      "'Great' significa 'genial' o 'grande', y se usa para describir algo de alta calidad o importancia.",
  },
  {
    id: 90,
    pregunta: "¿Qué significa 'back' en español?",
    respuestas: ["espalda", "atrás", "adelante"],
    respuestaCorrecta: 2,
    explicacion:
      "'Back' significa 'atrás' y se usa para referirse a la posición o dirección opuesta al frente.",
  },
  {
    id: 91,
    pregunta: "¿Qué significa 'through' en español?",
    respuestas: ["por, a través de", "sobre", "debajo"],
    respuestaCorrecta: 1,
    explicacion:
      "'Through' significa 'por' o 'a través de' y se usa para indicar movimiento dentro de algo.",
  },
  {
    id: 92,
    pregunta: "¿Qué significa 'long' en español?",
    respuestas: ["corto", "largo", "ancho"],
    respuestaCorrecta: 2,
    explicacion:
      "'Long' significa 'largo' y se usa para describir algo de gran longitud.",
  },
  {
    id: 93,
    pregunta: "¿Qué significa 'where' en español?",
    respuestas: ["dónde", "cuándo", "por qué"],
    respuestaCorrecta: 0,
    explicacion:
      "'Where' significa 'dónde' y se usa para preguntar o referirse a un lugar.",
  },
  {
    id: 94,
    pregunta: "¿Qué significa 'much' en español?",
    respuestas: ["mucho", "poco", "demasiado"],
    respuestaCorrecta: 0,
    explicacion:
      "'Much' significa 'mucho' y se usa para cantidades grandes incontables.",
  },
  {
    id: 95,
    pregunta: "¿Qué significa 'should' en español?",
    respuestas: ["debería", "puede", "debe ser"],
    respuestaCorrecta: 1,
    explicacion:
      "'Should' significa 'debería' y se usa para expresar sugerencias u obligaciones suaves.",
  },
  {
    id: 96,
    pregunta: "¿Qué significa 'well' en español?",
    respuestas: ["bien", "mal", "mejor"],
    respuestaCorrecta: 0,
    explicacion:
      "'Well' significa 'bien' y se usa para describir cómo se hace algo.",
  },
  {
    id: 97,
    pregunta: "¿Qué significa 'people' en español?",
    respuestas: ["personas", "pueblos", "gente"],
    respuestaCorrecta: 2,
    explicacion:
      "'People' significa 'gente' o 'personas', dependiendo del contexto.",
  },
  {
    id: 98,
    pregunta: "¿Qué significa 'down' en español?",
    respuestas: ["arriba", "abajo", "enfrente"],
    respuestaCorrecta: 1,
    explicacion:
      "'Down' significa 'abajo' y se usa para indicar dirección hacia una posición inferior.",
  },
  {
    id: 99,
    pregunta: "¿Qué significa 'own' en español?",
    respuestas: ["propio", "de otro", "ninguno"],
    respuestaCorrecta: 0,
    explicacion: "'Own' significa 'propio' y se usa para indicar posesión.",
  },
  {
    id: 100,
    pregunta: "¿Qué significa 'just' en español?",
    respuestas: ["justo", "simplemente", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Just' significa 'justo' o 'simplemente', dependiendo del contexto.",
  },
  {
    id: 101,
    pregunta: "¿Qué significa 'because' en español?",
    respuestas: ["porque", "aunque", "sin embargo"],
    respuestaCorrecta: 0,
    explicacion:
      "'Because' significa 'porque' y se usa para introducir una causa o razón.",
  },
  {
    id: 102,
    pregunta: "¿Qué significa 'good' en español?",
    respuestas: ["bueno", "excelente", "fuerte"],
    respuestaCorrecta: 0,
    explicacion: "'Good' significa 'bueno'.",
  },
  {
    id: 103,
    pregunta: "¿Qué significa 'each' en español?",
    respuestas: ["cada", "todo", "ninguno"],
    respuestaCorrecta: 0,
    explicacion:
      "'Each' significa 'cada' y se usa para referirse a cada elemento individual de un grupo.",
  },
  {
    id: 104,
    pregunta: "¿Qué significa 'those' en español?",
    respuestas: ["esos, esas", "estos, estas", "aquellos, aquellas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Those' significa 'aquellos' o 'aquellas' y se usa para señalar cosas lejanas.",
  },
  {
    id: 105,
    pregunta: "¿Qué significa 'feel' en español?",
    respuestas: ["sentir", "tocar", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Feel' significa 'sentir' o 'tocar', dependiendo del contexto.",
  },
  {
    id: 106,
    pregunta: "¿Qué significa 'seem' en español?",
    respuestas: ["parecer", "ser", "estar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Seem' significa 'parecer' y se usa para describir una apariencia o impresión.",
  },
  {
    id: 107,
    pregunta: "¿Qué significa 'how' en español?",
    respuestas: ["cómo", "qué", "dónde"],
    respuestaCorrecta: 0,
    explicacion:
      "'How' significa 'cómo' y se usa para preguntar sobre el modo o manera de algo.",
  },
  {
    id: 108,
    pregunta: "¿Qué significa 'high' en español?",
    respuestas: ["alto", "grande", "amplio"],
    respuestaCorrecta: 0,
    explicacion:
      "'High' significa 'alto' y se usa para referirse a altura o nivel.",
  },
  {
    id: 109,
    pregunta: "¿Qué significa 'too' en español?",
    respuestas: ["también", "además", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion: "'Too' significa 'también' o 'además'.",
  },
  {
    id: 110,
    pregunta: "¿Qué significa 'place' en español?",
    respuestas: ["lugar", "poner", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Place' significa 'lugar' o 'poner', dependiendo del contexto.",
  },
  {
    id: 111,
    pregunta: "¿Qué significa 'little' en español?",
    respuestas: ["pequeño", "poco", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Little' significa 'pequeño' o 'poco', dependiendo del contexto.",
  },
  {
    id: 112,
    pregunta: "¿Qué significa 'world' en español?",
    respuestas: ["mundo", "tierra", "universo"],
    respuestaCorrecta: 0,
    explicacion: "'World' significa 'mundo'.",
  },
  {
    id: 113,
    pregunta: "¿Qué significa 'very' en español?",
    respuestas: ["muy", "mucho", "bastante"],
    respuestaCorrecta: 0,
    explicacion:
      "'Very' significa 'muy' y se usa para intensificar adjetivos o adverbios.",
  },
  {
    id: 114,
    pregunta: "¿Qué significa 'still' en español?",
    respuestas: ["aún, todavía", "siempre", "nunca"],
    respuestaCorrecta: 0,
    explicacion: "'Still' significa 'aún' o 'todavía'.",
  },
  {
    id: 115,
    pregunta: "¿Qué significa 'nation' en español?",
    respuestas: ["país", "nación", "estado"],
    respuestaCorrecta: 1,
    explicacion: "'Nation' significa 'nación'.",
  },
  {
    id: 116,
    pregunta: "¿Qué significa 'hand' en español?",
    respuestas: ["pie", "mano", "dedo"],
    respuestaCorrecta: 1,
    explicacion: "'Hand' significa 'mano'.",
  },
  {
    id: 117,
    pregunta: "¿Qué significa 'old' en español?",
    respuestas: ["nuevo", "viejo", "antiguo"],
    respuestaCorrecta: 1,
    explicacion: "'Old' significa 'viejo'.",
  },
  {
    id: 118,
    pregunta: "¿Qué significa 'life' en español?",
    respuestas: ["vida", "muerte", "existencia"],
    respuestaCorrecta: 0,
    explicacion: "'Life' significa 'vida'.",
  },
  {
    id: 119,
    pregunta: "¿Qué significa 'tell' en español?",
    respuestas: ["decir, contar", "hablar", "explicar"],
    respuestaCorrecta: 0,
    explicacion: "'Tell' significa 'decir' o 'contar'.",
  },
  {
    id: 120,
    pregunta: "¿Qué significa 'write' en español?",
    respuestas: ["leer", "escribir", "escuchar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Write' significa 'escribir' y se refiere al acto de plasmar palabras o ideas en papel o algún medio.",
  },
  {
    id: 121,
    pregunta: "¿Qué significa 'become' en español?",
    respuestas: ["parecer", "convertirse", "permanecer"],
    respuestaCorrecta: 1,
    explicacion:
      "'Become' significa 'convertirse' y se usa para describir una transformación o cambio.",
  },
  {
    id: 122,
    pregunta: "¿Qué significa 'here' en español?",
    respuestas: ["allí", "aquí", "dónde"],
    respuestaCorrecta: 1,
    explicacion:
      "'Here' significa 'aquí' y se usa para referirse a un lugar cercano o presente.",
  },
  {
    id: 123,
    pregunta: "¿Qué significa 'show' en español?",
    respuestas: ["mostrar", "enseñar", "explicar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Show' significa 'mostrar' y se usa para presentar algo a alguien.",
  },
  {
    id: 124,
    pregunta: "¿Qué significa 'house' en español?",
    respuestas: ["edificio", "casa", "hogar"],
    respuestaCorrecta: 2,
    explicacion:
      "'House' significa 'casa', refiriéndose al edificio físico donde vive alguien.",
  },
  {
    id: 125,
    pregunta: "¿Qué significa 'both' en español?",
    respuestas: ["ninguno", "ambos", "algunos"],
    respuestaCorrecta: 1,
    explicacion:
      "'Both' significa 'ambos' y se usa para referirse a dos cosas o personas.",
  },
  {
    id: 126,
    pregunta: "¿Qué significa 'between' en español?",
    respuestas: ["dentro", "entre", "fuera"],
    respuestaCorrecta: 1,
    explicacion:
      "'Between' significa 'entre' y se usa para indicar la posición de algo entre dos elementos.",
  },
  {
    id: 127,
    pregunta: "¿Qué significa 'need' en español?",
    respuestas: ["deseo", "necesitar", "buscar"],
    respuestaCorrecta: 2,
    explicacion:
      "'Need' significa 'necesitar' y se refiere a algo esencial o requerido.",
  },
  {
    id: 128,
    pregunta: "¿Qué significa 'mean' en español?",
    respuestas: ["decir", "significar", "mostrar"],
    respuestaCorrecta: 2,
    explicacion:
      "'Mean' significa 'significar' y se usa para explicar el significado o intención de algo.",
  },
  {
    id: 129,
    pregunta: "¿Qué significa 'call' en español?",
    respuestas: ["llamar", "cantar", "gritar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Call' significa 'llamar' y se usa para referirse al acto de invocar o contactar a alguien.",
  },
  {
    id: 130,
    pregunta: "¿Qué significa 'develop' en español?",
    respuestas: ["crear", "desarrollar", "progresar"],
    respuestaCorrecta: 2,
    explicacion:
      "'Develop' significa 'desarrollar' y se usa para hablar de crecimiento o avance.",
  },
  {
    id: 131,
    pregunta: "¿Qué significa 'under' en español?",
    respuestas: ["encima", "debajo", "al lado"],
    respuestaCorrecta: 2,
    explicacion:
      "'Under' significa 'debajo' y se usa para indicar una posición inferior.",
  },
  {
    id: 132,
    pregunta: "¿Qué significa 'last' en español?",
    respuestas: ["último", "primero", "anterior"],
    respuestaCorrecta: 1,
    explicacion:
      "'Last' significa 'último' y se usa para indicar el final de una secuencia.",
  },
  {
    id: 133,
    pregunta: "¿Qué significa 'right' en español?",
    respuestas: ["correcto", "derecho", "justo"],
    respuestaCorrecta: 1,
    explicacion:
      "'Right' puede significar 'correcto' o 'derecho', dependiendo del contexto.",
  },
  {
    id: 134,
    pregunta: "¿Qué significa 'move' en español?",
    respuestas: ["mover", "correr", "caminar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Move' significa 'mover' y se usa para describir un cambio de posición.",
  },
  {
    id: 135,
    pregunta: "¿Qué significa 'thing' en español?",
    respuestas: ["cosa", "objeto", "idea"],
    respuestaCorrecta: 1,
    explicacion:
      "'Thing' significa 'cosa' y se usa para referirse a un objeto o concepto genérico.",
  },
  {
    id: 136,
    pregunta: "¿Qué significa 'general' en español?",
    respuestas: ["general", "específico", "universal"],
    respuestaCorrecta: 1,
    explicacion:
      "'General' significa 'general' y se usa para describir algo no específico.",
  },
  {
    id: 137,
    pregunta: "¿Qué significa 'school' en español?",
    respuestas: ["escuela", "universidad", "colegio"],
    respuestaCorrecta: 2,
    explicacion:
      "'School' significa 'escuela' y se usa para referirse a un lugar de enseñanza.",
  },
  {
    id: 138,
    pregunta: "¿Qué significa 'never' en español?",
    respuestas: ["nunca", "siempre", "a veces"],
    respuestaCorrecta: 1,
    explicacion:
      "'Never' significa 'nunca' y se usa para hablar de algo que no sucede.",
  },
  {
    id: 139,
    pregunta: "¿Qué significa 'same' en español?",
    respuestas: ["diferente", "igual", "similar"],
    respuestaCorrecta: 2,
    explicacion:
      "'Same' significa 'igual' y se usa para indicar que dos cosas no tienen diferencias.",
  },
  {
    id: 140,
    pregunta: "¿Qué significa 'another' en español?",
    respuestas: ["otro", "mismo", "diferente"],
    respuestaCorrecta: 1,
    explicacion:
      "'Another' significa 'otro' y se usa para referirse a un elemento adicional o diferente.",
  },
  {
    id: 141,
    pregunta: "¿Qué significa 'begin' en español?",
    respuestas: ["empezar", "terminar", "continuar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Begin' significa 'empezar' y se usa para hablar del inicio de algo.",
  },
  {
    id: 142,
    pregunta: "¿Qué significa 'while' en español?",
    respuestas: ["mientras", "porque", "aunque"],
    respuestaCorrecta: 1,
    explicacion:
      "'While' significa 'mientras' y se usa para indicar que dos cosas suceden al mismo tiempo.",
  },
  {
    id: 143,
    pregunta: "¿Qué significa 'number' en español?",
    respuestas: ["número", "cantidad", "suma"],
    respuestaCorrecta: 1,
    explicacion:
      "'Number' significa 'número' y se usa para contar o identificar cosas.",
  },
  {
    id: 144,
    pregunta: "¿Qué significa 'part' en español?",
    respuestas: ["todo", "parte", "mitad"],
    respuestaCorrecta: 1,
    explicacion:
      "'Part' significa 'parte' y se usa para referirse a una sección de algo.",
  },
  {
    id: 145,
    pregunta: "¿Qué significa 'turn' en español?",
    respuestas: ["girar", "saltar", "correr"],
    respuestaCorrecta: 1,
    explicacion:
      "'Turn' significa 'girar' y se usa para describir un cambio de dirección.",
  },
  {
    id: 146,
    pregunta: "¿Qué significa 'real' en español?",
    respuestas: ["imaginario", "real", "falso"],
    respuestaCorrecta: 2,
    explicacion:
      "'Real' significa 'real' y se usa para describir algo auténtico o existente.",
  },
  {
    id: 147,
    pregunta: "¿Qué significa 'leave' en español?",
    respuestas: ["llegar", "salir", "permanecer"],
    respuestaCorrecta: 2,
    explicacion:
      "'Leave' significa 'salir' y se usa para hablar de abandonar un lugar.",
  },
  {
    id: 148,
    pregunta: "¿Qué significa 'might' en español?",
    respuestas: ["deber", "podría", "haría"],
    respuestaCorrecta: 2,
    explicacion:
      "'Might' significa 'podría' y se usa para expresar posibilidad.",
  },
  {
    id: 149,
    pregunta: "¿Qué significa 'want' en español?",
    respuestas: ["querer", "tener", "necesitar"],
    respuestaCorrecta: 1,
    explicacion: "'Want' significa 'querer' y se usa para expresar deseos.",
  },
  {
    id: 150,
    pregunta: "¿Qué significa 'point' en español?",
    respuestas: ["señalar", "apuntar", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Point' significa 'señalar' o 'apuntar', dependiendo del contexto.",
  },
  {
    id: 151,
    pregunta: "¿Qué significa 'form' en español?",
    respuestas: ["forma", "crear", "diseñar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Form' significa 'forma' y se usa para describir la estructura de algo.",
  },
  {
    id: 152,
    pregunta: "¿Qué significa 'off' en español?",
    respuestas: ["encendido", "apagado", "fuera"],
    respuestaCorrecta: 2,
    explicacion:
      "'Off' significa 'apagado' o 'fuera', dependiendo del contexto.",
  },
  {
    id: 153,
    pregunta: "¿Qué significa 'child' en español?",
    respuestas: ["niño", "adulto", "joven"],
    respuestaCorrecta: 1,
    explicacion: "'Child' significa 'niño'.",
  },
  {
    id: 154,
    pregunta: "¿Qué significa 'few' en español?",
    respuestas: ["muchos", "pocos", "algunos"],
    respuestaCorrecta: 2,
    explicacion:
      "'Few' significa 'pocos' y se usa para hablar de una cantidad limitada.",
  },
  {
    id: 155,
    pregunta: "¿Qué significa 'small' en español?",
    respuestas: ["grande", "pequeño", "mediano"],
    respuestaCorrecta: 2,
    explicacion: "'Small' significa 'pequeño'.",
  },
  {
    id: 156,
    pregunta: "¿Qué significa 'since' en español?",
    respuestas: ["desde", "hasta", "cuando"],
    respuestaCorrecta: 1,
    explicacion:
      "'Since' significa 'desde' y se usa para indicar un punto de inicio en el tiempo.",
  },
  {
    id: 157,
    pregunta: "¿Qué significa 'against' en español?",
    respuestas: ["contra", "a favor de", "junto a"],
    respuestaCorrecta: 1,
    explicacion:
      "'Against' significa 'contra' y se usa para expresar oposición.",
  },
  {
    id: 158,
    pregunta: "¿Qué significa 'ask' en español?",
    respuestas: ["responder", "preguntar", "escuchar"],
    respuestaCorrecta: 1,
    explicacion: "'Ask' significa 'preguntar'.",
  },
  {
    id: 159,
    pregunta: "¿Qué significa 'late' en español?",
    respuestas: ["temprano", "tarde", "noche"],
    respuestaCorrecta: 2,
    explicacion:
      "'Late' significa 'tarde' y se usa para describir algo que sucede después de lo esperado.",
  },
  {
    id: 160,
    pregunta: "¿Qué significa 'home' en español?",
    respuestas: ["casa", "hogar", "vivienda"],
    respuestaCorrecta: 1,
    explicacion:
      "'Home' significa 'hogar' y se refiere al lugar donde alguien vive y se siente cómodo.",
  },
  {
    id: 161,
    pregunta: "¿Qué significa 'interest' en español?",
    respuestas: ["interesante", "interés", "curiosidad"],
    respuestaCorrecta: 1,
    explicacion:
      "'Interest' significa 'interés' y se usa para describir algo que llama la atención.",
  },
  {
    id: 162,
    pregunta: "¿Qué significa 'large' en español?",
    respuestas: ["grande", "amplio", "extenso"],
    respuestaCorrecta: 1,
    explicacion:
      "'Large' significa 'grande' y se utiliza para describir algo de tamaño considerable.",
  },
  {
    id: 163,
    pregunta: "¿Qué significa 'person' en español?",
    respuestas: ["persona", "individuo", "ser humano"],
    respuestaCorrecta: 1,
    explicacion: "'Person' significa 'persona' y se refiere a un individuo.",
  },
  {
    id: 164,
    pregunta: "¿Qué significa 'end' en español?",
    respuestas: ["fin", "comienzo", "meta"],
    respuestaCorrecta: 1,
    explicacion:
      "'End' significa 'fin' y se usa para describir el término de algo.",
  },
  {
    id: 165,
    pregunta: "¿Qué significa 'open' en español?",
    respuestas: ["cerrar", "abrir", "desplegar"],
    respuestaCorrecta: 2,
    explicacion:
      "'Open' significa 'abrir' y se refiere a la acción de dejar algo disponible o sin cerrar.",
  },
  {
    id: 166,
    pregunta: "¿Qué significa 'public' en español?",
    respuestas: ["privado", "público", "general"],
    respuestaCorrecta: 2,
    explicacion:
      "'Public' significa 'público' y se usa para describir algo accesible para todos.",
  },
  {
    id: 167,
    pregunta: "¿Qué significa 'follow' en español?",
    respuestas: ["seguir", "perseguir", "ir detrás"],
    respuestaCorrecta: 1,
    explicacion:
      "'Follow' significa 'seguir' y se usa para describir el acto de ir detrás de alguien o algo.",
  },
  {
    id: 168,
    pregunta: "¿Qué significa 'during' en español?",
    respuestas: ["antes", "durante", "después"],
    respuestaCorrecta: 2,
    explicacion:
      "'During' significa 'durante' y se usa para hablar de algo que ocurre en un periodo de tiempo.",
  },
  {
    id: 169,
    pregunta: "¿Qué significa 'present' en español?",
    respuestas: ["pasado", "presente", "futuro"],
    respuestaCorrecta: 2,
    explicacion:
      "'Present' significa 'presente' y se refiere al momento actual o a estar en un lugar.",
  },
  {
    id: 170,
    pregunta: "¿Qué significa 'without' en español?",
    respuestas: ["con", "sin", "dentro de"],
    respuestaCorrecta: 2,
    explicacion:
      "'Without' significa 'sin' y se usa para describir la ausencia de algo.",
  },
  {
    id: 171,
    pregunta: "¿Qué significa 'again' en español?",
    respuestas: ["una vez más", "nunca", "ahora"],
    respuestaCorrecta: 1,
    explicacion:
      "'Again' significa 'una vez más' y se usa para indicar repetición.",
  },
  {
    id: 172,
    pregunta: "¿Qué significa 'hold' en español?",
    respuestas: ["soltar", "sostener", "dejar caer"],
    respuestaCorrecta: 2,
    explicacion:
      "'Hold' significa 'sostener' y se usa para describir el acto de agarrar algo.",
  },
  {
    id: 173,
    pregunta: "¿Qué significa 'govern' en español?",
    respuestas: ["controlar", "gobernar", "liderar"],
    respuestaCorrecta: 2,
    explicacion:
      "'Govern' significa 'gobernar' y se usa para describir el acto de dirigir un grupo o país.",
  },
  {
    id: 174,
    pregunta: "¿Qué significa 'around' en español?",
    respuestas: ["alrededor", "sobre", "dentro"],
    respuestaCorrecta: 1,
    explicacion:
      "'Around' significa 'alrededor' y se usa para describir la posición o movimiento en círculo.",
  },
  {
    id: 175,
    pregunta: "¿Qué significa 'possible' en español?",
    respuestas: ["imposible", "posible", "probable"],
    respuestaCorrecta: 2,
    explicacion:
      "'Possible' significa 'posible' y se usa para describir algo que puede suceder.",
  },
  {
    id: 176,
    pregunta: "¿Qué significa 'head' en español?",
    respuestas: ["brazo", "cabeza", "pierna"],
    respuestaCorrecta: 2,
    explicacion:
      "'Head' significa 'cabeza' y se refiere a la parte superior del cuerpo humano.",
  },
  {
    id: 177,
    pregunta: "¿Qué significa 'consider' en español?",
    respuestas: ["ignorar", "considerar", "aceptar"],
    respuestaCorrecta: 2,
    explicacion:
      "'Consider' significa 'considerar' y se usa para pensar detenidamente sobre algo.",
  },
  {
    id: 178,
    pregunta: "¿Qué significa 'word' en español?",
    respuestas: ["palabra", "letra", "frase"],
    respuestaCorrecta: 1,
    explicacion: "'Word' significa 'palabra'.",
  },
  {
    id: 179,
    pregunta: "¿Qué significa 'programme' en español?",
    respuestas: ["programa", "evento", "código"],
    respuestaCorrecta: 1,
    explicacion:
      "'Programme' significa 'programa' y se refiere a un plan o lista organizada de actividades.",
  },
  {
    id: 180,
    pregunta: "¿Qué significa 'problem' en español?",
    respuestas: ["solución", "problema", "duda"],
    respuestaCorrecta: 2,
    explicacion:
      "'Problem' significa 'problema' y se usa para describir una dificultad o situación que requiere solución.",
  },
  {
    id: 181,
    pregunta: "¿Qué significa 'however' en español?",
    respuestas: ["sin embargo", "aunque", "mientras"],
    respuestaCorrecta: 1,
    explicacion:
      "'However' significa 'sin embargo' y se usa para introducir una idea opuesta.",
  },
  {
    id: 182,
    pregunta: "¿Qué significa 'lead' en español?",
    respuestas: ["seguir", "liderar", "empujar"],
    respuestaCorrecta: 2,
    explicacion:
      "'Lead' significa 'liderar' y se refiere al acto de dirigir o guiar.",
  },
  {
    id: 183,
    pregunta: "¿Qué significa 'system' en español?",
    respuestas: ["sistema", "estructura", "proceso"],
    respuestaCorrecta: 1,
    explicacion:
      "'System' significa 'sistema' y se usa para describir un conjunto de elementos organizados.",
  },
  {
    id: 184,
    pregunta: "¿Qué significa 'set' en español?",
    respuestas: ["colocar", "establecer", "crear"],
    respuestaCorrecta: 2,
    explicacion:
      "'Set' significa 'establecer' y se usa para fijar algo en un lugar o estado.",
  },
  {
    id: 185,
    pregunta: "¿Qué significa 'order' en español?",
    respuestas: ["orden", "desorden", "estructura"],
    respuestaCorrecta: 1,
    explicacion:
      "'Order' significa 'orden' y se usa para describir una disposición organizada.",
  },
  {
    id: 186,
    pregunta: "¿Qué significa 'eye' en español?",
    respuestas: ["nariz", "ojo", "boca"],
    respuestaCorrecta: 2,
    explicacion: "'Eye' significa 'ojo' y se refiere al órgano visual.",
  },
  {
    id: 187,
    pregunta: "¿Qué significa 'plan' en español?",
    respuestas: ["proyecto", "plan", "esquema"],
    respuestaCorrecta: 2,
    explicacion:
      "'Plan' significa 'plan' y se usa para describir una idea organizada para lograr algo.",
  },
  {
    id: 188,
    pregunta: "¿Qué significa 'run' en español?",
    respuestas: ["correr", "caminar", "saltar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Run' significa 'correr' y se usa para describir el acto de moverse rápidamente con los pies.",
  },
  {
    id: 189,
    pregunta: "¿Qué significa 'keep' en español?",
    respuestas: ["guardar", "mantener", "sostener"],
    respuestaCorrecta: 2,
    explicacion:
      "'Keep' significa 'mantener' y se usa para hablar de preservar algo en un estado.",
  },
  {
    id: 190,
    pregunta: "¿Qué significa 'face' en español?",
    respuestas: ["cara", "rostro", "mirada"],
    respuestaCorrecta: 1,
    explicacion:
      "'Face' significa 'cara' y se usa para referirse a la parte frontal de la cabeza.",
  },
  {
    id: 191,
    pregunta: "¿Qué significa 'fact' en español?",
    respuestas: ["ficción", "hecho", "verdad"],
    respuestaCorrecta: 2,
    explicacion:
      "'Fact' significa 'hecho' y se usa para describir algo real o comprobable.",
  },
  {
    id: 192,
    pregunta: "¿Qué significa 'group' en español?",
    respuestas: ["grupo", "equipo", "conjunto"],
    respuestaCorrecta: 1,
    explicacion:
      "'Group' significa 'grupo' y se usa para describir una colección de personas o cosas.",
  },
  {
    id: 193,
    pregunta: "¿Qué significa 'play' en español?",
    respuestas: ["jugar", "tocar", "actuar"],
    respuestaCorrecta: 1,
    explicacion: "'Play' significa 'jugar' o 'tocar' dependiendo del contexto.",
  },
  {
    id: 194,
    pregunta: "¿Qué significa 'stand' en español?",
    respuestas: ["pararse", "quedarse", "andar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Stand' significa 'pararse' y se usa para describir la posición vertical.",
  },
  {
    id: 195,
    pregunta: "¿Qué significa 'increase' en español?",
    respuestas: ["disminuir", "aumentar", "reducir"],
    respuestaCorrecta: 2,
    explicacion:
      "'Increase' significa 'aumentar' y se usa para describir un crecimiento o subida.",
  },
  {
    id: 196,
    pregunta: "¿Qué significa 'early' en español?",
    respuestas: ["tarde", "temprano", "pronto"],
    respuestaCorrecta: 2,
    explicacion:
      "'Early' significa 'temprano' y se usa para describir algo que ocurre antes de lo habitual.",
  },
  {
    id: 197,
    pregunta: "¿Qué significa 'course' en español?",
    respuestas: ["curso", "camino", "trayectoria"],
    respuestaCorrecta: 1,
    explicacion:
      "'Course' significa 'curso' y se usa para referirse a una clase o dirección a seguir.",
  },
  {
    id: 198,
    pregunta: "¿Qué significa 'change' en español?",
    respuestas: ["transformar", "cambiar", "modificar"],
    respuestaCorrecta: 2,
    explicacion:
      "'Change' significa 'cambiar' y se usa para describir un cambio o modificación.",
  },
  {
    id: 199,
    pregunta: "¿Qué significa 'help' en español?",
    respuestas: ["ayudar", "colaborar", "soportar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Help' significa 'ayudar' y se refiere al acto de asistir o apoyar a alguien.",
  },
  {
    id: 200,
    pregunta: "¿Qué significa 'line' en español?",
    respuestas: ["línea", "cuerda", "trayectoria"],
    respuestaCorrecta: 0,
    explicacion:
      "'Line' significa 'línea' y se usa para describir una marca o trayectoria recta.",
  },
  {
    id: 201,
    pregunta: "¿Qué significa 'city' en español?",
    respuestas: ["ciudad", "pueblo", "país"],
    respuestaCorrecta: 0,
    explicacion:
      "'City' significa 'ciudad' y se refiere a un área urbana grande.",
  },
  {
    id: 202,
    pregunta: "¿Qué significa 'put' en español?",
    respuestas: ["poner", "dejar", "colocar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Put' significa 'poner' y se usa para describir la acción de colocar algo en un lugar.",
  },
  {
    id: 203,
    pregunta: "¿Qué significa 'close' en español?",
    respuestas: ["cercano", "cerrar", "apagar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Close' significa 'cerrar' y se usa para referirse a la acción de bloquear o clausurar algo.",
  },
  {
    id: 204,
    pregunta: "¿Qué significa 'case' en español?",
    respuestas: ["caso", "maleta", "prueba"],
    respuestaCorrecta: 0,
    explicacion:
      "'Case' significa 'caso' y se usa para describir una situación o ejemplo específico.",
  },
  {
    id: 205,
    pregunta: "¿Qué significa 'force' en español?",
    respuestas: ["fuerza", "empuje", "poder"],
    respuestaCorrecta: 0,
    explicacion:
      "'Force' significa 'fuerza' y se usa para referirse al poder físico o energía.",
  },
  {
    id: 206,
    pregunta: "¿Qué significa 'meet' en español?",
    respuestas: ["conocer", "encontrar", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Meet' significa 'conocer' o 'encontrar', dependiendo del contexto.",
  },
  {
    id: 207,
    pregunta: "¿Qué significa 'once' en español?",
    respuestas: ["una vez", "frecuente", "ocasional"],
    respuestaCorrecta: 0,
    explicacion:
      "'Once' significa 'una vez' y se usa para describir algo que ocurre solo una vez.",
  },
  {
    id: 208,
    pregunta: "¿Qué significa 'water' en español?",
    respuestas: ["agua", "líquido", "flujo"],
    respuestaCorrecta: 0,
    explicacion:
      "'Water' significa 'agua' y se usa para referirse al líquido esencial para la vida.",
  },
  {
    id: 209,
    pregunta: "¿Qué significa 'upon' en español?",
    respuestas: ["sobre", "debajo", "alrededor"],
    respuestaCorrecta: 0,
    explicacion:
      "'Upon' significa 'sobre' y se usa en contextos formales para indicar posición o tiempo.",
  },
  {
    id: 210,
    pregunta: "¿Qué significa 'war' en español?",
    respuestas: ["batalla", "guerra", "conflicto"],
    respuestaCorrecta: 1,
    explicacion:
      "'War' significa 'guerra' y se usa para describir un conflicto armado.",
  },
  {
    id: 211,
    pregunta: "¿Qué significa 'build' en español?",
    respuestas: ["construir", "diseñar", "crear"],
    respuestaCorrecta: 0,
    explicacion:
      "'Build' significa 'construir' y se usa para hablar de la creación de estructuras o cosas.",
  },
  {
    id: 212,
    pregunta: "¿Qué significa 'hear' en español?",
    respuestas: ["escuchar", "oír", "entender"],
    respuestaCorrecta: 1,
    explicacion:
      "'Hear' significa 'oír' y se usa para describir el acto de percibir sonidos.",
  },
  {
    id: 213,
    pregunta: "¿Qué significa 'light' en español?",
    respuestas: ["luz", "claro", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion: "'Light' significa 'luz' o 'claro', dependiendo del contexto.",
  },
  {
    id: 214,
    pregunta: "¿Qué significa 'unite' en español?",
    respuestas: ["unir", "separar", "juntar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Unite' significa 'unir' y se refiere al acto de juntar cosas o personas.",
  },
  {
    id: 215,
    pregunta: "¿Qué significa 'live' en español?",
    respuestas: ["vivir", "morir", "existir"],
    respuestaCorrecta: 0,
    explicacion:
      "'Live' significa 'vivir' y se usa para hablar de la existencia.",
  },
  {
    id: 216,
    pregunta: "¿Qué significa 'every' en español?",
    respuestas: ["cada", "todo", "ninguno"],
    respuestaCorrecta: 0,
    explicacion:
      "'Every' significa 'cada' y se usa para referirse a todos los elementos individualmente.",
  },
  {
    id: 217,
    pregunta: "¿Qué significa 'country' en español?",
    respuestas: ["país", "ciudad", "región"],
    respuestaCorrecta: 0,
    explicacion:
      "'Country' significa 'país' y se refiere a una nación con gobierno propio.",
  },
  {
    id: 218,
    pregunta: "¿Qué significa 'bring' en español?",
    respuestas: ["llevar", "traer", "mover"],
    respuestaCorrecta: 1,
    explicacion:
      "'Bring' significa 'traer' y se usa para hablar de llevar algo a un lugar.",
  },
  {
    id: 219,
    pregunta: "¿Qué significa 'centre' en español?",
    respuestas: ["centro", "lugar", "punto"],
    respuestaCorrecta: 0,
    explicacion:
      "'Centre' significa 'centro' y se refiere al punto medio de algo.",
  },
  {
    id: 220,
    pregunta: "¿Qué significa 'let' en español?",
    respuestas: ["dejar", "permitir", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Let' significa 'dejar' o 'permitir', dependiendo del contexto.",
  },
  {
    id: 221,
    pregunta: "¿Qué significa 'side' en español?",
    respuestas: ["lado", "esquina", "parte"],
    respuestaCorrecta: 0,
    explicacion:
      "'Side' significa 'lado' y se usa para describir una parte de algo.",
  },
  {
    id: 222,
    pregunta: "¿Qué significa 'try' en español?",
    respuestas: ["intentar", "hacer", "pensar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Try' significa 'intentar' y se refiere al acto de probar algo.",
  },
  {
    id: 223,
    pregunta: "¿Qué significa 'provide' en español?",
    respuestas: ["proveer", "obtener", "dar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Provide' significa 'proveer' y se usa para describir la acción de suministrar algo.",
  },
  {
    id: 224,
    pregunta: "¿Qué significa 'continue' en español?",
    respuestas: ["detener", "continuar", "seguir"],
    respuestaCorrecta: 1,
    explicacion:
      "'Continue' significa 'continuar' y se usa para describir algo que sigue en progreso.",
  },
  {
    id: 225,
    pregunta: "¿Qué significa 'name' en español?",
    respuestas: ["nombre", "apodo", "identidad"],
    respuestaCorrecta: 0,
    explicacion:
      "'Name' significa 'nombre' y se refiere a cómo se identifica a alguien o algo.",
  },
  {
    id: 226,
    pregunta: "¿Qué significa 'certain' en español?",
    respuestas: ["seguro", "cierto", "probable"],
    respuestaCorrecta: 1,
    explicacion:
      "'Certain' significa 'cierto' y se usa para describir algo seguro o confirmado.",
  },
  {
    id: 227,
    pregunta: "¿Qué significa 'power' en español?",
    respuestas: ["energía", "poder", "fuerza"],
    respuestaCorrecta: 1,
    explicacion:
      "'Power' significa 'poder' y se usa para describir fuerza o capacidad de hacer algo.",
  },
  {
    id: 228,
    pregunta: "¿Qué significa 'pay' en español?",
    respuestas: ["cobrar", "pagar", "recibir"],
    respuestaCorrecta: 1,
    explicacion:
      "'Pay' significa 'pagar' y se usa para hablar de dar dinero por algo.",
  },
  {
    id: 229,
    pregunta: "¿Qué significa 'result' en español?",
    respuestas: ["resultado", "consecuencia", "prueba"],
    respuestaCorrecta: 0,
    explicacion:
      "'Result' significa 'resultado' y se refiere al efecto de una acción.",
  },
  {
    id: 230,
    pregunta: "¿Qué significa 'question' en español?",
    respuestas: ["respuesta", "pregunta", "duda"],
    respuestaCorrecta: 1,
    explicacion:
      "'Question' significa 'pregunta' y se usa para solicitar información.",
  },
  {
    id: 231,
    pregunta: "¿Qué significa 'study' en español?",
    respuestas: ["trabajar", "estudiar", "leer"],
    respuestaCorrecta: 1,
    explicacion:
      "'Study' significa 'estudiar' y se usa para referirse al acto de aprender.",
  },
  {
    id: 232,
    pregunta: "¿Qué significa 'woman' en español?",
    respuestas: ["hombre", "mujer", "niña"],
    respuestaCorrecta: 1,
    explicacion: "'Woman' significa 'mujer'.",
  },
  {
    id: 233,
    pregunta: "¿Qué significa 'member' en español?",
    respuestas: ["miembro", "grupo", "parte"],
    respuestaCorrecta: 0,
    explicacion:
      "'Member' significa 'miembro' y se usa para referirse a alguien que pertenece a un grupo.",
  },
  {
    id: 234,
    pregunta: "¿Qué significa 'until' en español?",
    respuestas: ["desde", "hasta", "mientras"],
    respuestaCorrecta: 1,
    explicacion:
      "'Until' significa 'hasta' y se usa para indicar un límite de tiempo.",
  },
  {
    id: 235,
    pregunta: "¿Qué significa 'far' en español?",
    respuestas: ["lejos", "cerca", "distante"],
    respuestaCorrecta: 0,
    explicacion:
      "'Far' significa 'lejos' y se usa para describir algo a gran distancia.",
  },
  {
    id: 236,
    pregunta: "¿Qué significa 'night' en español?",
    respuestas: ["mañana", "noche", "tarde"],
    respuestaCorrecta: 1,
    explicacion:
      "'Night' significa 'noche' y se refiere al periodo después de la puesta de sol.",
  },
  {
    id: 237,
    pregunta: "¿Qué significa 'always' en español?",
    respuestas: ["siempre", "nunca", "a veces"],
    respuestaCorrecta: 0,
    explicacion:
      "'Always' significa 'siempre' y se usa para describir algo que ocurre todo el tiempo.",
  },
  {
    id: 238,
    pregunta: "¿Qué significa 'service' en español?",
    respuestas: ["servicio", "ayuda", "asistencia"],
    respuestaCorrecta: 0,
    explicacion:
      "'Service' significa 'servicio' y se refiere al acto de asistir o proporcionar ayuda.",
  },
  {
    id: 239,
    pregunta: "¿Qué significa 'away' en español?",
    respuestas: ["cerca", "lejos", "fuera"],
    respuestaCorrecta: 1,
    explicacion:
      "'Away' significa 'lejos' y se usa para describir algo a distancia.",
  },
  {
    id: 240,
    pregunta: "¿Qué significa 'report' en español?",
    respuestas: ["noticia", "reporte", "informe"],
    respuestaCorrecta: 1,
    explicacion:
      "'Report' significa 'reporte' o 'informe' y se usa para describir información oficial.",
  },
  {
    id: 241,
    pregunta: "¿Qué significa 'something' en español?",
    respuestas: ["algo", "nada", "todo"],
    respuestaCorrecta: 0,
    explicacion:
      "'Something' significa 'algo' y se usa para referirse a una cosa indefinida.",
  },
  {
    id: 242,
    pregunta: "¿Qué significa 'company' en español?",
    respuestas: ["empresa", "compañía", "negocio"],
    respuestaCorrecta: 1,
    explicacion:
      "'Company' significa 'compañía' o 'empresa' y se usa para referirse a una organización de negocios.",
  },
  {
    id: 243,
    pregunta: "¿Qué significa 'week' en español?",
    respuestas: ["día", "semana", "fin de semana"],
    respuestaCorrecta: 1,
    explicacion:
      "'Week' significa 'semana' y se refiere a un período de siete días.",
  },
  {
    id: 244,
    pregunta: "¿Qué significa 'church' en español?",
    respuestas: ["iglesia", "templo", "catedral"],
    respuestaCorrecta: 0,
    explicacion:
      "'Church' significa 'iglesia' y se refiere a un lugar de culto religioso.",
  },
  {
    id: 245,
    pregunta: "¿Qué significa 'toward' en español?",
    respuestas: ["hacia", "lejos", "alrededor"],
    respuestaCorrecta: 0,
    explicacion:
      "'Toward' significa 'hacia' y se usa para indicar dirección o intención.",
  },
  {
    id: 246,
    pregunta: "¿Qué significa 'start' en español?",
    respuestas: ["comenzar", "terminar", "continuar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Start' significa 'comenzar' y se usa para referirse al inicio de algo.",
  },
  {
    id: 247,
    pregunta: "¿Qué significa 'social' en español?",
    respuestas: ["social", "personal", "público"],
    respuestaCorrecta: 0,
    explicacion:
      "'Social' significa 'social' y se refiere a actividades o interacciones entre personas.",
  },
  {
    id: 248,
    pregunta: "¿Qué significa 'room' en español?",
    respuestas: ["habitación", "espacio", "salón"],
    respuestaCorrecta: 0,
    explicacion:
      "'Room' significa 'habitación' y se usa para referirse a una parte de una casa o edificio.",
  },
  {
    id: 249,
    pregunta: "¿Qué significa 'figure' en español?",
    respuestas: ["figura", "imagen", "forma"],
    respuestaCorrecta: 0,
    explicacion:
      "'Figure' significa 'figura' y se usa para describir formas o representaciones.",
  },
  {
    id: 250,
    pregunta: "¿Qué significa 'nature' en español?",
    respuestas: ["naturaleza", "entorno", "ambiente"],
    respuestaCorrecta: 0,
    explicacion:
      "'Nature' significa 'naturaleza' y se refiere al mundo natural y su entorno.",
  },
  {
    id: 251,
    pregunta: "¿Qué significa 'though' en español?",
    respuestas: ["aunque", "porque", "mientras"],
    respuestaCorrecta: 0,
    explicacion:
      "'Though' significa 'aunque' y se usa para introducir una idea contrastante.",
  },
  {
    id: 252,
    pregunta: "¿Qué significa 'young' en español?",
    respuestas: ["viejo", "joven", "nuevo"],
    respuestaCorrecta: 1,
    explicacion:
      "'Young' significa 'joven' y se usa para describir algo o alguien de poca edad.",
  },
  {
    id: 253,
    pregunta: "¿Qué significa 'less' en español?",
    respuestas: ["menos", "más", "igual"],
    respuestaCorrecta: 0,
    explicacion: "'Less' significa 'menos' y se usa para comparar cantidades.",
  },
  {
    id: 254,
    pregunta: "¿Qué significa 'enough' en español?",
    respuestas: ["bastante", "insuficiente", "demasiado"],
    respuestaCorrecta: 0,
    explicacion:
      "'Enough' significa 'bastante' y se usa para indicar cantidad suficiente.",
  },
  {
    id: 255,
    pregunta: "¿Qué significa 'almost' en español?",
    respuestas: ["siempre", "casi", "nunca"],
    respuestaCorrecta: 1,
    explicacion:
      "'Almost' significa 'casi' y se usa para describir algo que no llega a ser completo.",
  },
  {
    id: 256,
    pregunta: "¿Qué significa 'read' en español?",
    respuestas: ["leer", "escribir", "escuchar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Read' significa 'leer' y se refiere al acto de interpretar texto escrito.",
  },
  {
    id: 257,
    pregunta: "¿Qué significa 'include' en español?",
    respuestas: ["excluir", "incluir", "añadir"],
    respuestaCorrecta: 1,
    explicacion:
      "'Include' significa 'incluir' y se usa para agregar elementos a un grupo.",
  },
  {
    id: 258,
    pregunta: "¿Qué significa 'president' en español?",
    respuestas: ["presidente", "líder", "jefe"],
    respuestaCorrecta: 0,
    explicacion:
      "'President' significa 'presidente' y se refiere al líder de una organización o país.",
  },
  {
    id: 259,
    pregunta: "¿Qué significa 'nothing' en español?",
    respuestas: ["todo", "nada", "algo"],
    respuestaCorrecta: 1,
    explicacion:
      "'Nothing' significa 'nada' y se refiere a la ausencia de cualquier cosa.",
  },
  {
    id: 260,
    pregunta: "¿Qué significa 'yet' en español?",
    respuestas: ["aún", "ya", "todavía"],
    respuestaCorrecta: 0,
    explicacion: "'Yet' significa 'aún' o 'todavía', dependiendo del contexto.",
  },
  {
    id: 261,
    pregunta: "¿Qué significa 'better' en español?",
    respuestas: ["peor", "mejor", "igual"],
    respuestaCorrecta: 1,
    explicacion:
      "'Better' significa 'mejor' y se usa para comparar cosas o situaciones.",
  },
  {
    id: 262,
    pregunta: "¿Qué significa 'big' en español?",
    respuestas: ["pequeño", "grande", "mediano"],
    respuestaCorrecta: 1,
    explicacion:
      "'Big' significa 'grande' y se usa para describir tamaño o importancia.",
  },
  {
    id: 263,
    pregunta: "¿Qué significa 'boy' en español?",
    respuestas: ["niño", "joven", "chico"],
    respuestaCorrecta: 0,
    explicacion:
      "'Boy' significa 'niño' o 'chico' y se refiere a un joven masculino.",
  },
  {
    id: 264,
    pregunta: "¿Qué significa 'cost' en español?",
    respuestas: ["precio", "costo", "valor"],
    respuestaCorrecta: 1,
    explicacion:
      "'Cost' significa 'costo' y se usa para describir el valor en dinero de algo.",
  },
  {
    id: 265,
    pregunta: "¿Qué significa 'business' en español?",
    respuestas: ["negocio", "empresa", "industria"],
    respuestaCorrecta: 0,
    explicacion:
      "'Business' significa 'negocio' y se refiere a actividades comerciales o profesionales.",
  },
  {
    id: 266,
    pregunta: "¿Qué significa 'value' en español?",
    respuestas: ["precio", "valor", "importancia"],
    respuestaCorrecta: 1,
    explicacion:
      "'Value' significa 'valor' y se usa para referirse a la importancia o utilidad de algo.",
  },
  {
    id: 267,
    pregunta: "¿Qué significa 'second' en español?",
    respuestas: ["primero", "segundo", "tercero"],
    respuestaCorrecta: 1,
    explicacion:
      "'Second' significa 'segundo' y se refiere a la posición después de la primera.",
  },
  {
    id: 268,
    pregunta: "¿Qué significa 'why' en español?",
    respuestas: ["cuándo", "por qué", "cómo"],
    respuestaCorrecta: 1,
    explicacion:
      "'Why' significa 'por qué' y se usa para preguntar la razón de algo.",
  },
  {
    id: 269,
    pregunta: "¿Qué significa 'clear' en español?",
    respuestas: ["limpio", "claro", "transparente"],
    respuestaCorrecta: 1,
    explicacion:
      "'Clear' significa 'claro' y se usa para describir algo transparente o comprensible.",
  },
  {
    id: 270,
    pregunta: "¿Qué significa 'expect' en español?",
    respuestas: ["esperar", "desear", "suponer"],
    respuestaCorrecta: 0,
    explicacion:
      "'Expect' significa 'esperar' y se usa para hablar de una expectativa.",
  },
  {
    id: 271,
    pregunta: "¿Qué significa 'family' en español?",
    respuestas: ["familia", "grupo", "hogar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Family' significa 'familia' y se refiere al grupo de personas relacionadas por sangre o matrimonio.",
  },
  {
    id: 272,
    pregunta: "¿Qué significa 'complete' en español?",
    respuestas: ["completar", "finalizar", "terminar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Complete' significa 'completar' y se refiere al acto de finalizar algo.",
  },
  {
    id: 273,
    pregunta: "¿Qué significa 'act' en español?",
    respuestas: ["acto", "acción", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion: "'Act' significa 'acto' o 'acción', dependiendo del contexto.",
  },
  {
    id: 274,
    pregunta: "¿Qué significa 'sense' en español?",
    respuestas: ["sentido", "razón", "sentimiento"],
    respuestaCorrecta: 0,
    explicacion:
      "'Sense' significa 'sentido' y se usa para describir la percepción o significado.",
  },
  {
    id: 275,
    pregunta: "¿Qué significa 'mind' en español?",
    respuestas: ["mente", "cerebro", "pensamiento"],
    respuestaCorrecta: 0,
    explicacion:
      "'Mind' significa 'mente' y se refiere a la capacidad de pensar, razonar y recordar.",
  },
  {
    id: 276,
    pregunta: "¿Qué significa 'experience' en español?",
    respuestas: ["experiencia", "práctica", "conocimiento"],
    respuestaCorrecta: 0,
    explicacion:
      "'Experience' significa 'experiencia' y se refiere al conocimiento o habilidad obtenida por práctica.",
  },
  {
    id: 277,
    pregunta: "¿Qué significa 'art' en español?",
    respuestas: ["arte", "dibujo", "creación"],
    respuestaCorrecta: 0,
    explicacion:
      "'Art' significa 'arte' y se usa para referirse a expresiones creativas como pintura o música.",
  },
  {
    id: 278,
    pregunta: "¿Qué significa 'next' en español?",
    respuestas: ["antes", "siguiente", "cerca"],
    respuestaCorrecta: 1,
    explicacion:
      "'Next' significa 'siguiente' y se usa para describir algo que viene después en orden.",
  },
  {
    id: 279,
    pregunta: "¿Qué significa 'near' en español?",
    respuestas: ["lejos", "cerca", "junto"],
    respuestaCorrecta: 1,
    explicacion:
      "'Near' significa 'cerca' y se usa para describir algo a poca distancia.",
  },
  {
    id: 280,
    pregunta: "¿Qué significa 'direct' en español?",
    respuestas: ["directo", "líder", "guía"],
    respuestaCorrecta: 0,
    explicacion:
      "'Direct' significa 'directo' y se refiere a algo sin desvíos o intermediarios.",
  },
  {
    id: 281,
    pregunta: "¿Qué significa 'car' en español?",
    respuestas: ["bicicleta", "carro", "vehículo"],
    respuestaCorrecta: 1,
    explicacion:
      "'Car' significa 'carro' y se refiere a un vehículo motorizado para transporte personal.",
  },
  {
    id: 282,
    pregunta: "¿Qué significa 'law' en español?",
    respuestas: ["ley", "regla", "orden"],
    respuestaCorrecta: 0,
    explicacion:
      "'Law' significa 'ley' y se refiere a normas establecidas por una autoridad.",
  },
  {
    id: 283,
    pregunta: "¿Qué significa 'industry' en español?",
    respuestas: ["industria", "fábrica", "comercio"],
    respuestaCorrecta: 0,
    explicacion:
      "'Industry' significa 'industria' y se usa para describir sectores económicos productivos.",
  },
  {
    id: 284,
    pregunta: "¿Qué significa 'important' en español?",
    respuestas: ["valioso", "importante", "necesario"],
    respuestaCorrecta: 1,
    explicacion:
      "'Important' significa 'importante' y se usa para describir algo de gran relevancia.",
  },
  {
    id: 285,
    pregunta: "¿Qué significa 'girl' en español?",
    respuestas: ["niña", "mujer", "chica"],
    respuestaCorrecta: 0,
    explicacion:
      "'Girl' significa 'niña' o 'chica' y se refiere a una joven femenina.",
  },
  {
    id: 286,
    pregunta: "¿Qué significa 'god' en español?",
    respuestas: ["Dios", "ángel", "espíritu"],
    respuestaCorrecta: 0,
    explicacion:
      "'God' significa 'Dios' y se refiere a una deidad o ser supremo.",
  },
  {
    id: 287,
    pregunta: "¿Qué significa 'several' en español?",
    respuestas: ["varios", "muchos", "algunos"],
    respuestaCorrecta: 0,
    explicacion:
      "'Several' significa 'varios' y se usa para referirse a un número no especificado.",
  },
  {
    id: 288,
    pregunta: "¿Qué significa 'matter' en español?",
    respuestas: ["importar", "asunto", "tema"],
    respuestaCorrecta: 1,
    explicacion:
      "'Matter' significa 'asunto' y se usa para hablar de algo importante o relevante.",
  },
  {
    id: 289,
    pregunta: "¿Qué significa 'usual' en español?",
    respuestas: ["habitual", "inusual", "común"],
    respuestaCorrecta: 0,
    explicacion:
      "'Usual' significa 'habitual' y se usa para describir algo que ocurre con frecuencia.",
  },
  {
    id: 290,
    pregunta: "¿Qué significa 'rather' en español?",
    respuestas: ["mejor", "más bien", "preferir"],
    respuestaCorrecta: 1,
    explicacion:
      "'Rather' significa 'más bien' y se usa para expresar preferencia o corrección.",
  },
  {
    id: 291,
    pregunta: "¿Qué significa 'per' en español?",
    respuestas: ["por", "para", "hacia"],
    respuestaCorrecta: 0,
    explicacion:
      "'Per' significa 'por' y se usa en contextos como tasas o proporciones.",
  },
  {
    id: 292,
    pregunta: "¿Qué significa 'often' en español?",
    respuestas: ["a menudo", "a veces", "nunca"],
    respuestaCorrecta: 0,
    explicacion:
      "'Often' significa 'a menudo' y se usa para hablar de frecuencia.",
  },
  {
    id: 293,
    pregunta: "¿Qué significa 'kind' en español?",
    respuestas: ["amable", "tipo", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Kind' puede significar 'tipo' o 'amable', dependiendo del contexto.",
  },
  {
    id: 294,
    pregunta: "¿Qué significa 'among' en español?",
    respuestas: ["entre", "alrededor", "junto"],
    respuestaCorrecta: 0,
    explicacion:
      "'Among' significa 'entre' y se usa para describir algo rodeado por varias cosas.",
  },
  {
    id: 295,
    pregunta: "¿Qué significa 'white' en español?",
    respuestas: ["negro", "blanco", "gris"],
    respuestaCorrecta: 1,
    explicacion: "'White' significa 'blanco' y se usa para describir un color.",
  },
  {
    id: 296,
    pregunta: "¿Qué significa 'reason' en español?",
    respuestas: ["razón", "causa", "justificación"],
    respuestaCorrecta: 0,
    explicacion:
      "'Reason' significa 'razón' y se usa para describir una explicación o causa.",
  },
  {
    id: 297,
    pregunta: "¿Qué significa 'action' en español?",
    respuestas: ["acción", "movimiento", "hecho"],
    respuestaCorrecta: 0,
    explicacion:
      "'Action' significa 'acción' y se refiere al acto de hacer algo.",
  },
  {
    id: 298,
    pregunta: "¿Qué significa 'return' en español?",
    respuestas: ["devolver", "volver", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Return' significa 'devolver' o 'volver', dependiendo del contexto.",
  },
  {
    id: 299,
    pregunta: "¿Qué significa 'foot' en español?",
    respuestas: ["pie", "pierna", "camino"],
    respuestaCorrecta: 0,
    explicacion:
      "'Foot' significa 'pie' y se refiere a la parte inferior de la pierna.",
  },
  {
    id: 300,
    pregunta: "¿Qué significa 'care' en español?",
    respuestas: ["cuidado", "atención", "interés"],
    respuestaCorrecta: 0,
    explicacion:
      "'Care' significa 'cuidado' y se usa para describir preocupación o atención.",
  },
  {
    id: 301,
    pregunta: "¿Qué significa 'simple' en español?",
    respuestas: ["simple", "complejo", "fácil"],
    respuestaCorrecta: 0,
    explicacion:
      "'Simple' significa 'simple' y se usa para describir algo no complicado.",
  },
  {
    id: 302,
    pregunta: "¿Qué significa 'within' en español?",
    respuestas: ["dentro de", "fuera de", "hacia"],
    respuestaCorrecta: 0,
    explicacion:
      "'Within' significa 'dentro de' y se usa para indicar ubicación en un espacio.",
  },
  {
    id: 303,
    pregunta: "¿Qué significa 'love' en español?",
    respuestas: ["amar", "cariño", "aprecio"],
    respuestaCorrecta: 0,
    explicacion:
      "'Love' significa 'amar' y se usa para describir un sentimiento profundo de afecto.",
  },
  {
    id: 304,
    pregunta: "¿Qué significa 'human' en español?",
    respuestas: ["humano", "persona", "individuo"],
    respuestaCorrecta: 0,
    explicacion: "'Human' significa 'humano' y se refiere a los seres humanos.",
  },
  {
    id: 305,
    pregunta: "¿Qué significa 'along' en español?",
    respuestas: ["a lo largo de", "junto a", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Along' puede significar 'a lo largo de' o 'junto a', dependiendo del contexto.",
  },
  {
    id: 306,
    pregunta: "¿Qué significa 'appear' en español?",
    respuestas: ["aparecer", "desaparecer", "existir"],
    respuestaCorrecta: 0,
    explicacion:
      "'Appear' significa 'aparecer' y se usa para describir algo que se hace visible.",
  },
  {
    id: 307,
    pregunta: "¿Qué significa 'doctor' en español?",
    respuestas: ["médico", "enfermero", "cirujano"],
    respuestaCorrecta: 0,
    explicacion:
      "'Doctor' significa 'médico' y se refiere a un profesional de la salud.",
  },
  {
    id: 308,
    pregunta: "¿Qué significa 'believe' en español?",
    respuestas: ["creer", "pensar", "asumir"],
    respuestaCorrecta: 0,
    explicacion:
      "'Believe' significa 'creer' y se usa para describir tener fe o confianza en algo.",
  },
  {
    id: 309,
    pregunta: "¿Qué significa 'speak' en español?",
    respuestas: ["hablar", "decir", "murmurar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Speak' significa 'hablar' y se refiere al acto de comunicarse verbalmente.",
  },
  {
    id: 310,
    pregunta: "¿Qué significa 'active' en español?",
    respuestas: ["activo", "perezoso", "enérgico"],
    respuestaCorrecta: 0,
    explicacion:
      "'Active' significa 'activo' y se usa para describir algo lleno de energía o en movimiento.",
  },
  {
    id: 311,
    pregunta: "¿Qué significa 'student' en español?",
    respuestas: ["alumno", "profesor", "estudiante"],
    respuestaCorrecta: 2,
    explicacion:
      "'Student' significa 'estudiante' y se refiere a una persona que estudia.",
  },
  {
    id: 312,
    pregunta: "¿Qué significa 'month' en español?",
    respuestas: ["día", "mes", "año"],
    respuestaCorrecta: 1,
    explicacion:
      "'Month' significa 'mes' y se refiere a una de las doce partes en que se divide un año.",
  },
  {
    id: 313,
    pregunta: "¿Qué significa 'drive' en español?",
    respuestas: ["conducir", "caminar", "correr"],
    respuestaCorrecta: 0,
    explicacion:
      "'Drive' significa 'conducir' y se refiere al acto de operar un vehículo.",
  },
  {
    id: 314,
    pregunta: "¿Qué significa 'concern' en español?",
    respuestas: ["preocupación", "interés", "tema"],
    respuestaCorrecta: 0,
    explicacion:
      "'Concern' significa 'preocupación' y se usa para hablar de algo que importa o afecta a alguien.",
  },
  {
    id: 315,
    pregunta: "¿Qué significa 'best' en español?",
    respuestas: ["mejor", "bueno", "excelente"],
    respuestaCorrecta: 0,
    explicacion:
      "'Best' significa 'mejor' y se usa para describir el nivel más alto de calidad.",
  },
  {
    id: 316,
    pregunta: "¿Qué significa 'door' en español?",
    respuestas: ["ventana", "puerta", "entrada"],
    respuestaCorrecta: 1,
    explicacion:
      "'Door' significa 'puerta' y se refiere a una abertura utilizada para entrar o salir de un lugar.",
  },
  {
    id: 317,
    pregunta: "¿Qué significa 'hope' en español?",
    respuestas: ["esperanza", "deseo", "sueño"],
    respuestaCorrecta: 0,
    explicacion:
      "'Hope' significa 'esperanza' y se usa para describir el deseo de que algo suceda.",
  },
  {
    id: 318,
    pregunta: "¿Qué significa 'example' en español?",
    respuestas: ["ejemplo", "caso", "prueba"],
    respuestaCorrecta: 0,
    explicacion:
      "'Example' significa 'ejemplo' y se refiere a algo que ilustra o representa un caso.",
  },
  {
    id: 319,
    pregunta: "¿Qué significa 'inform' en español?",
    respuestas: ["informar", "notificar", "explicar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Inform' significa 'informar' y se usa para comunicar información a alguien.",
  },
  {
    id: 320,
    pregunta: "¿Qué significa 'body' en español?",
    respuestas: ["cuerpo", "organismo", "estructura"],
    respuestaCorrecta: 0,
    explicacion:
      "'Body' significa 'cuerpo' y se refiere a la estructura física de un ser vivo.",
  },
  {
    id: 321,
    pregunta: "¿Qué significa 'ever' en español?",
    respuestas: ["siempre", "alguna vez", "nunca"],
    respuestaCorrecta: 1,
    explicacion:
      "'Ever' significa 'alguna vez' y se usa para indicar posibilidad en el tiempo.",
  },
  {
    id: 322,
    pregunta: "¿Qué significa 'least' en español?",
    respuestas: ["menos", "mínimo", "pequeño"],
    respuestaCorrecta: 1,
    explicacion:
      "'Least' significa 'mínimo' y se usa para describir el grado más bajo de algo.",
  },
  {
    id: 323,
    pregunta: "¿Qué significa 'probable' en español?",
    respuestas: ["seguro", "probable", "incierto"],
    respuestaCorrecta: 1,
    explicacion:
      "'Probable' significa 'probable' y se refiere a algo que tiene alta posibilidad de ocurrir.",
  },
  {
    id: 324,
    pregunta: "¿Qué significa 'understand' en español?",
    respuestas: ["comprender", "aprender", "escuchar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Understand' significa 'comprender' y se refiere al acto de captar el significado de algo.",
  },
  {
    id: 325,
    pregunta: "¿Qué significa 'reach' en español?",
    respuestas: ["alcanzar", "llegar", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Reach' significa 'alcanzar' o 'llegar', dependiendo del contexto.",
  },
  {
    id: 326,
    pregunta: "¿Qué significa 'effect' en español?",
    respuestas: ["efecto", "causa", "resultado"],
    respuestaCorrecta: 0,
    explicacion:
      "'Effect' significa 'efecto' y se refiere al resultado de una acción o causa.",
  },
  {
    id: 327,
    pregunta: "¿Qué significa 'different' en español?",
    respuestas: ["diferente", "único", "opuesto"],
    respuestaCorrecta: 0,
    explicacion:
      "'Different' significa 'diferente' y se usa para describir algo que no es igual.",
  },
  {
    id: 328,
    pregunta: "¿Qué significa 'idea' en español?",
    respuestas: ["concepto", "pensamiento", "idea"],
    respuestaCorrecta: 2,
    explicacion:
      "'Idea' significa 'idea' y se refiere a un pensamiento o concepto mental.",
  },
  {
    id: 329,
    pregunta: "¿Qué significa 'whole' en español?",
    respuestas: ["todo", "parte", "unidad"],
    respuestaCorrecta: 0,
    explicacion:
      "'Whole' significa 'todo' y se refiere a algo completo o entero.",
  },
  {
    id: 330,
    pregunta: "¿Qué significa 'control' en español?",
    respuestas: ["controlar", "dominar", "gestionar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Control' significa 'controlar' y se usa para referirse a la acción de dirigir o manejar algo.",
  },
  {
    id: 331,
    pregunta: "¿Qué significa 'condition' en español?",
    respuestas: ["condición", "estado", "situación"],
    respuestaCorrecta: 0,
    explicacion:
      "'Condition' significa 'condición' y se refiere al estado en que algo o alguien se encuentra.",
  },
  {
    id: 332,
    pregunta: "¿Qué significa 'field' en español?",
    respuestas: ["campo", "área", "terreno"],
    respuestaCorrecta: 0,
    explicacion:
      "'Field' significa 'campo' y se usa para referirse a áreas abiertas o sectores de trabajo.",
  },
  {
    id: 333,
    pregunta: "¿Qué significa 'pass' en español?",
    respuestas: ["pasar", "cruzar", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Pass' significa 'pasar' o 'cruzar', dependiendo del contexto.",
  },
  {
    id: 334,
    pregunta: "¿Qué significa 'fall' en español?",
    respuestas: ["caer", "descender", "saltar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Fall' significa 'caer' y se refiere al acto de perder estabilidad o equilibrio.",
  },
  {
    id: 335,
    pregunta: "¿Qué significa 'note' en español?",
    respuestas: ["nota", "mensaje", "apunte"],
    respuestaCorrecta: 0,
    explicacion:
      "'Note' significa 'nota' y se usa para referirse a un escrito breve o recordatorio.",
  },
  {
    id: 336,
    pregunta: "¿Qué significa 'special' en español?",
    respuestas: ["único", "especial", "extraordinario"],
    respuestaCorrecta: 1,
    explicacion:
      "'Special' significa 'especial' y se refiere a algo fuera de lo común o destacado.",
  },
  {
    id: 337,
    pregunta: "¿Qué significa 'talk' en español?",
    respuestas: ["hablar", "decir", "charlar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Talk' significa 'hablar' y se usa para referirse al acto de comunicarse verbalmente.",
  },
  {
    id: 338,
    pregunta: "¿Qué significa 'particular' en español?",
    respuestas: ["específico", "particular", "único"],
    respuestaCorrecta: 1,
    explicacion:
      "'Particular' significa 'particular' y se usa para referirse a algo específico o individual.",
  },
  {
    id: 339,
    pregunta: "¿Qué significa 'today' en español?",
    respuestas: ["hoy", "mañana", "ayer"],
    respuestaCorrecta: 0,
    explicacion: "'Today' significa 'hoy' y se refiere al día presente.",
  },
  {
    id: 340,
    pregunta: "¿Qué significa 'measure' en español?",
    respuestas: ["medida", "longitud", "valor"],
    respuestaCorrecta: 0,
    explicacion:
      "'Measure' significa 'medida' y se usa para describir la dimensión o cantidad de algo.",
  },
  {
    id: 341,
    pregunta: "¿Qué significa 'walk' en español?",
    respuestas: ["correr", "caminar", "andar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Walk' significa 'caminar' y se refiere al acto de desplazarse a pie.",
  },
  {
    id: 342,
    pregunta: "¿Qué significa 'teach' en español?",
    respuestas: ["aprender", "enseñar", "instruir"],
    respuestaCorrecta: 1,
    explicacion:
      "'Teach' significa 'enseñar' y se refiere al acto de instruir o educar a alguien.",
  },
  {
    id: 343,
    pregunta: "¿Qué significa 'low' en español?",
    respuestas: ["alto", "bajo", "pequeño"],
    respuestaCorrecta: 1,
    explicacion:
      "'Low' significa 'bajo' y se usa para describir una posición o nivel inferior.",
  },
  {
    id: 344,
    pregunta: "¿Qué significa 'hour' en español?",
    respuestas: ["hora", "minuto", "segundo"],
    respuestaCorrecta: 0,
    explicacion:
      "'Hour' significa 'hora' y se refiere a un período de 60 minutos.",
  },
  {
    id: 345,
    pregunta: "¿Qué significa 'type' en español?",
    respuestas: ["tipo", "modelo", "forma"],
    respuestaCorrecta: 0,
    explicacion:
      "'Type' significa 'tipo' y se usa para referirse a una categoría o clase.",
  },
  {
    id: 346,
    pregunta: "¿Qué significa 'carry' en español?",
    respuestas: ["llevar", "traer", "mover"],
    respuestaCorrecta: 0,
    explicacion:
      "'Carry' significa 'llevar' y se refiere al acto de transportar algo.",
  },
  {
    id: 347,
    pregunta: "¿Qué significa 'rate' en español?",
    respuestas: ["valor", "tasa", "proporción"],
    respuestaCorrecta: 1,
    explicacion: "'Rate' significa 'tasa' y se usa para medir o evaluar algo.",
  },
  {
    id: 348,
    pregunta: "¿Qué significa 'remain' en español?",
    respuestas: ["quedar", "ir", "permanecer"],
    respuestaCorrecta: 2,
    explicacion:
      "'Remain' significa 'permanecer' y se refiere al acto de quedarse en un lugar o estado.",
  },
  {
    id: 349,
    pregunta: "¿Qué significa 'full' en español?",
    respuestas: ["lleno", "vacío", "completo"],
    respuestaCorrecta: 0,
    explicacion:
      "'Full' significa 'lleno' y se usa para describir algo que no tiene espacio libre.",
  },
  {
    id: 350,
    pregunta: "¿Qué significa 'street' en español?",
    respuestas: ["calle", "avenida", "camino"],
    respuestaCorrecta: 0,
    explicacion:
      "'Street' significa 'calle' y se refiere a una vía pública en una ciudad o pueblo.",
  },
  {
    id: 351,
    pregunta: "¿Qué significa 'easy' en español?",
    respuestas: ["difícil", "fácil", "sencillo"],
    respuestaCorrecta: 1,
    explicacion:
      "'Easy' significa 'fácil' y se usa para describir algo que no requiere mucho esfuerzo.",
  },
  {
    id: 352,
    pregunta: "¿Qué significa 'although' en español?",
    respuestas: ["porque", "aunque", "sin embargo"],
    respuestaCorrecta: 1,
    explicacion:
      "'Although' significa 'aunque' y se usa para introducir una idea contrastante.",
  },
  {
    id: 353,
    pregunta: "¿Qué significa 'although' en español?",
    respuestas: ["porque", "aunque", "sin embargo"],
    respuestaCorrecta: 1,
    explicacion:
      "'Although' significa 'aunque' y se usa para introducir una idea contrastante.",
  },
  {
    id: 354,
    pregunta: "¿Qué significa 'sit' en español?",
    respuestas: ["sentar", "sentarse", "pararse"],
    respuestaCorrecta: 1,
    explicacion:
      "'Sit' significa 'sentarse' y se refiere a la acción de ocupar una silla o lugar similar.",
  },
  {
    id: 355,
    pregunta: "¿Qué significa 'determine' en español?",
    respuestas: ["determinar", "decidir", "descubrir"],
    respuestaCorrecta: 0,
    explicacion:
      "'Determine' significa 'determinar' y se usa para establecer o decidir algo con firmeza.",
  },
  {
    id: 356,
    pregunta: "¿Qué significa 'level' en español?",
    respuestas: ["nivel", "altura", "grado"],
    respuestaCorrecta: 0,
    explicacion:
      "'Level' significa 'nivel' y se usa para describir una posición o grado en una escala.",
  },
  {
    id: 357,
    pregunta: "¿Qué significa 'local' en español?",
    respuestas: ["regional", "local", "comunal"],
    respuestaCorrecta: 1,
    explicacion:
      "'Local' significa 'local' y se refiere a algo relacionado con una región o área específica.",
  },
  {
    id: 358,
    pregunta: "¿Qué significa 'sure' en español?",
    respuestas: ["seguro", "convencido", "decidido"],
    respuestaCorrecta: 0,
    explicacion:
      "'Sure' significa 'seguro' y se usa para expresar certeza o confianza.",
  },
  {
    id: 359,
    pregunta: "¿Qué significa 'receive' en español?",
    respuestas: ["dar", "recibir", "aceptar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Receive' significa 'recibir' y se refiere al acto de aceptar algo que se da o se envía.",
  },
  {
    id: 360,
    pregunta: "¿Qué significa 'thus' en español?",
    respuestas: ["entonces", "así", "por lo tanto"],
    respuestaCorrecta: 1,
    explicacion:
      "'Thus' significa 'así' y se usa para conectar ideas o conclusiones.",
  },
  {
    id: 361,
    pregunta: "¿Qué significa 'moment' en español?",
    respuestas: ["momento", "segundo", "instante"],
    respuestaCorrecta: 0,
    explicacion:
      "'Moment' significa 'momento' y se refiere a un breve período de tiempo.",
  },
  {
    id: 362,
    pregunta: "¿Qué significa 'spirit' en español?",
    respuestas: ["alma", "espíritu", "ánimo"],
    respuestaCorrecta: 1,
    explicacion:
      "'Spirit' significa 'espíritu' y se refiere a la esencia o carácter de una persona.",
  },
  {
    id: 363,
    pregunta: "¿Qué significa 'train' en español?",
    respuestas: ["tren", "entrenar", "practicar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Train' significa 'entrenar' y se usa para referirse al acto de practicar o prepararse.",
  },
  {
    id: 364,
    pregunta: "¿Qué significa 'college' en español?",
    respuestas: ["colegio", "universidad", "escuela"],
    respuestaCorrecta: 1,
    explicacion:
      "'College' significa 'universidad' y se refiere a una institución de educación superior.",
  },
  {
    id: 365,
    pregunta: "¿Qué significa 'religion' en español?",
    respuestas: ["religión", "culto", "espiritualidad"],
    respuestaCorrecta: 0,
    explicacion:
      "'Religion' significa 'religión' y se refiere a sistemas de creencias espirituales.",
  },
  {
    id: 366,
    pregunta: "¿Qué significa 'perhaps' en español?",
    respuestas: ["quizás", "tal vez", "probablemente"],
    respuestaCorrecta: 0,
    explicacion:
      "'Perhaps' significa 'quizás' y se usa para expresar incertidumbre.",
  },
  {
    id: 367,
    pregunta: "¿Qué significa 'music' en español?",
    respuestas: ["música", "sonido", "melodía"],
    respuestaCorrecta: 0,
    explicacion:
      "'Music' significa 'música' y se refiere al arte de combinar sonidos.",
  },
  {
    id: 368,
    pregunta: "¿Qué significa 'grow' en español?",
    respuestas: ["crecer", "aumentar", "expandir"],
    respuestaCorrecta: 0,
    explicacion:
      "'Grow' significa 'crecer' y se usa para referirse al desarrollo o aumento.",
  },
  {
    id: 369,
    pregunta: "¿Qué significa 'free' en español?",
    respuestas: ["gratis", "libre", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Free' puede significar 'gratis' o 'libre', dependiendo del contexto.",
  },
  {
    id: 370,
    pregunta: "¿Qué significa 'cause' en español?",
    respuestas: ["causa", "razón", "motivo"],
    respuestaCorrecta: 0,
    explicacion:
      "'Cause' significa 'causa' y se refiere al motivo o razón de algo.",
  },
  {
    id: 371,
    pregunta: "¿Qué significa 'serve' en español?",
    respuestas: ["servir", "ayudar", "ofrecer"],
    respuestaCorrecta: 0,
    explicacion:
      "'Serve' significa 'servir' y se usa para describir el acto de atender o ayudar.",
  },
  {
    id: 372,
    pregunta: "¿Qué significa 'age' en español?",
    respuestas: ["edad", "época", "tiempo"],
    respuestaCorrecta: 0,
    explicacion:
      "'Age' significa 'edad' y se refiere a la cantidad de años que alguien tiene.",
  },
  {
    id: 373,
    pregunta: "¿Qué significa 'book' en español?",
    respuestas: ["libro", "cuaderno", "página"],
    respuestaCorrecta: 0,
    explicacion:
      "'Book' significa 'libro' y se refiere a un conjunto de páginas encuadernadas.",
  },
  {
    id: 374,
    pregunta: "¿Qué significa 'board' en español?",
    respuestas: ["tablón", "pizarra", "tabla"],
    respuestaCorrecta: 2,
    explicacion:
      "'Board' significa 'tabla' y se usa para referirse a superficies planas de madera u otro material.",
  },
  {
    id: 375,
    pregunta: "¿Qué significa 'recent' en español?",
    respuestas: ["nuevo", "reciente", "moderno"],
    respuestaCorrecta: 1,
    explicacion:
      "'Recent' significa 'reciente' y se refiere a algo que ocurrió hace poco.",
  },
  {
    id: 376,
    pregunta: "¿Qué significa 'sound' en español?",
    respuestas: ["sonido", "ruido", "tono"],
    respuestaCorrecta: 0,
    explicacion:
      "'Sound' significa 'sonido' y se refiere a las ondas que se perciben por el oído.",
  },
  {
    id: 377,
    pregunta: "¿Qué significa 'office' en español?",
    respuestas: ["oficina", "trabajo", "despacho"],
    respuestaCorrecta: 0,
    explicacion:
      "'Office' significa 'oficina' y se refiere a un lugar donde se realizan actividades laborales.",
  },
  {
    id: 378,
    pregunta: "¿Qué significa 'cut' en español?",
    respuestas: ["cortar", "dividir", "separar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Cut' significa 'cortar' y se refiere al acto de dividir algo con un objeto afilado.",
  },
  {
    id: 379,
    pregunta: "¿Qué significa 'step' en español?",
    respuestas: ["paso", "escalón", "camino"],
    respuestaCorrecta: 0,
    explicacion:
      "'Step' significa 'paso' y se usa para describir el movimiento al caminar o una acción en un proceso.",
  },
  {
    id: 380,
    pregunta: "¿Qué significa 'class' en español?",
    respuestas: ["clase", "grupo", "categoría"],
    respuestaCorrecta: 0,
    explicacion:
      "'Class' significa 'clase' y se refiere a un grupo de estudiantes o a una categoría.",
  },
  {
    id: 381,
    pregunta: "¿Qué significa 'true' en español?",
    respuestas: ["verdad", "cierto", "real"],
    respuestaCorrecta: 1,
    explicacion:
      "'True' significa 'cierto' y se usa para confirmar que algo es verdadero.",
  },
  {
    id: 382,
    pregunta: "¿Qué significa 'history' en español?",
    respuestas: ["historia", "pasado", "crónica"],
    respuestaCorrecta: 0,
    explicacion:
      "'History' significa 'historia' y se refiere al estudio de eventos pasados.",
  },
  {
    id: 383,
    pregunta: "¿Qué significa 'position' en español?",
    respuestas: ["posición", "ubicación", "estado"],
    respuestaCorrecta: 0,
    explicacion:
      "'Position' significa 'posición' y se usa para describir un lugar o postura.",
  },
  {
    id: 384,
    pregunta: "¿Qué significa 'above' en español?",
    respuestas: ["debajo", "encima", "al lado"],
    respuestaCorrecta: 1,
    explicacion:
      "'Above' significa 'encima' y se refiere a algo en una posición superior.",
  },
  {
    id: 385,
    pregunta: "¿Qué significa 'strong' en español?",
    respuestas: ["débil", "fuerte", "robusto"],
    respuestaCorrecta: 1,
    explicacion:
      "'Strong' significa 'fuerte' y se usa para describir algo con mucha resistencia o poder.",
  },
  {
    id: 386,
    pregunta: "¿Qué significa 'friend' en español?",
    respuestas: ["amigo", "conocido", "compañero"],
    respuestaCorrecta: 0,
    explicacion:
      "'Friend' significa 'amigo' y se refiere a una persona con quien tienes una relación cercana.",
  },
  {
    id: 387,
    pregunta: "¿Qué significa 'necessary' en español?",
    respuestas: ["necesario", "útil", "indispensable"],
    respuestaCorrecta: 0,
    explicacion:
      "'Necessary' significa 'necesario' y se usa para describir algo esencial.",
  },
  {
    id: 388,
    pregunta: "¿Qué significa 'add' en español?",
    respuestas: ["sumar", "agregar", "unir"],
    respuestaCorrecta: 1,
    explicacion:
      "'Add' significa 'agregar' y se refiere al acto de incluir algo adicional.",
  },
  {
    id: 389,
    pregunta: "¿Qué significa 'court' en español?",
    respuestas: ["corte", "tribunal", "juzgado"],
    respuestaCorrecta: 0,
    explicacion:
      "'Court' significa 'corte' y se refiere a un lugar donde se administra justicia.",
  },
  {
    id: 390,
    pregunta: "¿Qué significa 'deal' en español?",
    respuestas: ["acuerdo", "trato", "negocio"],
    respuestaCorrecta: 1,
    explicacion:
      "'Deal' significa 'trato' y se refiere a un acuerdo o negociación entre partes.",
  },
  {
    id: 391,
    pregunta: "¿Qué significa 'tax' en español?",
    respuestas: ["tarea", "impuesto", "trabajo"],
    respuestaCorrecta: 1,
    explicacion:
      "'Tax' significa 'impuesto' y se refiere a un pago obligatorio al gobierno.",
  },
  {
    id: 392,
    pregunta: "¿Qué significa 'support' en español?",
    respuestas: ["soporte", "apoyo", "ayuda"],
    respuestaCorrecta: 1,
    explicacion:
      "'Support' significa 'apoyo' y se refiere a la ayuda o asistencia brindada.",
  },
  {
    id: 393,
    pregunta: "¿Qué significa 'party' en español?",
    respuestas: ["fiesta", "grupo", "reunión"],
    respuestaCorrecta: 0,
    explicacion:
      "'Party' significa 'fiesta' y se refiere a un evento social para celebrar algo.",
  },
  {
    id: 394,
    pregunta: "¿Qué significa 'whether' en español?",
    respuestas: ["si", "aunque", "porque"],
    respuestaCorrecta: 0,
    explicacion:
      "'Whether' significa 'si' y se utiliza para expresar alternativas o condiciones.",
  },
  {
    id: 395,
    pregunta: "¿Qué significa 'either' en español?",
    respuestas: ["tampoco", "cualquiera", "ambos"],
    respuestaCorrecta: 1,
    explicacion:
      "'Either' significa 'cualquiera' y se usa para referirse a una opción entre dos.",
  },
  {
    id: 396,
    pregunta: "¿Qué significa 'land' en español?",
    respuestas: ["tierra", "suelo", "terreno"],
    respuestaCorrecta: 0,
    explicacion:
      "'Land' significa 'tierra' y se refiere a la superficie sólida del planeta.",
  },
  {
    id: 397,
    pregunta: "¿Qué significa 'material' en español?",
    respuestas: ["sustancia", "material", "objeto"],
    respuestaCorrecta: 1,
    explicacion:
      "'Material' significa 'material' y se refiere a la sustancia con la que se fabrica algo.",
  },
  {
    id: 398,
    pregunta: "¿Qué significa 'happen' en español?",
    respuestas: ["suceder", "pasar", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Happen' significa 'suceder' o 'pasar', dependiendo del contexto.",
  },
  {
    id: 399,
    pregunta: "¿Qué significa 'education' en español?",
    respuestas: ["enseñanza", "educación", "formación"],
    respuestaCorrecta: 1,
    explicacion:
      "'Education' significa 'educación' y se refiere al proceso de enseñar o aprender.",
  },
  {
    id: 400,
    pregunta: "¿Qué significa 'death' en español?",
    respuestas: ["vida", "muerte", "fin"],
    respuestaCorrecta: 1,
    explicacion:
      "'Death' significa 'muerte' y se refiere al fin de la vida de un ser.",
  },
  {
    id: 401,
    pregunta: "¿Qué significa 'agree' en español?",
    respuestas: ["acordar", "discutir", "aceptar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Agree' significa 'acordar' y se utiliza para expresar estar de acuerdo con algo.",
  },
  {
    id: 402,
    pregunta: "¿Qué significa 'arm' en español?",
    respuestas: ["brazo", "arma", "defensa"],
    respuestaCorrecta: 0,
    explicacion:
      "'Arm' significa 'brazo' y se refiere a la extremidad superior del cuerpo.",
  },
  {
    id: 403,
    pregunta: "¿Qué significa 'mother' en español?",
    respuestas: ["madre", "abuela", "hija"],
    respuestaCorrecta: 0,
    explicacion:
      "'Mother' significa 'madre' y se refiere a una figura materna.",
  },
  {
    id: 404,
    pregunta: "¿Qué significa 'across' en español?",
    respuestas: ["a través de", "sobre", "hacia"],
    respuestaCorrecta: 0,
    explicacion:
      "'Across' significa 'a través de' y se usa para describir algo que cruza de un lado a otro.",
  },
  {
    id: 405,
    pregunta: "¿Qué significa 'quite' en español?",
    respuestas: ["bastante", "muy", "completamente"],
    respuestaCorrecta: 0,
    explicacion:
      "'Quite' significa 'bastante' y se usa para describir una cantidad considerable.",
  },
  {
    id: 406,
    pregunta: "¿Qué significa 'anything' en español?",
    respuestas: ["algo", "cualquier cosa", "nada"],
    respuestaCorrecta: 1,
    explicacion:
      "'Anything' significa 'cualquier cosa' y se usa para referirse a una opción o elemento indefinido.",
  },
  {
    id: 407,
    pregunta: "¿Qué significa 'town' en español?",
    respuestas: ["pueblo", "ciudad", "barrio"],
    respuestaCorrecta: 0,
    explicacion:
      "'Town' significa 'pueblo' y se refiere a una localidad más pequeña que una ciudad.",
  },
  {
    id: 408,
    pregunta: "¿Qué significa 'past' en español?",
    respuestas: ["pasado", "futuro", "presente"],
    respuestaCorrecta: 0,
    explicacion:
      "'Past' significa 'pasado' y se refiere a eventos que ya ocurrieron.",
  },
  {
    id: 409,
    pregunta: "¿Qué significa 'view' en español?",
    respuestas: ["vista", "visión", "panorama"],
    respuestaCorrecta: 0,
    explicacion:
      "'View' significa 'vista' y se usa para describir lo que se observa desde un lugar.",
  },
  {
    id: 410,
    pregunta: "¿Qué significa 'society' en español?",
    respuestas: ["sociedad", "cultura", "comunidad"],
    respuestaCorrecta: 0,
    explicacion:
      "'Society' significa 'sociedad' y se refiere a un grupo organizado de personas.",
  },
  {
    id: 411,
    pregunta: "¿Qué significa 'manage' en español?",
    respuestas: ["manejar", "controlar", "gestionar"],
    respuestaCorrecta: 2,
    explicacion:
      "'Manage' significa 'gestionar' y se refiere al acto de administrar algo de forma eficaz.",
  },
  {
    id: 412,
    pregunta: "¿Qué significa 'answer' en español?",
    respuestas: ["respuesta", "pregunta", "solución"],
    respuestaCorrecta: 0,
    explicacion:
      "'Answer' significa 'respuesta' y se refiere a una solución o contestación.",
  },
  {
    id: 413,
    pregunta: "¿Qué significa 'break' en español?",
    respuestas: ["romper", "partir", "detener"],
    respuestaCorrecta: 0,
    explicacion:
      "'Break' significa 'romper' y se refiere al acto de separar algo en partes.",
  },
  {
    id: 414,
    pregunta: "¿Qué significa 'organise' en español?",
    respuestas: ["organizar", "planificar", "estructurar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Organise' significa 'organizar' y se usa para describir la acción de poner en orden o planificar.",
  },
  {
    id: 415,
    pregunta: "¿Qué significa 'half' en español?",
    respuestas: ["entero", "mitad", "parte"],
    respuestaCorrecta: 1,
    explicacion:
      "'Half' significa 'mitad' y se refiere a una de las dos partes iguales en que se divide algo.",
  },
  {
    id: 416,
    pregunta: "¿Qué significa 'fire' en español?",
    respuestas: ["fuego", "calor", "llama"],
    respuestaCorrecta: 0,
    explicacion:
      "'Fire' significa 'fuego' y se refiere a la combustión que produce luz y calor.",
  },
  {
    id: 417,
    pregunta: "¿Qué significa 'lose' en español?",
    respuestas: ["perder", "olvidar", "fallar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Lose' significa 'perder' y se refiere al acto de no conservar algo.",
  },
  {
    id: 418,
    pregunta: "¿Qué significa 'money' en español?",
    respuestas: ["dinero", "capital", "economía"],
    respuestaCorrecta: 0,
    explicacion:
      "'Money' significa 'dinero' y se refiere al medio de intercambio utilizado para comprar bienes o servicios.",
  },
  {
    id: 419,
    pregunta: "¿Qué significa 'stop' en español?",
    respuestas: ["continuar", "detener", "seguir"],
    respuestaCorrecta: 1,
    explicacion:
      "'Stop' significa 'detener' y se usa para describir el acto de interrumpir un movimiento o acción.",
  },
  {
    id: 420,
    pregunta: "¿Qué significa 'actual' en español?",
    respuestas: ["real", "actual", "verdadero"],
    respuestaCorrecta: 1,
    explicacion:
      "'Actual' significa 'actual' y se refiere a algo que está ocurriendo en el presente.",
  },
  {
    id: 421,
    pregunta: "¿Qué significa 'already' en español?",
    respuestas: ["todavía", "ya", "antes"],
    respuestaCorrecta: 1,
    explicacion:
      "'Already' significa 'ya' y se utiliza para indicar que algo ha sucedido antes de lo esperado.",
  },
  {
    id: 422,
    pregunta: "¿Qué significa 'effort' en español?",
    respuestas: ["intento", "esfuerzo", "trabajo"],
    respuestaCorrecta: 1,
    explicacion:
      "'Effort' significa 'esfuerzo' y se refiere al uso de energía o dedicación para lograr algo.",
  },
  {
    id: 423,
    pregunta: "¿Qué significa 'wait' en español?",
    respuestas: ["esperar", "detenerse", "parar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Wait' significa 'esperar' y se refiere al acto de permanecer en un lugar hasta que ocurra algo.",
  },
  {
    id: 424,
    pregunta: "¿Qué significa 'department' en español?",
    respuestas: ["sección", "departamento", "área"],
    respuestaCorrecta: 1,
    explicacion:
      "'Department' significa 'departamento' y se refiere a una división dentro de una organización.",
  },
  {
    id: 425,
    pregunta: "¿Qué significa 'able' en español?",
    respuestas: ["capaz", "hábil", "competente"],
    respuestaCorrecta: 0,
    explicacion:
      "'Able' significa 'capaz' y se usa para describir la habilidad de hacer algo.",
  },
  {
    id: 426,
    pregunta: "¿Qué significa 'political' en español?",
    respuestas: ["social", "político", "económico"],
    respuestaCorrecta: 1,
    explicacion:
      "'Political' significa 'político' y se refiere a asuntos relacionados con el gobierno o la política.",
  },
  {
    id: 427,
    pregunta: "¿Qué significa 'learn' en español?",
    respuestas: ["aprender", "entender", "memorizar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Learn' significa 'aprender' y se refiere al proceso de adquirir conocimiento o habilidades.",
  },
  {
    id: 428,
    pregunta: "¿Qué significa 'voice' en español?",
    respuestas: ["voz", "tono", "sonido"],
    respuestaCorrecta: 0,
    explicacion:
      "'Voice' significa 'voz' y se refiere al sonido producido al hablar o cantar.",
  },
  {
    id: 429,
    pregunta: "¿Qué significa 'air' en español?",
    respuestas: ["aire", "atmósfera", "viento"],
    respuestaCorrecta: 0,
    explicacion:
      "'Air' significa 'aire' y se refiere al gas que forma la atmósfera de la Tierra.",
  },
  {
    id: 430,
    pregunta: "¿Qué significa 'together' en español?",
    respuestas: ["juntos", "reunidos", "unidos"],
    respuestaCorrecta: 0,
    explicacion:
      "'Together' significa 'juntos' y se refiere al acto de estar en compañía de otros.",
  },
  {
    id: 431,
    pregunta: "¿Qué significa 'shall' en español?",
    respuestas: ["deber", "será", "debería"],
    respuestaCorrecta: 0,
    explicacion:
      "'Shall' significa 'deber' y se usa para expresar intención o futuro formal.",
  },
  {
    id: 432,
    pregunta: "¿Qué significa 'cover' en español?",
    respuestas: ["cubrir", "tapar", "proteger"],
    respuestaCorrecta: 0,
    explicacion:
      "'Cover' significa 'cubrir' y se refiere al acto de colocar algo sobre otra cosa para proteger o esconder.",
  },
  {
    id: 433,
    pregunta: "¿Qué significa 'common' en español?",
    respuestas: ["común", "habitual", "ordinario"],
    respuestaCorrecta: 0,
    explicacion:
      "'Common' significa 'común' y se refiere a algo que es compartido o habitual entre muchas personas.",
  },
  {
    id: 434,
    pregunta: "¿Qué significa 'subject' en español?",
    respuestas: ["tema", "materia", "asunto"],
    respuestaCorrecta: 1,
    explicacion:
      "'Subject' significa 'materia' y se usa para describir un tema de estudio o discusión.",
  },
  {
    id: 435,
    pregunta: "¿Qué significa 'draw' en español?",
    respuestas: ["dibujar", "tirar", "atraer"],
    respuestaCorrecta: 0,
    explicacion:
      "'Draw' significa 'dibujar' y se usa para referirse al acto de hacer imágenes o líneas.",
  },
  {
    id: 436,
    pregunta: "¿Qué significa 'short' en español?",
    respuestas: ["corto", "pequeño", "breve"],
    respuestaCorrecta: 0,
    explicacion:
      "'Short' significa 'corto' y se refiere a algo que tiene poca longitud o duración.",
  },
  {
    id: 437,
    pregunta: "¿Qué significa 'wife' en español?",
    respuestas: ["esposa", "pareja", "mujer"],
    respuestaCorrecta: 0,
    explicacion:
      "'Wife' significa 'esposa' y se refiere a una mujer en el contexto de matrimonio.",
  },
  {
    id: 438,
    pregunta: "¿Qué significa 'treat' en español?",
    respuestas: ["tratar", "curar", "ofrecer"],
    respuestaCorrecta: 0,
    explicacion:
      "'Treat' significa 'tratar' y se usa para describir cómo alguien maneja una situación o persona.",
  },
  {
    id: 439,
    pregunta: "¿Qué significa 'limit' en español?",
    respuestas: ["límite", "frontera", "fin"],
    respuestaCorrecta: 0,
    explicacion:
      "'Limit' significa 'límite' y se refiere a una restricción o borde.",
  },
  {
    id: 440,
    pregunta: "¿Qué significa 'road' en español?",
    respuestas: ["carretera", "camino", "vía"],
    respuestaCorrecta: 0,
    explicacion:
      "'Road' significa 'carretera' y se refiere a una vía utilizada para viajar o transportarse.",
  },
  {
    id: 441,
    pregunta: "¿Qué significa 'letter' en español?",
    respuestas: ["letra", "carta", "ambas son correctas"],
    respuestaCorrecta: 2,
    explicacion:
      "'Letter' puede significar 'letra' o 'carta' dependiendo del contexto.",
  },
  {
    id: 442,
    pregunta: "¿Qué significa 'colour' en español?",
    respuestas: ["color", "pintura", "tono"],
    respuestaCorrecta: 0,
    explicacion:
      "'Colour' significa 'color' y se refiere a una percepción visual causada por la luz.",
  },
  {
    id: 443,
    pregunta: "¿Qué significa 'behind' en español?",
    respuestas: ["detrás", "en frente", "al lado"],
    respuestaCorrecta: 0,
    explicacion:
      "'Behind' significa 'detrás' y se refiere a una posición posterior.",
  },
  {
    id: 444,
    pregunta: "¿Qué significa 'produce' en español?",
    respuestas: ["producir", "crear", "generar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Produce' significa 'producir' y se usa para describir la creación o fabricación de algo.",
  },
  {
    id: 445,
    pregunta: "¿Qué significa 'send' en español?",
    respuestas: ["enviar", "mandar", "entregar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Send' significa 'enviar' y se refiere al acto de hacer llegar algo a alguien.",
  },
  {
    id: 446,
    pregunta: "¿Qué significa 'term' en español?",
    respuestas: ["término", "condición", "definición"],
    respuestaCorrecta: 0,
    explicacion:
      "'Term' significa 'término' y se refiere a una palabra o expresión específica.",
  },
  {
    id: 447,
    pregunta: "¿Qué significa 'total' en español?",
    respuestas: ["total", "suma", "cantidad"],
    respuestaCorrecta: 0,
    explicacion:
      "'Total' significa 'total' y se refiere a la suma completa de algo.",
  },
  {
    id: 448,
    pregunta: "¿Qué significa 'university' en español?",
    respuestas: ["universidad", "escuela", "instituto"],
    respuestaCorrecta: 0,
    explicacion:
      "'University' significa 'universidad' y se refiere a una institución de educación superior.",
  },
  {
    id: 449,
    pregunta: "¿Qué significa 'rise' en español?",
    respuestas: ["ascender", "subir", "levantarse"],
    respuestaCorrecta: 2,
    explicacion:
      "'Rise' significa 'levantarse' y se refiere a elevarse o aumentar.",
  },
  {
    id: 450,
    pregunta: "¿Qué significa 'century' en español?",
    respuestas: ["década", "siglo", "milenio"],
    respuestaCorrecta: 1,
    explicacion:
      "'Century' significa 'siglo' y se refiere a un periodo de 100 años.",
  },
  {
    id: 451,
    pregunta: "¿Qué significa 'success' en español?",
    respuestas: ["éxito", "logro", "victoria"],
    respuestaCorrecta: 0,
    explicacion:
      "'Success' significa 'éxito' y se refiere al logro de un objetivo o meta.",
  },
  {
    id: 452,
    pregunta: "¿Qué significa 'minute' en español?",
    respuestas: ["minuto", "instante", "momento"],
    respuestaCorrecta: 0,
    explicacion:
      "'Minute' significa 'minuto' y se refiere a una unidad de tiempo de 60 segundos.",
  },
  {
    id: 453,
    pregunta: "¿Qué significa 'remember' en español?",
    respuestas: ["olvidar", "recordar", "rememorar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Remember' significa 'recordar' y se refiere al acto de traer algo a la memoria.",
  },
  {
    id: 454,
    pregunta: "¿Qué significa 'purpose' en español?",
    respuestas: ["propósito", "meta", "objetivo"],
    respuestaCorrecta: 0,
    explicacion:
      "'Purpose' significa 'propósito' y se refiere a la razón o intención detrás de algo.",
  },
  {
    id: 455,
    pregunta: "¿Qué significa 'test' en español?",
    respuestas: ["examen", "prueba", "ensayo"],
    respuestaCorrecta: 0,
    explicacion:
      "'Test' significa 'prueba' y se refiere a una evaluación o examen.",
  },
  {
    id: 456,
    pregunta: "¿Qué significa 'fight' en español?",
    respuestas: ["pelear", "defender", "batallar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Fight' significa 'pelear' y se refiere al acto de luchar o combatir.",
  },
  {
    id: 457,
    pregunta: "¿Qué significa 'watch' en español?",
    respuestas: ["ver", "mirar", "observar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Watch' significa 'mirar' y se refiere al acto de observar algo detenidamente.",
  },
  {
    id: 458,
    pregunta: "¿Qué significa 'situation' en español?",
    respuestas: ["situación", "posición", "contexto"],
    respuestaCorrecta: 0,
    explicacion:
      "'Situation' significa 'situación' y se refiere a un estado o circunstancia específica.",
  },
  {
    id: 459,
    pregunta: "¿Qué significa 'south' en español?",
    respuestas: ["este", "sur", "oeste"],
    respuestaCorrecta: 1,
    explicacion:
      "'South' significa 'sur' y se refiere a una de las direcciones cardinales.",
  },
  {
    id: 460,
    pregunta: "¿Qué significa 'ago' en español?",
    respuestas: ["antes", "atrás", "hace"],
    respuestaCorrecta: 2,
    explicacion:
      "'Ago' significa 'hace' y se utiliza para referirse a algo que ocurrió en el pasado.",
  },
  {
    id: 461,
    pregunta: "¿Qué significa 'difference' en español?",
    respuestas: ["diferencia", "variedad", "distinción"],
    respuestaCorrecta: 0,
    explicacion:
      "'Difference' significa 'diferencia' y se refiere a la desigualdad entre dos cosas.",
  },
  {
    id: 462,
    pregunta: "¿Qué significa 'stage' en español?",
    respuestas: ["etapa", "escenario", "nivel"],
    respuestaCorrecta: 0,
    explicacion:
      "'Stage' significa 'etapa' y se refiere a un período o fase de algo.",
  },
  {
    id: 463,
    pregunta: "¿Qué significa 'father' en español?",
    respuestas: ["madre", "hijo", "padre"],
    respuestaCorrecta: 2,
    explicacion:
      "'Father' significa 'padre' y se refiere a un progenitor masculino.",
  },
  {
    id: 464,
    pregunta: "¿Qué significa 'table' en español?",
    respuestas: ["mesa", "escritorio", "tabla"],
    respuestaCorrecta: 0,
    explicacion:
      "'Table' significa 'mesa' y se refiere a un mueble con superficie plana.",
  },
  {
    id: 465,
    pregunta: "¿Qué significa 'rest' en español?",
    respuestas: ["descansar", "parar", "reposar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Rest' significa 'descansar' y se refiere al acto de tomar una pausa o relajarse.",
  },
  {
    id: 466,
    pregunta: "¿Qué significa 'bear' en español?",
    respuestas: ["oso", "soportar", "llevar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Bear' significa 'oso' y también puede usarse para describir el acto de soportar algo.",
  },
  {
    id: 467,
    pregunta: "¿Qué significa 'entire' en español?",
    respuestas: ["entero", "completo", "total"],
    respuestaCorrecta: 0,
    explicacion:
      "'Entire' significa 'entero' y se refiere a algo que está completo o sin divisiones.",
  },
  {
    id: 468,
    pregunta: "¿Qué significa 'market' en español?",
    respuestas: ["mercado", "tienda", "feria"],
    respuestaCorrecta: 0,
    explicacion:
      "'Market' significa 'mercado' y se refiere a un lugar o sistema donde se compran y venden bienes.",
  },
  {
    id: 469,
    pregunta: "¿Qué significa 'prepare' en español?",
    respuestas: ["preparar", "organizar", "disponer"],
    respuestaCorrecta: 0,
    explicacion:
      "'Prepare' significa 'preparar' y se refiere al acto de alistarse o poner algo listo para un propósito.",
  },
  {
    id: 470,
    pregunta: "¿Qué significa 'explain' en español?",
    respuestas: ["aclarar", "explicar", "describir"],
    respuestaCorrecta: 1,
    explicacion:
      "'Explain' significa 'explicar' y se refiere al acto de hacer algo comprensible para otros.",
  },
  {
    id: 471,
    pregunta: "¿Qué significa 'offer' en español?",
    respuestas: ["ofrecer", "proveer", "dar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Offer' significa 'ofrecer' y se refiere al acto de presentar algo a alguien para que lo acepte.",
  },
  {
    id: 472,
    pregunta: "¿Qué significa 'plant' en español?",
    respuestas: ["jardín", "planta", "cultivo"],
    respuestaCorrecta: 1,
    explicacion:
      "'Plant' significa 'planta' y puede referirse a una fábrica o un ser vegetal.",
  },
  {
    id: 473,
    pregunta: "¿Qué significa 'charge' en español?",
    respuestas: ["cobrar", "cargo", "energía"],
    respuestaCorrecta: 1,
    explicacion:
      "'Charge' significa 'cargo' y también se usa en contextos de carga eléctrica.",
  },
  {
    id: 474,
    pregunta: "¿Qué significa 'ground' en español?",
    respuestas: ["tierra", "suelo", "fundamento"],
    respuestaCorrecta: 2,
    explicacion:
      "'Ground' puede significar 'suelo' o 'fundamento' dependiendo del contexto.",
  },
  {
    id: 475,
    pregunta: "¿Qué significa 'west' en español?",
    respuestas: ["oeste", "norte", "sur"],
    respuestaCorrecta: 1,
    explicacion:
      "'West' significa 'oeste' y se refiere a una dirección cardinal.",
  },
  {
    id: 476,
    pregunta: "¿Qué significa 'picture' en español?",
    respuestas: ["imagen", "retrato", "pintura"],
    respuestaCorrecta: 1,
    explicacion:
      "'Picture' significa 'imagen' y puede referirse a fotografías, pinturas o representaciones visuales.",
  },
  {
    id: 477,
    pregunta: "¿Qué significa 'hard' en español?",
    respuestas: ["suave", "duro", "fuerte"],
    respuestaCorrecta: 1,
    explicacion:
      "'Hard' significa 'duro' y puede referirse a algo físicamente resistente o difícil.",
  },
  {
    id: 478,
    pregunta: "¿Qué significa 'front' en español?",
    respuestas: ["frontal", "delantero", "frente"],
    respuestaCorrecta: 2,
    explicacion:
      "'Front' significa 'frente' y puede referirse a una posición o parte frontal.",
  },
  {
    id: 479,
    pregunta: "¿Qué significa 'lie' en español?",
    respuestas: ["mentira", "recostarse", "falso"],
    respuestaCorrecta: 2,
    explicacion:
      "'Lie' significa 'mentira' pero también puede significar 'recostarse' dependiendo del contexto.",
  },
  {
    id: 480,
    pregunta: "¿Qué significa 'modern' en español?",
    respuestas: ["nuevo", "moderno", "actual"],
    respuestaCorrecta: 1,
    explicacion:
      "'Modern' significa 'moderno' y se refiere a algo relacionado con la actualidad.",
  },
  {
    id: 481,
    pregunta: "¿Qué significa 'dark' en español?",
    respuestas: ["oscuro", "sombrío", "tenebroso"],
    respuestaCorrecta: 1,
    explicacion:
      "'Dark' significa 'oscuro' y se refiere a la ausencia de luz o claridad.",
  },
  {
    id: 482,
    pregunta: "¿Qué significa 'surface' en español?",
    respuestas: ["superficie", "corteza", "cara"],
    respuestaCorrecta: 1,
    explicacion:
      "'Surface' significa 'superficie' y se refiere a la parte exterior o visible de algo.",
  },
  {
    id: 483,
    pregunta: "¿Qué significa 'rule' en español?",
    respuestas: ["norma", "regla", "autoridad"],
    respuestaCorrecta: 2,
    explicacion:
      "'Rule' significa 'regla' y se usa en contextos legales o de comportamiento.",
  },
  {
    id: 484,
    pregunta: "¿Qué significa 'regard' en español?",
    respuestas: ["respeto", "considerar", "valorar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Regard' significa 'considerar' y puede implicar respeto o valoración hacia algo o alguien.",
  },
  {
    id: 485,
    pregunta: "¿Qué significa 'dance' en español?",
    respuestas: ["bailar", "movimiento", "baile"],
    respuestaCorrecta: 1,
    explicacion:
      "'Dance' significa 'bailar' y se refiere a la acción de moverse rítmicamente al compás de la música.",
  },
  {
    id: 486,
    pregunta: "¿Qué significa 'peace' en español?",
    respuestas: ["armonía", "paz", "calma"],
    respuestaCorrecta: 1,
    explicacion:
      "'Peace' significa 'paz' y se refiere a la ausencia de conflicto o guerra.",
  },
  {
    id: 487,
    pregunta: "¿Qué significa 'observe' en español?",
    respuestas: ["mirar", "observar", "vigilar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Observe' significa 'observar' y se refiere a mirar con atención para analizar o notar algo.",
  },
  {
    id: 488,
    pregunta: "¿Qué significa 'future' en español?",
    respuestas: ["futuro", "porvenir", "destino"],
    respuestaCorrecta: 2,
    explicacion:
      "'Future' significa 'futuro' y se refiere al tiempo que está por venir.",
  },
  {
    id: 489,
    pregunta: "¿Qué significa 'wall' en español?",
    respuestas: ["pared", "muro", "valla"],
    respuestaCorrecta: 1,
    explicacion:
      "'Wall' significa 'pared' y se refiere a una estructura vertical que delimita un espacio.",
  },
  {
    id: 490,
    pregunta: "¿Qué significa 'farm' en español?",
    respuestas: ["granja", "campo", "finca"],
    respuestaCorrecta: 1,
    explicacion:
      "'Farm' significa 'granja' y se refiere a un lugar donde se cultivan alimentos o se crían animales.",
  },
  {
    id: 491,
    pregunta: "¿Qué significa 'claim' en español?",
    respuestas: ["afirmar", "reclamar", "declarar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Claim' significa 'reclamar' y se usa para expresar un derecho o una demanda sobre algo.",
  },
  {
    id: 492,
    pregunta: "¿Qué significa 'firm' en español?",
    respuestas: ["compañía", "firme", "sólido"],
    respuestaCorrecta: 1,
    explicacion:
      "'Firm' significa 'firme' y se refiere a algo sólido, estable o seguro.",
  },
  {
    id: 493,
    pregunta: "¿Qué significa 'operation' en español?",
    respuestas: ["operación", "procedimiento", "función"],
    respuestaCorrecta: 1,
    explicacion:
      "'Operation' significa 'operación' y se refiere a un proceso o actividad específica.",
  },
  {
    id: 494,
    pregunta: "¿Qué significa 'further' en español?",
    respuestas: ["lejos", "adicional", "posterior"],
    respuestaCorrecta: 2,
    explicacion:
      "'Further' significa 'posterior' y se refiere a algo que está más allá o en el futuro.",
  },
  {
    id: 495,
    pregunta: "¿Qué significa 'pressure' en español?",
    respuestas: ["presión", "tensión", "fuerza"],
    respuestaCorrecta: 1,
    explicacion:
      "'Pressure' significa 'presión' y se usa para describir la fuerza ejercida sobre una superficie.",
  },
  {
    id: 496,
    pregunta: "¿Qué significa 'property' en español?",
    respuestas: ["propiedad", "terreno", "posesión"],
    respuestaCorrecta: 1,
    explicacion:
      "'Property' significa 'propiedad' y se refiere a algo que pertenece a alguien.",
  },
  {
    id: 497,
    pregunta: "¿Qué significa 'morning' en español?",
    respuestas: ["mañana", "temprano", "amanecer"],
    respuestaCorrecta: 1,
    explicacion:
      "'Morning' significa 'mañana' y se refiere a la primera parte del día.",
  },
  {
    id: 498,
    pregunta: "¿Qué significa 'amount' en español?",
    respuestas: ["cantidad", "número", "total"],
    respuestaCorrecta: 1,
    explicacion:
      "'Amount' significa 'cantidad' y se usa para referirse a un total o suma de algo.",
  },
  {
    id: 499,
    pregunta: "¿Qué significa 'top' en español?",
    respuestas: ["parte superior", "pico", "cima"],
    respuestaCorrecta: 2,
    explicacion:
      "'Top' significa 'cima' y se refiere al punto más alto de algo.",
  },
  {
    id: 500,
    pregunta: "¿Qué significa 'outside' en español?",
    respuestas: ["fuera", "exterior", "afuera"],
    respuestaCorrecta: 2,
    explicacion:
      "'Outside' significa 'afuera' y se usa para describir algo fuera de un espacio cerrado.",
  },
  {
    id: 509,
    pregunta: "¿Qué significa 'accept' en español?",
    respuestas: ["aceptar", "admitir", "aprobar"],
    respuestaCorrecta: 0,
    explicacion:
      "'Accept' significa 'aceptar' y se refiere al acto de recibir algo voluntariamente o estar de acuerdo con algo.",
  },
  {
    id: 510,
    pregunta: "¿Qué significa 'judge' en español?",
    respuestas: ["juzgar", "juez", "criticar"],
    respuestaCorrecta: 1,
    explicacion:
      "'Judge' significa 'juez' en su forma de sustantivo, pero también se usa como verbo para 'juzgar'.",
  },
  {
    id: 511,
    pregunta: "¿Qué significa 'paint' en español?",
    respuestas: ["pintura", "pintar", "dibujo"],
    respuestaCorrecta: 1,
    explicacion:
      "'Paint' significa 'pintar' como verbo, pero también puede referirse a 'pintura' como sustantivo.",
  },
  {
    id: 512,
    pregunta: "¿Qué significa 'mile' en español?",
    respuestas: ["milla", "distancia", "kilómetro"],
    respuestaCorrecta: 0,
    explicacion:
      "'Mile' significa 'milla' y se refiere a una unidad de medida de longitud usada en países anglosajones.",
  },
];

export default palabrasDB1000;
