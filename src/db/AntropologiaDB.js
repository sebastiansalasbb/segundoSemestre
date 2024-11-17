const antropologiaDB = [
    {
        "id": 1,
        "pregunta": "Según el texto, ¿cuál es la primera fuente de conocimiento humano?",
        "respuestas": [
            "La razón.",
            "Los sentidos.",
            "La reflexión intelectual."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los sentidos son la primera fuente de conocimiento humano, ya que a través de ellos percibimos el mundo que nos rodea."
    },
    {
        "id": 2,
        "pregunta": "¿Qué sucede cuando percibimos algo como bueno?",
        "respuestas": [
            "Nos causa indiferencia y no actuamos.",
            "Ese objeto ejerce una afección y surge un deseo o tendencia por conseguirlo.",
            "Desarrollamos una tendencia a huir de ello."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Cuando percibimos algo como bueno, nos afecta y genera en nosotros una tendencia o deseo de obtenerlo."
    },
    {
        "id": 3,
        "pregunta": "¿Qué son las tendencias sensibles?",
        "respuestas": [
            "Son inclinaciones o apetitos del cuerpo hacia un bien concreto y particular.",
            "Son impulsos irracionales que siempre deben ser reprimidos.",
            "Son procesos exclusivamente intelectuales sin relación con el cuerpo."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las tendencias sensibles son inclinaciones naturales hacia bienes percibidos por los sentidos."
    },
    {
        "id": 4,
        "pregunta": "Según el texto, ¿cómo difieren los humanos de los animales en relación con los instintos?",
        "respuestas": [
            "Los humanos no tienen instintos innatos.",
            "Los humanos pueden guiar sus instintos mediante la libertad.",
            "Los animales pueden controlar sus instintos a través de la razón."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "A diferencia de los animales, los humanos pueden guiar sus instintos mediante la libertad y la razón."
    },
    {
        "id": 5,
        "pregunta": "¿Cuál es el origen etimológico de la palabra 'pasión'?",
        "respuestas": [
            "Del latín 'passio', que significa acción.",
            "Del griego 'pathos', que significa padecer o ser afectado por algo.",
            "Del francés 'passion', que significa emoción fuerte."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La palabra 'pasión' proviene del griego 'pathos', que significa padecer o ser afectado por algo."
    },
    {
        "id": 6,
        "pregunta": "Según el texto, ¿qué es la ética clásica?",
        "respuestas": [
            "Un conjunto de normas impuestas por la sociedad.",
            "Una teoría ética que orienta el acto humano al bien, basándose en la felicidad y la virtud.",
            "Una ética que sostiene que todo es relativo."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La ética clásica es una teoría ética que orienta el acto humano al bien, basándose en la felicidad y la virtud."
    },
    {
        "id": 7,
        "pregunta": "¿Por qué se llama 'ética clásica'?",
        "respuestas": [
            "Porque es una ética que ya no se aplica en la actualidad.",
            "Porque fue desarrollada por los filósofos griegos y se ha mantenido vigente.",
            "Porque es la ética más sencilla de entender."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Se llama 'ética clásica' porque fue formulada por filósofos como Aristóteles y se ha mantenido vigente en la comprensión y orientación de nuestra conducta."
    },
    {
        "id": 8,
        "pregunta": "Según el texto, ¿qué es el relativismo?",
        "respuestas": [
            "La creencia de que existen verdades universales y absolutas.",
            "La posición que sostiene que el bien y el mal son relativos y dependen de cada persona.",
            "Una teoría que defiende la existencia de una ley natural."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El relativismo es la posición que sostiene que el bien y el mal son relativos y que cada persona define lo que es bueno o malo."
    },
    {
        "id": 9,
        "pregunta": "¿Qué es la ley natural según el texto?",
        "respuestas": [
            "Un conjunto de normas escritas por las autoridades civiles.",
            "Una ley superior que guía nuestras acciones hacia el bien conforme a nuestra naturaleza.",
            "Las leyes físicas que gobiernan el universo."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La ley natural es un criterio superior que guía nuestras acciones hacia el bien, basándose en nuestra naturaleza humana."
    },
    {
        "id": 10,
        "pregunta": "¿Cuál es el primer principio de la ley natural?",
        "respuestas": [
            "Hacer lo que nos parezca más conveniente en cada momento.",
            "Hacer el bien y evitar el mal, ordenando nuestros actos hacia los bienes que nos son propios.",
            "Obedecer siempre las leyes jurídicas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El primer principio de la ley natural es hacer el bien y evitar el mal, ordenando nuestros actos hacia la adecuada realización de los bienes propios del ser humano."
    },
    {
        "id": 11,
        "pregunta": "Según el texto, ¿qué es la conciencia moral?",
        "respuestas": [
            "La capacidad innata de actuar siempre correctamente sin necesidad de formación.",
            "La actitud y acto de conocimiento que evalúa las acciones morales.",
            "El conjunto de normas sociales que dictan nuestro comportamiento."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La conciencia moral es la actitud y el acto de conocimiento y discernimiento que tiene como fin la evaluación de las acciones morales."
    },
    {
        "id": 12,
        "pregunta": "Según el texto, ¿cuáles son las dos obligaciones que surgen del hecho de tener conciencia?",
        "respuestas": [
            "Formarla adecuadamente y obedecerla.",
            "Ignorarla y seguir nuestras pasiones.",
            "Compartirla con los demás y imponer nuestras creencias."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las dos obligaciones son formar adecuadamente la conciencia y obedecerla."
    },
    {
        "id": 13,
        "pregunta": "¿Qué es la recta razón?",
        "respuestas": [
            "El dictamen obtenido cuando la razón procede correctamente, guiando nuestras acciones conforme al bien.",
            "La habilidad de justificar cualquier acción que realicemos.",
            "La aceptación de las normas sociales sin cuestionamiento."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La recta razón es el juicio correcto que permite obrar conforme al bien, siguiendo la ley natural y la verdad."
    },
    {
        "id": 14,
        "pregunta": "¿Qué es el temperamento según el texto?",
        "respuestas": [
            "La parte voluntaria y adquirida de la personalidad.",
            "El componente innato y genético de la personalidad.",
            "Los hábitos que formamos a través de nuestras acciones libres."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El temperamento es el componente innato y genético de la personalidad."
    },
    {
        "id": 15,
        "pregunta": "¿Qué es el carácter?",
        "respuestas": [
            "El componente innato de la personalidad, inalterable.",
            "La parte voluntaria y adquirida de la personalidad, formada por nuestros hábitos.",
            "Las tendencias instintivas que no podemos controlar."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El carácter es la parte voluntaria y adquirida de la personalidad, que se forma a través de nuestros hábitos y acciones libres."
    },
    {
        "id": 16,
        "pregunta": "Según el texto, ¿qué es una virtud?",
        "respuestas": [
            "Una acción buena realizada de manera esporádica.",
            "Un hábito que perfecciona a la persona para obrar bien.",
            "Una cualidad innata que no requiere esfuerzo."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La virtud es un hábito que perfecciona a la persona para obrar bien."
    },
    {
        "id": 17,
        "pregunta": "¿Cuál es la virtud considerada 'madre de todas las virtudes'?",
        "respuestas": [
            "La justicia.",
            "La fortaleza.",
            "La prudencia."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La prudencia es considerada la madre de todas las virtudes porque permite saber cómo hacer el bien y posibilita el surgimiento de las demás virtudes."
    },
    {
        "id": 18,
        "pregunta": "¿Qué permite la virtud de la templanza?",
        "respuestas": [
            "Resistir y superar las dificultades.",
            "Moderar y ordenar los placeres y dirigirlos hacia objetos adecuados.",
            "Deliberar y juzgar lo mejor en cada caso."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La templanza es la virtud que permite moderar y ordenar los placeres, dirigiéndolos hacia objetos adecuados."
    },
    {
        "id": 19,
        "pregunta": "¿Cuál es el fin de la virtud de la fortaleza?",
        "respuestas": [
            "Evitar todas las situaciones de riesgo.",
            "Resistir y superar las dificultades, seguir amando lo que hacemos pese a los obstáculos.",
            "Dominar nuestras pasiones y placeres."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La fortaleza nos permite resistir y superar las dificultades, seguir adelante y amar lo que hacemos pese a los obstáculos."
    },
    {
        "id": 20,
        "pregunta": "¿Qué caracteriza a la virtud de la justicia?",
        "respuestas": [
            "Es una virtud individual que solo afecta a uno mismo.",
            "Es una virtud social que se relaciona con dar a cada uno lo que le corresponde.",
            "Es la capacidad de tomar decisiones sin considerar a los demás."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La justicia es una virtud social que implica dar a cada uno lo que le corresponde y respetar los derechos de las personas."
    },
    {
        "id": 21,
        "pregunta": "Según el texto, ¿qué es la ética legalista?",
        "respuestas": [
            "Creer que algo es bueno solo porque lo dice la ley.",
            "Una ética que se basa en la ley natural y la conciencia.",
            "La ética que considera que todo es relativo."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La ética legalista es aquella que considera que algo es bueno solo porque lo dice la ley, lo cual puede ser problemático si las leyes son injustas."
    },
    {
        "id": 22,
        "pregunta": "Según el texto, ¿qué es la felicidad?",
        "respuestas": [
            "La búsqueda del placer inmediato y constante.",
            "La realización plena de nuestra naturaleza, alcanzando la plenitud y la vida buena.",
            "El cumplimiento de todas las leyes sociales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La felicidad es la realización plena de nuestra naturaleza, alcanzando la plenitud y la vida buena a través de acciones orientadas al bien."
    },
    {
        "id": 23,
        "pregunta": "Según el texto, ¿qué papel juega el sentido de la vida en la existencia humana?",
        "respuestas": [
            "Es una pregunta irrelevante que no afecta nuestro actuar.",
            "Es fundamental, ya que buscar un sentido ayuda a orientar nuestras acciones y alcanzar la plenitud.",
            "Es algo que solo interesa a los filósofos y teólogos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El sentido de la vida es fundamental, ya que buscar un sentido nos ayuda a orientar nuestras acciones hacia el bien y alcanzar la plenitud."
    },
    {
        "id": 24,
        "pregunta": "Según Viktor Frankl, ¿qué revela el sufrimiento al ser humano?",
        "respuestas": [
            "Que la vida no tiene sentido.",
            "La hondura de su libertad y la capacidad de encontrar sentido incluso en situaciones difíciles.",
            "Que debemos evitar a toda costa el dolor."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Según Viktor Frankl, el sufrimiento revela la hondura de la libertad humana y la capacidad de encontrar sentido incluso en situaciones difíciles."
    },
    {
        "id": 25,
        "pregunta": "¿Qué es la trascendencia según el texto?",
        "respuestas": [
            "La capacidad de superar los límites físicos y conectarse con una realidad suprema o infinita.",
            "La aceptación pasiva de nuestra finitud.",
            "El rechazo a cualquier forma de espiritualidad."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La trascendencia es la capacidad de superar los límites físicos y conectarse con una realidad suprema o infinita."
    },
    {
        "id": 26,
        "pregunta": "Según el texto, ¿cuál es la relación entre antropología y ética?",
        "respuestas": [
            "No tienen relación alguna.",
            "La antropología proporciona una comprensión de la naturaleza humana que ayuda a la ética a orientar nuestras acciones.",
            "La ética es una rama de la antropología que estudia las costumbres."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La antropología y la ética están íntimamente relacionadas; una comprensión profunda de nuestra naturaleza puede ayudarnos a elegir mejor y a realizar buenas acciones."
    },
    {
        "id": 27,
        "pregunta": "¿Qué plantea el relativismo moral?",
        "respuestas": [
            "Que existen verdades morales absolutas e inmutables.",
            "Que cada persona define lo que es bueno o malo según su criterio.",
            "Que las leyes naturales son el único criterio de moralidad."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El relativismo sostiene que el bien es relativo y que cada persona define lo que es bueno o malo."
    },
    {
        "id": 28,
        "pregunta": "Según el texto, ¿por qué es problemática la posición relativista?",
        "respuestas": [
            "Porque niega la posibilidad de cualquier debate ético serio.",
            "Porque promueve leyes injustas.",
            "Porque es aceptada por todos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El relativismo implica la negación de la posibilidad de cualquier debate ético serio o reduce la moral a una mera convención social."
    },
    {
        "id": 29,
        "pregunta": "En la tragedia 'Antígona' de Sófocles, ¿qué representa la 'ley de los dioses' a la que Antígona hace referencia?",
        "respuestas": [
            "Las leyes escritas por el rey Creonte.",
            "Un conjunto de normas escritas en los libros sagrados.",
            "La ley natural o aquello que es naturalmente justo."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Antígona se refiere a la ley natural, un criterio superior que representa lo que es naturalmente justo."
    },
    {
        "id": 30,
        "pregunta": "Según el texto, ¿por qué es necesario formar adecuadamente nuestra conciencia?",
        "respuestas": [
            "Porque todos estamos libres de error.",
            "Porque una conciencia mal formada puede llevarnos a tomar decisiones erróneas.",
            "Porque así podemos imponer nuestras creencias a otros."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Es necesario formar la conciencia adecuadamente porque podemos equivocarnos y una conciencia mal formada puede llevarnos a errores evitables."
    },
    {
        "id": 31,
        "pregunta": "¿Qué es la objeción de conciencia según el texto?",
        "respuestas": [
            "El rechazo a obedecer leyes civiles que son contrarias al orden moral y los derechos fundamentales.",
            "La aceptación incondicional de todas las leyes civiles.",
            "La indiferencia ante las normas éticas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La objeción de conciencia es el deber y derecho de negarse a colaborar en acciones moralmente ilícitas, incluso si están respaldadas por leyes civiles."
    },
    {
        "id": 32,
        "pregunta": "Según el texto, ¿qué diferencia hay entre temperamento y carácter?",
        "respuestas": [
            "El temperamento es adquirido y el carácter es innato.",
            "El temperamento es innato y el carácter es formado por hábitos y acciones libres.",
            "No hay diferencia, ambos son innatos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El temperamento es el componente innato y genético de la personalidad, mientras que el carácter es adquirido y formado por nuestros hábitos y acciones libres."
    },
    {
        "id": 33,
        "pregunta": "Según el texto, ¿cómo se adquiere una virtud?",
        "respuestas": [
            "A través de acciones esporádicas y aisladas.",
            "Mediante la práctica constante de acciones buenas que se convierten en hábitos.",
            "Por herencia genética."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las virtudes se adquieren mediante la práctica constante de acciones buenas que, repetidas en el tiempo, se convierten en hábitos."
    },
    {
        "id": 34,
        "pregunta": "¿Por qué es importante la virtud de la prudencia en relación con las otras virtudes?",
        "respuestas": [
            "Porque permite saber cómo ser virtuoso en cada situación concreta.",
            "Porque reemplaza la necesidad de otras virtudes.",
            "Porque se adquiere sin esfuerzo."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La prudencia es fundamental porque nos permite deliberar y juzgar cómo aplicar las virtudes en cada situación específica."
    },
    {
        "id": 35,
        "pregunta": "Según el texto, ¿qué relación hay entre libertad y virtud?",
        "respuestas": [
            "Las virtudes disminuyen nuestra libertad.",
            "El ejercicio de las virtudes aumenta nuestra libertad y nos hace más plenos.",
            "No hay relación entre libertad y virtud."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El ejercicio de las virtudes aumenta nuestra libertad y nos hace personas más plenas en acción y en nuestras relaciones con los demás."
    },
    {
        "id": 36,
        "pregunta": "¿Qué es el hedonismo según el texto?",
        "respuestas": [
            "La búsqueda de la virtud y la excelencia moral.",
            "La búsqueda desenfrenada del placer inmediato como fin último.",
            "La teoría que propone la existencia de una ley natural."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El hedonismo es la filosofía que busca el placer inmediato y desmedido como fin último de la vida."
    },
    {
        "id": 37,
        "pregunta": "Según el texto, ¿qué implica la virtud de la fortaleza?",
        "respuestas": [
            "Evitar cualquier tipo de riesgo o dificultad.",
            "Resistir y superar dificultades, aceptando el riesgo en la búsqueda del bien.",
            "Actuar impulsivamente sin reflexión."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La fortaleza implica resistir y superar dificultades, aceptando riesgos de manera razonada en la búsqueda del bien."
    },
    {
        "id": 38,
        "pregunta": "Según el texto, ¿por qué no se debe reducir la justicia a una cuestión meramente material?",
        "respuestas": [
            "Porque las leyes siempre son justas.",
            "Porque las relaciones humanas no pueden basarse solo en lo material y la justicia es un principio moral.",
            "Porque lo material no tiene importancia en la justicia."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Reducir la justicia a lo material es peligroso, ya que las relaciones humanas van más allá de lo material y la justicia es ante todo un principio moral."
    },
    {
        "id": 39,
        "pregunta": "Según el texto, ¿cómo se relaciona el sentido de la vida con el sufrimiento?",
        "respuestas": [
            "El sufrimiento demuestra que la vida no tiene sentido.",
            "El sufrimiento puede ser una oportunidad para reconstruir un sentido y crecer personalmente.",
            "El sufrimiento debe evitarse a toda costa para encontrar sentido en la vida."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El sufrimiento puede revelar la profundidad de nuestra libertad y ser una oportunidad para reconstruir un sentido en nuestra vida."
    },
    {
        "id": 40,
        "pregunta": "Según Gabriel Marcel, ¿qué significa amar a una persona?",
        "respuestas": [
            "Aceptar que eventualmente desaparecerá.",
            "Sentir que se le dice: 'tú no morirás', expresando un deseo de eternidad.",
            "Poseer a la persona para siempre."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Gabriel Marcel expresa que amar a una persona es sentir que se le dice: 'tú no morirás', indicando un deseo de eternidad en el amor."
    },
    {
        "id": 41,
        "pregunta": "Según el texto, ¿por qué es importante el autoconocimiento en la práctica de la templanza?",
        "respuestas": [
            "Porque nos permite identificar los placeres que nos dominan y poner atención en ellos.",
            "Porque así podemos eliminar todos los placeres de nuestra vida.",
            "Porque nos permite juzgar a otros por sus debilidades."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El autoconocimiento es esencial para identificar los placeres que pueden dominarnos y así practicar la templanza."
    },
    {
        "id": 42,
        "pregunta": "¿Qué sucede cuando se adquiere una virtud según el texto?",
        "respuestas": [
            "La acción virtuosa se vuelve difícil y desagradable.",
            "La acción virtuosa se vuelve fácil, rápida y agradable.",
            "La acción virtuosa ya no es necesaria."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Cuando se adquiere una virtud, la acción correspondiente se vuelve fácil, rápida y agradable, convirtiéndose en parte de nosotros."
    },
    {
        "id": 43,
        "pregunta": "Según el texto, ¿qué es la ética de la virtud?",
        "respuestas": [
            "Una ética que se centra en las consecuencias de las acciones.",
            "Una ética que se enfoca en el desarrollo de un buen carácter a través de la práctica de virtudes.",
            "Una ética que sostiene que no hay criterios objetivos para el bien y el mal."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La ética de la virtud se enfoca en el desarrollo del carácter y la práctica constante de virtudes para lograr la excelencia moral."
    },
    {
        "id": 44,
        "pregunta": "Según el texto, ¿cuál es el papel de la espiritualidad en la vida humana?",
        "respuestas": [
            "Es irrelevante y no afecta nuestro sentido de vida.",
            "Es una dimensión esencial que nos lleva a preguntarnos por la trascendencia y el sentido último de nuestra existencia.",
            "Es solo una construcción social sin importancia real."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La espiritualidad es una dimensión esencial que nos lleva a cuestionarnos sobre la trascendencia y el sentido último de nuestra existencia."
    },
    {
        "id": 45,
        "pregunta": "Según el texto, ¿cómo contribuye la ética al desarrollo personal?",
        "respuestas": [
            "Imponiendo normas que limitan la libertad.",
            "Orientando nuestros actos hacia el bien y ayudándonos a alcanzar la plenitud y la felicidad.",
            "Evadiendo las responsabilidades morales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La ética contribuye al desarrollo personal orientando nuestros actos hacia el bien, lo que nos ayuda a alcanzar la plenitud y la felicidad."
    }
];


export default antropologiaDB;