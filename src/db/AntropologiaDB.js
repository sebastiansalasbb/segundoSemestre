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
        "pregunta": "Según el texto, las pasiones son:",
        "respuestas": [
            "Elementos básicos de nuestra naturaleza que acompañan nuestro actuar.",
            "Estados negativos que deben ser eliminados.",
            "Procesos racionales que controlan nuestras decisiones."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las pasiones son elementos básicos de nuestra naturaleza que influyen en nuestras acciones."
    },
    {
        "id": 7,
        "pregunta": "¿Por qué es importante educar nuestras pasiones?",
        "respuestas": [
            "Para eliminar todas las emociones negativas.",
            "Para llevar una vida más equilibrada y reaccionar adecuadamente.",
            "Para suprimir cualquier tipo de sentimiento."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Educar las pasiones nos permite llevar una vida más equilibrada y manejar mejor nuestras reacciones."
    },
    {
        "id": 8,
        "pregunta": "Según el texto, las pasiones en sí mismas son:",
        "respuestas": [
            "Siempre buenas.",
            "Ni buenas ni malas en sí mismas; su valor depende de cómo las orientamos.",
            "Siempre malas y deben ser controladas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las pasiones no son ni buenas ni malas en sí mismas; su valor moral depende de cómo las guiamos."
    },
    {
        "id": 9,
        "pregunta": "¿Qué sucede si exaltamos solo el uso de la razón, según el texto?",
        "respuestas": [
            "Alcanzamos un equilibrio perfecto.",
            "Podemos caer en un racionalismo que ignora las emociones.",
            "Logramos controlar completamente nuestras pasiones."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Exaltar solo la razón puede llevarnos a un racionalismo que no considera la importancia de las emociones."
    },
    {
        "id": 10,
        "pregunta": "¿Cómo podemos lograr una armonía entre la vida emocional y la vida racional?",
        "respuestas": [
            "Reprimiendo todas nuestras emociones.",
            "Reconociendo y guiando nuestras pasiones mediante buenos hábitos.",
            "Ignorando la razón y siguiendo solo nuestros sentimientos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Al adquirir hábitos buenos, las pasiones se integran con la racionalidad, logrando armonía entre ambas."
    },
    {
        "id": 11,
        "pregunta": "Según el texto, la educación de los sentimientos consiste en:",
        "respuestas": [
            "Aprender a asumir los dolores y evitar los excesos de pasiones desordenadas.",
            "Eliminar cualquier sentimiento de dolor o tristeza.",
            "Fomentar únicamente las emociones positivas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La educación de los sentimientos implica aprender de los dolores y evitar excesos emocionales."
    },
    {
        "id": 12,
        "pregunta": "¿Por qué no es recomendable reprimir las pasiones, según el texto?",
        "respuestas": [
            "Porque las pasiones desaparecerán por sí solas.",
            "Porque reprimirlas puede llevar al fracaso y perdemos la riqueza de nuestras experiencias.",
            "Porque las pasiones son más fuertes que la razón y no pueden ser controladas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Reprimir las pasiones nos priva de experiencias enriquecedoras y puede conducir al fracaso personal."
    },
    {
        "id": 13,
        "pregunta": "¿Qué papel juega el autoconocimiento en la educación de las pasiones?",
        "respuestas": [
            "No es relevante para controlar las pasiones.",
            "Es esencial para identificar nuestras debilidades y fortalezas y desarrollar plenamente nuestra naturaleza.",
            "Solo es importante en la infancia."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El autoconocimiento nos ayuda a entendernos mejor y a guiar nuestras pasiones de forma adecuada."
    },
    {
        "id": 14,
        "pregunta": "Según el texto, ¿qué sucede si un individuo no educa sus pasiones?",
        "respuestas": [
            "Vive en completa armonía.",
            "Puede volcar su vida hacia placeres desordenados y perder su libertad.",
            "Desarrolla una mayor capacidad racional."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Sin educación de las pasiones, la persona puede convertirse en esclava de sus deseos desordenados."
    },
    {
        "id": 15,
        "pregunta": "¿Cuál es el objetivo de la educación de la afectividad según el texto?",
        "respuestas": [
            "Reprimir todas las emociones para evitar el sufrimiento.",
            "Lograr una vida llena de tonalidades armoniosas, dirigiendo los sentimientos hacia objetos adecuados.",
            "Eliminar las pasiones negativas y solo experimentar las positivas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El objetivo es dirigir los sentimientos adecuadamente para vivir en armonía emocional y racional."
    },
    {
        "id": 16,
        "pregunta": "¿Cómo describe el texto la relación entre cuerpo y alma?",
        "respuestas": [
            "Como dos dimensiones separadas sin influencia mutua.",
            "Como una íntima unidad que debe armonizarse para una vida plena.",
            "El alma es superior y debe dominar al cuerpo."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El texto señala la íntima unidad entre cuerpo y alma y la necesidad de armonizarlas."
    },
    {
        "id": 17,
        "pregunta": "Según el texto, ¿qué papel tienen los adultos en la educación emocional de los niños?",
        "respuestas": [
            "Deben reprimir las emociones de los niños para evitar berrinches.",
            "Deben contener y educar a los niños, ayudándoles a identificar y entender sus sentimientos.",
            "No tienen un papel importante; los niños aprenden por sí mismos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los adultos deben ayudar a los niños a identificar y gestionar sus emociones adecuadamente."
    },
    {
        "id": 18,
        "pregunta": "¿Qué se logra al comprender y educar continuamente nuestras pasiones, según el texto?",
        "respuestas": [
            "Un desarrollo más pleno de nuestra naturaleza y un buen ejercicio de nuestra libertad.",
            "La eliminación total de emociones negativas.",
            "El control absoluto sobre los demás."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Comprender y educar nuestras pasiones nos permite desarrollarnos plenamente y ejercer nuestra libertad."
    },
    {
        "id": 19,
        "pregunta": "¿Cuál es el riesgo de enaltecer únicamente las pasiones, según el texto?",
        "respuestas": [
            "Nos convertimos en seres totalmente racionales.",
            "Podemos caer en un sentimentalismo que afecta nuestra capacidad de razonamiento.",
            "Mejoramos nuestra toma de decisiones."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Enaltecer solo las pasiones nos lleva al sentimentalismo, desequilibrando la armonía con la razón."
    },
    {
        "id": 20,
        "pregunta": "Según el texto, ¿cómo pueden las pasiones afectar nuestra libertad?",
        "respuestas": [
            "Al educarlas, aumentamos nuestra libertad.",
            "Las pasiones no tienen relación con la libertad.",
            "Nos hacen esclavos de nuestros propios deseos desordenados si no las guiamos."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Si no guiamos nuestras pasiones, pueden limitarnos y convertirnos en esclavos de nuestros deseos."
    },
    {
        "id": 21,
        "pregunta": "Según el texto, ¿qué es la libertad?",
        "respuestas": [
            "Es la capacidad de actuar espontáneamente sin pensar en las consecuencias.",
            "Es la ausencia total de limitaciones y responsabilidades.",
            "Es una facultad que nos permite actuar y escoger según nuestra voluntad."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La libertad es una facultad esencial que nos permite actuar y escoger según nuestra voluntad, autodeterminándonos."
    },
    {
        "id": 22,
        "pregunta": "¿Qué significa autodeterminación según el texto?",
        "respuestas": [
            "La capacidad de actuar según los instintos y deseos inmediatos.",
            "La capacidad de elegir qué tipo de persona deseamos ser, forjando nuestro propio modo de ser.",
            "La posibilidad de renunciar a toda responsabilidad."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La autodeterminación es la capacidad de elegir qué tipo de persona queremos ser, forjando nuestro propio modo de ser con nuestras decisiones."
    },
    {
        "id": 23,
        "pregunta": "Según el texto, ¿cómo se relacionan la libertad y la responsabilidad?",
        "respuestas": [
            "La libertad y la responsabilidad son inseparables; todo acto libre es imputable.",
            "Son independientes; la libertad no implica responsabilidad.",
            "La responsabilidad limita nuestra libertad y debe ser evitada."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La libertad y la responsabilidad son inseparables, ya que debemos hacernos cargo de las consecuencias de nuestros actos libres."
    },
    {
        "id": 24,
        "pregunta": "Según el texto, ¿por qué no podemos juzgar moralmente los actos de un bebé?",
        "respuestas": [
            "Porque los bebés siempre actúan con mala intención.",
            "Porque los bebés no realizan acciones que afecten a los demás.",
            "Porque los bebés no tienen plena conciencia de sus actos y no actúan por deliberación."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los bebés no tienen plena conciencia ni capacidad de deliberación, por lo que no son moralmente responsables de sus actos."
    },
    {
        "id": 25,
        "pregunta": "¿Qué implica la renuncia en el ejercicio de la libertad?",
        "respuestas": [
            "Que podemos elegir todo lo que queramos sin limitaciones.",
            "Que cada decisión implica dejar de lado otras opciones y comprometerse con lo elegido.",
            "Que debemos evitar tomar decisiones para no renunciar a nada."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Renunciar implica que al elegir algo, dejamos de lado otras opciones y nos comprometemos con lo elegido."
    },
    {
        "id": 26,
        "pregunta": "Según el texto, ¿por qué la libertad humana no es absoluta ni ilimitada?",
        "respuestas": [
            "Porque existen limitaciones físicas y sociales, y elementos dados en nuestra naturaleza.",
            "Porque los demás controlan nuestras decisiones.",
            "Porque carecemos de voluntad propia."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La libertad humana es situada, tiene límites dados por nuestra naturaleza y por las circunstancias físicas y sociales."
    },
    {
        "id": 27,
        "pregunta": "¿Qué significa que la libertad es una libertad situada?",
        "respuestas": [
            "Que podemos elegir todo sin importar las circunstancias.",
            "Que la libertad es una fantasía inalcanzable.",
            "Que ejercemos nuestra libertad dentro del marco de nuestra situación histórica, real y concreta."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La libertad es situada porque la ejercemos dentro de nuestras circunstancias reales, históricas y concretas."
    },
    {
        "id": 28,
        "pregunta": "Según el texto, ¿cuál es el error al confundir libertad con espontaneidad?",
        "respuestas": [
            "Pensar que todos los actos espontáneos son libres y responsables.",
            "Creer que la libertad implica siempre acciones instintivas sin reflexión.",
            "Asumir que la libertad es solo para sujetos racionales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Es un error confundir libertad con espontaneidad, ya que la libertad implica reflexión y deliberación, no solo acciones instintivas."
    },
    {
        "id": 29,
        "pregunta": "¿Cuál es el fin último al que se dirige la verdadera libertad según el texto?",
        "respuestas": [
            "La búsqueda del poder y el éxito personal.",
            "La felicidad y el perfeccionamiento de nuestra naturaleza humana.",
            "La ausencia total de restricciones morales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La verdadera libertad se perfecciona al dirigirnos hacia nuestro fin último, la felicidad y el perfeccionamiento humano."
    },
    {
        "id": 30,
        "pregunta": "¿Cómo se manifiesta la responsabilidad en nuestros actos libres?",
        "respuestas": [
            "Debemos responder ante los demás y nuestra conciencia por las consecuencias de nuestros actos.",
            "No necesitamos justificar nuestras acciones a nadie.",
            "Solo somos responsables si alguien nos observa."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La responsabilidad implica dar cuenta de nuestras acciones ante los demás y ante nuestra propia conciencia."
    },
    {
        "id": 31,
        "pregunta": "Según el texto, ¿qué sucede cuando elegimos el mal?",
        "respuestas": [
            "Perfeccionamos nuestra libertad.",
            "Es un fallo de la libertad que nos aleja de nuestro fin último.",
            "No tiene ninguna repercusión en nuestra naturaleza."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Elegir el mal es un fallo de la libertad que nos aleja de nuestro fin último y del perfeccionamiento de nuestra naturaleza humana."
    },
    {
        "id": 32,
        "pregunta": "¿Cómo se relacionan libertad y compromiso según el texto?",
        "respuestas": [
            "El compromiso limita la libertad y debe evitarse.",
            "Libertad y compromiso no se oponen; a través del compromiso manifestamos nuestra plena libertad.",
            "Solo somos libres cuando evitamos compromisos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Libertad y compromiso no se oponen; al comprometernos, manifestamos nuestra plena libertad, inteligencia y amor."
    },
    {
        "id": 33,
        "pregunta": "¿Qué demuestra la renuncia al elegir estar en pareja, según el texto?",
        "respuestas": [
            "Demuestra falta de libertad y autonomía.",
            "Demuestra amor por la persona elegida y permite generar vínculos estables.",
            "Implica evitar cualquier tipo de compromiso."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Renunciar a otras opciones al elegir estar en pareja demuestra amor y permite establecer vínculos estables."
    },
    {
        "id": 34,
        "pregunta": "Según el texto, ¿por qué es importante distinguir entre un bien aparente y un bien real?",
        "respuestas": [
            "Porque ambos siempre conducen al mismo resultado.",
            "Porque al elegir un bien aparente podemos autodeterminarnos negativamente.",
            "Porque los bienes aparentes son siempre mejores que los reales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Es importante distinguir entre bien aparente y real, ya que elegir un bien aparente puede afectar negativamente nuestro ser."
    },
    {
        "id": 35,
        "pregunta": "¿Qué papel juegan nuestras facultades superiores en los actos libres?",
        "respuestas": [
            "No tienen influencia; los actos libres son puramente instintivos.",
            "Son fundamentales; la voluntad elige lo que ha sido conocido por la inteligencia.",
            "Solo intervienen en decisiones triviales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "En los actos libres, nuestras facultades superiores son fundamentales; la voluntad elige lo que la inteligencia conoce."
    },
    {
        "id": 36,
        "pregunta": "Según el texto, ¿por qué solo los sujetos racionales pueden ser libres?",
        "respuestas": [
            "Porque pueden actuar instintivamente sin consecuencias.",
            "Porque pueden actuar en conformidad con los dictámenes de la razón.",
            "Porque no tienen limitaciones en sus decisiones."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Solo los sujetos racionales pueden ser libres porque pueden actuar según los dictámenes de la razón."
    },
    {
        "id": 37,
        "pregunta": "¿Qué implica la afirmación 'todo acto libre es imputable'?",
        "respuestas": [
            "Que podemos atribuir responsabilidad a alguien por sus actos libres.",
            "Que los actos libres no tienen consecuencias.",
            "Que solo los actos instintivos son importantes."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Si un acto es libre, se puede atribuir responsabilidad a quien lo realiza; es imputable."
    },
    {
        "id": 38,
        "pregunta": "¿Por qué una libertad total e ilimitada es inhumana e irreal según el texto?",
        "respuestas": [
            "Porque no existe tal cosa; estamos siempre enmarcados en limitaciones naturales y sociales.",
            "Porque los humanos pueden hacer cualquier cosa sin consecuencias.",
            "Porque la libertad total es un derecho inalienable."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Una libertad total e ilimitada es inhumana e irreal porque siempre existen limitaciones que enmarcan nuestro ejercicio de libertad."
    },
    {
        "id": 39,
        "pregunta": "¿Qué nos permite comprender plenamente qué es la libertad, según el texto?",
        "respuestas": [
            "Guiar nuestros actos hacia el verdadero bien.",
            "Evitar cualquier tipo de compromiso o responsabilidad.",
            "Hacer lo que queramos sin pensar en las consecuencias."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Comprender qué es la libertad nos permite orientar nuestros actos hacia el verdadero bien."
    },
    {
        "id": 40,
        "pregunta": "Según la cita de Viktor Frankl : '¿Qué es, en realidad, el ser humano? Es el ser que siempre decide lo que es. Es el ser que ha inventado las cámaras de gas, pero asimismo es el ser que ha entrado en ellas con paso firme murmurando una oración', ¿qué demuestra acerca del ser humano?",
        "respuestas": [
            "Que el ser humano es incapaz de elegir entre el bien y el mal.",
            "Que el ser humano siempre decide lo que es, pudiendo denigrarse o enaltecerse.",
            "Que la libertad humana es una ilusión."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Según Viktor Frankl, el ser humano siempre decide lo que es, pudiendo hacer el mal o el bien."
    },
    {
        "id": 41,
        "pregunta": "Según el texto, ¿por qué se afirma que el amor no es un sentimiento?",
        "respuestas": [
            "Porque el amor es una emoción pasajera que cambia constantemente.",
            "Porque el amor implica permanencia y es un acto espiritual más estable que los sentimientos.",
            "Porque el amor es una ilusión y no existe realmente."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El amor no es un sentimiento porque los sentimientos son variables y el amor implica permanencia y estabilidad; es un acto espiritual más estable."
    },
    {
        "id": 42,
        "pregunta": "¿Cuál es una de las razones por las que el amor supera las barreras del tiempo y las circunstancias?",
        "respuestas": [
            "Porque está basado en intereses mutuos y beneficios.",
            "Porque es un acto voluntario de entrega y generosidad que surge de la voluntad.",
            "Porque depende de las emociones y estados de ánimo del momento."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El amor supera las barreras del tiempo porque es un acto voluntario de entrega y generosidad que surge de la facultad de la voluntad."
    },
    {
        "id": 43,
        "pregunta": "Según el texto, ¿qué efecto tiene el egoísmo en el amor?",
        "respuestas": [
            "Fortalece el amor al centrarse en los propios deseos.",
            "Destruye el amor al impedir la entrega y el compromiso con el otro.",
            "No tiene ningún efecto significativo en las relaciones amorosas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El egoísmo destruye el amor porque la persona egoísta solo busca satisfacer sus propios deseos y es incapaz de entregarse plenamente al otro."
    },
    {
        "id": 44,
        "pregunta": "¿Por qué el amor se da únicamente entre personas, según el texto?",
        "respuestas": [
            "Porque solo las personas pueden poseer objetos valiosos.",
            "Porque el amor requiere de colaboración, comprensión y enriquecimiento mutuo que solo se da entre sujetos con la misma dignidad.",
            "Porque los objetos no pueden provocar sentimientos en las personas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El amor se da entre personas porque implica un encuentro que requiere colaboración, comprensión y reciprocidad, características que solo poseen los seres humanos."
    },
    {
        "id": 45,
        "pregunta": "¿Cuál de los siguientes no es un tipo de amor mencionado en el texto?",
        "respuestas": [
            "Amor de pareja.",
            "Amor de amistad.",
            "Amor hacia objetos valiosos."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El texto menciona el amor de pareja, entre padres e hijos, hermanos y amigos, pero aclara que el amor se da entre personas, no hacia objetos."
    },
    {
        "id": 46,
        "pregunta": "¿Qué caracteriza al amor desinteresado según el texto?",
        "respuestas": [
            "Busca el bien del otro sin esperar nada a cambio.",
            "Se basa en obtener beneficios y placeres personales.",
            "Requiere reciprocidad inmediata de la otra persona."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El amor desinteresado es aquel que busca el bien del otro sin esperar algo a cambio, entregándose de manera altruista."
    },
    {
        "id": 47,
        "pregunta": "Según Aristóteles, ¿cuál es la amistad más completa?",
        "respuestas": [
            "La amistad de utilidad.",
            "La amistad por placer.",
            "La amistad virtuosa."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Aristóteles considera que la amistad virtuosa es la más completa, ya que se basa en el apoyo mutuo y la búsqueda del bien del otro."
    },
    {
        "id": 48,
        "pregunta": "¿Qué distingue a la amistad virtuosa de otros tipos de amistad?",
        "respuestas": [
            "Se basa en el beneficio o uso que se puede hacer del otro.",
            "Se centra en el placer y la diversión compartida.",
            "Busca el bien del otro y el apoyo mutuo constante, más allá de intereses personales."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La amistad virtuosa se distingue por querer el bien del otro en sí mismo, con apoyo mutuo y compromiso constante."
    },
    {
        "id": 49,
        "pregunta": "¿Cuál es una de las características del amor de amistad mencionadas en el texto?",
        "respuestas": [
            "Competencia.",
            "Reciprocidad.",
            "Indiferencia."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Una de las características del amor de amistad es la reciprocidad, que implica correspondencia y correlación con la persona amada."
    },
    {
        "id": 50,
        "pregunta": "¿Qué implica la 'identificación' en el amor de amistad?",
        "respuestas": [
            "Ver al otro como un medio para alcanzar nuestros objetivos.",
            "Reconocer al otro como un tú con la misma dignidad y naturaleza, capaz de empatía y respeto mutuo.",
            "Perder la propia identidad en función de la otra persona."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La identificación implica reconocer al otro como un tú con la misma dignidad, permitiendo empatía y respeto mutuo."
    },
    {
        "id": 51,
        "pregunta": "Según el texto, ¿por qué nunca debemos tratar a las personas como instrumentos?",
        "respuestas": [
            "Porque es ilegal y sancionado por la ley.",
            "Porque hacerlo impide una relación basada en el amor y la entrega genuina.",
            "Porque las personas no tienen deseos ni necesidades propias."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Tratar a las personas como instrumentos impide una relación auténtica basada en el amor y el respeto por el otro como un fin en sí mismo."
    },
    {
        "id": 52,
        "pregunta": "¿Cómo se entiende el 'compromiso' en el contexto del amor de amistad?",
        "respuestas": [
            "Como una limitación a la libertad personal.",
            "Como una muestra de lealtad y promesa tácita de estar en las buenas y en las malas.",
            "Como una obligación social sin importancia emocional."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El compromiso en el amor implica lealtad y una promesa de apoyo mutuo en todas las circunstancias."
    },
    {
        "id": 53,
        "pregunta": "¿Qué papel juega el 'sacrificio' en el amor de amistad según el texto?",
        "respuestas": [
            "Es innecesario y debe evitarse.",
            "Representa esfuerzos y acciones que realizamos por aquellos que amamos, incluso dando lo más preciado.",
            "Solo se da en relaciones familiares, no en amistades."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El sacrificio en el amor implica realizar esfuerzos y estar dispuesto a dar lo más preciado por el bienestar de quienes amamos."
    },
    {
        "id": 54,
        "pregunta": "Según el texto, ¿qué efecto tiene la lógica del utilitarismo en las relaciones amorosas?",
        "respuestas": [
            "Fortalece las relaciones al buscar el máximo beneficio para ambos.",
            "Hace que las relaciones sean más frágiles al valorar al otro solo por placer o utilidad inmediata.",
            "No tiene ningún efecto en las relaciones personales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El utilitarismo debilita las relaciones amorosas al valorar al otro solo por el placer o beneficio que proporciona, sin una base sólida de compromiso."
    },
    {
        "id": 55,
        "pregunta": "¿Por qué es importante comprender que el amor es un acto espiritual libre?",
        "respuestas": [
            "Porque nos permite formar lazos de amistad basados en decisiones conscientes y voluntarias.",
            "Porque elimina la necesidad de sacrificio y compromiso.",
            "Porque convierte el amor en una emoción pasajera."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Entender el amor como un acto espiritual libre nos permite formar lazos basados en elecciones conscientes y compromiso verdadero."
    },
    {
        "id": 56,
        "pregunta": "Según el texto, ¿cómo se perfecciona y realiza una persona al amar y entregarse?",
        "respuestas": [
            "Perdiendo su identidad en función del otro.",
            "A través de la posesión y control del ser amado.",
            "Perfeccionándose a sí misma por el acto de amar y entregarse."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Al amar y entregarse, la persona se perfecciona y realiza a sí misma, enriqueciendo su propia vida."
    },
    {
        "id": 57,
        "pregunta": "¿Qué rol juega la 'empatía' en el amor de amistad?",
        "respuestas": [
            "No es relevante en las relaciones de amistad.",
            "Es fundamental para entender y compartir los sentimientos del otro.",
            "Es un obstáculo para la identificación con el otro."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La empatía es esencial en el amor de amistad para comprender y conectar profundamente con el otro."
    },
    {
        "id": 58,
        "pregunta": "Según el texto, ¿qué sucede cuando se valora al otro solo por el placer o beneficio que proporciona?",
        "respuestas": [
            "Se fortalece la relación al maximizar la felicidad.",
            "La relación carece de bases sólidas y es propensa a terminar cuando cesa el beneficio.",
            "Se desarrolla una amistad virtuosa y duradera."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Si se valora al otro solo por placer o beneficio, la relación es frágil y puede terminar al desaparecer esas condiciones."
    },
    {
        "id": 59,
        "pregunta": "¿Cuál es la importancia de la 'lealtad' en las relaciones de amistad?",
        "respuestas": [
            "Es secundaria y no afecta la calidad de la amistad.",
            "Es esencial para generar confianza y seguridad en la relación.",
            "Es necesaria solo en relaciones familiares."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La lealtad es crucial en la amistad, ya que permite construir confianza y seguridad entre las personas."
    },
    {
        "id": 60,
        "pregunta": "Según el texto, ¿cómo contribuye la capacidad de amar al perfeccionamiento de nuestra naturaleza?",
        "respuestas": [
            "Nos permite aislarnos y evitar relaciones conflictivas.",
            "Facilita la convivencia con seres amados, enriqueciendo nuestra vida y llevando a una vida buena y feliz.",
            "No tiene impacto significativo en nuestro desarrollo personal."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La capacidad de amar nos ayuda a convivir con otros, perfeccionando nuestra naturaleza y conduciéndonos a una vida plena y feliz."
    },
    {
        "id": 61,
        "pregunta": "Según Boecio, ¿cómo se define a la persona?",
        "respuestas": [
            "Es una sustancia individual de naturaleza racional.",
            "Es un ser humano definido por sus accidentes y cualidades.",
            "Es un individuo que existe solo por sus características físicas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Boecio define a la persona como una 'sustancia individual de naturaleza racional', destacando su capacidad de existir por sí misma y su racionalidad."
    },
    {
        "id": 62,
        "pregunta": "En la definición de Boecio, ¿qué significa que la persona es una 'sustancia'?",
        "respuestas": [
            "Que depende de otros para existir.",
            "Que es capaz de existir por sí misma.",
            "Que es una cualidad de otro ser."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Una 'sustancia' es algo que puede existir por sí mismo, a diferencia de un 'accidente' que depende de otro ser para existir."
    },
    {
        "id": 63,
        "pregunta": "¿Cuál de los siguientes es un ejemplo de 'accidente' según el texto?",
        "respuestas": [
            "La altura de una persona.",
            "La existencia de una persona.",
            "La capacidad de razonar."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La altura es un 'accidente' o cualidad que no define esencialmente a la persona y no puede existir por sí misma."
    },
    {
        "id": 64,
        "pregunta": "Según el texto, ¿por qué la persona es 'individual'?",
        "respuestas": [
            "Porque comparte características comunes con otros seres.",
            "Porque es un ser irrepetible y original, un 'quién' con nombre propio.",
            "Porque carece de rasgos distintivos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La persona es 'individual' porque es única e irrepetible, con identidad propia y particularidades que le otorgan valor especial."
    },
    {
        "id": 65,
        "pregunta": "¿Qué significa que la persona es de 'naturaleza racional'?",
        "respuestas": [
            "Que siempre actúa sin emociones.",
            "Que posee inteligencia y voluntad, facultades propias de los seres humanos.",
            "Que su valor depende de su capacidad actual de pensar."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Ser de 'naturaleza racional' implica tener inteligencia y voluntad, características que definen a los seres humanos."
    },
    {
        "id": 66,
        "pregunta": "¿Cómo se relacionan los conceptos de 'acto' y 'potencia' con la definición de persona?",
        "respuestas": [
            "Una persona es definida solo por sus acciones presentes.",
            "Una persona tiene capacidades en potencia que pueden desarrollarse con el tiempo.",
            "Los conceptos de acto y potencia no se aplican a las personas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La persona no se define por su capacidad actual de pensar o querer, sino por tener esas facultades en potencia."
    },
    {
        "id": 67,
        "pregunta": "Según el texto, ¿por qué un embrión o un recién nacido es considerado una persona?",
        "respuestas": [
            "Porque ya ejerce plenamente su inteligencia y voluntad.",
            "Porque tiene en potencia las facultades racionales y es miembro de la especie humana.",
            "Porque depende completamente de su madre para sobrevivir."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El embrión o recién nacido es persona porque posee en potencia las facultades racionales y pertenece a la especie humana."
    },
    {
        "id": 68,
        "pregunta": "¿Cuál es la diferencia entre 'ser su cuerpo' y 'estar en su cuerpo' en relación con el embrión y la madre?",
        "respuestas": [
            "No hay diferencia; ambos significan lo mismo.",
            "El embrión 'está en' el cuerpo de la madre pero no es parte de su cuerpo.",
            "El embrión es completamente independiente y no depende de la madre."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El embrión 'está en' el cuerpo de la madre pero es un individuo distinto; no es parte del cuerpo de la madre."
    },
    {
        "id": 69,
        "pregunta": "Según el texto, ¿por qué las personas no pueden ser usadas como medios para fines ajenos?",
        "respuestas": [
            "Porque son seres racionales y libres con dignidad inherente.",
            "Porque pueden resistirse si no desean ser usados.",
            "Porque las leyes lo prohíben."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las personas tienen dignidad y valor intrínseco, por lo que no deben ser tratadas como medios para otros fines."
    },
    {
        "id": 70,
        "pregunta": "¿Cómo define Immanuel Kant el concepto de dignidad humana?",
        "respuestas": [
            "Como la capacidad de lograr objetivos personales.",
            "Como algo propio de cada persona que no puede ser usado como medio, sino que es siempre un fin en sí mismo.",
            "Como la habilidad de pensar y actuar racionalmente en todo momento."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Kant sostiene que la dignidad humana se basa en que cada persona es un fin en sí misma y no debe ser instrumentalizada."
    },
    {
        "id": 71,
        "pregunta": "¿Cuál es el valor único que posee la persona, según el texto?",
        "respuestas": [
            "Su capacidad de trabajar y producir bienes.",
            "Su dignidad inherente por ser un ser racional y libre.",
            "Su utilidad para la sociedad."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La persona posee una dignidad inherente que le otorga un valor único por ser un ser racional y libre."
    },
    {
        "id": 72,
        "pregunta": "Según el texto, ¿por qué las violaciones a la dignidad humana aún ocurren en la actualidad?",
        "respuestas": [
            "Porque las personas no son conscientes de sus derechos.",
            "Porque algunas prácticas consideran a las personas como medios para abaratar costos o enriquecerse.",
            "Porque es imposible evitar todas las injusticias."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las violaciones ocurren cuando se ve a las personas como medios para otros fines, vulnerando su dignidad."
    },
    {
        "id": 73,
        "pregunta": "¿Cuál es el primer y más fundamental de los derechos inalienables de la persona?",
        "respuestas": [
            "El derecho a la propiedad privada.",
            "El derecho a la libertad de expresión.",
            "El derecho a la vida."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El derecho a la vida es el primero y más fundamental de los derechos inalienables, base para todos los demás."
    },
    {
        "id": 74,
        "pregunta": "¿Qué se entiende por que la persona es un 'fin en sí misma'?",
        "respuestas": [
            "Que tiene un valor intrínseco y no debe ser usada como medio para otros fines.",
            "Que debe buscar siempre sus propios intereses sin considerar a los demás.",
            "Que no necesita relacionarse con otras personas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Ser un 'fin en sí misma' significa que la persona tiene valor por sí misma y no debe ser instrumentalizada."
    },
    {
        "id": 75,
        "pregunta": "Según el texto, ¿por qué es importante el autoconocimiento en la persona?",
        "respuestas": [
            "Para conocerse, poseerse y poder entregarse a una convivencia sana con otros.",
            "Para poder manipular mejor a los demás.",
            "Para aislarse y evitar relaciones sociales."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El autoconocimiento permite a la persona conocerse, poseerse y entregarse a otros, favoreciendo relaciones sanas."
    },
    {
        "id": 76,
        "pregunta": "¿Cuál es la relación entre poseerse a sí mismo y poder entregarse a otros?",
        "respuestas": [
            "No hay relación; son aspectos independientes.",
            "Solo al poseerse y conocerse uno puede entregarse plenamente a otros en un acto de amor.",
            "Al poseerse a sí mismo, uno no necesita de los demás."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Al conocerse y poseerse, la persona es capaz de entregarse a otros, abriéndose a una convivencia sana y encontrando plenitud."
    },
    {
        "id": 77,
        "pregunta": "¿Por qué las cosas tienen un valor diferente al de las personas?",
        "respuestas": [
            "Porque las cosas tienen valor monetario y pueden ser desechadas; las personas tienen dignidad y valor intrínseco.",
            "Porque las personas son inferiores a las cosas.",
            "Porque las cosas son más útiles que las personas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las cosas pueden ser reemplazadas; las personas tienen una dignidad inherente que no se pierde y no pueden ser tratadas como objetos."
    },
    {
        "id": 78,
        "pregunta": "¿Qué se entiende por 'derechos inalienables' de la persona?",
        "respuestas": [
            "Derechos que no pueden ser arrebatados y son inherentes a la persona.",
            "Derechos que pueden ser suspendidos bajo ciertas circunstancias.",
            "Derechos otorgados por el estado y sujetos a cambios legales."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los derechos inalienables son aquellos que no pueden ser quitados y son inherentes a la persona por su dignidad."
    },
    {
        "id": 79,
        "pregunta": "Según el texto, ¿cómo afecta la dependencia del embrión de la madre a su condición de individuo?",
        "respuestas": [
            "No afecta su condición de individuo; sigue siendo un ser humano distinto.",
            "Lo convierte en parte del cuerpo de la madre.",
            "Hace que no sea considerado un ser humano aún."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Aunque el embrión depende totalmente de la madre, es un individuo con su propio código genético; no es parte del cuerpo de la madre."
    },
    {
        "id": 80,
        "pregunta": "¿Cuál es el papel de la inteligencia y la voluntad en la definición de persona?",
        "respuestas": [
            "Son facultades operativas que definen a la persona como ser racional, aunque no siempre estén en acto.",
            "Solo son relevantes si se ejercen continuamente.",
            "No son importantes para la definición de persona."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La inteligencia y la voluntad son facultades que definen a la persona como ser racional, aunque no siempre se ejerzan en acto."
    },
    {
        "id": 81,
        "pregunta": "¿Por qué es incorrecto definir a la persona solo por su capacidad actual de pensar o querer?",
        "respuestas": [
            "Porque entonces no serían personas quienes duermen o están en coma.",
            "Porque todos siempre están pensando y queriendo.",
            "Porque la capacidad actual es lo único que importa."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Definir a la persona solo por su capacidad actual excluiría a quienes duermen o están en coma; la persona tiene esas facultades en potencia."
    },
    {
        "id": 82,
        "pregunta": "¿Qué importancia tiene el código genético en la consideración de una persona?",
        "respuestas": [
            "Es crucial, ya que cada ser humano tiene un código genético único que define su individualidad.",
            "Es irrelevante; lo importante es la apariencia física.",
            "Solo importa en estudios científicos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El código genético es único en cada persona y establece su individualidad y pertenencia a la especie humana."
    },
    {
        "id": 83,
        "pregunta": "Según el texto, ¿qué permite a la persona acercarse a la autorrealización y a la vida buena en sociedad?",
        "respuestas": [
            "El ejercicio de la libertad a la luz de las virtudes y el conocimiento de su propia naturaleza.",
            "El aislamiento y la evitación de relaciones.",
            "La búsqueda exclusiva de bienes materiales."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El ejercicio de la libertad orientado por virtudes y el autoconocimiento permite a la persona autorrealizarse y vivir bien en sociedad."
    },
    {
        "id": 84,
        "pregunta": "¿Qué rol juega la convivencia con otros en la realización personal?",
        "respuestas": [
            "Es esencial, ya que la persona despliega su ser con otros y encuentra plenitud al entregarse.",
            "Es innecesaria para la autorrealización.",
            "Es perjudicial y limita el desarrollo personal."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La convivencia y entrega a otros son esenciales para la realización personal, permitiendo desplegar su ser y encontrar plenitud."
    },
    {
        "id": 85,
        "pregunta": "¿Qué indica el hecho de que las personas no pierden su valor con el tiempo?",
        "respuestas": [
            "Que su dignidad es inherente y no se pierde, a diferencia de las cosas que pueden ser desechadas.",
            "Que siempre tienen el mismo valor monetario.",
            "Que no envejecen ni cambian con el tiempo."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las personas tienen una dignidad inherente que no se pierde, a diferencia de las cosas que pierden valor y pueden ser desechadas."
    },
    {
        "id": 86,
        "pregunta": "Según el texto, ¿qué marca todas las dimensiones del ser humano como el ser libre, la familia y la sociedad?",
        "respuestas": [
            "La verdad de la persona humana como un ser con dignidad y derechos inalienables.",
            "La necesidad de competir y superar a los demás.",
            "La importancia de acumular riquezas y poder."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La dignidad y los derechos inalienables de la persona humana marcan todas las dimensiones de su existencia."
    },
    {
        "id": 87,
        "pregunta": "¿Qué ejemplos da el texto de transgresiones a la dignidad humana?",
        "respuestas": [
            "Genocidios en guerras y formas de esclavitud.",
            "La mejora de las condiciones laborales.",
            "El avance de la tecnología."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El texto menciona genocidios y esclavitud como ejemplos de violaciones a la dignidad humana."
    },
    {
        "id": 88,
        "pregunta": "¿Qué se necesita para que una persona se 'posea' a sí misma, según el texto?",
        "respuestas": [
            "Desarrollar el autoconocimiento y saber sus límites y alcances.",
            "Depender completamente de otros para sus decisiones.",
            "Ignorar sus propias necesidades."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Para poseerse a sí misma, la persona debe conocerse, saber sus límites y alcances, y guiar sus acciones."
    },
    {
        "id": 89,
        "pregunta": "¿Por qué es importante el pudor y la intimidad en el desarrollo personal?",
        "respuestas": [
            "Porque permiten guardar un mundo interior formado por reflexión y experiencias.",
            "Porque ayudan a evitar cualquier interacción social.",
            "Porque son señales de debilidad."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El pudor y la intimidad protegen el mundo interior de la persona, formado por su reflexión y experiencias personales."
    },
    {
        "id": 90,
        "pregunta": "Según el texto, ¿qué sucede cuando las empresas ven a sus trabajadores como medios para abaratar costos?",
        "respuestas": [
            "Se vulnera la dignidad de las personas al tratarlas como medios y no como fines en sí mismos.",
            "Se mejora la economía global.",
            "Se promueve el bienestar de los trabajadores."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Cuando las empresas tratan a los trabajadores como medios para abaratar costos, vulneran su dignidad al no reconocerlos como fines en sí mismos."
    },
    {
        "id": 91,
        "pregunta": "Según el texto, ¿por qué se considera al ser humano como un ser social?",
        "respuestas": [
            "Porque la naturaleza humana siempre se desarrolla y perfecciona en la convivencia con otros.",
            "Porque los seres humanos son autosuficientes y no necesitan de otros.",
            "Porque los individuos pueden alcanzar la autorrealización en aislamiento."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El texto afirma que nuestra naturaleza se desarrolla y perfecciona en convivencia con otros, por lo que somos seres sociales."
    },
    {
        "id": 92,
        "pregunta": "¿Cuál es el primer núcleo donde recibimos afecto y aprendemos a relacionarnos, según el texto?",
        "respuestas": [
            "La sociedad en general.",
            "La familia.",
            "La escuela."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El texto menciona que la familia es el primer núcleo donde recibimos afecto y aprendemos a relacionarnos."
    },
    {
        "id": 93,
        "pregunta": "¿Cómo define Aristóteles al ser humano en relación con la sociedad?",
        "respuestas": [
            "Como un individuo que solo se preocupa por sí mismo.",
            "Como un animal político que establece lazos y construye comunidad.",
            "Como un ser autosuficiente que no necesita de otros."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Aristóteles define al ser humano como un animal político que establece lazos con los demás y construye comunidad."
    },
    {
        "id": 94,
        "pregunta": "Según el texto, ¿por qué necesitamos de la sociedad?",
        "respuestas": [
            "Para competir con otros y demostrar superioridad.",
            "Porque los seres humanos prefieren vivir solos.",
            "Para sobrevivir y cubrir necesidades básicas, tanto materiales como morales."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Necesitamos de la sociedad para vivir, cubrir necesidades básicas y acceder a bienes morales."
    },
    {
        "id": 95,
        "pregunta": "¿Cuál es el fin último de todo ser humano según la unidad dos mencionada en el texto?",
        "respuestas": [
            "Vivir aislado de los demás.",
            "Alcanzar la autorrealización y la felicidad.",
            "Acumular bienes materiales y riquezas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El texto indica que el fin último es alcanzar la autorrealización y la felicidad."
    },
    {
        "id": 96,
        "pregunta": "¿Qué significa que la existencia humana aislada es inviable, según el texto?",
        "respuestas": [
            "Que los seres humanos pueden vivir solos sin problemas.",
            "Que la sociedad existe porque es imposible que los humanos vivan aislados.",
            "Que es mejor evitar el contacto con otros."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El texto afirma que la existencia humana aislada es inviable, por eso existe la sociedad."
    },
    {
        "id": 97,
        "pregunta": "Según el texto, ¿por qué la familia es considerada la primera 'sociedad' humana?",
        "respuestas": [
            "Porque es una institución creada por el Estado.",
            "Porque es una comunidad natural donde se experimenta la sociabilidad y contribuye de manera única al bien de la sociedad.",
            "Porque es el lugar donde se acumulan bienes materiales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La familia es la primera sociedad humana porque es una comunidad natural donde se vive la sociabilidad y se contribuye al bien de la sociedad."
    },
    {
        "id": 98,
        "pregunta": "¿Qué establece el artículo 16 de la Declaración Universal de los Derechos Humanos respecto a la familia?",
        "respuestas": [
            "Que la familia debe ser controlada por el Estado en todas sus decisiones.",
            "Que la familia es un elemento prescindible en la sociedad moderna.",
            "Que la familia es el elemento natural y fundamental de la sociedad y tiene derecho a la protección de la sociedad y del Estado."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El artículo 16 establece que la familia es el elemento natural y fundamental de la sociedad y tiene derecho a protección."
    },
    {
        "id": 99,
        "pregunta": "¿Cómo define el texto el 'bien común'?",
        "respuestas": [
            "La suma de los bienes particulares de cada individuo.",
            "La acumulación de riquezas por parte de una minoría.",
            "El conjunto de condiciones necesarias para que individuos, familias e instituciones logren su mayor desarrollo."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El bien común es el conjunto de condiciones necesarias para el desarrollo pleno de todos los miembros de la sociedad."
    },
    {
        "id": 100,
        "pregunta": "Según el texto, ¿cuáles son los dos principios básicos que ayudan a conformar el bien común?",
        "respuestas": [
            "La solidaridad y la subsidiaridad.",
            "La acumulación de bienes y el consumismo.",
            "La competencia y el individualismo."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los principios de solidaridad y subsidiaridad ayudan a conformar el bien común."
    },
    {
        "id": 101,
        "pregunta": "¿Qué es la solidaridad según el texto?",
        "respuestas": [
            "La capacidad de actuar egoístamente sin considerar a los demás.",
            "Una obligación recíproca de los miembros para apoyarse y ayudarse mutuamente, que surge de la empatía.",
            "Un principio que promueve el individualismo y la competencia."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La solidaridad es la obligación recíproca de apoyarse mutuamente, surgida de la empatía."
    },
    {
        "id": 102,
        "pregunta": "¿Qué es el principio de subsidiaridad según el texto?",
        "respuestas": [
            "Un principio que promueve la competencia entre individuos.",
            "Que las sociedades de orden superior deben ayudar y promover a las menores para que desarrollen sus funciones sin sustituirlas.",
            "La idea de que las sociedades superiores deben sustituir a las inferiores en sus funciones."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La subsidiaridad implica que las sociedades superiores apoyen a las inferiores sin reemplazarlas."
    },
    {
        "id": 103,
        "pregunta": "¿Por qué es importante la política en la conformación del bien común, según el texto?",
        "respuestas": [
            "Porque solo se preocupa de intereses particulares.",
            "Porque permite la formación de elementos que permiten a las personas desplegar sus potencialidades.",
            "Porque impone restricciones a las libertades individuales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La política es importante porque facilita condiciones para que las personas desarrollen sus potencialidades y contribuye al bien común."
    },
    {
        "id": 104,
        "pregunta": "Según el texto, ¿cuál es la razón de ser de las acciones políticas y las instituciones sociales?",
        "respuestas": [
            "Acumular poder y riquezas para una minoría.",
            "Controlar y limitar a las personas para evitar conflictos.",
            "Ayudar a las personas a lograr su plenitud y velar por su dignidad."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las acciones políticas y las instituciones sociales existen para ayudar a las personas a lograr su plenitud y proteger su dignidad."
    },
    {
        "id": 105,
        "pregunta": "¿Por qué la actividad política debe estar vinculada a la ética, según el texto?",
        "respuestas": [
            "Porque es una actividad completamente separada de los valores morales.",
            "Porque la ética no tiene relación con la política.",
            "Porque trata de lo justo y lo injusto y debe estar al servicio de la persona humana."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La actividad política debe estar vinculada a la ética porque se ocupa de lo justo e injusto y debe velar por la dignidad humana."
    },
    {
        "id": 106,
        "pregunta": "Según el texto, ¿cómo contribuimos al bien común como seres sociales?",
        "respuestas": [
            "Desde nuestro trabajo y todas las acciones que realizamos, desarrollando nuestras habilidades en sociedad.",
            "Evitando participar en la sociedad y actuando de manera individualista.",
            "Acumulando riquezas personales sin considerar a los demás."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Contribuimos al bien común a través de nuestro trabajo y acciones, desarrollándonos en sociedad."
    },
    {
        "id": 107,
        "pregunta": "¿Por qué llamó Aristóteles al ser humano un ser político?",
        "respuestas": [
            "Porque el ser humano alcanza su plenitud en la vida pública y se organiza para lograr fines comunes.",
            "Porque todos los seres humanos deben dedicarse a la política profesionalmente.",
            "Porque el ser humano prefiere vivir aislado de los demás."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Aristóteles llamó al ser humano un ser político porque alcanza su plenitud en la vida pública y se organiza para fines comunes."
    },
    {
        "id": 108,
        "pregunta": "Según el texto, ¿qué papel juegan las virtudes como la prudencia y la justicia en la vida social?",
        "respuestas": [
            "Son innecesarias y pueden ser ignoradas.",
            "Solo importan en la vida privada y personal.",
            "Son necesarias para la vida social y contribuyen al bien común."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Las virtudes como la prudencia y la justicia son necesarias para la vida social y el bien común."
    },
    {
        "id": 109,
        "pregunta": "¿Cuál de las siguientes actitudes va en contra del bien común, según los ejemplos del texto?",
        "respuestas": [
            "Practicar la solidaridad y ayudar a los demás.",
            "Respetar las normas de convivencia social.",
            "Conducir un automóvil bajo los efectos del alcohol."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Conducir bajo los efectos del alcohol es una actitud que va en contra del bien común y puede dañar a personas inocentes."
    },
    {
        "id": 110,
        "pregunta": "Según el texto, ¿qué motiva a los bomberos a unirse voluntariamente y proteger vidas?",
        "respuestas": [
            "La búsqueda de beneficios económicos personales.",
            "El principio de solidaridad que los lleva a servir al bien común.",
            "La obligación impuesta por el Estado."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El principio de solidaridad motiva a los bomberos a unirse voluntariamente para proteger vidas y servir al bien común."
    }
]

export default antropologiaDB;