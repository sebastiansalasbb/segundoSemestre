const azureComputeVisionDb = [
    {
        "id": 1,
        "pregunta": "¿Cuál es la principal capacidad que ofrece Azure Computer Vision?",
        "respuestas": [
            "Permite el almacenamiento de grandes volúmenes de imágenes en la nube.",
            "Facilita que los sistemas comprendan y procesen imágenes mediante IA, identificando objetos, caras y textos.",
            "Automatiza la creación de modelos de datos para aplicaciones de bases de datos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Azure Computer Vision ayuda a los sistemas a comprender y procesar imágenes, clasificando su contenido, identificando objetos, rostros y hasta leyendo textos, como recibos."
    },
    {
        "id": 2,
        "pregunta": "¿Qué puede lograr una aplicación al integrar los servicios de Azure Cognitive Services para Computer Vision?",
        "respuestas": [
            "Acceder a funcionalidades avanzadas de reconocimiento de imágenes y objetos, mejorando la inteligencia de la aplicación.",
            "Optimizar el almacenamiento y transferencia de archivos multimedia entre diferentes ubicaciones geográficas.",
            "Proporcionar soporte para usuarios de IA sin necesidad de programación adicional."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Al integrar Azure Cognitive Services para Computer Vision, una aplicación puede realizar reconocimiento avanzado de imágenes, detectar objetos, caras y texto, lo que incrementa su capacidad de análisis visual."
    },
    {
        "id": 3,
        "pregunta": "¿Cuál es un uso común de Azure Computer Vision mencionado en el video?",
        "respuestas": [
            "Crear modelos predictivos de comportamiento del usuario basados en imágenes.",
            "Leer y extraer datos estructurados de documentos, como recibos o formularios.",
            "Optimizar la seguridad en redes empresariales mediante la IA."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Una de las funcionalidades mencionadas es la capacidad de leer y extraer información de documentos estructurados como recibos, lo que es útil para aplicaciones de procesamiento automatizado de documentos."
    },
    {
        "id": 4,
        "pregunta": "¿Por qué Azure Computer Vision es útil para desarrolladores que desean 'infundir' sus aplicaciones con IA?",
        "respuestas": [
            "Porque permite agregar fácilmente capacidades de análisis de imágenes y objetos a las aplicaciones sin necesidad de entrenar modelos complejos.",
            "Porque reduce significativamente los costos de almacenamiento de imágenes en la nube.",
            "Porque garantiza el acceso prioritario a los servicios de IA en Azure."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Azure Computer Vision facilita a los desarrolladores la integración de capacidades de análisis de imágenes en sus aplicaciones, sin la necesidad de construir modelos de IA desde cero."
    },
    {
        "id": 5,
        "pregunta": "¿Qué tipo de contenido permite procesar Azure Computer Vision según el video?",
        "respuestas": [
            "Solo imágenes estáticas.",
            "Imágenes, vídeos, objetos y texto.",
            "Documentos y bases de datos no relacionales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Azure Computer Vision puede procesar diversos tipos de contenido visual, incluyendo imágenes, vídeos, objetos y texto, lo que lo hace muy versátil para diferentes aplicaciones."
    },
    {
        "id": 6,
        "pregunta": "¿Qué representa una imagen en el contexto de los datos para un programa informático?",
        "respuestas": [
            "Una lista de palabras que describen la imagen.",
            "Una matriz de valores numéricos de píxeles.",
            "Una colección de colores almacenados en una tabla."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Para un programa informático, una imagen es una matriz de valores numéricos de píxeles, donde cada valor representa el nivel de brillo o color de un píxel en la imagen."
    },
    {
        "id": 7,
        "pregunta": "¿Cómo se representa una imagen en escala de grises?",
        "respuestas": [
            "Como una combinación de tres canales de color: rojo, verde y azul.",
            "Como una matriz bidimensional de valores que varían entre 0 (negro) y 255 (blanco).",
            "Como una lista de valores aleatorios que definen el brillo de cada píxel."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Una imagen en escala de grises se representa como una matriz bidimensional donde cada valor de píxel varía entre 0 (negro) y 255 (blanco), con tonos de gris en el medio."
    },
    {
        "id": 8,
        "pregunta": "¿Qué diferencia hay entre una imagen en escala de grises y una imagen a color?",
        "respuestas": [
            "Una imagen en escala de grises usa un solo canal de valores de píxeles, mientras que una imagen a color usa tres canales: rojo, verde y azul.",
            "Una imagen en escala de grises tiene más detalles que una imagen a color.",
            "Una imagen a color se almacena en formato de texto, mientras que la escala de grises utiliza números."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La principal diferencia es que una imagen en escala de grises usa un solo canal de valores de píxeles, mientras que una imagen a color usa tres canales (rojo, verde y azul) para representar los diferentes tonos de color."
    },
    {
        "id": 9,
        "pregunta": "¿Qué es un 'filtro' en el procesamiento de imágenes?",
        "respuestas": [
            "Un mecanismo que reduce el tamaño de una imagen.",
            "Una técnica que modifica los valores de píxel para crear efectos visuales, como resaltar bordes o desenfocar.",
            "Una herramienta que mejora la calidad del color de una imagen."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Un filtro en el procesamiento de imágenes es una técnica que altera los valores de los píxeles de una imagen para generar efectos visuales como resaltar bordes, desenfocar o dar nitidez."
    },
    {
        "id": 10,
        "pregunta": "¿Qué es un kernel en el contexto de los filtros de imágenes?",
        "respuestas": [
            "Un tipo de formato de imagen específico.",
            "Una pequeña matriz que se utiliza para aplicar un filtro a una imagen, calculando valores de píxeles mediante convolución.",
            "Una función matemática que convierte una imagen a blanco y negro."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Un kernel es una matriz pequeña que se utiliza en el procesamiento de imágenes para aplicar un filtro mediante convolución, calculando los nuevos valores de píxeles en función de los píxeles vecinos."
    },
    {
        "id": 11,
        "pregunta": "¿Qué efecto tiene el filtro Laplace en una imagen?",
        "respuestas": [
            "Desenfoca los detalles de la imagen.",
            "Resalta los bordes de los objetos en la imagen.",
            "Convierte la imagen en una versión en escala de grises."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El filtro Laplace es un tipo de filtro que resalta los bordes de los objetos en una imagen, ayudando a distinguir mejor las formas y contornos."
    },
    {
        "id": 12,
        "pregunta": "¿Cómo se ajustan los valores de píxel fuera del rango de 0 a 255 después de aplicar un filtro?",
        "respuestas": [
            "Se redondean al valor más cercano dentro del rango permitido.",
            "Se multiplican por un factor para reducir el rango.",
            "Se eliminan de la imagen."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los valores de píxel que caen fuera del rango de 0 a 255 después de aplicar un filtro se ajustan redondeándolos al valor más cercano dentro de este rango."
    },
    {
        "id": 13,
        "pregunta": "¿Qué es una red neuronal convolucional (CNN) en el contexto de Computer Vision?",
        "respuestas": [
            "Una red de comunicación entre dispositivos de IA.",
            "Una arquitectura de aprendizaje profundo que utiliza filtros para extraer características de imágenes.",
            "Un tipo de filtro de imágenes que aumenta la calidad visual."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Una CNN es una arquitectura de aprendizaje profundo que utiliza filtros para extraer características numéricas de imágenes, lo que permite a los modelos de IA realizar tareas como la clasificación de imágenes."
    },
    {
        "id": 14,
        "pregunta": "¿Qué función tienen los 'filtros' en una red neuronal convolucional (CNN)?",
        "respuestas": [
            "Almacenar las imágenes procesadas en un formato comprimido.",
            "Extraer características numéricas de las imágenes para entrenar el modelo.",
            "Eliminar información innecesaria de las imágenes antes de su procesamiento."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los filtros en una CNN se utilizan para extraer características de las imágenes al aplicar operaciones matemáticas que generan mapas de características numéricos."
    },
    {
        "id": 15,
        "pregunta": "¿Qué significa 'aplanar' los mapas de características en una CNN?",
        "respuestas": [
            "Reducir el tamaño de la imagen original.",
            "Convertir una matriz bidimensional de características en una matriz unidimensional.",
            "Eliminar características irrelevantes de la imagen."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Aplanar los mapas de características significa convertir la matriz bidimensional de valores de características en una única matriz unidimensional que luego se pasa a la red neuronal totalmente conectada."
    },
    {
        "id": 16,
        "pregunta": "¿Qué tipo de salida genera una CNN en un escenario de clasificación de imágenes?",
        "respuestas": [
            "Una lista de colores presentes en la imagen.",
            "Un conjunto de probabilidades que indica la categoría más probable de la imagen.",
            "Una nueva imagen mejorada visualmente."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La salida de una CNN en un escenario de clasificación de imágenes es un conjunto de probabilidades, donde cada valor indica la probabilidad de que la imagen pertenezca a una categoría específica."
    },
    {
        "id": 17,
        "pregunta": "¿Cuál es una de las principales ventajas de los modelos transformadores en el procesamiento del lenguaje natural (NLP)?",
        "respuestas": [
            "Permiten mejorar la calidad de las imágenes.",
            "Codifican palabras o frases en vectores numéricos para capturar sus relaciones semánticas.",
            "Aumentan la velocidad de entrenamiento de las redes neuronales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los modelos transformadores codifican palabras o frases como vectores numéricos que capturan relaciones semánticas entre los tokens, lo que ha permitido avances importantes en el procesamiento del lenguaje natural."
    },
    {
        "id": 18,
        "pregunta": "¿Qué son los modelos multimodales en el contexto de la IA y Computer Vision?",
        "respuestas": [
            "Modelos que procesan solo datos visuales.",
            "Modelos que combinan datos de diferentes fuentes, como imágenes y texto, para entender su relación.",
            "Modelos diseñados para mejorar la velocidad de procesamiento de imágenes."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los modelos multimodales combinan datos de diferentes fuentes, como imágenes y texto, para encapsular las relaciones entre ellos, lo que permite tareas avanzadas como el subtitulado automático de imágenes."
    },
    {
        "id": 19,
        "pregunta": "¿Qué es Florence en el contexto de los modelos de IA de Microsoft?",
        "respuestas": [
            "Un sistema operativo para gestionar grandes volúmenes de datos.",
            "Un modelo de base multimodal que se entrena con grandes volúmenes de imágenes y texto para diversas tareas de Computer Vision.",
            "Una herramienta de edición de imágenes en la nube."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Florence es un modelo multimodal de base de Microsoft que se entrena con grandes volúmenes de imágenes y texto, y se puede adaptar a diversas tareas como clasificación de imágenes, detección de objetos y subtitulado."
    },
    {
        "id": 20,
        "pregunta": "¿Cuál es una ventaja de utilizar un modelo de base como Florence?",
        "respuestas": [
            "Especifica solo un conjunto de tareas limitadas.",
            "Puede adaptarse a una variedad de tareas especializadas, como detección de objetos y subtitulado de imágenes.",
            "Reduce el tamaño de los modelos entrenados."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Florence, al ser un modelo de base, puede adaptarse a diversas tareas especializadas, lo que permite su uso en múltiples aplicaciones como la clasificación de imágenes, detección de objetos y generación de descripciones."
    },
    {
        "id": 21,
        "pregunta": "¿Cuál es una ventaja clave de utilizar el servicio Visión de Azure AI en lugar de entrenar tus propios modelos de Machine Learning?",
        "respuestas": [
            "Permite usar modelos precompilados y personalizables sin la necesidad de entrenar desde cero, lo que ahorra tiempo y recursos.",
            "Ofrece un almacenamiento más económico para imágenes.",
            "Optimiza el rendimiento de las aplicaciones web sin necesidad de programación."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Visión de Azure AI proporciona modelos precompilados que permiten crear soluciones de Computer Vision rápidamente sin necesidad de entrenar modelos desde cero, lo que ahorra tiempo y recursos."
    },
    {
        "id": 22,
        "pregunta": "¿Qué recurso se debe crear para usar Visión de Azure AI en una suscripción de Azure?",
        "respuestas": [
            "Un recurso específico para Visión de Azure AI o un recurso general de Servicios de Azure AI.",
            "Solo un recurso de almacenamiento en la nube.",
            "Una máquina virtual para entrenar modelos personalizados."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Para usar Visión de Azure AI, puedes crear un recurso específico para este servicio o utilizar un recurso general de Servicios de Azure AI, dependiendo de si necesitas otros servicios de IA o no."
    },
    {
        "id": 23,
        "pregunta": "¿Cuál de las siguientes funcionalidades NO es compatible con Visión de Azure AI?",
        "respuestas": [
            "Reconocimiento óptico de caracteres (OCR).",
            "Generación de subtítulos y descripciones para imágenes.",
            "Creación de animaciones a partir de imágenes."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Visión de Azure AI admite funciones como OCR y generación de subtítulos, pero no incluye funcionalidades para crear animaciones a partir de imágenes."
    },
    {
        "id": 24,
        "pregunta": "¿Qué tarea realiza la funcionalidad de reconocimiento óptico de caracteres (OCR) de Visión de Azure AI?",
        "respuestas": [
            "Identifica objetos dentro de una imagen.",
            "Detecta y extrae texto de una imagen.",
            "Genera subtítulos automáticos para vídeos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La funcionalidad OCR de Visión de Azure AI detecta y extrae texto de imágenes, lo que es útil en escenarios como la digitalización de etiquetas o documentos."
    },
    {
        "id": 25,
        "pregunta": "¿Qué tipo de datos devuelve Visión de Azure AI al detectar objetos en una imagen?",
        "respuestas": [
            "Solo el nombre del objeto detectado.",
            "El nombre del objeto detectado, una puntuación de confianza y las coordenadas del rectángulo de selección del objeto.",
            "Una descripción detallada del uso del objeto."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Cuando Visión de Azure AI detecta objetos en una imagen, devuelve el nombre del objeto, una puntuación de confianza y las coordenadas del rectángulo de selección que indica dónde está ubicado el objeto."
    },
    {
        "id": 26,
        "pregunta": "¿Cómo se utiliza la funcionalidad de etiquetado de características visuales en Visión de Azure AI?",
        "respuestas": [
            "Para crear etiquetas de metadatos asociadas a la imagen, que ayudan a resumir sus atributos y facilitar la búsqueda de imágenes.",
            "Para mejorar la calidad visual de la imagen mediante un análisis de metadatos.",
            "Para reemplazar objetos en la imagen por otros seleccionados por el usuario."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La funcionalidad de etiquetado de características visuales en Visión de Azure AI genera etiquetas de metadatos basadas en el contenido de la imagen, lo que permite indexar y buscar imágenes de manera más eficiente."
    },
    {
        "id": 27,
        "pregunta": "¿Qué permite hacer el entrenamiento de modelos personalizados en Visión de Azure AI?",
        "respuestas": [
            "Crear modelos adaptados a tareas específicas de clasificación de imágenes o detección de objetos con tus propias imágenes.",
            "Mejorar la resolución de las imágenes procesadas.",
            "Reducir el tamaño de las imágenes antes de procesarlas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Visión de Azure AI permite entrenar modelos personalizados, lo que es útil cuando los modelos predefinidos no cumplen con tus necesidades. Puedes usar tus propias imágenes para tareas específicas de clasificación o detección de objetos."
    },
    {
        "id": 28,
        "pregunta": "¿Cuál de los siguientes escenarios sería un ejemplo de uso de un modelo personalizado entrenado en Visión de Azure AI?",
        "respuestas": [
            "Detectar y etiquetar diferentes tipos de frutas en una imagen.",
            "Mejorar la calidad de las imágenes mediante un filtro de suavizado.",
            "Convertir imágenes en formato 3D."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un modelo personalizado en Visión de Azure AI puede entrenarse para detectar y etiquetar objetos específicos, como diferentes tipos de frutas en una imagen."
    },
    {
        "id": 29,
        "pregunta": "¿En qué se basa Computer Vision para manipular y analizar imágenes?",
        "respuestas": [
            "Marcas de tiempo en metadatos de fotografía.",
            "Píxeles.",
            "Nombres de archivo de imagen."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Computer Vision se basa en la manipulación y el análisis de píxeles, que son los componentes fundamentales que forman una imagen digital."
    },
    {
        "id": 30,
        "pregunta": "Quiere usar el servicio Visión de Azure AI para analizar imágenes y el servicio Lenguaje de Azure AI para analizar texto. Nuestro objetivo es que los desarrolladores necesiten únicamente una clave y un punto de conexión para acceder a todos los servicios. ¿Qué tipo de recurso debe crear en la suscripción de Azure?",
        "respuestas": [
            "Visión de Azure AI.",
            "Servicios de Azure AI.",
            "Azure OpenAI Service."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Debe crear un recurso de Servicios de Azure AI, que incluye múltiples servicios de IA como Visión de Azure AI y Lenguaje de Azure AI, permitiendo gestionar todo con una única clave y punto de conexión."
    },
    {
        "id": 31,
        "pregunta": "Quiere usar el servicio Visión de Azure AI para identificar la ubicación de los elementos individuales en una imagen. ¿Qué característica debe recuperar?",
        "respuestas": [
            "Objetos.",
            "Etiquetas visuales.",
            "Subtítulos densos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Para identificar la ubicación de los elementos individuales en una imagen, debe recuperar los 'objetos', ya que esta característica incluye las coordenadas de rectángulo de selección para localizar cada objeto detectado."
    },
    {
        "id": 32,
        "pregunta": "¿Qué tarea realiza la detección de caras en el contexto de la inteligencia artificial (IA)?",
        "respuestas": [
            "Localiza y analiza rostros humanos en imágenes o contenido de video.",
            "Detecta emociones a partir de expresiones faciales.",
            "Convierte imágenes en formato de video."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La detección de caras en IA se refiere a la capacidad de localizar y analizar rostros humanos en imágenes o contenido de video, permitiendo aplicaciones como el reconocimiento facial."
    },
    {
        "id": 33,
        "pregunta": "¿Cuál de las siguientes es una aplicación del reconocimiento facial en sistemas de seguridad?",
        "respuestas": [
            "Etiquetar automáticamente amigos conocidos en fotografías.",
            "Identificar rostros humanos en sistemas de cámaras de vigilancia para validar la identidad de una persona.",
            "Detectar emociones en el rostro de un usuario."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El reconocimiento facial se usa en sistemas de seguridad para identificar rostros humanos, como en cámaras de vigilancia o para validar la identidad de una persona en entradas seguras."
    },
    {
        "id": 34,
        "pregunta": "¿Cómo se utiliza el reconocimiento facial en redes sociales?",
        "respuestas": [
            "Para desbloquear dispositivos móviles mediante el rostro del usuario.",
            "Para etiquetar automáticamente a amigos conocidos en fotografías.",
            "Para analizar el cansancio del conductor en un automóvil."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "En redes sociales, el reconocimiento facial se utiliza para etiquetar automáticamente a amigos en fotografías, facilitando la identificación y organización de imágenes compartidas."
    },
    {
        "id": 35,
        "pregunta": "¿Cuál es un ejemplo de cómo el reconocimiento facial puede mejorar la seguridad vial?",
        "respuestas": [
            "Un sistema de supervisión inteligente puede monitorear la cara del conductor para detectar signos de cansancio.",
            "Un sistema de cámaras puede detectar si un peatón está cruzando la calle.",
            "El reconocimiento facial puede bloquear el acceso no autorizado a los automóviles."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El reconocimiento facial puede implementarse en sistemas de supervisión inteligente en automóviles para monitorear la cara del conductor y detectar si muestra signos de cansancio o no está prestando atención a la carretera."
    },
    {
        "id": 36,
        "pregunta": "¿Cómo puede ayudar el análisis facial en la publicidad?",
        "respuestas": [
            "Ayuda a dirigir los anuncios a una audiencia demográfica adecuada analizando las caras que aparecen en imágenes.",
            "Etiqueta productos en anuncios publicitarios en función de las características faciales.",
            "Convierte anuncios en contenido visual más atractivo mediante expresiones faciales."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El análisis facial puede ayudar a segmentar los anuncios hacia una audiencia específica, basándose en las características faciales de las personas que aparecen en las imágenes, lo que permite una publicidad más dirigida."
    },
    {
        "id": 37,
        "pregunta": "¿En qué escenario puede ser útil el reconocimiento facial para la identificación de personas desaparecidas?",
        "respuestas": [
            "En la supervisión de la actividad en las redes sociales.",
            "En la detección de personas desaparecidas mediante cámaras públicas que identifican rostros en el marco de una imagen.",
            "En la identificación de emociones faciales para alertar a las autoridades."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El reconocimiento facial puede utilizarse en cámaras públicas para identificar si una persona desaparecida aparece en el campo de visión de la cámara, lo que es útil en la búsqueda de personas."
    },
    {
        "id": 38,
        "pregunta": "¿Cómo puede utilizarse el reconocimiento facial en quioscos de puertos de entrada?",
        "respuestas": [
            "Para validar la identidad de una persona que tiene un permiso de entrada especial.",
            "Para controlar el tráfico de personas dentro del puerto.",
            "Para etiquetar automáticamente los equipajes en los quioscos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El reconocimiento facial en quioscos de puertos de entrada puede validar la identidad de personas que poseen permisos de entrada especiales, agilizando el proceso de control de acceso."
    },
    {
        "id": 39,
        "pregunta": "¿Qué devuelve la detección de caras en una imagen?",
        "respuestas": [
            "Coordenadas de puntos de características faciales, como los ojos y la nariz.",
            "Coordenadas de un rectángulo que rodea la región de la imagen donde se detecta un rostro humano.",
            "Una lista de personas identificadas en la imagen."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La detección de caras implica la identificación de regiones de una imagen que contienen un rostro humano, devolviendo las coordenadas de un cuadro de límite que forma un rectángulo alrededor de la cara."
    },
    {
        "id": 40,
        "pregunta": "¿Qué información puede proporcionar el análisis facial además de la ubicación de un rostro?",
        "respuestas": [
            "Datos sobre características faciales específicas, como los ojos, la nariz, las cejas y los labios.",
            "Una descripción detallada de las emociones de la persona.",
            "Un mapa de calor de la imagen analizada."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El análisis facial puede proporcionar información detallada sobre características faciales específicas como los ojos, la nariz, las cejas y los labios, permitiendo un análisis más profundo del rostro."
    },
    {
        "id": 41,
        "pregunta": "¿Qué es el reconocimiento facial en el contexto del análisis de caras?",
        "respuestas": [
            "El proceso de identificar las emociones faciales de un individuo.",
            "La identificación de individuos conocidos basándose en sus rasgos faciales mediante el entrenamiento de un modelo de aprendizaje automático.",
            "La técnica de ocultar partes de un rostro en una imagen por motivos de privacidad."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El reconocimiento facial es la identificación de individuos conocidos mediante un modelo de aprendizaje automático entrenado con varias imágenes de esas personas, permitiendo su detección en imágenes nuevas."
    },
    {
        "id": 42,
        "pregunta": "¿Cómo se entrena un modelo de reconocimiento facial para identificar a individuos específicos?",
        "respuestas": [
            "Analizando expresiones faciales en tiempo real.",
            "Utilizando varias imágenes de un individuo para que el modelo pueda reconocerlo en imágenes nuevas.",
            "Recopilando datos sobre el comportamiento de la persona en diferentes entornos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El modelo de reconocimiento facial se entrena utilizando varias imágenes de un individuo para que pueda detectar y reconocer a esa persona en imágenes nuevas en las que no se ha entrenado directamente."
    },
    {
        "id": 43,
        "pregunta": "¿Qué servicio de Azure AI proporciona modelos entrenados previamente para detectar, reconocer y analizar caras?",
        "respuestas": [
            "Azure Cognitive Search.",
            "Azure OpenAI Service.",
            "Face de Azure AI."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El servicio Face de Azure AI proporciona modelos entrenados previamente para la detección, el reconocimiento y el análisis de caras, facilitando la implementación de soluciones de reconocimiento facial."
    },
    {
        "id": 44,
        "pregunta": "¿Qué características faciales pueden ser detectadas por el análisis facial para mejorar modelos de IA?",
        "respuestas": [
            "La estructura ósea completa del individuo.",
            "Características faciales como la nariz, los ojos, las cejas y los labios.",
            "El comportamiento y las acciones de la persona en el video."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El análisis facial puede detectar características específicas como la nariz, los ojos, las cejas y los labios, las cuales se pueden usar para entrenar modelos de IA más precisos en el reconocimiento facial."
    },
    {
        "id": 45,
        "pregunta": "¿Cuál de los servicios de Azure AI proporciona la gama más amplia de funcionalidades para el análisis facial?",
        "respuestas": [
            "Visión de Azure AI.",
            "Video Indexer de Azure AI.",
            "Face de Azure AI."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El servicio Face de Azure AI ofrece la gama más amplia de funcionalidades para el análisis facial, incluyendo detección, reconocimiento y análisis de caras."
    },
    {
        "id": 46,
        "pregunta": "¿Qué tipo de atributo puede devolver el servicio Face de Azure AI sobre una cara detectada en una imagen?",
        "respuestas": [
            "Datos sobre la posición de la cabeza en un espacio 3D.",
            "La nacionalidad de la persona en la imagen.",
            "La edad exacta de la persona detectada."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El servicio Face de Azure AI puede devolver datos sobre la orientación de la cabeza de una persona en un espacio 3D, junto con otros atributos como el uso de gafas, desenfoque, oclusión, etc."
    },
    {
        "id": 47,
        "pregunta": "¿Qué atributo relacionado con la calidad de la imagen puede afectar al análisis facial en Azure Face AI?",
        "respuestas": [
            "Nivel de desenfoque, exposición y ruido visual en la imagen.",
            "El color de fondo de la imagen.",
            "La distancia del rostro a la cámara."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La calidad del análisis facial puede verse afectada por atributos como el desenfoque, la exposición (infra o sobreexposición) y el nivel de ruido visual en la imagen."
    },
    {
        "id": 48,
        "pregunta": "¿Qué se requiere para acceder a funcionalidades avanzadas del servicio Face de Azure AI, como la identificación facial o la verificación facial?",
        "respuestas": [
            "Un formulario de entrada para cumplir con la directiva de acceso limitado.",
            "Una imagen en formato GIF o BMP.",
            "Una cámara de alta resolución."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Para acceder a funcionalidades avanzadas, como la verificación e identificación facial, es necesario enviar un formulario de entrada para cumplir con la directiva de acceso limitado de Microsoft para el uso responsable de IA."
    },
    {
        "id": 49,
        "pregunta": "¿Qué consideraciones ayudan a mejorar la precisión de la detección facial en Azure Face AI?",
        "respuestas": [
            "Usar imágenes con un tamaño de archivo de 6 MB o menos y caras con un tamaño entre 36 x 36 píxeles y 4096 x 4096 píxeles.",
            "Utilizar imágenes en formato PDF y asegurarse de que el fondo sea de color uniforme.",
            "Reducir la resolución de la imagen para que sea más rápida de procesar."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Para obtener mejores resultados, es importante asegurarse de que las imágenes tengan un tamaño de archivo de 6 MB o menos y que las caras detectadas estén en el rango de 36 x 36 a 4096 x 4096 píxeles."
    },
    {
        "id": 50,
        "pregunta": "¿Qué tipo de recurso en Azure debería crear si solo quiere usar el servicio Face de Azure AI?",
        "respuestas": [
            "Servicios de Azure AI.",
            "Face de Azure AI.",
            "Video Indexer de Azure AI."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Debe crear un recurso específico de Face de Azure AI si no tiene intención de usar otros servicios de Azure AI o si desea realizar un seguimiento específico de los costes y la utilización del servicio Face."
    },
    {
        "id": 51,
        "pregunta": "¿Qué tipo de oclusión puede afectar al análisis facial en una imagen?",
        "respuestas": [
            "Cuando los objetos, como las manos, bloquean parte del rostro en la imagen.",
            "La presencia de múltiples caras en la misma imagen.",
            "El uso de colores brillantes en la imagen."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La oclusión, como cuando un objeto (como una mano) bloquea parte de la cara, puede afectar la precisión del análisis facial realizado por Azure Face AI."
    },
    {
        "id": 52,
        "pregunta": "¿Cómo indica el servicio Face la ubicación de las caras en las imágenes?",
        "respuestas": [
            "Un par de coordenadas para cada una de las caras, que indican el centro de la cara.",
            "Dos pares de coordenadas para cada una de las caras, que indican la ubicación de los ojos.",
            "Un conjunto de coordenadas para cada una de las caras, que define un cuadro de límite rectangular alrededor de la superficie."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El servicio Face indica la ubicación de las caras en las imágenes devolviendo un conjunto de coordenadas que define un cuadro de límite rectangular alrededor de la superficie del rostro."
    },
    {
        "id": 53,
        "pregunta": "¿Cuál de los siguientes aspectos puede afectar a la detección facial?",
        "respuestas": [
            "Gafas.",
            "Ángulos extremos.",
            "Velocidad rápida del obturador."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los ángulos extremos de la cara pueden afectar la precisión de la detección facial, ya que los algoritmos pueden tener dificultades para identificar correctamente el rostro si está inclinado o en una posición poco común."
    },
    {
        "id": 54,
        "pregunta": "¿Qué dos acciones son necesarias para probar las funcionalidades del servicio Face?",
        "respuestas": [
            "Cree un recurso de Búsqueda de Azure AI y abra Vision Studio.",
            "Cree un recurso Face y abra Vision Studio.",
            "Cree un recurso Face y abra Estudio de IA de Azure."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Correcto: El recurso Face tiene funcionalidades de detección de caras y se puede usar en Vision Studio para comprender sus funcionalidades."
    },
    {
        "id": 55,
        "pregunta": "¿Qué permite hacer el reconocimiento óptico de caracteres (OCR) en una imagen?",
        "respuestas": [
            "Analizar imágenes para mejorar su calidad.",
            "Detectar y convertir el texto presente en la imagen en un formato legible por la máquina.",
            "Identificar objetos en la imagen y clasificarlos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El reconocimiento óptico de caracteres (OCR) permite detectar texto en una imagen y convertirlo en un formato legible por la máquina para su posterior procesamiento."
    },
    {
        "id": 56,
        "pregunta": "¿En qué escenarios puede ser útil el uso de OCR?",
        "respuestas": [
            "En la creación de modelos de reconocimiento de voz.",
            "En la digitalización de documentos como historiales clínicos o notas manuscritas.",
            "Para mejorar la resolución de las imágenes antes de imprimirlas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El OCR es útil en escenarios como la digitalización de documentos, historiales clínicos, notas manuscritas, o cheques, donde es necesario convertir texto impreso o manuscrito en un formato digital."
    },
    {
        "id": 57,
        "pregunta": "¿Cuál es una ventaja clave del uso de tecnologías OCR en procesos empresariales?",
        "respuestas": [
            "Permite mejorar la resolución de las imágenes para su posterior impresión.",
            "Elimina la necesidad de introducir datos manualmente, mejorando la velocidad y la eficacia del trabajo.",
            "Permite analizar imágenes para detectar emociones faciales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Una de las principales ventajas del OCR es que automatiza el procesamiento del texto, eliminando la necesidad de introducir datos manualmente y mejorando así la velocidad y eficacia del trabajo."
    },
    {
        "id": 58,
        "pregunta": "¿Qué tipo de texto puede detectar OCR en una imagen?",
        "respuestas": [
            "Solo texto impreso.",
            "Tanto texto impreso como manuscrito.",
            "Solo texto manuscrito."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las tecnologías OCR pueden detectar tanto texto impreso como manuscrito, lo que es útil para una amplia gama de aplicaciones como la digitalización de documentos y la captura de notas manuscritas."
    },
    {
        "id": 59,
        "pregunta": "¿Qué combinación de tecnologías de inteligencia artificial se utiliza para procesar texto escrito o impreso en imágenes?",
        "respuestas": [
            "Visión artificial y procesamiento del lenguaje natural.",
            "Reconocimiento de voz y aprendizaje profundo.",
            "Procesamiento de texto y redes neuronales convolucionales."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El procesamiento de texto en imágenes mezcla la visión artificial para 'leer' el texto y el procesamiento del lenguaje natural para darle sentido al contenido detectado."
    },
    {
        "id": 60,
        "pregunta": "¿Qué tipo de tecnología se utiliza en el reconocimiento óptico de caracteres (OCR) para detectar texto en imágenes?",
        "respuestas": [
            "Filtros de imagen basados en inteligencia artificial.",
            "Modelos de Machine Learning entrenados para reconocer letras, números y otros elementos de texto.",
            "Algoritmos de clasificación de imágenes basados en color."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El OCR utiliza modelos de Machine Learning entrenados para reconocer formas individuales como letras, números y otros elementos de texto, lo que permite extraer texto de imágenes."
    },
    {
        "id": 61,
        "pregunta": "¿Qué tipo de archivos puede procesar el motor de OCR de la Read API de Visión de Azure AI?",
        "respuestas": [
            "Solo archivos de imagen en formato PNG.",
            "Imágenes, archivos PDF y TIFF.",
            "Solo documentos en formato Word."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El motor de OCR de la Read API de Visión de Azure AI puede extraer texto de imágenes, archivos PDF y TIFF, lo que lo hace versátil en distintos escenarios de procesamiento de texto."
    },
    {
        "id": 62,
        "pregunta": "¿Cómo organiza los resultados la Read API de Visión de Azure AI al extraer texto de una imagen?",
        "respuestas": [
            "Por palabras y caracteres individuales, sin información de su posición.",
            "En una jerarquía de páginas, líneas y palabras, cada una con coordenadas de cuadro de límite.",
            "Por párrafos y bloques de texto únicamente."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La Read API organiza los resultados en una jerarquía de páginas, líneas y palabras, y cada elemento incluye coordenadas de cuadro de límite que indican su posición en la página."
    },
    {
        "id": 63,
        "pregunta": "¿Cuál es una ventaja del motor Read OCR de Visión de Azure AI?",
        "respuestas": [
            "Está optimizado para imágenes con una cantidad significativa de texto o con ruido visual considerable.",
            "Solo puede procesar imágenes en alta resolución sin ruido visual.",
            "Solo procesa texto impreso, no manuscrito."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El motor Read OCR de Visión de Azure AI está optimizado para manejar imágenes que tienen mucho texto o ruido visual considerable, lo que lo hace útil en escenarios donde la calidad de la imagen puede no ser ideal."
    },
    {
        "id": 64,
        "pregunta": "¿Cuál es la diferencia principal entre un recurso de Visión de Azure AI y un recurso de Servicios de Azure AI?",
        "respuestas": [
            "El recurso de Visión de Azure AI está limitado a análisis de imágenes, mientras que Servicios de Azure AI incluye otros servicios como Lenguaje y Voz.",
            "El recurso de Servicios de Azure AI no puede realizar análisis de imágenes.",
            "El recurso de Visión de Azure AI solo permite procesar texto."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El recurso de Servicios de Azure AI incluye Visión de Azure AI y otros servicios de IA como Lenguaje y Voz, lo que lo hace más versátil si se usan múltiples servicios de IA, mientras que el recurso específico de Visión de Azure AI solo se centra en análisis de imágenes."
    },
    {
        "id": 65,
        "pregunta": "¿Cuál es una de las formas de acceder a las API de Visión de Azure AI sin necesidad de codificación?",
        "respuestas": [
            "Usando kits de desarrollo de software (SDK) como Python o C#.",
            "A través de Vision Studio, que ofrece una interfaz gráfica de usuario.",
            "Mediante la API de REST para integrarla en una aplicación personalizada."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Vision Studio permite acceder a las API de Visión de Azure AI sin necesidad de codificación mediante una interfaz gráfica de usuario."
    },
    {
        "id": 66,
        "pregunta": "¿Qué herramienta en Vision Studio se puede usar para probar el motor de Read OCR?",
        "respuestas": [
            "El icono Extraer texto de imágenes en la sección de Reconocimiento óptico de caracteres.",
            "El icono de Detección de objetos en la página de inicio.",
            "El icono de Análisis de emociones."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "En Vision Studio, puedes seleccionar el icono Extraer texto de imágenes en la sección de Reconocimiento óptico de caracteres para probar el motor de Read OCR."
    },
    {
        "id": 67,
        "pregunta": "¿Qué tipo de información devuelve Vision Studio después de analizar una imagen con OCR?",
        "respuestas": [
            "Un archivo PDF con el contenido textual de la imagen.",
            "Resultados sin procesar en formato JSON, incluyendo las coordenadas de los cuadros delimitadores y el texto detectado.",
            "Un reporte gráfico que muestra las palabras más comunes de la imagen."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Vision Studio devuelve los resultados en formato JSON, que incluye información sobre la ubicación de los cuadros delimitadores y el texto detectado en la imagen."
    },
    {
        "id": 68,
        "pregunta": "Para desarrollar una aplicación personalizada de OCR basada en Visión de Azure AI, ¿qué herramienta adicional se necesita?",
        "respuestas": [
            "Solo Vision Studio.",
            "Un SDK o una API de REST.",
            "Una suscripción adicional a Azure Cognitive Search."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Aunque Vision Studio permite probar las funcionalidades de OCR, para desarrollar una aplicación personalizada es necesario trabajar con un SDK o una API de REST."
    },
    {
        "id": 69,
        "pregunta": "Querrá extraer texto de imágenes y, luego, usar Lenguaje de Azure AI para analizar el texto. Nuestro objetivo es que los desarrolladores necesiten únicamente una clave y un punto de conexión para acceder a todos los servicios. ¿Qué tipo de recurso debemos crear en la suscripción de Azure?",
        "respuestas": [
            "Visión de Azure AI.",
            "Servicios de Azure AI.",
            "Lenguaje de Azure AI."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Para usar tanto Visión de Azure AI como Lenguaje de Azure AI con una sola clave y punto de conexión, se debe crear un recurso de Servicios de Azure AI, ya que este tipo de recurso permite gestionar múltiples servicios de IA desde un solo punto."
    },
    {
        "id": 70,
        "pregunta": "Planea usar Read API de Visión de Azure AI. ¿Qué resultados puede proporcionar Read API?",
        "respuestas": [
            "Resultados organizados en páginas, líneas y palabras.",
            "Solo las coordenadas del rectángulo delimitador.",
            "Resultados organizados por páginas que tienen fotografías primero y luego páginas que solo tienen texto."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La Read API de Visión de Azure AI devuelve resultados organizados en una jerarquía que incluye páginas, líneas y palabras, con las coordenadas de los cuadros delimitadores y el texto detectado."
    },
    {
        "id": 71,
        "pregunta": "¿Cuál es la principal función de la Read API de Visión de Azure AI?",
        "respuestas": [
            "Mejorar la calidad de las imágenes mediante filtros de IA.",
            "Extraer grandes cantidades de texto escrito o manuscrito de imágenes.",
            "Clasificar imágenes en función de su contenido visual."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La Read API de Visión de Azure AI está diseñada para extraer grandes cantidades de texto escrito o manuscrito de imágenes, facilitando su procesamiento."
    },
    {
        "id": 72,
        "pregunta": "¿Qué se recomienda hacer con los recursos en Azure una vez que finaliza un proyecto?",
        "respuestas": [
            "Dejar los recursos activos indefinidamente para posibles futuros proyectos.",
            "Identificar si aún necesita los recursos creados y eliminar aquellos que ya no son necesarios.",
            "Guardar todos los recursos en una base de datos para futuros análisis."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Se recomienda identificar si aún necesita los recursos creados y eliminar aquellos que ya no sean necesarios para evitar costos adicionales en Azure."
    },
    {
        "id": 73,
        "pregunta": "¿Cómo se puede eliminar un grupo de recursos en Azure después de finalizar un proyecto?",
        "respuestas": [
            "Usar la opción 'Detener' en el grupo de recursos para pausarlo temporalmente.",
            "Acceder a la página Grupos de recursos en Azure Portal, seleccionar el grupo y hacer clic en 'Eliminar grupo de recursos'.",
            "Cambiar la configuración del grupo de recursos a modo inactivo en el panel de control de Azure."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Para eliminar un grupo de recursos en Azure, debe ir a la página de Grupos de recursos en Azure Portal, seleccionar el grupo y hacer clic en 'Eliminar grupo de recursos'."
    },
















]

export default azureComputeVisionDb