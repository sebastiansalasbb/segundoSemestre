const antropologiaDB = [
    {
        id: 1,
        pregunta: "¿Qué es la antropología filosófica?",
        respuestas: [
            "Es el estudio de las costumbres humanas y su evolución a lo largo del tiempo.",
            "Es el estudio del ser humano y su naturaleza desde una perspectiva filosófica.",
            "Es una rama de la biología que analiza el cuerpo humano."
        ],
        respuestaCorrecta: 1, // La posición 1 es la respuesta correcta
        explicacion: "La antropología filosófica se encarga de estudiar la esencia del ser humano desde una perspectiva filosófica, tratando preguntas sobre su naturaleza, su relación con el alma, el cuerpo y otros aspectos abstractos."
    },
    {
        id: 2,
        pregunta: "¿Qué define a un ser humano según la antropología filosófica?",
        respuestas: [
            "Es un ser compuesto solo por materia.",
            "Es una unidad de cuerpo y alma, con una dimensión racional y una material.",
            "Es un ser instintivo sin capacidad de reflexión racional."
        ],
        respuestaCorrecta: 1,
        explicacion: "La antropología filosófica ve al ser humano como una unidad de dos dimensiones: material (cuerpo) e inmaterial (alma), donde ambas trabajan en conjunto y no pueden entenderse separadamente."
    },
    {
        id: 3,
        pregunta: "¿Qué es el alma según la antropología filosófica?",
        respuestas: [
            "Es una parte material del cuerpo.",
            "Es el principio inmaterial que vivifica el cuerpo, considerada inmaterial e inmortal.",
            "Es una función biológica del cerebro."
        ],
        respuestaCorrecta: 1,
        explicacion: "El alma, en la antropología filosófica, es entendida como el principio inmaterial que da vida al cuerpo. No es parte del cuerpo material, sino que es inmaterial e inmortal, siendo esencial para la comprensión del ser humano."
    },
    {
        id: 4,
        pregunta: "¿Cuál es el rol de la voluntad en el ser humano?",
        respuestas: [
            "Es la capacidad de actuar instintivamente.",
            "Es la fuerza que permite alcanzar lo conocido por la inteligencia y orientarse hacia el bien.",
            "Es la habilidad de hacer lo que sea necesario para sobrevivir sin reflexión racional."
        ],
        respuestaCorrecta: 1,
        explicacion: "La voluntad es la facultad que permite al ser humano actuar de acuerdo con lo que conoce como el bien, superando el deseo inmediato, y es guiada por la inteligencia hacia decisiones más racionales."
    },
    {
        id: 5,
        pregunta: "¿Qué es la verdad según la filosofía?",
        respuestas: [
            "Es una opinión subjetiva de la realidad.",
            "Es una aseveración que describe adecuadamente la realidad, fundamentada en hechos.",
            "Es cualquier afirmación que una persona crea que es cierta."
        ],
        respuestaCorrecta: 1,
        explicacion: "En filosofía, la verdad es entendida como una aseveración que describe adecuadamente la realidad, basada en hechos (episteme) y no en meras opiniones o creencias (doxa)."
    },
    {
        id: 6,
        pregunta: "¿Qué es la dignidad según la antropología filosófica?",
        respuestas: [
            "Es un valor que se otorga según la cultura en la que vivimos.",
            "Es el valor inherente que posee el ser humano por tener una condición racional.",
            "Es una característica que varía según las acciones de la persona."
        ],
        respuestaCorrecta: 1,
        explicacion: "La dignidad en la antropología filosófica es un valor intrínseco del ser humano, derivado de su capacidad racional. Este valor otorga derechos y deberes, y no depende de factores externos como la cultura o las acciones."
    },
    {
        id: 7,
        pregunta: "¿Cuál es la diferencia entre 'episteme' y 'doxa'?",
        respuestas: [
            "'Episteme' se refiere a opiniones comunes, y 'doxa' a hechos comprobados.",
            "'Episteme' se refiere al conocimiento basado en hechos, y 'doxa' a opiniones o creencias no verificadas.",
            "'Episteme' y 'doxa' son sinónimos que describen el conocimiento humano."
        ],
        respuestaCorrecta: 1,
        explicacion: "'Episteme' es el término griego para el conocimiento verdadero, basado en hechos, mientras que 'doxa' se refiere a la opinión o creencia, que puede no estar fundamentada en la realidad."
    },
    {
        id: 8,
        pregunta: "¿Qué define el concepto de 'animal racional' en la antropología filosófica?",
        respuestas: [
            "Es la combinación de instintos y emociones que define al ser humano.",
            "Es la unidad del ser humano que integra su parte instintiva y su capacidad racional y libre.",
            "Es la descripción del ser humano como una criatura dominada por sus deseos."
        ],
        respuestaCorrecta: 1,
        explicacion: "El ser humano es descrito como un 'animal racional', ya que combina su dimensión instintiva y biológica con su capacidad racional y voluntaria. Esto lo distingue de otros seres vivos que solo actúan por instinto."
    },
    {
        id: 9,
        pregunta: "¿Qué es el bien real según la antropología filosófica?",
        respuestas: [
            "Es el beneficio inmediato que satisface deseos.",
            "Es el beneficio que se alcanza a largo plazo y que requiere esfuerzo y perseverancia.",
            "Es cualquier cosa que cause placer y felicidad momentánea."
        ],
        respuestaCorrecta: 1,
        explicacion: "El bien real es aquello que beneficia al ser humano a largo plazo, aunque no se vea el resultado de inmediato. Alcanzarlo suele requerir esfuerzo y paciencia, lo que lo diferencia del bien aparente, que ofrece satisfacción instantánea."
    },
    {
        id: 10,
        pregunta: "¿Cuál es el propósito de la inteligencia en el ser humano según la antropología filosófica?",
        respuestas: [
            "La inteligencia solo se usa para resolver problemas prácticos.",
            "Es la facultad que permite conocer la esencia de las cosas y descubrir la verdad.",
            "Es la habilidad de manipular los deseos para conseguir lo que uno quiere."
        ],
        respuestaCorrecta: 1,
        explicacion: "La inteligencia, desde esta perspectiva, es la facultad que permite al ser humano conocer más allá de lo superficial, entendiendo la esencia de las cosas y discerniendo la verdad. No se limita a resolver problemas prácticos, sino que tiene una función más profunda."
    },
    {
        id: 11,
        pregunta: "¿Qué define el sentido de vida según los conceptos presentados?",
        respuestas: [
            "Es el propósito o finalidad que da coherencia a nuestras acciones.",
            "Es la búsqueda de placer y satisfacción en cada momento.",
            "Es una idea abstracta que varía dependiendo de cada persona."
        ],
        respuestaCorrecta: 0,
        explicacion: "El sentido de vida se refiere al propósito o finalidad que orienta nuestras acciones hacia un objetivo coherente, permitiéndonos actuar con sentido y dirección en la vida. No es solo buscar placer momentáneo."
    },
    {
        id: 12,
        pregunta: "¿Qué caracteriza la felicidad según la antropología filosófica?",
        respuestas: [
            "Es la satisfacción de todos los deseos inmediatos.",
            "Es el máximo desarrollo de las capacidades humanas, llevando a la plenitud.",
            "Es un estado de ánimo pasajero que depende de las circunstancias externas."
        ],
        respuestaCorrecta: 1,
        explicacion: "La felicidad se entiende como la plenitud o el máximo desarrollo de las capacidades humanas, lo que permite alcanzar un estado de bienestar profundo y duradero. No es simplemente un estado de ánimo pasajero o la satisfacción de deseos inmediatos."
    },
    {
        id: 13,
        pregunta: "¿Cuál es la característica principal del conocimiento humano según la antropología filosófica?",
        respuestas: [
            "Es concreto y particular.",
            "Es abstracto, inmaterial y universal.",
            "Es limitado a lo que podemos observar."
        ],
        respuestaCorrecta: 1,
        explicacion: "El conocimiento humano es abstracto, inmaterial y universal, lo que significa que va más allá de lo particular y observable, permitiéndonos comprender conceptos universales como el bien, la verdad y la justicia."
    },
    {
        id: 14,
        pregunta: "¿Qué es la inteligencia según los conceptos presentados?",
        respuestas: [
            "Es la facultad humana que permite conocer la esencia de las cosas y la verdad.",
            "Es la habilidad de resolver problemas prácticos.",
            "Es la capacidad de recordar información compleja."
        ],
        respuestaCorrecta: 0,
        explicacion: "La inteligencia, según la antropología filosófica, es la facultad que nos permite ir más allá de lo concreto para entender la esencia de las cosas y descubrir la verdad, lo que nos diferencia de otros seres vivos."
    },
    {
        id: 15,
        pregunta: "¿Qué define la 'voluntad' según los conceptos del archivo?",
        respuestas: [
            "Es la habilidad de seguir nuestros instintos.",
            "Es la fuerza que se opone al deseo y nos permite alcanzar el bien.",
            "Es la capacidad de decidir sin reflexión."
        ],
        respuestaCorrecta: 1,
        explicacion: "La voluntad es la capacidad de superar el deseo inmediato, guiada por la inteligencia, para alcanzar el bien, incluso cuando esto requiere esfuerzo y paciencia."
    },
    {
        id: 16,
        pregunta: "¿Cuál es la función del cuerpo en relación al alma según la antropología filosófica?",
        respuestas: [
            "El cuerpo es solo un recipiente sin importancia.",
            "El cuerpo es la única vía para manifestar externamente nuestra interioridad.",
            "El cuerpo y el alma son completamente independientes uno del otro."
        ],
        respuestaCorrecta: 1,
        explicacion: "El cuerpo, en esta visión, tiene un valor especial ya que permite expresar externamente nuestra interioridad. Es a través del cuerpo que manifestamos nuestra alma, siendo inseparables en la existencia humana."
    },
    {
        id: 17,
        pregunta: "¿Qué significa 'animal racional' en la antropología filosófica?",
        respuestas: [
            "El ser humano es una mezcla de instintos irracionales y libre albedrío.",
            "El ser humano está compuesto de un mundo animal e irracional, y un mundo racional y libre.",
            "El ser humano es completamente racional, sin influencias instintivas."
        ],
        respuestaCorrecta: 1,
        explicacion: "El ser humano es entendido como una unidad de dos mundos: el animal e irracional (instintivo) y el racional y libre. Esta dualidad lo convierte en un 'animal racional'."
    },
    {
        id: 18,
        pregunta: "¿Qué es la plenitud según la antropología filosófica?",
        respuestas: [
            "Es el máximo desarrollo de las capacidades humanas, alcanzando la felicidad.",
            "Es la satisfacción de todos los deseos inmediatos.",
            "Es un estado pasajero de bienestar."
        ],
        respuestaCorrecta: 0,
        explicacion: "La plenitud es el estado en el que el ser humano ha alcanzado el máximo desarrollo de sus capacidades, lo que lleva a una felicidad duradera y no a una mera satisfacción temporal."
    },
    {
        id: 19,
        pregunta: "¿Cuál es la diferencia entre el bien real y el bien aparente?",
        respuestas: [
            "El bien real es inmediato y se diluye rápidamente, mientras que el bien aparente perdura.",
            "El bien real es un beneficio a largo plazo que requiere esfuerzo, mientras que el bien aparente da resultados inmediatos pero de corto alcance.",
            "No hay diferencia entre ambos, son términos sinónimos."
        ],
        respuestaCorrecta: 1,
        explicacion: "El bien real es aquel que, aunque requiere esfuerzo y paciencia, tiene un impacto duradero y profundo. Por el contrario, el bien aparente ofrece una gratificación inmediata, pero sus efectos suelen ser efímeros."
    },
    {
        id: 20,
        pregunta: "¿Qué significa que el alma es 'inmaterial'?",
        respuestas: [
            "Que no tiene materia y existe de manera independiente del cuerpo.",
            "Que es una parte del cuerpo físico que no puede tocarse.",
            "Que es una energía que desaparece cuando el cuerpo muere."
        ],
        respuestaCorrecta: 0,
        explicacion: "En la antropología filosófica, el alma se considera inmaterial porque no está compuesta de materia física. Aunque no se pueda ver ni tocar, se reconoce como el principio que da vida al cuerpo y no depende de la materia para existir."
    },
    {
        id: 21,
        pregunta: "¿Qué caracteriza a la voluntad humana?",
        respuestas: [
            "Es la capacidad de desear lo que es inmediatamente placentero.",
            "Es la facultad de elegir el bien, incluso cuando implica esfuerzo.",
            "Es una fuerza instintiva que nos guía automáticamente hacia el placer."
        ],
        respuestaCorrecta: 1,
        explicacion: "La voluntad, según la antropología filosófica, es la capacidad de desear y elegir el bien, pero no cualquier bien, sino el que es realmente beneficioso, lo cual puede requerir esfuerzo y discernimiento."
    },
    {
        id: 22,
        pregunta: "¿Qué es la felicidad según Aristóteles?",
        respuestas: [
            "Es un estado de ánimo pasajero vinculado a momentos de placer.",
            "Es la plenitud que se alcanza al desarrollar al máximo las capacidades humanas.",
            "Es la satisfacción de necesidades materiales y sociales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Para Aristóteles, la felicidad (eudaimonía) es el resultado de una vida plena, donde las capacidades humanas se desarrollan al máximo. No es un estado momentáneo, sino el fruto de una vida guiada por la razón y orientada al bien."
    },
    {
        id: 23,
        pregunta: "¿Cómo define Aristóteles el alma?",
        respuestas: [
            "Como un principio inmaterial que vivifica al cuerpo.",
            "Como una energía que se disipa después de la muerte.",
            "Como una parte física y tangible del cuerpo."
        ],
        respuestaCorrecta: 0,
        explicacion: "Aristóteles define el alma como un principio inmaterial que da vida al cuerpo. Es lo que permite el movimiento y la vida en los seres vivos, y no se reduce a una entidad física."
    },
    {
        id: 24,
        pregunta: "¿Qué diferencia a la inteligencia humana de la animal?",
        respuestas: [
            "La inteligencia humana es instintiva, mientras que la animal es reflexiva.",
            "La inteligencia humana es reflexiva y busca la verdad, mientras que la animal es instintiva.",
            "Ambas son iguales, ya que están orientadas a la supervivencia."
        ],
        respuestaCorrecta: 1,
        explicacion: "La inteligencia humana se distingue porque es capaz de reflexionar y buscar la verdad más allá de la simple supervivencia. En cambio, la inteligencia animal es instintiva y está orientada a acciones inmediatas para sobrevivir."
    },
    {
        id: 25,
        pregunta: "¿Qué es un bien real según la antropología filosófica?",
        respuestas: [
            "Es aquello que satisface deseos inmediatos y efímeros.",
            "Es el bien que beneficia al ser humano a largo plazo, aunque implique esfuerzo.",
            "Es cualquier cosa que cause placer y disfrute inmediato."
        ],
        respuestaCorrecta: 1,
        explicacion: "Un bien real es aquel que trae un beneficio duradero y pleno, aunque alcanzar ese bien requiera esfuerzo. Se diferencia del bien aparente, que proporciona satisfacción inmediata pero no necesariamente duradera."
    },
    {
        id: 26,
        pregunta: "¿Qué significa 'unidad del ser humano' en antropología filosófica?",
        respuestas: [
            "Que el ser humano es solo cuerpo físico.",
            "Que el ser humano es una unidad inseparable de cuerpo y alma.",
            "Que el ser humano es solo mente, y el cuerpo es un recipiente pasajero."
        ],
        respuestaCorrecta: 1,
        explicacion: "La antropología filosófica sostiene que el ser humano es una unidad de cuerpo y alma. Ambas dimensiones, material y espiritual, no pueden entenderse separadamente y están presentes en todas nuestras actividades."
    },
    {
        id: 27,
        pregunta: "¿Qué es la inteligencia según la antropología filosófica?",
        respuestas: [
            "Es la capacidad humana de adaptarse instintivamente a diferentes situaciones.",
            "Es la facultad humana que permite conocer la verdad a través de conceptos universales.",
            "Es un proceso inconsciente que compartimos con los animales."
        ],
        respuestaCorrecta: 1,
        explicacion: "La inteligencia humana es la capacidad de conocer la verdad, de abstraer conceptos universales y entender la esencia de las cosas. Esto la distingue de la inteligencia instintiva de los animales, que está orientada solo a la supervivencia."
    },
    {
        id: 28,
        pregunta: "¿Qué entendemos por 'verdad' según la filosofía clásica?",
        respuestas: [
            "Una opinión que cambia según la percepción de cada persona.",
            "Una aseveración que describe adecuadamente la realidad.",
            "Una idea subjetiva que depende de nuestras experiencias personales."
        ],
        respuestaCorrecta: 1,
        explicacion: "La verdad, en filosofía clásica, es una afirmación que describe adecuadamente la realidad. Es objetiva y está basada en hechos, distinguiéndose de las opiniones subjetivas o personales."
    },
    {
        id: 29,
        pregunta: "¿Cómo podemos entender el sentido de la vida desde la antropología filosófica?",
        respuestas: [
            "Es el objetivo final que da coherencia y dirección a nuestras acciones.",
            "Es una búsqueda constante de placer y satisfacción.",
            "Es una meta abstracta que varía completamente de una persona a otra."
        ],
        respuestaCorrecta: 0,
        explicacion: "El sentido de la vida, según la antropología filosófica, es el objetivo último que le da coherencia y propósito a nuestras acciones. Este propósito suele estar orientado hacia la realización personal y el desarrollo de nuestras capacidades."
    },
    {
        id: 30,
        pregunta: "¿Qué relación tiene el cuerpo con el alma en la antropología filosófica?",
        respuestas: [
            "El cuerpo es solo un instrumento y no tiene importancia para el alma.",
            "El cuerpo y el alma son una unidad inseparable donde el alma da vida al cuerpo.",
            "El alma y el cuerpo son completamente independientes uno del otro."
        ],
        respuestaCorrecta: 1,
        explicacion: "La antropología filosófica considera que el cuerpo y el alma forman una unidad inseparable. El cuerpo permite manifestar la vida del alma, y ambos constituyen la totalidad del ser humano."
    },
    {
        id: 31,
        pregunta: "¿Cuál es el rol de la ética en la vida humana?",
        respuestas: [
            "Orientar nuestras acciones hacia lo que nos da placer.",
            "Guiar nuestras acciones hacia el bien, basándose en principios racionales.",
            "Ayudar a justificar cualquier comportamiento, siempre que nos beneficie."
        ],
        respuestaCorrecta: 1,
        explicacion: "La ética es una disciplina que busca orientar las acciones humanas hacia el bien. Se basa en principios racionales y busca reflexionar sobre la moralidad de nuestras acciones para vivir conforme al bien común."
    },
    {
        id: 32,
        pregunta: "¿Qué significa el concepto de 'animal racional'?",
        respuestas: [
            "Es un ser que solo actúa instintivamente.",
            "Es un ser que combina instinto, razón y voluntad libre.",
            "Es un ser que se guía solo por el deseo y el placer."
        ],
        respuestaCorrecta: 1,
        explicacion: "El ser humano es descrito como un 'animal racional' porque, además de tener instintos y necesidades físicas, posee la capacidad de razonar y tomar decisiones libres, guiadas por su voluntad."
    },
    {
        id: 33,
        pregunta: "¿Qué es la dignidad humana según la antropología filosófica?",
        respuestas: [
            "Es un valor otorgado por la sociedad a los seres humanos.",
            "Es un valor intrínseco que cada ser humano posee por su naturaleza racional.",
            "Es una cualidad que solo algunos seres humanos pueden desarrollar."
        ],
        respuestaCorrecta: 1,
        explicacion: "La dignidad humana es un valor intrínseco, es decir, pertenece a cada ser humano simplemente por ser racional y libre. No depende de logros o características externas."
    },
    {
        id: 34,
        pregunta: "¿Qué significa que el alma humana es inmortal?",
        respuestas: [
            "Que el alma deja de existir cuando el cuerpo muere.",
            "Que el alma no muere junto con el cuerpo y trasciende la muerte física.",
            "Que el alma se disuelve en la naturaleza al morir."
        ],
        respuestaCorrecta: 1,
        explicacion: "En la antropología filosófica, el alma es inmortal porque, al ser inmaterial, no se descompone con la muerte del cuerpo. Sigue existiendo después de la muerte física."
    },
    {
        id: 35,
        pregunta: "¿Qué implica el concepto de 'plenitud' en la antropología filosófica?",
        respuestas: [
            "Es el desarrollo completo de las capacidades humanas, logrando la felicidad.",
            "Es la acumulación de bienes materiales y logros personales.",
            "Es un estado temporal de satisfacción física y emocional."
        ],
        respuestaCorrecta: 0,
        explicacion: "La plenitud en la antropología filosófica implica el máximo desarrollo de las capacidades humanas, especialmente la inteligencia y la voluntad, lo cual lleva a la felicidad verdadera y duradera."
    },
    {
        id: 36,
        pregunta: "¿Qué es el conocimiento abstracto según la antropología filosófica?",
        respuestas: [
            "Es el conocimiento basado en cosas concretas y observables.",
            "Es el conocimiento inmaterial que capta la esencia y lo universal de las cosas.",
            "Es el conocimiento adquirido por experiencia directa y práctica."
        ],
        respuestaCorrecta: 1,
        explicacion: "El conocimiento abstracto es la capacidad de captar lo esencial y universal de las cosas, más allá de lo que percibimos por los sentidos. Es una característica única del conocimiento humano."
    },
    {
        id: 37,
        pregunta: "¿Por qué el cuerpo humano tiene una dignidad especial?",
        respuestas: [
            "Porque es la única vía por la que se manifiesta el mundo interior de una persona.",
            "Porque es lo más importante en la vida humana.",
            "Porque es perfecto y no cambia con el tiempo."
        ],
        respuestaCorrecta: 0,
        explicacion: "El cuerpo tiene una dignidad especial porque es el medio a través del cual se expresa la interioridad de la persona, su pensamiento, lenguaje y espiritualidad. Esto le otorga un valor único e irrepetible."
    },
    {
        id: 38,
        pregunta: "¿Cómo distingue la antropología filosófica entre el 'bien real' y el 'bien aparente'?",
        respuestas: [
            "El bien real es un placer momentáneo, mientras que el bien aparente dura más.",
            "El bien real requiere esfuerzo y tiene un impacto duradero, mientras que el bien aparente ofrece satisfacción inmediata pero efímera.",
            "No hay distinción entre ambos términos."
        ],
        respuestaCorrecta: 1,
        explicacion: "El bien real es aquel que beneficia al ser humano a largo plazo y requiere esfuerzo para alcanzarlo. El bien aparente proporciona satisfacción inmediata pero sus efectos suelen ser temporales y, a menudo, superficiales."
    },
    {
        id: 39,
        pregunta: "¿Qué papel juega el sentido de la vida según la antropología filosófica?",
        respuestas: [
            "Es un objetivo que orienta y da coherencia a nuestras acciones.",
            "Es una búsqueda constante de placer y satisfacción inmediata.",
            "Es un concepto abstracto sin aplicación práctica en la vida."
        ],
        respuestaCorrecta: 0,
        explicacion: "El sentido de la vida es el propósito último que orienta nuestras decisiones y acciones, dándoles coherencia y dirección. Nos permite vivir de manera intencionada, buscando el bien y la plenitud."
    },
    {
        id: 40,
        pregunta: "¿Por qué el conocimiento humano es universal según la antropología filosófica?",
        respuestas: [
            "Porque el conocimiento humano es limitado a lo que percibimos.",
            "Porque el conocimiento humano abarca lo particular y lo universal al abstraer la esencia de las cosas.",
            "Porque el conocimiento humano no puede trascender lo inmediato."
        ],
        respuestaCorrecta: 1,
        explicacion: "El conocimiento humano es universal porque, al abstraer lo esencial de las cosas, va más allá de lo particular y puede aplicarse a cualquier caso que se nos presente, permitiendo reconocer lo esencial en distintos contextos."
    },
    {
        id: 41,
        pregunta: "¿Qué rol juega la admiración en el desarrollo del pensamiento filosófico?",
        respuestas: [
            "Es un sentimiento que impulsa la curiosidad por conocer y comprender la realidad.",
            "Es una emoción que limita nuestra capacidad crítica.",
            "Es una reacción instintiva sin relación con el razonamiento."
        ],
        respuestaCorrecta: 0,
        explicacion: "La admiración es un impulso fundamental para el pensamiento filosófico. Es el asombro ante la realidad lo que mueve al ser humano a preguntar, conocer y profundizar en el sentido de las cosas."
    },
    {
        id: 42,
        pregunta: "Según la antropología filosófica, ¿qué es lo que nos distingue de los animales?",
        respuestas: [
            "El hecho de que también tengamos instintos.",
            "Nuestra capacidad de razonamiento, libre albedrío y orientación hacia la verdad.",
            "Nuestra capacidad de adaptarnos al medio ambiente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Lo que nos distingue de los animales es nuestra capacidad racional y nuestra voluntad libre. Mientras los animales actúan por instinto, los humanos buscan la verdad y toman decisiones basadas en la razón y la reflexión."
    },
    {
        id: 43,
        pregunta: "¿Qué es la 'inteligencia inconsciente' según la antropología filosófica?",
        respuestas: [
            "Es la inteligencia humana cuando actuamos de forma instintiva.",
            "Es el tipo de inteligencia instintiva que poseen los animales, orientada solo a la supervivencia.",
            "Es una facultad humana que nos permite actuar sin darnos cuenta de nuestras acciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "La 'inteligencia inconsciente' es la inteligencia que poseen los animales, que les permite adaptarse y sobrevivir sin reflexión consciente. Está basada en instintos, no en el razonamiento o la búsqueda de la verdad."
    },
    {
        id: 44,
        pregunta: "¿Qué es la verdad según la filosofía aristotélica?",
        respuestas: [
            "Es una opinión que cambia según el contexto.",
            "Es una aseveración que describe adecuadamente la realidad tal como es.",
            "Es una creencia subjetiva influida por factores emocionales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Para Aristóteles, la verdad es una afirmación que describe adecuadamente la realidad. Es objetiva y no cambia según opiniones o emociones, ya que está basada en hechos y razonamientos lógicos."
    },
    {
        id: 45,
        pregunta: "¿Cuál es el propósito de la voluntad humana en la búsqueda del bien?",
        respuestas: [
            "Obtener placer inmediato sin reflexión.",
            "Elegir y desear lo que realmente es bueno, incluso cuando implica esfuerzo.",
            "Actuar sin tener en cuenta las consecuencias de nuestras decisiones."
        ],
        respuestaCorrecta: 1,
        explicacion: "La voluntad humana tiene como finalidad elegir y desear el bien real, no solo el placer inmediato. Esto implica discernimiento y esfuerzo para buscar lo que es verdaderamente bueno para uno mismo y los demás."
    },
    {
        id: 46,
        pregunta: "¿Qué implica el concepto de 'ser sintiente y pensante' en la antropología filosófica?",
        respuestas: [
            "Que el ser humano solo actúa por sus instintos y emociones.",
            "Que el ser humano tiene tanto sensaciones y deseos como la capacidad de reflexionar racionalmente sobre ellos.",
            "Que el ser humano actúa únicamente desde la razón, sin influencias emocionales."
        ],
        respuestaCorrecta: 1,
        explicacion: "El ser humano es descrito como 'sintiente y pensante' porque experimenta sensaciones y deseos, pero también posee la capacidad de reflexionar racionalmente sobre ellos, integrando su cuerpo y su razón en sus acciones."
    },
    {
        id: 47,
        pregunta: "¿Qué significa 'conocer la esencia de las cosas' según la antropología filosófica?",
        respuestas: [
            "Conocer solo sus características físicas.",
            "Entender lo que hace que algo sea lo que es, más allá de sus apariencias externas.",
            "Solo tener una idea superficial sobre algo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Conocer la esencia de las cosas significa entender lo que las define en su naturaleza profunda, más allá de las características superficiales. Es un conocimiento más abstracto que trasciende lo meramente físico."
    },
    {
        id: 48,
        pregunta: "¿Cómo se define la 'felicidad' en el pensamiento aristotélico?",
        respuestas: [
            "Como la satisfacción de placeres inmediatos.",
            "Como la plenitud y autorrealización que se logra desarrollando al máximo las capacidades humanas.",
            "Como un estado pasajero influido por las circunstancias externas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Para Aristóteles, la felicidad es la plenitud que resulta del desarrollo máximo de las capacidades humanas. No es un estado pasajero, sino el fruto de vivir conforme a la razón y alcanzar el bien a lo largo de la vida."
    },
    {
        id: 49,
        pregunta: "¿Qué es la 'abstracción' en el proceso del conocimiento humano?",
        respuestas: [
            "Es la capacidad de enfocarse solo en los detalles concretos.",
            "Es la facultad de separar mentalmente las cualidades esenciales de algo y comprender su naturaleza universal.",
            "Es el acto de recordar información específica sobre un objeto."
        ],
        respuestaCorrecta: 1,
        explicacion: "La abstracción es la capacidad del ser humano de separar las características esenciales de algo, dejando de lado lo accidental, para entender su naturaleza universal. Este proceso es central en el conocimiento intelectual."
    },
    {
        id: 50,
        pregunta: "¿Qué significa que el conocimiento humano es 'inmaterial'?",
        respuestas: [
            "Que el conocimiento es algo que podemos tocar y sentir.",
            "Que no depende de lo físico, sino que es abstracto y universal.",
            "Que el conocimiento solo existe en la mente, no en la realidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "El conocimiento humano es inmaterial porque no está limitado a lo que percibimos físicamente. Nos permite comprender conceptos universales y abstractos, como el amor, la justicia o la verdad, que no tienen una forma física."
    },
    {
        id: 51,
        pregunta: "¿Por qué es importante la reflexión sobre la naturaleza humana?",
        respuestas: [
            "Porque nos ayuda a conocer nuestras habilidades físicas.",
            "Porque nos permite comprender quiénes somos y cómo orientar nuestras vidas hacia el bien y la felicidad.",
            "Porque nos da las herramientas para manipular a los demás."
        ],
        respuestaCorrecta: 1,
        explicacion: "La reflexión sobre la naturaleza humana es crucial porque nos ayuda a conocernos mejor y a entender cómo vivir de manera coherente, orientándonos hacia el bien y la felicidad. Este conocimiento nos da dirección y propósito."
    },
    {
        id: 52,
        pregunta: "Según Aristóteles, ¿qué es lo que guía al ser humano hacia la felicidad?",
        respuestas: [
            "La búsqueda de placer inmediato y constante.",
            "El desarrollo de sus capacidades racionales y su orientación hacia el bien.",
            "El evitar el dolor y las dificultades de la vida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Para Aristóteles, la felicidad se alcanza desarrollando al máximo las capacidades humanas, especialmente las racionales, y orientando nuestras acciones hacia el bien. No se trata solo de evitar el dolor o buscar placer inmediato."
    },
    {
        id: 53,
        pregunta: "¿Qué implica la idea de 'bien común' en la ética?",
        respuestas: [
            "Que el bienestar de una persona siempre debe estar por encima de los demás.",
            "Que debemos orientar nuestras acciones hacia el bienestar de toda la comunidad, no solo el propio.",
            "Que debemos enfocarnos solo en nuestras propias necesidades."
        ],
        respuestaCorrecta: 1,
        explicacion: "El bien común implica que nuestras acciones deben contribuir al bienestar de toda la sociedad y no solo a nuestro beneficio personal. Es un principio ético clave para construir una comunidad justa y armoniosa."
    },
    {
        id: 54,
        pregunta: "¿Cuál es el fin último de la vida humana según la antropología filosófica?",
        respuestas: [
            "Acumular la mayor cantidad de riqueza posible.",
            "Alcanzar la felicidad a través del desarrollo pleno de nuestras capacidades humanas.",
            "Evitar todo sufrimiento y vivir en comodidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "El fin último de la vida humana, según la antropología filosófica, es alcanzar la felicidad, lo cual se logra desarrollando al máximo nuestras capacidades, como la razón y la voluntad, y orientando nuestra vida hacia el bien."
    },
    {
        id: 55,
        pregunta: "¿Cómo se distingue el conocimiento verdadero de una simple opinión?",
        respuestas: [
            "El conocimiento verdadero se basa en hechos y razonamientos sólidos, mientras que la opinión puede no estar fundamentada.",
            "No hay diferencia entre conocimiento y opinión.",
            "La opinión es siempre más válida que el conocimiento."
        ],
        respuestaCorrecta: 0,
        explicacion: "El conocimiento verdadero se basa en hechos verificables y argumentos sólidos, mientras que una opinión puede estar influida por emociones o experiencias personales, sin necesariamente estar bien fundamentada."
    },
    {
        id: 56,
        pregunta: "¿Por qué la voluntad necesita estar guiada por la inteligencia?",
        respuestas: [
            "Porque la inteligencia nos ayuda a identificar lo que es realmente bueno y no solo lo que parece ser bueno.",
            "Porque la voluntad actúa automáticamente sin la necesidad de la inteligencia.",
            "Porque la voluntad solo se ocupa de los deseos físicos."
        ],
        respuestaCorrecta: 0,
        explicacion: "La voluntad debe ser guiada por la inteligencia para discernir entre el bien real y el bien aparente. Mientras que la voluntad busca el bien, la inteligencia nos ayuda a identificar cuál es realmente beneficioso y no solo placentero."
    },
    {
        id: 57,
        pregunta: "¿Qué significa que el ser humano es una 'unidad de cuerpo y alma'?",
        respuestas: [
            "Que el cuerpo y el alma son entidades completamente separadas.",
            "Que el cuerpo y el alma están integrados y funcionan como una unidad inseparable en el ser humano.",
            "Que el alma es lo único importante y el cuerpo no tiene valor."
        ],
        respuestaCorrecta: 1,
        explicacion: "El ser humano es una unidad de cuerpo y alma, lo que significa que ambas dimensiones, la material (cuerpo) y la inmaterial (alma), están inseparablemente unidas y son esenciales para la existencia humana."
    },
    {
        id: 58,
        pregunta: "¿Qué caracteriza al alma humana según Aristóteles?",
        respuestas: [
            "Es material y desaparece con la muerte del cuerpo.",
            "Es inmaterial, inmortal y es el principio que da vida al cuerpo.",
            "Es una energía física que se transforma después de la muerte."
        ],
        respuestaCorrecta: 1,
        explicacion: "Aristóteles define el alma humana como inmaterial e inmortal, siendo el principio que da vida al cuerpo. Aunque el cuerpo muera, el alma sigue existiendo, ya que no depende de la materia para su existencia."
    },
    {
        id: 59,
        pregunta: "¿Qué es la felicidad para la antropología filosófica?",
        respuestas: [
            "Es un estado de satisfacción pasajero y dependiente de circunstancias externas.",
            "Es la plenitud alcanzada mediante el desarrollo máximo de las capacidades humanas.",
            "Es la ausencia de dificultades y problemas."
        ],
        respuestaCorrecta: 1,
        explicacion: "La felicidad, en la antropología filosófica, es la plenitud que se alcanza cuando el ser humano desarrolla al máximo sus capacidades, especialmente la inteligencia y la voluntad, y vive en armonía con el bien."
    },
    {
        id: 60,
        pregunta: "¿Cuál es la importancia del cuerpo humano según la antropología filosófica?",
        respuestas: [
            "El cuerpo es solo un vehículo temporal para el alma.",
            "El cuerpo es la vía a través de la cual expresamos nuestra interioridad.",
            "El cuerpo no tiene relevancia en el desarrollo espiritual del ser humano."
        ],
        respuestaCorrecta: 1,
        explicacion: "El cuerpo humano es fundamental en la antropología filosófica porque es el medio a través del cual se manifiesta la interioridad de la persona: su pensamiento, emociones y espíritu. Cuerpo y alma forman una unidad inseparable."
    },
    {
        id: 61,
        pregunta: "¿Cómo define Aristóteles el acto de conocer?",
        respuestas: [
            "Es un proceso limitado a la percepción sensorial.",
            "Es la capacidad de abstraer la esencia de las cosas más allá de los sentidos.",
            "Es la experiencia directa de los objetos físicos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Para Aristóteles, conocer no se limita a los sentidos, sino que implica abstraer la esencia de las cosas. La inteligencia humana puede ir más allá de lo físico y captar lo universal e inmaterial."
    },
    {
        id: 62,
        pregunta: "¿Qué es el bien aparente según la antropología filosófica?",
        respuestas: [
            "Es aquello que parece bueno pero que, en realidad, no lo es.",
            "Es el bien que se alcanza mediante el esfuerzo.",
            "Es el bien que siempre beneficia a la comunidad."
        ],
        respuestaCorrecta: 0,
        explicacion: "El bien aparente es aquello que, en un primer momento, parece ser bueno, pero al examinarlo más de cerca, no es verdaderamente beneficioso. Muchas veces ofrece placer inmediato, pero no tiene un valor real a largo plazo."
    },
    {
        id: 63,
        pregunta: "¿Por qué es importante la búsqueda de la verdad en la vida humana?",
        respuestas: [
            "Porque nos ayuda a manipular mejor la realidad.",
            "Porque la verdad nos orienta hacia una vida plena y coherente.",
            "Porque sin ella podemos obtener satisfacción momentánea."
        ],
        respuestaCorrecta: 1,
        explicacion: "La búsqueda de la verdad es esencial porque permite vivir una vida coherente, orientada hacia la plenitud y el desarrollo personal. Nos ayuda a entender el mundo tal como es y a actuar en consecuencia."
    },
    {
        id: 64,
        pregunta: "¿Qué distingue al conocimiento humano del conocimiento animal?",
        respuestas: [
            "Los animales no poseen ningún tipo de inteligencia.",
            "El conocimiento humano es racional y busca la verdad, mientras que el conocimiento animal es instintivo.",
            "El conocimiento animal es más avanzado que el humano."
        ],
        respuestaCorrecta: 1,
        explicacion: "El conocimiento humano es reflexivo y busca la verdad, mientras que los animales actúan por instinto, sin capacidad para abstraer o reflexionar sobre la esencia de las cosas."
    },
    {
        id: 65,
        pregunta: "¿Cómo contribuye la voluntad a la plenitud del ser humano?",
        respuestas: [
            "Al permitir que sigamos nuestros impulsos sin restricciones.",
            "Al guiarnos hacia el bien real, incluso cuando requiere esfuerzo y sacrificio.",
            "Al permitir que evitemos las dificultades en nuestra vida diaria."
        ],
        respuestaCorrecta: 1,
        explicacion: "La voluntad es esencial para la plenitud, ya que nos permite elegir y perseguir el bien real, superando los deseos inmediatos y guiándonos hacia decisiones que promueven nuestro bienestar a largo plazo."
    },
    {
        id: 66,
        pregunta: "¿Cuál es el papel del alma en el ser humano según Aristóteles?",
        respuestas: [
            "El alma es simplemente una energía física.",
            "El alma es el principio inmaterial que vivifica al cuerpo y permite la vida.",
            "El alma es una parte del cuerpo que desaparece con la muerte."
        ],
        respuestaCorrecta: 1,
        explicacion: "Para Aristóteles, el alma es el principio inmaterial que da vida al cuerpo. No es una parte física, sino el motor de la vida que, una vez separada del cuerpo, sigue existiendo."
    },
    {
        id: 67,
        pregunta: "¿Por qué la plenitud es un concepto clave en la antropología filosófica?",
        respuestas: [
            "Porque se refiere a la satisfacción inmediata de los deseos.",
            "Porque describe el desarrollo completo de todas las capacidades humanas, llevando a la felicidad.",
            "Porque se refiere solo a la acumulación de logros materiales."
        ],
        respuestaCorrecta: 1,
        explicacion: "La plenitud se entiende como el desarrollo máximo de las capacidades humanas, tanto racionales como físicas, lo que conduce a la verdadera felicidad. No se trata de satisfacer deseos momentáneos, sino de alcanzar un bienestar duradero."
    },
    {
        id: 68,
        pregunta: "¿Qué es la ética en el contexto de la antropología filosófica?",
        respuestas: [
            "Un conjunto de reglas que cambia según la cultura.",
            "La ciencia que estudia las acciones humanas para orientarlas hacia el bien y la felicidad.",
            "Un sistema que promueve la búsqueda de placer por encima de todo."
        ],
        respuestaCorrecta: 1,
        explicacion: "La ética es la ciencia que estudia las acciones humanas, orientándolas hacia el bien y la felicidad. Reflexiona sobre lo que es correcto hacer en cada situación para lograr una vida plena y coherente."
    },
    {
        id: 69,
        pregunta: "¿Qué papel juegan los sentidos en el conocimiento humano?",
        respuestas: [
            "Son irrelevantes para el conocimiento verdadero.",
            "Son el punto de partida para conocer la realidad, aunque la inteligencia va más allá de ellos.",
            "Permiten acceder directamente a la verdad sin necesidad de reflexión."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los sentidos son importantes como punto de partida para conocer la realidad, pero la inteligencia humana va más allá de ellos, permitiendo abstraer lo esencial y llegar a un conocimiento más profundo y universal."
    },
    {
        id: 70,
        pregunta: "¿Qué diferencia hay entre el bien real y el bien aparente?",
        respuestas: [
            "El bien real es un beneficio inmediato, mientras que el bien aparente se logra a largo plazo.",
            "El bien real es lo que realmente beneficia al ser humano, mientras que el bien aparente solo ofrece satisfacción momentánea.",
            "El bien aparente es siempre superior al bien real."
        ],
        respuestaCorrecta: 1,
        explicacion: "El bien real es aquello que beneficia al ser humano a largo plazo, incluso si requiere esfuerzo. En cambio, el bien aparente proporciona satisfacción inmediata, pero no tiene un impacto duradero y puede ser engañoso."
    },
    {
        id: 71,
        pregunta: "¿Qué significa que el conocimiento humano es 'universal'?",
        respuestas: [
            "Que se basa únicamente en experiencias particulares.",
            "Que abarca verdades abstractas y aplicables a todas las situaciones.",
            "Que solo es válido para circunstancias específicas."
        ],
        respuestaCorrecta: 1,
        explicacion: "El conocimiento humano es universal porque es capaz de abstraer lo esencial y aplicarlo a diversas situaciones, más allá de lo concreto y particular que captan los sentidos."
    },
    {
        id: 72,
        pregunta: "Según la antropología filosófica, ¿qué relación existe entre el cuerpo y el alma?",
        respuestas: [
            "El cuerpo y el alma están separados y no se influyen entre sí.",
            "El cuerpo y el alma forman una unidad inseparable que define al ser humano.",
            "El alma es una parte física del cuerpo."
        ],
        respuestaCorrecta: 1,
        explicacion: "La antropología filosófica considera al ser humano como una unidad inseparable de cuerpo y alma. Ambas dimensiones son necesarias para comprender plenamente la naturaleza humana."
    },
    {
        id: 73,
        pregunta: "¿Qué es el conocimiento abstracto según la filosofía aristotélica?",
        respuestas: [
            "Es el conocimiento basado en lo que percibimos sensorialmente.",
            "Es el conocimiento que separa las cualidades esenciales de las accidentales, permitiendo captar la esencia de las cosas.",
            "Es un conocimiento limitado a la experiencia directa de la realidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "El conocimiento abstracto, según Aristóteles, es la capacidad de separar lo esencial de lo accidental en las cosas, lo que nos permite comprender su naturaleza profunda y universal, más allá de lo que percibimos con los sentidos."
    },
    {
        id: 74,
        pregunta: "¿Qué es la dignidad humana según la antropología filosófica?",
        respuestas: [
            "Es un valor otorgado según los logros de una persona.",
            "Es un valor inherente a todos los seres humanos por su condición racional.",
            "Es una cualidad que varía dependiendo de las acciones de una persona."
        ],
        respuestaCorrecta: 1,
        explicacion: "La dignidad humana es un valor intrínseco que todos los seres humanos poseen simplemente por ser racionales y libres. No depende de sus logros, cultura o acciones, sino de su naturaleza como personas."
    },
    {
        id: 75,
        pregunta: "¿Qué diferencia existe entre el conocimiento humano y el de los animales?",
        respuestas: [
            "El conocimiento humano es instintivo, mientras que el animal es racional.",
            "El conocimiento humano es abstracto y reflexivo, mientras que el de los animales es instintivo y práctico.",
            "No existe diferencia, ambos son iguales en naturaleza."
        ],
        respuestaCorrecta: 1,
        explicacion: "El conocimiento humano es reflexivo y abstracto, lo que permite captar la esencia de las cosas y orientarse hacia la verdad. El conocimiento animal, en cambio, es instintivo y orientado a la supervivencia inmediata."
    },
    {
        id: 76,
        pregunta: "¿Qué es la felicidad según la filosofía aristotélica?",
        respuestas: [
            "Es la satisfacción de deseos inmediatos.",
            "Es la plenitud lograda mediante el desarrollo máximo de las capacidades humanas.",
            "Es un estado emocional pasajero que depende de circunstancias externas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Para Aristóteles, la felicidad es la plenitud alcanzada cuando el ser humano desarrolla al máximo sus capacidades racionales y vive conforme al bien. No es un estado temporal ni depende solo de placeres inmediatos."
    },
    {
        id: 77,
        pregunta: "¿Cómo contribuye la inteligencia a la vida humana?",
        respuestas: [
            "Permite conocer la esencia de las cosas y discernir la verdad.",
            "Ayuda solo a resolver problemas inmediatos.",
            "Es una facultad que se usa solo en situaciones extremas."
        ],
        respuestaCorrecta: 0,
        explicacion: "La inteligencia humana permite conocer la esencia de las cosas, lo que va más allá de resolver problemas prácticos. Su función es descubrir la verdad y guiar nuestras acciones hacia el bien."
    },
    {
        id: 78,
        pregunta: "¿Qué implica la 'unidad del ser humano' en la antropología filosófica?",
        respuestas: [
            "Que el ser humano es solo mente.",
            "Que el ser humano es una unidad inseparable de cuerpo y alma.",
            "Que el cuerpo y el alma son entidades completamente independientes."
        ],
        respuestaCorrecta: 1,
        explicacion: "La antropología filosófica considera que el ser humano es una unidad de cuerpo y alma. Ambas dimensiones, física y espiritual, están integradas y no pueden entenderse por separado en la vida humana."
    },
    {
        id: 79,
        pregunta: "¿Qué es la voluntad según la antropología filosófica?",
        respuestas: [
            "Es la capacidad de actuar automáticamente según nuestros deseos.",
            "Es la facultad que nos permite elegir el bien y superar los deseos inmediatos.",
            "Es un impulso instintivo que nos guía hacia lo que queremos."
        ],
        respuestaCorrecta: 1,
        explicacion: "La voluntad es la capacidad humana de elegir el bien, incluso cuando esto implica superar los deseos inmediatos. Está guiada por la inteligencia y orientada hacia el desarrollo personal y la plenitud."
    },
    {
        id: 80,
        pregunta: "¿Cuál es el objetivo principal de la ética según la antropología filosófica?",
        respuestas: [
            "Guiar las acciones humanas hacia la búsqueda del placer.",
            "Orientar las acciones humanas hacia el bien y la felicidad.",
            "Enseñar a las personas cómo evitar el sufrimiento."
        ],
        respuestaCorrecta: 1,
        explicacion: "La ética tiene como objetivo orientar las acciones humanas hacia el bien, guiando a las personas para que actúen de manera coherente y alcancen la felicidad y la plenitud."
    },
    {
        id: 81,
        pregunta: "¿Qué caracteriza a la naturaleza humana según la antropología filosófica?",
        respuestas: [
            "Es completamente material y determinada por el instinto.",
            "Es una unidad de cuerpo y alma, con capacidades racionales y emocionales.",
            "Es un ser exclusivamente espiritual sin influencia del cuerpo."
        ],
        respuestaCorrecta: 1,
        explicacion: "La naturaleza humana se caracteriza por ser una unidad de cuerpo y alma, donde ambas dimensiones, la física y la espiritual, están profundamente conectadas. Esto permite la reflexión y el sentido emocional."
    },
    {
        id: 82,
        pregunta: "¿Qué es la razón en la antropología filosófica?",
        respuestas: [
            "Es una facultad que se usa solo para resolver problemas matemáticos.",
            "Es la capacidad de comprender la esencia de las cosas y tomar decisiones basadas en el conocimiento verdadero.",
            "Es una habilidad instintiva que compartimos con los animales."
        ],
        respuestaCorrecta: 1,
        explicacion: "La razón, en la antropología filosófica, es la facultad que permite conocer la esencia de las cosas, comprender la verdad y orientar nuestras decisiones hacia lo que es correcto y bueno."
    },
    {
        id: 83,
        pregunta: "¿Por qué es importante el sentido de la vida?",
        respuestas: [
            "Nos permite disfrutar más de los placeres materiales.",
            "Nos da un propósito y dirección para orientar nuestras acciones.",
            "Evita que tengamos que enfrentar desafíos o dificultades."
        ],
        respuestaCorrecta: 1,
        explicacion: "El sentido de la vida es fundamental porque nos proporciona un propósito que da coherencia y orientación a nuestras acciones, permitiendo que vivamos de manera significativa y dirigida hacia el bien."
    },
    {
        id: 84,
        pregunta: "¿Qué es el bien último según la antropología filosófica?",
        respuestas: [
            "El placer inmediato.",
            "La felicidad plena y duradera alcanzada a través del desarrollo de las capacidades humanas.",
            "El éxito profesional y material."
        ],
        respuestaCorrecta: 1,
        explicacion: "El bien último, desde la antropología filosófica, es la felicidad plena, que se logra desarrollando al máximo nuestras capacidades humanas. Este bien no depende de bienes materiales o logros inmediatos."
    },
    {
        id: 85,
        pregunta: "¿Qué distingue el conocimiento racional del conocimiento instintivo?",
        respuestas: [
            "El conocimiento racional está basado en experiencias inmediatas.",
            "El conocimiento racional busca la verdad universal, mientras que el instintivo se limita a la supervivencia.",
            "El conocimiento instintivo es más fiable que el racional."
        ],
        respuestaCorrecta: 1,
        explicacion: "El conocimiento racional busca la verdad universal y permite abstraer las esencias de las cosas. El conocimiento instintivo, en cambio, está enfocado en la supervivencia inmediata y no es reflexivo."
    },
    {
        id: 86,
        pregunta: "¿Qué rol juega la voluntad en el ser humano según la antropología filosófica?",
        respuestas: [
            "Es el motor de los deseos inmediatos.",
            "Es la facultad que nos permite elegir el bien real, superando el placer momentáneo.",
            "Es la fuente de todos los instintos."
        ],
        respuestaCorrecta: 1,
        explicacion: "La voluntad nos permite elegir el bien real y superar los deseos inmediatos. Está guiada por la inteligencia y orientada a la realización plena de la persona a través del bien."
    },
    {
        id: 87,
        pregunta: "¿Qué relación existe entre la verdad y la felicidad?",
        respuestas: [
            "La verdad y la felicidad son conceptos opuestos.",
            "La búsqueda de la verdad nos guía hacia la felicidad y el bien real.",
            "La felicidad se alcanza ignorando la verdad."
        ],
        respuestaCorrecta: 1,
        explicacion: "La verdad y la felicidad están conectadas, ya que conocer y vivir de acuerdo con la verdad es esencial para alcanzar la plenitud y el bienestar verdadero. La verdad orienta nuestras acciones hacia lo correcto y lo bueno."
    },
    {
        id: 88,
        pregunta: "¿Qué significa que el conocimiento humano es 'inmaterial'?",
        respuestas: [
            "Que está basado en lo que percibimos con los sentidos.",
            "Que no depende de lo físico, sino que es abstracto y puede captar esencias universales.",
            "Que solo se refiere a conceptos teóricos, no aplicables a la realidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "El conocimiento humano es inmaterial porque puede captar esencias abstractas y universales, que no dependen de lo físico. Este conocimiento es independiente de lo particular y sensorial."
    },
    {
        id: 89,
        pregunta: "¿Qué es la libertad según la antropología filosófica?",
        respuestas: [
            "La capacidad de actuar sin ninguna restricción ni responsabilidad.",
            "La capacidad de elegir el bien, guiado por la razón y la voluntad.",
            "Hacer lo que se desea en todo momento sin consecuencias."
        ],
        respuestaCorrecta: 1,
        explicacion: "La libertad, en la antropología filosófica, es la capacidad de elegir el bien, guiado por la razón y la voluntad. No es simplemente hacer lo que se quiere, sino actuar conforme a lo que es correcto y bueno."
    },
    {
        id: 90,
        pregunta: "¿Qué es la plenitud humana según la antropología filosófica?",
        respuestas: [
            "Es la satisfacción de todos los deseos inmediatos.",
            "Es el desarrollo completo de las capacidades humanas, alcanzando la felicidad.",
            "Es un estado temporal de bienestar físico."
        ],
        respuestaCorrecta: 1,
        explicacion: "La plenitud es el estado de desarrollo máximo de las capacidades humanas, tanto racionales como espirituales, lo que permite alcanzar la felicidad y una vida verdaderamente plena."
    },
    {
        id: 91,
        pregunta: "¿Qué es el 'animal racional' según Aristóteles?",
        respuestas: [
            "Un ser guiado solo por sus instintos.",
            "Un ser que combina su capacidad racional con su parte instintiva.",
            "Un ser completamente espiritual sin conexión con la realidad física."
        ],
        respuestaCorrecta: 1,
        explicacion: "Aristóteles define al ser humano como un 'animal racional', lo que significa que posee tanto una dimensión instintiva como una racional, capaz de tomar decisiones libres y guiadas por la razón."
    },
    {
        id: 92,
        pregunta: "¿Cómo describe la antropología filosófica la naturaleza humana?",
        respuestas: [
            "Como una simple máquina biológica.",
            "Como una unidad compleja de cuerpo y alma, con capacidades racionales y emocionales.",
            "Como un ser puramente espiritual sin necesidades materiales."
        ],
        respuestaCorrecta: 1,
        explicacion: "La antropología filosófica describe al ser humano como una unidad de cuerpo y alma, con capacidades tanto físicas como racionales y emocionales. Esta unidad define su naturaleza."
    },
    {
        id: 93,
        pregunta: "¿Qué función cumple la inteligencia en la vida humana?",
        respuestas: [
            "Satisfacer necesidades materiales inmediatas.",
            "Conocer la esencia de las cosas y descubrir la verdad.",
            "Guiar nuestros instintos hacia el placer."
        ],
        respuestaCorrecta: 1,
        explicacion: "La inteligencia tiene como función conocer la esencia de las cosas y descubrir la verdad, orientando nuestras decisiones hacia lo correcto y permitiéndonos actuar en consonancia con el bien."
    },
    {
        id: 94,
        pregunta: "¿Qué es la 'voluntad' según la antropología filosófica?",
        respuestas: [
            "La capacidad de seguir nuestros deseos sin reflexionar.",
            "La fuerza que nos permite elegir el bien real y actuar conforme a la razón.",
            "La inclinación a actuar instintivamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "La voluntad es la facultad que nos permite elegir el bien real, superando los deseos inmediatos. Está guiada por la razón y orientada a tomar decisiones que favorecen nuestro bienestar a largo plazo."
    },
    {
        id: 95,
        pregunta: "¿Qué papel juegan los bienes materiales en la felicidad?",
        respuestas: [
            "Son la fuente principal de felicidad.",
            "Son útiles como medios, pero no constituyen la felicidad en sí misma.",
            "Son irrelevantes para la felicidad humana."
        ],
        respuestaCorrecta: 1,
        explicacion: "Los bienes materiales son medios que pueden ayudar a alcanzar ciertos fines, pero no constituyen la felicidad en sí misma. La verdadera felicidad implica el desarrollo de las capacidades humanas, no solo la posesión de cosas."
    },
    {
        id: 96,
        pregunta: "¿Qué es el 'bien' en la ética según la antropología filosófica?",
        respuestas: [
            "Lo que produce placer inmediato.",
            "Aquello que perfecciona a la persona y la orienta hacia su realización plena.",
            "Cualquier cosa que se desee."
        ],
        respuestaCorrecta: 1,
        explicacion: "El bien, en la ética de la antropología filosófica, es aquello que perfecciona al ser humano y lo orienta hacia su plena realización, permitiendo el desarrollo integral de sus capacidades y contribuyendo a su felicidad."
    },
    {
        id: 97,
        pregunta: "¿Por qué la búsqueda de la verdad es esencial para el ser humano?",
        respuestas: [
            "Porque nos permite evitar todo tipo de problemas.",
            "Porque nos orienta hacia el bien y nos ayuda a vivir de manera coherente.",
            "Porque evita que tengamos que tomar decisiones difíciles."
        ],
        respuestaCorrecta: 1,
        explicacion: "La búsqueda de la verdad es esencial porque nos orienta hacia el bien y nos ayuda a vivir de manera coherente con la realidad. Nos permite tomar decisiones fundamentadas en el conocimiento de lo que es correcto."
    },
    {
        id: 98,
        pregunta: "¿Qué es el alma según Aristóteles?",
        respuestas: [
            "Una energía física que se disuelve al morir.",
            "Un principio inmaterial que da vida al cuerpo y continúa existiendo después de la muerte.",
            "Una parte física del cuerpo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Para Aristóteles, el alma es un principio inmaterial que da vida al cuerpo. No es una parte física, sino que trasciende la muerte del cuerpo y sigue existiendo después de que la vida corporal termina."
    },
    {
        id: 99,
        pregunta: "¿Qué implica el desarrollo máximo de las capacidades humanas?",
        respuestas: [
            "El logro de metas materiales y sociales.",
            "El alcance de la plenitud y la felicidad verdadera.",
            "El evitar todo tipo de dificultades en la vida."
        ],
        respuestaCorrecta: 1,
        explicacion: "El desarrollo máximo de las capacidades humanas implica alcanzar la plenitud, lo que lleva a la felicidad verdadera. No depende solo de logros materiales, sino del perfeccionamiento de nuestras facultades racionales y morales."
    }
];

export default antropologiaDB;