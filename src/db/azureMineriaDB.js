const azureMineriaDB = [
    {
        "id": 1,
        "pregunta": "¿Qué describe mejor la inteligencia de documentos en Azure AI?",
        "respuestas": [
            "Una herramienta para almacenar documentos en la nube de forma segura.",
            "Funcionalidades de inteligencia artificial que admiten el procesamiento de texto y dan sentido a la información contenida en ellos.",
            "Un servicio que traduce documentos a diferentes idiomas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La inteligencia de documentos describe las funcionalidades de inteligencia artificial que admiten el procesamiento de texto y que dan sentido a la información contenida en ellos."
    },
    {
        "id": 2,
        "pregunta": "¿Cuál es la principal ventaja de usar inteligencia de documentos para procesar recibos en una empresa?",
        "respuestas": [
            "Acelera las operaciones y reduce errores en la entrada de datos.",
            "Permite almacenar los recibos en formatos de imagen de alta resolución.",
            "Ayuda a diseñar nuevos formatos de recibos para los clientes."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La inteligencia de documentos automatiza el proceso de extracción, comprensión y guardado de datos, acelerando las operaciones y reduciendo errores."
    },
    {
        "id": 3,
        "pregunta": "¿Qué paso adicional realiza la inteligencia de documentos en comparación con el reconocimiento óptico de caracteres (OCR) tradicional?",
        "respuestas": [
            "Almacena los documentos escaneados en una base de datos.",
            "Comprende y extrae información específica del texto después de leerlo.",
            "Traduce el texto escaneado a múltiples idiomas."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La inteligencia de documentos va más allá del OCR tradicional al comprender y extraer información específica del texto leído."
    },
    {
        "id": 4,
        "pregunta": "¿Qué es el análisis de documentos en el contexto de inteligencia de documentos?",
        "respuestas": [
            "La capacidad de convertir documentos en formatos de imagen.",
            "La extracción de texto, diseño y pares clave-valor, proporcionando ubicaciones de texto en una página identificadas mediante coordenadas de cuadro de límite.",
            "Un método para cifrar documentos para mayor seguridad."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El análisis de documentos es la capacidad de extraer texto, diseño y pares clave-valor, proporcionando ubicaciones de texto identificadas mediante coordenadas de cuadro de límite."
    },
    {
        "id": 5,
        "pregunta": "¿Por qué es un desafío automatizar el proceso de análisis de documentos?",
        "respuestas": [
            "Porque los formularios y documentos vienen en muchos formatos diferentes.",
            "Debido a que el OCR no puede reconocer texto escrito a mano.",
            "Porque requiere una gran cantidad de poder computacional."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El desafío radica en que los formularios y documentos vienen en todos los formatos diferentes, lo que requiere entrenar modelos específicos para cada tipo."
    },
    {
        "id": 6,
        "pregunta": "¿Cuándo es necesario personalizar un modelo de aprendizaje automático para el análisis de documentos?",
        "respuestas": [
            "Cuando se trabaja con formatos de documentos únicos no cubiertos por modelos preconstruidos.",
            "Siempre, ya que los modelos preconstruidos no son efectivos.",
            "Solo cuando se necesita traducir documentos a otros idiomas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Es necesario personalizar un modelo cuando se trabaja con formatos de documentos únicos que no son reconocidos por modelos preconstruidos."
    },
    {
        "id": 7,
        "pregunta": "¿Qué información puede identificar la inteligencia de documentos en un recibo escaneado?",
        "respuestas": [
            "El número de serie del escáner utilizado.",
            "Datos específicos como el nombre del comerciante, dirección, valor total y valor fiscal.",
            "La hora exacta en que se escaneó el documento."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La inteligencia de documentos puede identificar datos específicos en un recibo, como el nombre del comerciante, dirección, valor total y valor fiscal."
    },
    {
        "id": 8,
        "pregunta": "¿Cómo ayudan los modelos de aprendizaje automático en la inteligencia de documentos?",
        "respuestas": [
            "Interpretando los datos de un documento o formulario al estar entrenados para reconocer patrones en ubicaciones de coordenadas y texto.",
            "Generando nuevos documentos basados en datos antiguos.",
            "Almacenando documentos de forma segura en la nube."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los modelos de aprendizaje automático interpretan datos al reconocer patrones en las ubicaciones de coordenadas de cuadro de límite y el texto."
    },
    {
        "id": 9,
        "pregunta": "¿Cuál es uno de los beneficios de automatizar el proceso de lectura y registro de datos en documentos?",
        "respuestas": [
            "Crear mejores experiencias para los clientes y mejorar la toma de decisiones.",
            "Reducir el espacio de almacenamiento necesario para los documentos.",
            "Eliminar la necesidad de sistemas de seguridad para documentos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Automatizar este proceso puede acelerar las operaciones, crear mejores experiencias para los clientes y mejorar la toma de decisiones."
    },
    {
        "id": 10,
        "pregunta": "¿Qué servicio de Azure AI proporciona acceso a funcionalidades de inteligencia de documentos?",
        "respuestas": [
            "Azure AI Document Intelligence.",
            "Azure AI Speech Services.",
            "Azure AI Anomaly Detector."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Azure AI Document Intelligence es el servicio que proporciona acceso a funcionalidades de inteligencia de documentos."
    },
    {
        "id": 11,
        "pregunta": "¿Cuáles son los tipos de modelos disponibles en Azure AI Document Intelligence?",
        "respuestas": [
            "Modelos precompilados, modelos personalizados y análisis de documentos.",
            "Modelos de texto, modelos de imagen y modelos de voz.",
            "Modelos básicos, avanzados y expertos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Azure AI Document Intelligence consta de características agrupadas por tipo de modelo: modelos precompilados, modelos personalizados y análisis de documentos."
    },
    {
        "id": 12,
        "pregunta": "¿Qué son los modelos precompilados en Azure AI Document Intelligence?",
        "respuestas": [
            "Modelos previamente entrenados para procesar tipos de documentos comunes como facturas, tarjetas de presentación y documentos de identidad.",
            "Modelos que el usuario debe entrenar para reconocer campos específicos.",
            "Modelos diseñados para traducir documentos a diferentes idiomas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Los modelos precompilados son modelos previamente entrenados para procesar tipos de documentos comunes y extraer campos importantes."
    },
    {
        "id": 13,
        "pregunta": "¿Cuándo es necesario entrenar modelos personalizados en Azure AI Document Intelligence?",
        "respuestas": [
            "Cuando se trabaja con documentos estándar reconocidos por los modelos precompilados.",
            "Cuando se necesita identificar campos específicos que no se incluyen en los modelos precompilados existentes.",
            "Cuando se desea aumentar la velocidad de procesamiento de documentos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los modelos personalizados se entrenan para identificar campos específicos no cubiertos por los modelos precompilados."
    },
    {
        "id": 14,
        "pregunta": "¿Qué es el análisis de documentos en Azure AI Document Intelligence?",
        "respuestas": [
            "Un proceso manual de revisión de documentos para extraer información.",
            "Un análisis general que devuelve representaciones de datos estructuradas, incluidas las regiones de interés y sus interrelaciones.",
            "Una herramienta para convertir documentos en diferentes formatos de archivo."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El análisis de documentos es un análisis general que devuelve datos estructurados y las interrelaciones entre regiones de interés."
    },
    {
        "id": 15,
        "pregunta": "¿Cuál de las siguientes capacidades NO es proporcionada por los modelos precompilados?",
        "respuestas": [
            "Extracción de detalles del cliente y del proveedor de las facturas.",
            "Generación automática de nuevos contratos legales.",
            "Extracción de detalles de ventas y transacciones de recibos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Los modelos precompilados no generan contratos; se utilizan para extraer información de documentos existentes."
    },
    {
        "id": 16,
        "pregunta": "¿Qué funciones realiza el modelo de recibo precompilado al procesar recibos?",
        "respuestas": [
            "Relaciona nombres de campo con valores e identifica tablas de datos y tipos específicos de campo.",
            "Convierte los recibos en documentos de texto editables y traduce su contenido.",
            "Crea gráficos estadísticos basados en los datos de los recibos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El modelo relaciona nombres de campo con valores e identifica tablas y tipos de datos específicos."
    },
    {
        "id": 17,
        "pregunta": "¿Qué tipos de recibos ha sido entrenado para reconocer el modelo de recibo precompilado?",
        "respuestas": [
            "Solo recibos impresos en papel normal.",
            "Varios tipos, como térmicos, de hotel, de gas, de tarjeta de crédito y de estacionamiento.",
            "Únicamente recibos electrónicos enviados por correo electrónico."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El modelo reconoce diversos tipos de recibos, incluyendo térmicos y de diferentes establecimientos."
    },
    {
        "id": 18,
        "pregunta": "¿Cuál de los siguientes NO es un campo reconocido por el modelo de recibo precompilado?",
        "respuestas": [
            "Nombre del comerciante y dirección.",
            "Clave de licencia del software utilizado.",
            "Fecha y hora de la compra."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "La clave de licencia del software no es un campo reconocido en los recibos por el modelo."
    },
    {
        "id": 19,
        "pregunta": "¿Para qué sirve el nivel de confianza asociado a cada par de datos y campo?",
        "respuestas": [
            "Para indicar el nivel de precisión probable y determinar si se requiere revisión humana.",
            "Para cifrar los datos y proteger su confidencialidad.",
            "Para medir el tiempo que tomó procesar cada campo."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El nivel de confianza ayuda a identificar cuándo un recibo necesita ser verificado manualmente."
    },
    {
        "id": 20,
        "pregunta": "¿Cuál es una especificación recomendada para obtener los mejores resultados al usar el modelo de recibo precompilado?",
        "respuestas": [
            "Utilizar imágenes en formato GIF o SVG.",
            "Asegurarse de que el tamaño de archivo sea inferior a 500 MB para el nivel de pago y 4 MB para el nivel gratis.",
            "Procesar múltiples recibos en un solo documento."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El tamaño de archivo debe ser inferior a 500 MB (S0) o 4 MB (F0) para obtener mejores resultados."
    },
    {
        "id": 21,
        "pregunta": "¿Qué es el Document Intelligence Studio en Azure AI?",
        "respuestas": [
            "Una interfaz de usuario para probar el análisis de documentos, los modelos precompilados y la creación de modelos personalizados.",
            "Una aplicación móvil para escanear documentos y subirlos a Azure.",
            "Un servicio para traducir documentos a múltiples idiomas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Es una interfaz para probar análisis y modelos, además de crear modelos personalizados."
    },
    {
        "id": 22,
        "pregunta": "¿Qué necesita hacer para usar Azure AI Document Intelligence?",
        "respuestas": [
            "Crear un recurso de Document Intelligence o de servicios de Azure AI en su suscripción de Azure.",
            "Descargar e instalar software en su computadora local.",
            "Suscribirse a un plan premium de Office 365."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Debe crear un recurso en Azure para utilizar Azure AI Document Intelligence."
    },
    {
        "id": 23,
        "pregunta": "¿Cuál es una restricción al usar el nivel gratis (F0) de Azure AI Document Intelligence?",
        "respuestas": [
            "No se pueden procesar documentos en formatos PDF o TIFF.",
            "Solo se procesan las dos primeras páginas para documentos PDF o TIFF.",
            "No se puede acceder al Document Intelligence Studio."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El nivel gratis procesa solo las dos primeras páginas de documentos PDF o TIFF."
    },
    {
        "id": 24,
        "pregunta": "Una vez creado el recurso de Azure AI Document Intelligence, ¿qué puede hacer?",
        "respuestas": [
            "Crear aplicaciones cliente que usen su clave y punto de conexión para análisis o usar el recurso en el Document Intelligence Studio.",
            "Vender el recurso a otras empresas.",
            "Usar el recurso para enviar correos electrónicos masivos."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Puede desarrollar aplicaciones que utilicen el recurso para analizar formularios o usar el estudio."
    },
    {
        "id": 25,
        "pregunta": "¿Cuándo es recomendable seleccionar el nivel gratis al crear el recurso de Azure AI Document Intelligence?",
        "respuestas": [
            "Cuando no ha usado el Document Intelligence antes y desea probarlo.",
            "Cuando necesita procesar grandes volúmenes de documentos diariamente.",
            "Cuando quiere acceder a funcionalidades exclusivas no disponibles en el nivel de pago."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El nivel gratis es ideal para comenzar y probar el servicio si es nuevo en Document Intelligence."
    },
    {
        "id": 26,
        "pregunta": "Tiene previsto usar el modelo de recibo pregenerado de Documento de inteligencia de Azure AI. ¿Qué tipo de recurso de Azure debe crear?",
        "respuestas": [
            "Recurso de Azure AI Vision",
            "Recurso de Documento de inteligencia de Azure AI o servicios de Azure AI.",
            "Recurso de Lenguaje de Azure AI."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Para utilizar el modelo de recibo precompilado, debe crear un recurso de Documento de inteligencia de Azure AI o servicios de Azure AI."
    },
    {
        "id": 27,
        "pregunta": "Usa el servicio Documento de inteligencia de Azure AI para analizar los recibos. ¿Qué tipos de campo reconoce el servicio?",
        "respuestas": [
            "Tipo de comercio minorista.",
            "Nombre y dirección del comerciante.",
            "Nombre del comerciante y fecha de incorporación."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El servicio reconoce campos como el nombre y dirección del comerciante, fecha y hora de la compra, entre otros."
    },
    {
        "id": 28,
        "pregunta": "¿Qué es necesario para usar el servicio del analizador de recibos en Documento de inteligencia de Azure AI?",
        "respuestas": [
            "Entrene el modelo con recibos de ejemplo de su organización.",
            "Creación de un recurso de Documento de inteligencia de Azure AI.",
            "Nada: el analizador de recibos está disponible una vez creada una suscripción de Azure."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Es necesario crear un recurso de Documento de inteligencia de Azure AI para utilizar el servicio del analizador de recibos."
    },
    {
        "id": 29,
        "pregunta": "¿Cuál es una solución de minería de conocimiento que proporciona Azure para extraer información de grandes volúmenes de datos no estructurados?",
        "respuestas": [
            "Azure AI Search",
            "Azure AI Vision",
            "Azure AI Speech"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Azure AI Search es un servicio de búsqueda en la nube que permite extraer información de grandes volúmenes de datos no estructurados."
    },
    {
        "id": 30,
        "pregunta": "¿Qué característica de Azure AI Search permite indexar medios no estructurados, mecanografiados, basados en imágenes o escritos a mano?",
        "respuestas": [
            "Herramientas de creación de aplicaciones móviles",
            "Capacidades integradas de inteligencia artificial",
            "Servicios de traducción automática"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Azure AI Search puede indexar diferentes tipos de medios gracias a sus capacidades integradas de inteligencia artificial."
    },
    {
        "id": 31,
        "pregunta": "¿Cuál de las siguientes NO es una característica de Azure AI Search?",
        "respuestas": [
            "Datos de cualquier origen en formato JSON",
            "Análisis lingüístico de 56 idiomas",
            "Generación automática de contenido multimedia"
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Azure AI Search no genera contenido multimedia automáticamente; proporciona búsqueda y análisis sobre datos existentes."
    },
    {
        "id": 32,
        "pregunta": "¿Qué componente automatiza el proceso de mover datos desde el origen de datos al índice de búsqueda en Azure AI Search?",
        "respuestas": [
            "Indexador",
            "Almacén de conocimiento",
            "Conjunto de aptitudes"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El indexador automatiza el proceso de mover datos desde el origen de datos al índice de búsqueda."
    },
    {
        "id": 33,
        "pregunta": "¿Qué es un conjunto de aptitudes en Azure AI Search?",
        "respuestas": [
            "Una colección de operaciones que extraen y enriquecen datos para que se puedan buscar",
            "Una base de datos que almacena los resultados de búsqueda",
            "Una herramienta para crear interfaces de usuario personalizadas"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un conjunto de aptitudes define las operaciones que extraen y enriquecen datos en el proceso de indexación."
    },
    {
        "id": 34,
        "pregunta": "¿Cuál es el propósito de un almacén de conocimiento en Azure AI Search?",
        "respuestas": [
            "Almacenar la salida de una canalización de enriquecimiento con IA para análisis independiente",
            "Guardar configuraciones de seguridad y autenticación",
            "Proporcionar almacenamiento para aplicaciones móviles"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El almacén de conocimiento conserva la salida de la canalización de enriquecimiento con IA para análisis o procesamiento posterior."
    },
    {
        "id": 35,
        "pregunta": "¿Cuál de los siguientes es un beneficio de usar Azure AI Search?",
        "respuestas": [
            "Permite extraer información de documentos que antes no permitían búsquedas",
            "Automatiza la traducción de documentos a múltiples idiomas",
            "Genera informes financieros automáticamente"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Azure AI Search puede indexar y permitir búsquedas en documentos que antes no podían ser buscados."
    },
    {
        "id": 36,
        "pregunta": "¿Qué tecnología subyacente utiliza Azure AI Search como motor de búsqueda?",
        "respuestas": [
            "Apache Lucene",
            "El algoritmo de Google Search",
            "Microsoft SQL Server"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Azure AI Search está construido sobre Apache Lucene, una biblioteca de software de código abierto para motores de búsqueda."
    },
    {
        "id": 37,
        "pregunta": "En Azure AI Search, ¿qué es la 'serialización JSON'?",
        "respuestas": [
            "El proceso de convertir datos al formato JSON durante la indexación",
            "Una técnica para asegurar los datos en tránsito",
            "Un método para comprimir archivos grandes"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La serialización JSON es la acción de exportar el tipo de archivo original a JSON durante la ingesta de datos."
    },
    {
        "id": 38,
        "pregunta": "¿Cuál es el rol del 'descifrado de documentos' en la canalización de indexación de Azure AI Search?",
        "respuestas": [
            "Abrir archivos y extraer contenido",
            "Cifrar documentos para seguridad",
            "Eliminar datos duplicados"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El descifrado de documentos implica que el indexador abre archivos y extrae su contenido para el proceso de indexación."
    },
    {
        "id": 39,
        "pregunta": "¿Qué se entiende por 'enriquecimiento con IA' en Azure AI Search?",
        "respuestas": [
            "Agregar y combinar aptitudes de IA para extraer más información de los datos originales",
            "Mejorar la calidad visual de imágenes y videos",
            "Capacitar al personal en inteligencia artificial"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El enriquecimiento con IA implica usar aptitudes de inteligencia artificial para extraer y enriquecer datos durante la indexación."
    },
    {
        "id": 40,
        "pregunta": "¿Qué estructura tiene un índice de búsqueda en Azure AI Search?",
        "respuestas": [
            "Una tabla conocida como esquema de índice",
            "Una base de datos relacional con múltiples tablas",
            "Un árbol jerárquico de nodos"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un índice de búsqueda tiene una estructura similar a una tabla, conocida como esquema de índice, que contiene campos y atributos."
    },
    {
        "id": 41,
        "pregunta": "¿Cuál es el primer paso para crear una solución de Búsqueda de Azure AI?",
        "respuestas": [
            "Aprovisionar un recurso de Búsqueda de Azure AI.",
            "Identificar el origen de datos.",
            "Crear un índice de búsqueda."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El primer paso es aprovisionar un recurso de Búsqueda de Azure AI."
    },
    {
        "id": 42,
        "pregunta": "¿Qué herramienta en Azure Portal automatiza el proceso de crear varios objetos necesarios para el motor de búsqueda en Azure AI Search?",
        "respuestas": [
            "Asistente para la importación de datos de Azure Portal",
            "Azure Resource Manager",
            "Azure PowerShell"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El Asistente para la importación de datos en Azure Portal automatiza la creación de objetos necesarios para el motor de búsqueda."
    },
    {
        "id": 43,
        "pregunta": "¿Cuál de los siguientes objetos almacena la información de conexión a los datos de origen y se utiliza exclusivamente con indexadores?",
        "respuestas": [
            "Origen de datos",
            "Índice",
            "Conjunto de aptitudes"
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El origen de datos conserva la información de conexión y se usa exclusivamente con indexadores."
    },
    {
        "id": 44,
        "pregunta": "¿Qué es un indexador en Azure AI Search?",
        "respuestas": [
            "Un objeto de configuración que especifica un origen de datos, un índice de destino y opciones adicionales.",
            "Un conjunto de instrucciones para manipular y transformar contenido.",
            "Una estructura de datos física utilizada para la búsqueda de texto completo."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un indexador es un objeto de configuración que especifica un origen de datos, un índice de destino y otras opciones."
    },
    {
        "id": 45,
        "pregunta": "¿Cuál es el propósito de un conjunto de aptitudes en Azure AI Search?",
        "respuestas": [
            "Definir operaciones que extraen y enriquecen datos para que se puedan buscar.",
            "Almacenar la salida de una canalización de enriquecimiento con IA.",
            "Proporcionar una interfaz para consultas avanzadas."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un conjunto de aptitudes es un conjunto de instrucciones para manipular, transformar y dar forma al contenido."
    },
    {
        "id": 46,
        "pregunta": "¿Para qué se utiliza el almacén de conocimiento en Azure AI Search?",
        "respuestas": [
            "Para almacenar la salida de una canalización de enriquecimiento con IA en tablas y blobs de Azure Storage.",
            "Para guardar configuraciones de seguridad y autenticación.",
            "Para indexar datos estructurados de bases de datos relacionales."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El almacén de conocimiento almacena la salida de enriquecimiento con IA para análisis independiente o procesamiento posterior."
    },
    {
        "id": 47,
        "pregunta": "¿Cómo se pueden enviar consultas a un índice de Búsqueda de Azure AI?",
        "respuestas": [
            "Como una solicitud de API de REST o HTTP, y la respuesta se devuelve como JSON.",
            "Solo a través de la interfaz gráfica de Azure Portal.",
            "Mediante comandos SQL en Azure SQL Database."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Las consultas se pueden enviar como solicitudes de API REST o HTTP y las respuestas se devuelven en formato JSON."
    },
    {
        "id": 48,
        "pregunta": "¿Qué determina a qué consultas se puede responder en un índice de Búsqueda de Azure AI?",
        "respuestas": [
            "El esquema del índice.",
            "La cantidad de datos indexados.",
            "El ancho de banda de la red."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El esquema del índice determina a qué consultas se puede responder."
    },
    {
        "id": 49,
        "pregunta": "¿Qué tipos de sintaxis de consulta admite Búsqueda de Azure AI?",
        "respuestas": [
            "Sintaxis simple y Lucene completa.",
            "SQL y NoSQL.",
            "XPath y XQuery."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Búsqueda de Azure AI admite sintaxis de consulta simple y Lucene completa."
    },
    {
        "id": 50,
        "pregunta": "En la consulta 'coffee (-\"busy\" + \"wifi\")', ¿qué operador se utiliza para excluir resultados que contengan una frase específica?",
        "respuestas": [
            "El operador '-' (menos).",
            "El operador '+' (más).",
            "Los paréntesis '()'."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "El operador '-' se utiliza para excluir resultados que contengan la frase especificada."
    },
    {
        "id": 51,
        "pregunta": "Si una consulta no especifica el campo que se quiere buscar, ¿qué sucede?",
        "respuestas": [
            "Se ejecuta en todos los campos de búsqueda del índice.",
            "La consulta falla y devuelve un error.",
            "Solo busca en el primer campo del índice."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Si no se especifica el campo, la consulta se ejecuta en todos los campos de búsqueda del índice."
    },
    {
        "id": 52,
        "pregunta": "¿Qué formato de datos acepta la Búsqueda de Azure AI al insertar datos en el índice?",
        "respuestas": [
            "CSV.",
            "SQL.",
            "JSON."
        ],
        "respuestaCorrecta": 2,
        "explicacion": "Búsqueda de Azure AI acepta datos proporcionados en formato JSON."
    },
    {
        "id": 53,
        "pregunta": "¿Qué explicación describe mejor un indexador y un índice?",
        "respuestas": [
            "Un indexador convierte documentos en JSON y los reenvía a un motor de búsqueda para la indexación.",
            "Un indexador se puede usar en lugar de un índice si los archivos ya están en el formato adecuado.",
            "Un indexador solo se usa para la ejecución de conjuntos de aptitudes y enriquecimiento con IA."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Un indexador convierte documentos en JSON y los reenvía al motor de búsqueda para la indexación."
    },
    {
        "id": 54,
        "pregunta": "Si configura un índice de búsqueda de documentos de noticias escritas sin incluir ningún conjunto de aptitudes, ¿qué información seguiría siendo capaz de consultar?",
        "respuestas": [
            "La opinión.",
            "Texto completo.",
            "Títulos de imágenes generados por IA."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "Sin un conjunto de aptitudes, puede consultar el texto completo, pero no obtendrá enriquecimientos adicionales como opinión o títulos generados por IA."
    },
    {
        "id": 55,
        "pregunta": "¿Cuál es la principal función de Azure AI Search?",
        "respuestas": [
            "Proporcionar infraestructura y herramientas para crear experiencias de búsqueda escalables y enriquecidas.",
            "Servir como una base de datos relacional para aplicaciones empresariales.",
            "Proporcionar servicios de almacenamiento en la nube para archivos multimedia.",
            "Generar contenido de inteligencia artificial de forma autónoma."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "Azure AI Search es una solución PaaS de Microsoft que proporciona la infraestructura y las herramientas para crear experiencias de búsqueda escalables y enriquecidas."
    },
    {
        "id": 56,
        "pregunta": "¿Qué pasos realiza la canalización de indexación de Azure AI Search al procesar datos no estructurados?",
        "respuestas": [
            "Convierte datos no estructurados en información estructurada, realiza enriquecimiento con IA y los ingresa en un índice de búsqueda.",
            "Almacena los datos no estructurados en una base de datos SQL.",
            "Traduce los datos a múltiples idiomas y los almacena en el índice.",
            "Comprime los datos no estructurados para ahorrar espacio."
        ],
        "respuestaCorrecta": 0,
        "explicacion": "La canalización de indexación de Azure AI Search ingiere datos no estructurados, los serializa en JSON, realiza el enriquecimiento con IA y aporta los datos a un índice de búsqueda."
    },
    {
        "id": 57,
        "pregunta": "¿Qué determina las posibles consultas que se pueden realizar en Azure AI Search?",
        "respuestas": [
            "El tamaño de los datos indexados.",
            "El esquema del índice.",
            "El ancho de banda de la red.",
            "La cantidad de usuarios simultáneos."
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El esquema del índice determina las posibles consultas que se pueden realizar en Azure AI Search."
    },
    {
        "id": 58,
        "pregunta": "¿Qué herramienta en Azure Portal se puede usar para automatizar la indexación en Azure AI Search?",
        "respuestas": [
            "Azure Resource Manager",
            "Asistente para importación de datos de Azure Portal",
            "Azure PowerShell",
            "Azure Monitor"
        ],
        "respuestaCorrecta": 1,
        "explicacion": "El Asistente para importación de datos de Azure Portal puede usarse para automatizar la indexación en Azure AI Search."
    },
]

export default azureMineriaDB