const azureLenguajeNaturalDB = [

    {
        "id": 1,
        "pregunta": "¿Qué área de la inteligencia artificial permite a los sistemas informáticos interpretar y responder a textos escritos o hablados de forma similar a los humanos?",
        "respuestas": [
            "Visión artificial.",
            "Procesamiento del lenguaje natural (NLP).",
            "Análisis predictivo."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El procesamiento del lenguaje natural (NLP) es el área de la inteligencia artificial que se encarga de interpretar y responder a textos escritos o hablados de manera similar a los humanos."
    },
    {
        "id": 2,
        "pregunta": "¿Qué técnica del procesamiento del lenguaje natural se utiliza para extraer información del texto no estructurado?",
        "respuestas": [
            "Análisis de texto.",
            "Reconocimiento de imágenes.",
            "Transcripción de audio."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El análisis de texto es un proceso del procesamiento del lenguaje natural que permite extraer información útil de textos no estructurados."
    },
    {
        "id": 3,
        "pregunta": "¿Cuál de las siguientes aplicaciones se puede crear utilizando el procesamiento del lenguaje natural?",
        "respuestas": [
            "Una aplicación que clasifique imágenes según su contenido.",
            "Un analizador de redes sociales que detecta la opinión de los usuarios sobre una campaña de marketing.",
            "Un sistema que realice predicciones sobre el clima basado en datos históricos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El procesamiento del lenguaje natural puede ser utilizado para crear aplicaciones como analizadores de redes sociales que detecten la opinión de los usuarios sobre campañas de marketing, entre otros usos."
    },
    {
        "id": 4,
        "pregunta": "¿Qué servicio de Microsoft basado en la nube ofrece capacidades para comprender y analizar texto?",
        "respuestas": [
            "Visión de Azure AI.",
            "Servicios de Azure AI.",
            "Lenguaje de Azure AI."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Lenguaje de Azure AI es un servicio basado en la nube que incluye funcionalidades para comprender y analizar texto, como análisis de sentimiento, identificación de frases clave y reconocimiento de lenguaje conversacional."
    },
    {
        "id": 5,
        "pregunta": "¿Qué funcionalidad NO está incluida en Lenguaje de Azure AI?",
        "respuestas": [
            "Análisis de sentimiento.",
            "Identificación de frases clave.",
            "Reconocimiento de imágenes."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Lenguaje de Azure AI incluye funcionalidades como el análisis de sentimiento y la identificación de frases clave, pero no el reconocimiento de imágenes, que pertenece a Visión de Azure AI."
    },
    {
        "id": 6,
        "pregunta": "¿Cuál de las siguientes funcionalidades permite Lenguaje de Azure AI?",
        "respuestas": [
            "Detección de objetos en imágenes.",
            "Resumen de textos.",
            "Generación de gráficos a partir de datos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Lenguaje de Azure AI incluye una funcionalidad para resumir textos, lo que ayuda a extraer la información más relevante de grandes cantidades de contenido escrito."
    },
    {
        "id": 7,
        "pregunta": "¿Cuál es el primer paso para analizar un corpus de texto?",
        "respuestas": [
            "Clasificar las palabras según su significado.",
            "Dividir el texto en tokens.",
            "Aplicar algoritmos de clasificación de texto."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El primer paso en el análisis de un corpus es dividirlo en tokens, que son unidades individuales, como palabras o combinaciones de palabras y signos de puntuación."
    },
    {
        "id": 8,
        "pregunta": "¿Qué es la normalización de texto en el contexto de la tokenización?",
        "respuestas": [
            "Cambiar todas las palabras a minúsculas y eliminar puntuación.",
            "Identificar las palabras clave de un texto.",
            "Agrupar frases en bigramas y trigramas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La normalización de texto implica cambiar todas las palabras a minúsculas y eliminar puntuación, lo que puede mejorar el rendimiento del análisis de palabras basado en frecuencia."
    },
    {
        "id": 9,
        "pregunta": "¿Qué técnica se utiliza para agrupar palabras relacionadas por su raíz común?",
        "respuestas": [
            "Tokenización.",
            "Lematización.",
            "TF-IDF."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La lematización es la técnica que consolida palabras con la misma raíz, como 'power', 'powered' y 'powerful', para tratarlas como el mismo token."
    },
    {
        "id": 10,
        "pregunta": "¿Qué método permite calcular la relevancia de una palabra en un documento en comparación con otros documentos dentro de un corpus?",
        "respuestas": [
            "Análisis de frecuencia simple.",
            "Tokenización.",
            "TF-IDF."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "TF-IDF (Frecuencia de término: Frecuencia inversa del documento) es una técnica que mide la relevancia de una palabra comparando su frecuencia en un documento con su frecuencia en todo el corpus."
    },
    {
        "id": 11,
        "pregunta": "¿Qué técnica se utiliza para entrenar un modelo de clasificación de textos con opiniones positivas o negativas?",
        "respuestas": [
            "Tokenización.",
            "Análisis de sentimiento.",
            "Regresión logística."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La regresión logística es una técnica de clasificación utilizada para entrenar modelos de aprendizaje automático que pueden clasificar texto como positivo o negativo, por ejemplo, en análisis de opiniones."
    },
    {
        "id": 12,
        "pregunta": "En un modelo de lenguaje basado en incrustaciones de tokens, ¿qué indica cuando dos tokens están cerca uno del otro en el espacio multidimensional?",
        "respuestas": [
            "Que los tokens son semánticamente similares.",
            "Que los tokens representan el mismo término.",
            "Que los tokens pertenecen al mismo documento."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "En los modelos de lenguaje basados en incrustaciones, cuanto más cerca estén dos tokens en el espacio vectorial, más relacionados están semánticamente."
    },
    {
        "id": 13,
        "pregunta": "¿Cuál es el principal objetivo del análisis de sentimiento en el procesamiento del lenguaje natural?",
        "respuestas": [
            "Identificar palabras clave dentro de un texto.",
            "Clasificar el texto como positivo o negativo.",
            "Traducción automática de un idioma a otro."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El análisis de sentimiento tiene como objetivo clasificar el texto en categorías, generalmente como positivo o negativo, para interpretar las opiniones expresadas en el mismo."
    },
    {
        "id": 14,
        "pregunta": "¿Qué característica de Lenguaje de Azure AI identifica personas, lugares y eventos en un texto no estructurado?",
        "respuestas": [
            "Extracción de frases clave.",
            "Reconocimiento de entidades con nombre.",
            "Análisis de opinión."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La característica de reconocimiento de entidades con nombre en Lenguaje de Azure AI identifica entidades como personas, lugares y eventos dentro de un texto."
    },
    {
        "id": 15,
        "pregunta": "¿Qué funcionalidad de Lenguaje de Azure AI se utiliza para identificar información sensible, como números de teléfono o correos electrónicos?",
        "respuestas": [
            "Detección de idioma.",
            "Vinculación de entidad.",
            "Detección de información de identificación personal (PII)."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La detección de información de identificación personal (PII) identifica datos sensibles como números de teléfono, correos electrónicos o información de salud personal."
    },
    {
        "id": 16,
        "pregunta": "¿Qué devuelve la funcionalidad de detección de idioma de Lenguaje de Azure AI al analizar un texto?",
        "respuestas": [
            "El idioma predominante, un código ISO 639-1 y una puntuación de confianza.",
            "Una lista de entidades reconocidas y sus URLs de Wikipedia.",
            "Un resumen de los puntos principales del texto."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La detección de idioma devuelve el nombre del idioma, un código ISO 639-1 (como 'en' para inglés), y una puntuación de confianza basada en el análisis del texto."
    },
    {
        "id": 17,
        "pregunta": "Si quieres identificar los temas principales de un texto no estructurado, ¿qué funcionalidad de Lenguaje de Azure AI usarías?",
        "respuestas": [
            "Análisis de opinión.",
            "Extracción de frases clave.",
            "Detección de información de identificación personal (PII)."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La extracción de frases clave identifica los conceptos principales del texto no estructurado, lo que ayuda a resumir los puntos más relevantes."
    },
    {
        "id": 18,
        "pregunta": "¿Qué técnica utiliza Lenguaje de Azure AI para devolver enlaces a artículos de Wikipedia cuando detecta entidades conocidas en un texto?",
        "respuestas": [
            "Vinculación de entidad.",
            "Detección de frases clave.",
            "Análisis de sentimiento."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La vinculación de entidad asocia entidades conocidas con artículos relevantes de Wikipedia, proporcionando enlaces para una mejor comprensión."
    },
    {
        "id": 19,
        "pregunta": "En un análisis de sentimiento, ¿qué puntaje devolvería Lenguaje de Azure AI para una reseña con una opinión muy negativa?",
        "respuestas": [
            "Positivo: 0.90, Neutro: 0.10, Negativo: 0.00.",
            "Positivo: 0.00, Neutro: 0.00, Negativo: 0.99.",
            "Positivo: 0.50, Neutro: 0.40, Negativo: 0.10."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Un análisis de sentimiento para una reseña muy negativa tendría una puntuación negativa cercana a 1, lo que indica una alta probabilidad de que el texto sea negativo."
    },
    {
        "id": 20,
        "pregunta": "¿Qué tipo de recurso en Azure AI deberías crear si deseas combinar Lenguaje de Azure AI con otros servicios de IA y gestionarlos juntos?",
        "respuestas": [
            "Recurso de Lenguaje.",
            "Recurso de servicios de Azure AI.",
            "Recurso de Visión de Azure AI."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Si deseas usar Lenguaje de Azure AI en combinación con otros servicios de Azure AI, debes crear un recurso de servicios de Azure AI para gestionarlos conjuntamente."
    },
    {
        "id": 21,
        "pregunta": "Quiere usar Lenguaje de Azure AI para determinar los puntos de conversación clave en un documento de texto. ¿Qué característica del servicio debería usar?",
        "respuestas": [
            "Análisis de opinión",
            "Extracción de frases clave",
            "Detección de entidad"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La extracción de frases clave es la característica de Lenguaje de Azure AI que identifica los puntos más importantes o relevantes de un documento de texto."
    },
    {
        "id": 22,
        "pregunta": "Está usando Lenguaje de Azure AI para realizar el análisis de sentimiento en una frase. Se devuelven las puntuaciones de confianza 0,04 positiva, 0,36 neutra y 0,60 negativa. ¿Qué indican estas puntuaciones de confianza sobre la opinión de la frase?",
        "respuestas": [
            "El documento es positivo.",
            "El documento es neutral.",
            "El documento es negativo."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La puntuación de confianza más alta es 0,60 negativa, lo que indica que el análisis de sentimiento determina que la opinión de la frase es negativa."
    },
    {
        "id": 23,
        "pregunta": "¿Cuándo es posible que vea una puntuación con un valor NaN en la detección de lenguaje?",
        "respuestas": [
            "Cuando la puntuación que calcula el servicio esté fuera del intervalo de 0 a 1.",
            "Cuando el idioma predominante del texto se mezcla con otros idiomas.",
            "Cuando el idioma es ambiguo."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un valor NaN puede aparecer cuando el idioma del texto es ambiguo o cuando el contenido del texto no proporciona suficiente información para identificar el idioma de manera precisa."
    },
    {
        "id": 24,
        "pregunta": "¿Cuál es la principal presión que enfrentan las organizaciones debido a las expectativas de los clientes en cuanto a la comunicación?",
        "respuestas": [
            "Responder únicamente durante el horario laboral.",
            "Responder con suficiente rapidez y de manera personalizada en cualquier momento del día o la noche.",
            "Responder solo a través de canales telefónicos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las organizaciones enfrentan la presión de responder rápidamente y de manera personalizada a las consultas de los clientes en cualquier momento, debido a la disponibilidad constante de canales de comunicación."
    },
    {
        "id": 25,
        "pregunta": "¿Qué describe la inteligencia artificial conversacional?",
        "respuestas": [
            "Soluciones que permiten una interacción entre un agente de IA y un humano a través de canales de comunicación.",
            "Soluciones que mejoran la velocidad de los motores de búsqueda.",
            "Soluciones que permiten el reconocimiento de imágenes y videos en tiempo real."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La inteligencia artificial conversacional permite un diálogo entre un agente de IA (conocido como bot) y un humano, a través de diversos canales de comunicación como chats, correos electrónicos o redes sociales."
    },
    {
        "id": 26,
        "pregunta": "¿Cuál es el nombre genérico que se utiliza para describir a los agentes de IA de conversación?",
        "respuestas": [
            "Asistentes digitales.",
            "Bots.",
            "Servidores virtuales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los agentes de IA que interactúan en diálogos con humanos se conocen de manera genérica como bots."
    },
    {
        "id": 27,
        "pregunta": "¿Qué característica de Lenguaje de Azure AI proporciona la capacidad de crear soluciones de inteligencia artificial conversacional?",
        "respuestas": [
            "Respuesta a preguntas.",
            "Extracción de frases clave.",
            "Análisis de sentimiento."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La característica de respuesta a preguntas en Lenguaje de Azure AI permite crear soluciones de inteligencia artificial conversacional que facilitan el diálogo entre humanos y bots."
    },
    {
        "id": 28,
        "pregunta": "¿Cuál es el uso principal de la funcionalidad de respuesta a preguntas de Lenguaje de Azure AI?",
        "respuestas": [
            "Proporcionar análisis de sentimiento en tiempo real.",
            "Crear aplicaciones de bots que respondan automáticamente a consultas de clientes.",
            "Realizar traducción automática de documentos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La funcionalidad de respuesta a preguntas de Lenguaje de Azure AI se utiliza principalmente para crear bots que respondan a consultas de clientes de manera automatizada y precisa."
    },
    {
        "id": 29,
        "pregunta": "¿En qué plataformas se pueden implementar bots de respuesta a preguntas creados con Lenguaje de Azure AI?",
        "respuestas": [
            "Solo en aplicaciones de escritorio.",
            "Solo en aplicaciones móviles.",
            "En varias plataformas, como sitios web o redes sociales."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Los bots de respuesta a preguntas creados con Lenguaje de Azure AI pueden implementarse en diversas plataformas, como sitios web y redes sociales, permitiendo una interacción en múltiples canales."
    },
    {
        "id": 30,
        "pregunta": "¿Qué herramienta de Microsoft Azure facilita la creación y gestión de proyectos de respuesta a preguntas?",
        "respuestas": [
            "Azure AI Language Studio.",
            "Azure Virtual Machines.",
            "Azure DevOps."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Azure AI Language Studio es la herramienta que permite crear, entrenar, publicar y gestionar proyectos de respuesta a preguntas de manera fácil, sin necesidad de escribir código."
    },
    {
        "id": 31,
        "pregunta": "¿Cómo se puede crear una knowledge base de preguntas y respuestas en un proyecto de respuesta a preguntas de Azure AI?",
        "respuestas": [
            "Solo ingresando preguntas y respuestas manualmente.",
            "Generando preguntas y respuestas desde documentos o ingresándolas manualmente.",
            "Descargando automáticamente las preguntas y respuestas desde internet."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Se pueden crear proyectos de respuesta a preguntas generando pares de preguntas y respuestas desde documentos existentes o agregándolas manualmente para crear una knowledge base sólida."
    },
    {
        "id": 32,
        "pregunta": "¿Por qué se recomienda agregar frases alternativas a las preguntas en un proyecto de respuesta a preguntas?",
        "respuestas": [
            "Para hacer el proceso de tokenización más eficiente.",
            "Para ayudar al bot a entender y responder preguntas formuladas de diferentes maneras.",
            "Para que el bot identifique mejor los idiomas diferentes en el texto."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Agregar frases alternativas a las preguntas permite que el bot entienda diferentes formulaciones de una misma consulta, mejorando su capacidad de respuesta."
    },
    {
        "id": 33,
        "pregunta": "¿Qué permite la interfaz de prueba en Language Studio durante la creación de un proyecto de respuesta a preguntas?",
        "respuestas": [
            "Probar la knowledge base enviando preguntas y revisando las respuestas que se devuelven.",
            "Cambiar el código subyacente del proyecto para personalizar las respuestas.",
            "Monitorear en tiempo real el uso del bot en diferentes plataformas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La interfaz de prueba en Language Studio permite enviar preguntas al bot y revisar las respuestas, garantizando que las respuestas sean correctas y coherentes con las preguntas del usuario."
    },
    {
        "id": 34,
        "pregunta": "Su organización tiene un documento de preguntas más frecuentes (P+F). Es necesario crear una knowledge base que incluya las preguntas y respuestas de las Preguntas frecuentes con el menor esfuerzo posible. ¿Qué tiene que hacer?",
        "respuestas": [
            "Crear una base de conocimiento vacía y, a continuación, copiar y pegar manualmente las entradas de las preguntas más frecuentes.",
            "Importar el documento de preguntas más frecuentes existente a una nueva base de conocimiento.",
            "Importar un origen de datos de una charla predefinida."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Para crear la base de conocimiento con el menor esfuerzo, se puede importar directamente el documento de preguntas frecuentes (P+F) existente a la nueva base de conocimiento en Lenguaje de Azure AI."
    },
    {
        "id": 35,
        "pregunta": "Quiere crear una base de conocimiento para el servicio de bot de su organización. ¿Qué servicio de Azure AI es más adecuado para crear una base de conocimiento?",
        "respuestas": [
            "Reconocimiento del lenguaje conversacional",
            "Respuesta a preguntas",
            "Reconocimiento óptico de caracteres"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La funcionalidad de respuesta a preguntas en Lenguaje de Azure AI es la más adecuada para crear una base de conocimiento que pueda ser usada por un bot para responder consultas automáticamente."
    },
    {
        "id": 36,
        "pregunta": "¿Qué permite hacer la característica de respuesta a preguntas personalizada de Lenguaje de Azure AI?",
        "respuestas": [
            "Identificar entidades en documentos.",
            "Definir y publicar una knowledge base de preguntas y respuestas compatibles con consultas en lenguaje natural.",
            "Analizar el sentimiento de reseñas de usuarios."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La característica personalizada de respuesta a preguntas de Lenguaje de Azure AI permite crear y publicar una base de conocimiento que responde consultas en lenguaje natural."
    },
    {
        "id": 37,
        "pregunta": "¿Cómo ayuda la funcionalidad de respuesta a preguntas de Azure AI a las organizaciones?",
        "respuestas": [
            "Aumenta la carga de trabajo del personal humano.",
            "Reduce la carga de trabajo de soporte técnico permitiendo a los bots proporcionar asistencia automatizada.",
            "Permite el reconocimiento de imágenes en tiempo real."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La funcionalidad de respuesta a preguntas personalizada permite que los bots proporcionen asistencia técnica automatizada, reduciendo la carga de trabajo del personal humano y proporcionando soporte a escala global."
    },
    {
        "id": 38,
        "pregunta": "¿Qué consideraba el matemático Alan Turing en su famoso test de Turing?",
        "respuestas": [
            "Que las computadoras nunca podrán imitar el lenguaje humano.",
            "Que si un diálogo es suficientemente natural, puede ser difícil distinguir si se está conversando con un ser humano o una máquina.",
            "Que los sistemas solo pueden interpretar comandos simples."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El test de Turing propone que si una máquina puede mantener un diálogo tan natural que no se pueda distinguir de un ser humano, se considera que la máquina ha alcanzado un nivel avanzado de inteligencia."
    },
    {
        "id": 39,
        "pregunta": "¿Cuál es un escenario común para la implementación de agentes de inteligencia artificial conversacional?",
        "respuestas": [
            "Automatización de tareas financieras.",
            "Sistemas de reserva y soporte técnico.",
            "Reconocimiento de imágenes y vídeos en redes sociales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los escenarios comunes para los agentes de IA conversacional incluyen sistemas de reserva, soporte técnico y automatización del hogar, donde las interacciones pueden parecer casi humanas."
    },
    {
        "id": 40,
        "pregunta": "¿Qué es el reconocimiento del lenguaje conversacional (CLU) en Lenguaje de Azure AI?",
        "respuestas": [
            "Una herramienta para analizar texto escrito exclusivamente.",
            "Una capacidad para crear modelos que interpretan el significado de las frases en configuraciones conversacionales.",
            "Un servicio para crear modelos de reconocimiento de imágenes."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "CLU permite crear modelos de lenguaje que pueden interpretar el significado de frases dentro de un contexto conversacional, lo que es útil para comandos de voz, soporte técnico y control de dispositivos."
    },
    {
        "id": 41,
        "pregunta": "¿Qué tarea podría realizar una aplicación que usa CLU en Lenguaje de Azure AI?",
        "respuestas": [
            "Reconocer objetos en una imagen.",
            "Apagar y encender dispositivos mediante comandos de voz.",
            "Predecir el clima para la semana siguiente."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Una aplicación que usa CLU podría interpretar comandos como 'Apaga la luz' y ejecutar acciones en consecuencia, como controlar dispositivos en una casa inteligente."
    },
    {
        "id": 42,
        "pregunta": "En el contexto de CLU, ¿qué es una 'expresión'?",
        "respuestas": [
            "Una categoría general para agrupar dispositivos.",
            "Una finalidad o intención del usuario.",
            "Un ejemplo de algo que un usuario podría decir que la aplicación debe interpretar."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Una expresión es un ejemplo de algo que un usuario podría decir, y la aplicación debe ser capaz de interpretar esa entrada para comprender la intención del usuario."
    },
    {
        "id": 43,
        "pregunta": "¿Qué representa una entidad en el modelo de CLU?",
        "respuestas": [
            "Un elemento específico al que hace referencia una expresión, como 'ventilador' o 'luz'.",
            "La finalidad de la expresión del usuario.",
            "Una acción que la aplicación debe realizar."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Una entidad es un elemento específico al que hace referencia una expresión, como 'ventilador' o 'luz', y es un objeto que la aplicación debe reconocer en el contexto de la intención."
    },
    {
        "id": 44,
        "pregunta": "En CLU, ¿qué representa una 'intención'?",
        "respuestas": [
            "La finalidad u objetivo que se expresa en una entrada del usuario.",
            "Una acción física realizada por el dispositivo.",
            "Un mensaje de error genérico cuando la entrada no es comprendida."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La intención representa la finalidad u objetivo detrás de la expresión del usuario, como 'Encender' o 'Apagar' un dispositivo."
    },
    {
        "id": 45,
        "pregunta": "¿Cuál es el propósito de la intención 'Ninguno' en una aplicación de CLU?",
        "respuestas": [
            "Proporcionar una respuesta genérica cuando una entrada no coincide con ninguna intención definida.",
            "Activar el dispositivo de reserva.",
            "Detectar y corregir errores en el reconocimiento de entidades."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La intención 'Ninguno' se utiliza para manejar expresiones que no coinciden con ninguna de las intenciones definidas, ofreciendo una respuesta genérica al usuario."
    },
    {
        "id": 46,
        "pregunta": "¿Qué sucede después de definir las intenciones y entidades en una aplicación de CLU?",
        "respuestas": [
            "Se entrena un modelo de lenguaje que puede predecir las intenciones y entidades a partir de entradas del usuario.",
            "La aplicación automáticamente ejecuta las acciones definidas en las intenciones.",
            "Se realiza un análisis de sentimientos en el texto proporcionado por el usuario."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Después de definir las intenciones y entidades, se entrena un modelo de lenguaje que puede predecir las intenciones y entidades basadas en las entradas proporcionadas por el usuario, incluso si no coinciden exactamente con las expresiones de muestra."
    },
    {
        "id": 47,
        "pregunta": "¿Qué se necesita para usar las funcionalidades de CLU en Azure?",
        "respuestas": [
            "Un recurso de almacenamiento en Azure.",
            "Un recurso de Lenguaje de Azure AI o Servicios de Azure AI.",
            "Un servidor físico dedicado en Azure."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Para usar CLU en Azure, necesitas un recurso de Lenguaje de Azure AI, que permite crear y predecir, o un recurso de Servicios de Azure AI, que incluye CLU junto con otros servicios."
    },
    {
        "id": 48,
        "pregunta": "¿Qué permite hacer un recurso de Lenguaje de Azure AI que no permite un recurso de Servicios de Azure AI?",
        "respuestas": [
            "Usar CLU para hacer predicciones.",
            "Entrenar modelos de CLU.",
            "Usar recursos de almacenamiento adicionales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Un recurso de Lenguaje de Azure AI permite tanto crear como predecir en CLU, mientras que un recurso de Servicios de Azure AI solo puede usarse para predicciones."
    },
    {
        "id": 49,
        "pregunta": "¿Qué se debe hacer antes de entrenar un modelo de CLU?",
        "respuestas": [
            "Definir las intenciones, entidades y expresiones para entrenar el modelo.",
            "Publicar el modelo de CLU en un recurso de predicción.",
            "Configurar el punto de conexión para el cliente."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Antes de entrenar un modelo de CLU, se deben definir las intenciones, entidades y expresiones que se usarán para entrenar el modelo predictivo."
    },
    {
        "id": 50,
        "pregunta": "¿Qué se puede hacer con los dominios predefinidos de CLU en Azure?",
        "respuestas": [
            "Crear modelos predictivos de manera automática sin intervención manual.",
            "Utilizar intenciones y entidades predefinidas como punto de partida para escenarios comunes.",
            "Publicar directamente los dominios sin entrenamiento adicional."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "CLU proporciona dominios predefinidos que incluyen intenciones y entidades que pueden usarse como punto de partida para crear modelos predictivos en escenarios comunes."
    },
    {
        "id": 51,
        "pregunta": "¿Qué sucede después de entrenar un modelo de CLU?",
        "respuestas": [
            "Se debe probar el modelo enviando expresiones de texto y revisando las predicciones de intenciones y entidades.",
            "El modelo se publica automáticamente para su uso en producción.",
            "El modelo comienza a recibir solicitudes de predicción desde aplicaciones cliente."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Después de entrenar el modelo, se debe probar enviando expresiones de texto y revisando si las predicciones de intenciones y entidades son correctas."
    },
    {
        "id": 52,
        "pregunta": "¿Qué debe hacer una aplicación cliente para obtener predicciones de un modelo CLU publicado?",
        "respuestas": [
            "Conectarse al punto de conexión del recurso de predicción, especificar la clave de autenticación y enviar datos de usuario.",
            "Entrenar el modelo localmente antes de hacer solicitudes.",
            "Configurar un servidor físico en la red del cliente."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Una aplicación cliente debe conectarse al punto de conexión del recurso de predicción, proporcionar la clave de autenticación adecuada y enviar datos del usuario para obtener predicciones de intenciones y entidades."
    },
    {
        "id": 53,
        "pregunta": "Debe aprovisionar un recurso de Azure que se utilizará para crear una nueva aplicación de reconocimiento del lenguaje conversacional. ¿Qué tipo de recurso debe crear?",
        "respuestas": [
            "Voz de Azure AI",
            "Lenguaje de Azure AI",
            "Servicios de Azure AI"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Para crear una nueva aplicación de reconocimiento del lenguaje conversacional, se debe crear un recurso de Lenguaje de Azure AI, que permite tanto crear como predecir en CLU."
    },
    {
        "id": 54,
        "pregunta": "Va a crear una aplicación de reconocimiento del lenguaje conversacional para admitir un reloj internacional. Quiere que los usuarios puedan solicitar la hora actual en una ciudad determinada, por ejemplo, '¿Qué hora es en Londres?'. ¿Qué tiene que hacer?",
        "respuestas": [
            "Defina una entidad 'city' y una intención 'GetTime' con expresiones que indiquen la entidad de ciudad.",
            "Crear una intención para cada ciudad, cada una con una expresión que solicite la hora en esa ciudad.",
            "Agregar la expresión 'Qué hora es en ciudad' a la intención 'Ninguno'."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Para permitir que los usuarios soliciten la hora en una ciudad, debe definir una entidad 'city' y una intención 'GetTime', y entrenar el modelo con expresiones que indiquen la entidad de ciudad."
    },
    {
        "id": 55,
        "pregunta": "Ha publicado la aplicación de reconocimiento del lenguaje conversacional. ¿Qué información necesita un desarrollador de aplicaciones cliente para obtener predicciones de ella?",
        "respuestas": [
            "El punto de conexión y la clave del recurso de predicción de la aplicación.",
            "El punto de conexión y la clave del recurso de creación de la aplicación.",
            "Las credenciales de Azure del usuario que publicó la aplicación de reconocimiento del lenguaje."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Para obtener predicciones de una aplicación publicada, un desarrollador necesita el punto de conexión y la clave del recurso de predicción de la aplicación."
    },
    {
        "id": 56,
        "pregunta": "¿Qué permite hacer el reconocimiento del lenguaje conversacional (CLU) en un modelo de lenguaje?",
        "respuestas": [
            "Reconocer imágenes en tiempo real.",
            "Predecir intenciones y entidades a partir de expresiones de lenguaje natural.",
            "Realizar análisis de sentimientos en documentos de texto."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "CLU permite compilar un modelo que predice intenciones y entidades a partir de expresiones de lenguaje natural proporcionadas por el usuario."
    },
    {
        "id": 57,
        "pregunta": "¿Qué dos conceptos principales aprendiste en este módulo sobre CLU?",
        "respuestas": [
            "Reconocimiento de imágenes y análisis de vídeo.",
            "Declaraciones, intenciones y entidades.",
            "Detección de anomalías y predicción de series temporales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los conceptos principales son declaraciones, intenciones y entidades, los cuales son fundamentales para el funcionamiento de CLU."
    },
    {
        "id": 58,
        "pregunta": "¿Qué herramienta basada en la web te permite crear y administrar aplicaciones CLU en Lenguaje de Azure AI?",
        "respuestas": [
            "Azure DevOps.",
            "Language Studio.",
            "Azure Virtual Machines."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Language Studio es la herramienta basada en la web que permite crear y administrar aplicaciones CLU sin necesidad de escribir código."
    },
    {
        "id": 59,
        "pregunta": "¿Qué tipo de recurso se debe usar si quieres realizar tanto la creación como las predicciones en CLU?",
        "respuestas": [
            "Servicios de Azure AI.",
            "Lenguaje de Azure AI.",
            "Reconocimiento óptico de caracteres (OCR)."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El recurso de Lenguaje de Azure AI permite realizar tanto la creación de modelos como las predicciones en CLU, mientras que Servicios de Azure AI se utiliza solo para predicciones."
    },
    {
        "id": 60,
        "pregunta": "¿Qué dos funciones principales debe admitir un sistema de IA para gestionar la interacción con la voz?",
        "respuestas": [
            "Reconocimiento de imagen y generación de vídeo.",
            "Reconocimiento de voz y síntesis de voz.",
            "Traducción automática y análisis de texto."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Para permitir la interacción con la voz, el sistema de IA debe admitir el reconocimiento de voz (para interpretar la entrada hablada) y la síntesis de voz (para generar respuestas verbales)."
    },
    {
        "id": 61,
        "pregunta": "¿Qué servicio de Azure AI proporciona funcionalidades de conversión de voz en texto y de texto a voz?",
        "respuestas": [
            "Voz de Azure AI.",
            "Servicios de Azure AI.",
            "Lenguaje de Azure AI."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Voz de Azure AI proporciona funcionalidades para convertir voz en texto (reconocimiento de voz) y texto en voz (síntesis de voz)."
    },
    {
        "id": 62,
        "pregunta": "¿Cuál de las siguientes es una tarea que puede realizar Voz de Azure AI?",
        "respuestas": [
            "Transcribir audio a texto con alta precisión.",
            "Detectar objetos en imágenes.",
            "Analizar sentimientos en un texto."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Voz de Azure AI permite transcribir audio a texto con alta precisión, además de otras funcionalidades relacionadas con la interacción por voz."
    },
    {
        "id": 63,
        "pregunta": "¿Qué permite la síntesis de voz en un sistema de IA?",
        "respuestas": [
            "Interpretar comandos verbales.",
            "Generar salidas verbales a partir de texto.",
            "Traducir texto a otros idiomas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La síntesis de voz permite generar respuestas verbales a partir de texto, facilitando la interacción con los usuarios a través de salidas de audio."
    },
    {
        "id": 64,
        "pregunta": "¿Qué hace el reconocimiento de voz en un sistema de IA?",
        "respuestas": [
            "Convierte texto en voz.",
            "Convierte la palabra hablada en datos procesables, como texto.",
            "Analiza imágenes y videos para detectar patrones."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El reconocimiento de voz convierte la palabra hablada en datos que se pueden procesar, como texto, a partir de audio grabado o en directo."
    },
    {
        "id": 65,
        "pregunta": "¿Qué modelos se utilizan en el reconocimiento de voz para convertir audio en palabras?",
        "respuestas": [
            "Modelo acústico y modelo lingüístico.",
            "Modelo visual y modelo textual.",
            "Modelo predictivo y modelo analítico."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El reconocimiento de voz utiliza un modelo acústico para convertir señales de audio en fonemas, y un modelo lingüístico para asignar esos fonemas a palabras."
    },
    {
        "id": 66,
        "pregunta": "¿Cuál es un uso común del reconocimiento de voz?",
        "respuestas": [
            "Detectar objetos en imágenes.",
            "Proporcionar subtítulos para vídeos grabados o en directo.",
            "Traducir texto a varios idiomas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El reconocimiento de voz se utiliza comúnmente para transcribir palabras habladas en texto y, a su vez, generar subtítulos en vídeos grabados o en directo."
    },
    {
        "id": 67,
        "pregunta": "¿Qué es la síntesis de voz en un sistema de IA?",
        "respuestas": [
            "Un proceso para convertir texto en audio vocalizado.",
            "Una técnica para analizar el sentimiento en un discurso.",
            "Un proceso para reconocer la intención del usuario en una conversación."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La síntesis de voz convierte texto en voz, generando audio a partir de una entrada textual que puede ser escuchada por los usuarios."
    },
    {
        "id": 68,
        "pregunta": "¿Qué información se necesita para realizar la síntesis de voz?",
        "respuestas": [
            "El audio de entrada y la traducción del mismo.",
            "El texto que se pronunciará y la voz que se utilizará para vocalizar.",
            "Las imágenes y los videos que se convertirán en sonido."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Para la síntesis de voz, se necesita el texto que se va a pronunciar y una voz predefinida que se utilizará para generar el audio."
    },
    {
        "id": 69,
        "pregunta": "¿Qué recurso de Azure deberías crear si solo planeas usar las funciones de Voz de Azure AI y quieres gestionar la facturación por separado?",
        "respuestas": [
            "Recurso de servicios de Azure AI.",
            "Recurso de almacenamiento en Azure.",
            "Recurso de Voz."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Si solo planeas usar las funciones de Voz de Azure AI y deseas gestionar la facturación de forma independiente, debes crear un recurso de Voz."
    },
    {
        "id": 70,
        "pregunta": "¿Qué API de Voz de Azure AI convierte audio en texto, ya sea en tiempo real o por lotes?",
        "respuestas": [
            "API Text to Speech.",
            "API Speech to Text.",
            "API de análisis de texto."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La API Speech to Text convierte audio en texto, ya sea en tiempo real desde un micrófono o por lotes desde archivos de audio pregrabados."
    },
    {
        "id": 71,
        "pregunta": "¿Qué tipos de transcripción puedes realizar con la API Speech to Text?",
        "respuestas": [
            "Transcripción en tiempo real y por lotes.",
            "Transcripción de video en tiempo real.",
            "Transcripción de audio solo desde archivos locales."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La API Speech to Text permite transcripción en tiempo real desde un micrófono o transcripción por lotes desde archivos de audio pregrabados."
    },
    {
        "id": 72,
        "pregunta": "¿Qué permite hacer la API Text to Speech de Voz de Azure AI?",
        "respuestas": [
            "Convierte la entrada de texto en voz audible que puede reproducirse o guardarse en un archivo.",
            "Transcribe audio en tiempo real para generar subtítulos en video.",
            "Reconoce el idioma hablado y lo traduce a otro idioma."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La API Text to Speech convierte texto en voz audible que puede reproducirse o guardarse en un archivo de audio."
    },
    {
        "id": 73,
        "pregunta": "¿Qué tipo de voces ofrece la API Text to Speech para una pronunciación más natural?",
        "respuestas": [
            "Voces predefinidas sin modulación.",
            "Voces con pronunciación regional.",
            "Voces neuronales que mejoran la entonación y la naturalidad."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La API Text to Speech ofrece voces neuronales que aprovechan redes neuronales para mejorar la entonación, lo que resulta en una pronunciación más natural."
    },
    {
        "id": 74,
        "pregunta": "Tiene previsto compilar una aplicación que usa Voz de Azure AI para transcribir a texto grabaciones de audio de llamadas telefónicas y, luego, envía el texto transcrito a Lenguaje de Azure AI para extraer las frases clave. Le interesa administrar el acceso y la facturación de los servicios de aplicación con un único recurso de Azure. ¿Qué tipo de recurso de Azure debe crear?",
        "respuestas": [
            "Voz",
            "Lenguaje",
            "Servicios de Azure AI"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Debe crear un recurso de Servicios de Azure AI si desea gestionar tanto Voz de Azure AI como Lenguaje de Azure AI con un único recurso, lo que facilita la administración del acceso y la facturación."
    },
    {
        "id": 75,
        "pregunta": "Desea usar el servicio de Voz de Azure AI para compilar una aplicación que lea en voz alta los asuntos de los mensajes de correo electrónico entrantes. ¿Qué API debe usar?",
        "respuestas": [
            "Conversión de voz en texto",
            "Texto a voz",
            "Translator"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Para convertir el texto en voz y leer en voz alta los asuntos de los correos electrónicos entrantes, debe usar la API de Texto a voz (Text to Speech) de Voz de Azure AI."
    },
    {
        "id": 76,
        "pregunta": "¿Qué tarea realiza el reconocimiento de voz en Voz de Azure AI?",
        "respuestas": [
            "Convierte texto en voz audible.",
            "Convierte la palabra hablada en texto.",
            "Traduce texto entre diferentes idiomas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El reconocimiento de voz en Voz de Azure AI toma el texto oral y lo convierte en texto escrito."
    },
    {
        "id": 77,
        "pregunta": "¿Qué tarea realiza la síntesis de voz en Voz de Azure AI?",
        "respuestas": [
            "Convierte texto en voz audible.",
            "Convierte voz en texto escrito.",
            "Analiza y traduce texto en varios idiomas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La síntesis de voz convierte datos de texto en voz audible, permitiendo que las aplicaciones generen respuestas habladas."
    },
    {
        "id": 78,
        "pregunta": "¿Qué desafío buscan resolver las organizaciones que colaboran con personas de diferentes culturas y ubicaciones geográficas?",
        "respuestas": [
            "La falta de habilidades técnicas.",
            "Las barreras de idioma.",
            "La necesidad de gestionar grandes volúmenes de datos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El desafío principal es superar las barreras de idioma que surgen cuando personas de diferentes culturas y ubicaciones trabajan juntas."
    },
    {
        "id": 79,
        "pregunta": "¿Qué problema puede dificultar la contratación de personas multilingües para la traducción en organizaciones globales?",
        "respuestas": [
            "La cantidad de combinaciones posibles de idiomas y la escasez de habilidades multilingües.",
            "El alto costo de los sistemas de traducción automática.",
            "La falta de herramientas de traducción en tiempo real."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La dificultad radica en la escasez de personas multilingües y la gran cantidad de combinaciones posibles de idiomas, lo que hace que este enfoque no sea escalable."
    },
    {
        "id": 80,
        "pregunta": "¿Qué tecnología se está utilizando cada vez más para superar las barreras de idioma en lugar de contratar personas multilingües?",
        "respuestas": [
            "Traducción automática.",
            "Reconocimiento de voz.",
            "Síntesis de voz."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La traducción automática, o machine translation, se está utilizando cada vez más para superar las barreras de idioma, dado que es una solución más escalable."
    },
    {
        "id": 81,
        "pregunta": "¿Qué servicios de Azure AI se mencionan en este módulo para abordar la traducción automática?",
        "respuestas": [
            "Lenguaje de Azure AI y Servicios de Azure AI.",
            "Traductor de Azure AI y Voz de Azure AI.",
            "Reconocimiento óptico de caracteres y Text to Speech."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El módulo menciona Traductor de Azure AI y Voz de Azure AI como las soluciones para la traducción automática neuronal basada en la nube."
    },
    {
        "id": 82,
        "pregunta": "¿Cuál es uno de los desafíos principales de la traducción automática?",
        "respuestas": [
            "Que las palabras siempre tienen una correspondencia exacta entre idiomas.",
            "Que las palabras no siempre tienen una correspondencia exacta entre idiomas.",
            "Que los sistemas de traducción no pueden procesar texto en tiempo real."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Uno de los mayores desafíos de la traducción automática es que las palabras no siempre tienen una correspondencia exacta entre idiomas, lo que puede afectar la precisión del significado y el tono."
    },
    {
        "id": 83,
        "pregunta": "¿Qué problema presentan las traducciones literales?",
        "respuestas": [
            "Son más rápidas que las traducciones semánticas.",
            "Pueden no captar el contexto o cambiar el significado de la frase.",
            "No pueden traducir oraciones largas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Las traducciones literales a menudo no captan el contexto correcto y, en algunos casos, pueden cambiar el significado de la frase o no encontrar una palabra equivalente en el idioma de destino."
    },
    {
        "id": 84,
        "pregunta": "¿Por qué es importante que los sistemas de inteligencia artificial comprendan el contexto semántico en las traducciones?",
        "respuestas": [
            "Para ofrecer traducciones más rápidas.",
            "Para asegurar que las traducciones sean gramaticalmente correctas y reflejen el tono y contexto apropiados.",
            "Para traducir solo palabras individuales."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Comprender el contexto semántico es clave para ofrecer traducciones que respeten las reglas gramaticales, el tono y el significado adecuado en el idioma de destino."
    },
    {
        "id": 85,
        "pregunta": "¿Cuál es la diferencia entre la traducción de texto y la traducción de voz?",
        "respuestas": [
            "La traducción de texto traduce documentos, mientras que la traducción de voz traduce el habla, ya sea directamente o a texto.",
            "La traducción de texto es más precisa que la de voz.",
            "La traducción de voz no puede realizarse en tiempo real."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La traducción de texto se utiliza para traducir documentos y comunicaciones escritas, mientras que la traducción de voz puede convertir el habla directamente o pasar por un formato de texto intermedio antes de traducirse."
    },
    {
        "id": 86,
        "pregunta": "¿Qué servicio de Azure AI permite traducir texto a texto?",
        "respuestas": [
            "Voz de Azure AI.",
            "Servicios de Azure AI.",
            "Traductor de Azure AI."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "El servicio Traductor de Azure AI permite traducir texto a texto entre más de 130 idiomas usando la traducción automática neuronal (NMT)."
    },
    {
        "id": 87,
        "pregunta": "¿Qué tipo de modelo usa Traductor de Azure AI para ofrecer una traducción más precisa?",
        "respuestas": [
            "Un modelo de traducción estadística.",
            "Un modelo de traducción automática neuronal (NMT).",
            "Un modelo de reconocimiento de voz."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Traductor de Azure AI usa un modelo de traducción automática neuronal (NMT), que analiza el contexto semántico del texto para ofrecer traducciones más precisas y completas."
    },
    {
        "id": 88,
        "pregunta": "¿Qué formato de código de idioma se utiliza en Traductor de Azure AI para especificar el idioma de partida y destino?",
        "respuestas": [
            "Los códigos ISO 3166-1.",
            "Códigos de idioma ISO 639-1 y, opcionalmente, variantes culturales.",
            "Códigos alfanuméricos personalizados."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Traductor de Azure AI usa los códigos de idioma ISO 639-1 para especificar los idiomas de partida y destino, y puede agregar variantes culturales usando extensiones como en-US o fr-CA."
    },
    {
        "id": 89,
        "pregunta": "¿Para qué se puede usar Voz de Azure AI en combinación con traducción?",
        "respuestas": [
            "Para convertir audio de voz en texto y traducirlo simultáneamente a texto o audio en otro idioma.",
            "Para realizar análisis de sentimientos en múltiples idiomas.",
            "Para traducir páginas web en tiempo real."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Voz de Azure AI permite convertir la entrada de voz en texto y traducirla simultáneamente a texto o audio en otro idioma, permitiendo escenarios como subtítulos en tiempo real o traducción simultánea."
    },
    {
        "id": 90,
        "pregunta": "¿Cuántos idiomas admite la API de Voz de Azure AI para la traducción de voz?",
        "respuestas": [
            "Más de 130 idiomas.",
            "Más de 90 idiomas.",
            "Más de 50 idiomas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Voz de Azure AI admite la traducción de voz a más de 90 idiomas, permitiendo una amplia compatibilidad para traducciones de voz a texto o voz a voz."
    },
    {
        "id": 91,
        "pregunta": "¿Qué debe hacer antes de usar los servicios Traductor de Azure AI o Voz de Azure AI?",
        "respuestas": [
            "Contratar un servidor físico dedicado en Azure.",
            "Aprovisionar los recursos apropiados en su suscripción de Azure.",
            "Especificar los idiomas de destino antes de crear una cuenta."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Antes de usar Traductor de Azure AI o Voz de Azure AI, debes aprovisionar los recursos adecuados en tu suscripción de Azure para poder gestionar el acceso y la facturación."
    },
    {
        "id": 92,
        "pregunta": "¿Qué tipo de recurso puedes crear para acceder tanto a Traductor de Azure AI como a Voz de Azure AI desde un único punto de conexión?",
        "respuestas": [
            "Recurso de Voz dedicado.",
            "Recurso de Servicios de Azure AI.",
            "Recurso de Traductor dedicado."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Un recurso de Servicios de Azure AI proporciona acceso tanto a Traductor de Azure AI como a Voz de Azure AI, consolidando la facturación y permitiendo acceso desde un único punto de conexión."
    },
    {
        "id": 93,
        "pregunta": "¿Qué funcionalidad permite Traductor de Azure AI para ajustar los resultados de la traducción?",
        "respuestas": [
            "Traducción selectiva para excluir ciertas palabras o frases.",
            "Conversión de texto a voz con variaciones regionales.",
            "Análisis de sentimiento en el texto traducido."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Traductor de Azure AI permite la traducción selectiva, lo que te permite etiquetar ciertas palabras o frases para que no se traduzcan, como nombres de marcas o códigos."
    },
    {
        "id": 94,
        "pregunta": "¿Qué funcionalidad de Voz de Azure AI se usa para traducir mensajes de voz de un idioma a otro?",
        "respuestas": [
            "Conversión de voz en texto.",
            "Conversión de texto a voz.",
            "Traducción de voz."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "La funcionalidad de traducción de voz en Voz de Azure AI permite traducir mensajes de voz de un idioma a texto o voz en otro idioma."
    },
    {
        "id": 95,
        "pregunta": "¿Qué permite hacer la funcionalidad de traducción de documentos en Traductor de Azure AI?",
        "respuestas": [
            "Traducir varios documentos en todos los idiomas admitidos mientras se conserva la estructura original del documento.",
            "Traducir páginas web en tiempo real.",
            "Generar subtítulos en diferentes idiomas para vídeos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La funcionalidad de traducción de documentos permite traducir varios documentos en múltiples idiomas y conservar la estructura original del documento, como formato y diseño."
    },
    {
        "id": 96,
        "pregunta": "¿Cuál es la función principal del servicio Traductor de Azure AI?",
        "respuestas": [
            "Para traducir el audio hablado de un origen de streaming en texto o una secuencia de audio.",
            "Para admitir la traducción de texto a texto entre más de 130 idiomas mediante un modelo de traducción automática neuronal.",
            "Para admitir varias funcionalidades de inteligencia artificial, incluidos el análisis de texto, la traducción y la voz."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La función principal de Traductor de Azure AI es traducir texto a texto entre más de 130 idiomas utilizando un modelo de traducción automática neuronal."
    },
    {
        "id": 97,
        "pregunta": "Su equipo quiere crear una aplicación que traduzca copias digitales de libros. ¿Qué funcionalidad del servicio Traductor de Azure AI usaría?",
        "respuestas": [
            "Traducción de texto",
            "Traducción de documentos",
            "Traducción personalizada"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La funcionalidad de traducción de documentos es la más adecuada para traducir copias digitales de libros, ya que conserva la estructura original del documento mientras realiza la traducción."
    },
    {
        "id": 98,
        "pregunta": "Está desarrollando una aplicación que debe tomar entradas en inglés de un micrófono y generar una transcripción basada en texto en tiempo real en hindi. ¿Qué funcionalidad del servicio Voz de Azure AI usaría?",
        "respuestas": [
            "Texto a voz",
            "Traducción de voz",
            "Voz a texto"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La funcionalidad de traducción de voz es la adecuada para convertir el audio de un micrófono en inglés en una transcripción en texto en hindi en tiempo real."
    },
    {
        "id": 99,
        "pregunta": "¿Qué beneficios proporciona la automatización de la traducción entre idiomas?",
        "respuestas": [
            "Aumenta la velocidad de procesamiento de datos.",
            "Ayuda a eliminar barreras para la colaboración entre límites culturales y geográficos.",
            "Permite la creación automática de subtítulos para vídeos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La automatización de la traducción ayuda a superar barreras culturales y geográficas, facilitando la colaboración entre personas de diferentes idiomas."
    },
    {
        "id": 100,
        "pregunta": "¿Qué servicios de Azure AI proporcionan capacidades de traducción de texto y voz?",
        "respuestas": [
            "Lenguaje de Azure AI y Servicios de Azure AI.",
            "Traductor de Azure AI y Voz de Azure AI.",
            "Servicios Cognitivos de Azure y Visión de Azure AI."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Traductor de Azure AI proporciona traducción de texto a texto, y Voz de Azure AI permite traducir voz a texto y texto a voz, ofreciendo soporte para múltiples escenarios de traducción."
    },
    {
        "id": 101,
        "pregunta": "¿Qué tipo de escenarios pueden admitir Traductor de Azure AI y Voz de Azure AI?",
        "respuestas": [
            "Traducción en tiempo real y por lotes de texto y voz.",
            "Reconocimiento facial y análisis de imágenes.",
            "Análisis predictivo en base a datos históricos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Tanto Traductor de Azure AI como Voz de Azure AI admiten traducción en tiempo real y por lotes, permitiendo aplicaciones que manejan traducción de texto y voz en diversos escenarios."
    }


]

export default azureLenguajeNaturalDB