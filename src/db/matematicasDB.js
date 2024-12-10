const matematicasDB = [
    {
        id: 1,
        pregunta: `
La función lineal que permite calcular el tiempo promedio de procesamiento en milisegundos de un conjunto de datos en un programa de análisis, en función del número de $n$ datos procesados, está dada por:

$$T(n) = 2n + 10$$

¿Cuántos milisegundos se demora en procesar 95 datos?
        `,
        respuestas: [
            "200 milisegundos.",
            "195 milisegundos.",
            "210 milisegundos."
        ],
        respuestaCorrecta: 0,
        explicacion: `
Sustituimos $n = 95$ en la ecuación $T(n) = 2n + 10$:

$$T(95) = 2(95) + 10 = 200.$$
        `
    },
    {
        id: 2,
        pregunta: `
Dada la función lineal que modela el tiempo promedio de procesamiento en milisegundos, en función del número de datos procesados $n$:

$$T(n) = 2n + 10$$

**a)** Defina las variables dependiente e independiente identificando sus unidades de medidas.
        `,
        respuestas: [
            "Variable dependiente: $T(n)$ (milisegundos). Variable independiente: $n$ (número de datos procesados).",
            "Variable dependiente: $n$ (milisegundos). Variable independiente: $T(n)$ (número de datos procesados).",
            "Variable dependiente: $T(n)$ (número de datos procesados). Variable independiente: $n$ (milisegundos)."
        ],
        respuestaCorrecta: 0,
        explicacion: `
La variable dependiente es $T(n)$, que mide el tiempo en milisegundos, y depende del número de datos procesados ($n$), que es la variable independiente.
        `
    },
    {
        id: 3,
        pregunta: `
Dada la función lineal que modela el tiempo promedio de procesamiento en milisegundos, en función del número de datos procesados $n$:

$$T(n) = 2n + 10$$

**b)** Identifica el valor de la pendiente e interprétela.
        `,
        respuestas: [
            "Pendiente: $2$. Por cada dato procesado, el tiempo aumenta en 2 milisegundos.",
            "Pendiente: $10$. Por cada dato procesado, el tiempo aumenta en 10 milisegundos.",
            "Pendiente: $2$. Por cada dato procesado, el tiempo disminuye en 2 milisegundos."
        ],
        respuestaCorrecta: 0,
        explicacion: `
La pendiente es $2$, lo que significa que por cada dato adicional procesado ($n$), el tiempo promedio de procesamiento ($T(n)$) aumenta en 2 milisegundos.
        `
    },
    {
        id: 4,
        pregunta: `
Dada la función lineal que modela el tiempo promedio de procesamiento en milisegundos, en función del número de datos procesados $n$:

$$T(n) = 2n + 10$$

**c)** Identifica el valor del coeficiente de posición.
        `,
        respuestas: [
            "El coeficiente de posición es $10$, lo que representa el tiempo inicial (en milisegundos) cuando no se procesan datos.",
            "El coeficiente de posición es $2$, lo que representa el tiempo inicial (en milisegundos) cuando no se procesan datos.",
            "El coeficiente de posición es $0$, lo que representa el tiempo inicial (en milisegundos) cuando no se procesan datos."
        ],
        respuestaCorrecta: 0,
        explicacion: `
El coeficiente de posición es $10$, lo que significa que, incluso cuando no se procesan datos ($n = 0$), el tiempo inicial es de 10 milisegundos.
        `
    },
    {
        id: 5,
        pregunta: `
A inicios del año 2005, un centro comercial abre sus puertas a público. Se sabe que después de $x$ años transcurridos desde la apertura hasta inicios del 2023, la cantidad de clientes que han adquirido la tarjeta de crédito se puede estimar mediante la función representada en el siguiente gráfico:

![Gráfico](/grafico1.png)

Determine el dominio contextualizado.
        `,
        respuestas: [
            "[0, 18]",
            "[2005, 2023]",
            "[0, 2023]",
            "Todos los números reales"
        ],
        respuestaCorrecta: 0,
        explicacion: `
El dominio contextualizado es $[0, 18]$ porque $x$ representa los años transcurridos desde 2005 hasta 2023. Dado que 2023 - 2005 = 18, no tiene sentido considerar valores negativos o mayores a 18 en este contexto.
        `
    },
    {
        id: 6,
        pregunta: `
A inicios del año 2005, un centro comercial abre sus puertas a público. Se sabe que después de $x$ años transcurridos desde la apertura hasta inicios del 2023, la cantidad de clientes que han adquirido la tarjeta de crédito se puede estimar mediante la función representada en el siguiente gráfico:

![Gráfico](/grafico1.png)

Interprete el punto $(18, 16.23)$ observado en el gráfico.
        `,
        respuestas: [
            "En el año 2023, la cantidad de clientes con tarjeta de crédito fue de aproximadamente 16,230.",
            "En el año 2023, la cantidad de clientes con tarjeta de crédito fue de aproximadamente 18,000.",
            "En el año 2023, habían pasado 16.23 años desde la apertura del centro comercial.",
            "El punto $(18, 16.23)$ no tiene significado en este contexto."
        ],
        respuestaCorrecta: 0,
        explicacion: `
El punto $(18, 16.23)$ significa que, después de 18 años desde la apertura del centro comercial (es decir, en el año 2023), el número acumulado de clientes con tarjeta de crédito es de aproximadamente 16,230. En este caso, el valor $16.23$ está en miles.
        `
    },
    {
        id: 7,
        pregunta: `
El costo de producción (en miles de dólares) de un auto eléctrico en función de la cantidad de trabajadores que se necesita, se puede modelar con la siguiente tabla:

![Gráfico](/tabla1.png)

Determine la forma algebraica que modela esta función:
        `,
        respuestas: [
            "$$C(n) = 2n + 5$$",
            "$$C(n) = n + 10$$",
            "$$C(n) = 2n + 10$$",
            "$$C(n) = 2n$$"
        ],
        respuestaCorrecta: 0,
        explicacion: `
Para encontrar la forma algebraica de la función, utilizamos un enfoque basado en Python y la biblioteca **numpy** para calcular la pendiente y el intercepto.

1. **Código para el cálculo**:

\`\`\`python
import numpy as np

trabajadores = np.array([5, 10, 25, 30])
costo = np.array([15, 25, 55, 65])

pendiente, intercepto = np.polyfit(trabajadores, costo, 1)
print(f'La pendiente de la función es {pendiente} y el intercepto es {intercepto:.0f}')
\`\`\`

2. **Resultados del cálculo**:
   - La pendiente es $$2$$.
   - El intercepto es $$5$$.

3. **Forma algebraica de la función**:
   $$C(n) = 2n + 5.$$

Por lo tanto, la forma algebraica que modela esta función es $$C(n) = 2n + 5$$.
        `
    },
    {
        id: 8,
        pregunta: `
La cantidad de usuarios de un juego en línea que ha sido lanzado recientemente se puede modelar mediante la función:

$$U(t) = 750 \\cdot 1.8^{t},$$

donde $t$ es el tiempo transcurrido desde que se lanzó el juego, en años.



**a)** ¿Cuántos usuarios, aproximadamente, tendrá el juego luego de transcurrir 1 año? Aproxime su resultado al entero.
        `,
        respuestas: [
            "750 usuarios.",
            "1350 usuarios.", // Respuesta correcta ahora está en la posición 1
            "1200 usuarios.",
            "2000 usuarios."
        ],
        respuestaCorrecta: 1,
        explicacion: `

      

$$U(1) = 750 \\cdot 1.8^{1} = 750 \\cdot 1.8.$$

Realizando el cálculo:

$$750 \\cdot 1.8 = 1350.$$

Por lo tanto, el número de usuarios luego de 1 año será aproximadamente **1350 usuarios**.

        `
    },
    {
        id: 9,
        pregunta: `
La cantidad de usuarios de un juego en línea que ha sido lanzado recientemente se puede modelar mediante la función:
    
$$U(t) = 750 \\cdot 1.8^{t},$$
    
donde $t$ es el tiempo transcurrido desde que se lanzó el juego, en años.
    
    
    
**b)** ¿Cuántos meses deben pasar para que el juego tenga 12,000 usuarios? Aproxime su resultado al mes entero más cercano.
        `,
        respuestas: [
            "56 meses.",
            "54 meses.",
            "60 meses.",
            "50 meses."
        ],
        respuestaCorrecta: 0,
        explicacion: `
Utilizamos el código proporcionado para calcular el tiempo $t$ que tarda en alcanzar 12,000 usuarios:

\`\`\`python
import numpy as np
from scipy.optimize import fsolve

def tiempo(t):
  return U(t)-12000

t=np.linspace(0,15,1)
sol=fsolve(tiempo,t)

print(f'b) El juego tendrá 12.000 usuarios, transcurrido {sol[0]:.1f} años. \\n\\nQue son aproximadamente 56,4 meses')
\`\`\`

De esta manera:

1. Resolviendo $U(t) = 12,000$, obtenemos:

$$t \\approx 4.7 \\text{ años.}$$

2. Convertimos años a meses:

$$4.7 \\times 12 \\approx 56 \\text{ meses.}$$

Por lo tanto, el tiempo necesario para que el juego tenga **12,000 usuarios** es aproximadamente **56 meses**.
        `
    },
    {
        id: 10,
        pregunta: `
Sea la sucesión:

$$a_{n} = 36n^2 + 20$$

¿Cuál es el término de la octava posición?
        `,
        respuestas: [

            "2400",
            "2356",
            "2300",
            "2324"
        ],
        respuestaCorrecta: 3,
        explicacion: `
Sustituimos $n = 8$ en la fórmula de la sucesión:

$$a_{n} = 36n^2 + 20$$

Realizando el cálculo:

$$a_8 = 36 \\cdot 8^2 + 20 = 36 \\cdot 64 + 20 = 2304 + 20 = 2324.$$

Por lo tanto, el término de la octava posición es **2324**.
        `
    },
    {
        id: 11,
        pregunta: `
Un estudiante demora en desarrollar un ejercicio matemático 3,2 minutos; dos ejercicios en 5,2 minutos y tres ejercicios en 7,2 minutos. Si se sigue el mismo patrón de crecimiento:

**a)** Determine la expresión algebraica $t_n$ que calcula el tiempo que se demora en desarrollar $n$ ejercicios.
        `,
        respuestas: [
            "$t_n = 3.2 + (n - 1) \\cdot 2$.",
            "$t_n = 3.2 \\cdot n$.",
            "$t_n = 2n + 3.2$.",
            "$t_n = n + 3.2$."
        ],
        respuestaCorrecta: 0,
        explicacion: `
La fórmula para calcular $t_n$ se basa en la progresión aritmética:

- Tiempo inicial ($t_1$) = 3,2 minutos.
- Diferencia común ($d$) = 2 minutos.

La fórmula es:

$$t_n = 3.2 + (n - 1) \\cdot 2.$$

Por lo tanto, la expresión algebraica es:

$$t_n = 3.2 + (n - 1) \\cdot 2.$$
        `
    },
    {
        id: 12,
        pregunta: `
Un estudiante demora en desarrollar un ejercicio matemático 3,2 minutos; dos ejercicios en 5,2 minutos y tres ejercicios en 7,2 minutos. Si se sigue el mismo patrón de crecimiento:

**b)** ¿Cuánto se demora en desarrollar 12 ejercicios?
        `,
        respuestas: [
            "23.2 minutos.",
            "25.2 minutos.",
            "27.2 minutos.",
            "21.2 minutos."
        ],
        respuestaCorrecta: 1,
        explicacion: `
Sustituyendo $n = 12$ en la fórmula $t_n = 3.2 + (n - 1) \\cdot 2$:

$$t_{12} = 3.2 + (12 - 1) \\cdot 2$$
$$t_{12} = 3.2 + 11 \\cdot 2$$
$$t_{12} = 3.2 + 22$$
$$t_{12} = 25.2 \\text{ minutos.}$$

Por lo tanto, el estudiante se demora **25.2 minutos** en desarrollar 12 ejercicios.
        `
    },
    {
        id: 13,
        pregunta: `
Un estudiante demora en desarrollar un ejercicio matemático 3,2 minutos; dos ejercicios en 5,2 minutos y tres ejercicios en 7,2 minutos. Si se sigue el mismo patrón de crecimiento:

**c)** ¿Cuántos ejercicios desarrolla en 43,2 minutos?
        `,
        respuestas: [
            "19 ejercicios.",
            "20 ejercicios.",
            "21 ejercicios.",
            "22 ejercicios."
        ],
        respuestaCorrecta: 2,
        explicacion: `
Para encontrar el número de ejercicios, utilizamos la fórmula de la progresión aritmética:

$$t_n = 3.2 + (n - 1) \\cdot 2.$$

Resolviendo para $n$ cuando $t_n = 43.2$:

$$43.2 = 3.2 + (n - 1) \\cdot 2$$
$$43.2 - 3.2 = (n - 1) \\cdot 2$$
$$40 = (n - 1) \\cdot 2$$
$$n - 1 = \\frac{40}{2} = 20$$
$$n = 21.$$

Por lo tanto, el estudiante desarrolla **21 ejercicios** en **43.2 minutos**.
        `
    },
    {
        id: 14,
        pregunta: `
Una empresa de telefonía móvil ofrece un plan que inicia con 20 minutos para llamadas. Cada mes, los minutos disponibles se duplican debido a un aumento en la demanda de llamadas.

**a)** La expresión algebraica que representa la cantidad de minutos disponibles $M_n$ después de $n$ meses es:
        `,
        respuestas: [

            "$M_n = 20 \\cdot n^{2}$",
            "$M_n = 20 + 2n$",
            "$M_n = 20 \\cdot 2^{n - 1}$",
            "$M_n = 2^{n - 1} \\cdot 10$"
        ],
        respuestaCorrecta: 2,
        explicacion: `
La cantidad de minutos disponibles se duplica cada mes, formando una progresión geométrica donde:

- $M_1 = 20$ minutos (cantidad inicial).
- Razón común ($r$) = $2$.

La fórmula para el término general de una progresión geométrica es:

$$M_n = M_1 \\cdot r^{n - 1}.$$

Sustituyendo los valores:

$$M_n = 20 \\cdot 2^{n - 1}.$$

Por lo tanto, la expresión algebraica que representa la cantidad de minutos disponibles es:

$$M_n = 20 \\cdot 2^{n - 1}.$$
        `
    },
    {
        id: 15,
        pregunta: `
En una sucesión geométrica, el tercer término es 18 y el quinto término es 162. Determine el valor del octavo término.
        `,
        respuestas: [
            "486",
            "972",
            "1458",
            "4374" // Respuesta correcta
        ],
        respuestaCorrecta: 3,
        explicacion: `
En una sucesión geométrica, el $n$-ésimo término se calcula como:

$$a_n = a_1 \\cdot r^{n - 1},$$

donde $a_1$ es el primer término, $r$ es la razón común, y $n$ es el índice del término.

### Cálculo:
1. El tercer término ($a_3$) y el quinto término ($a_5$) nos permiten encontrar $r$:
   - $a_3 = a_1 \\cdot r^2 = 18$,
   - $a_5 = a_1 \\cdot r^4 = 162$.

2. Dividimos las ecuaciones para encontrar $r$:
   $$\\frac{a_5}{a_3} = \\frac{a_1 \\cdot r^4}{a_1 \\cdot r^2} = r^2.$$
   $$\\frac{162}{18} = r^2.$$
   $$r^2 = 9 \\implies r = 3.$$

3. Sustituyendo $r = 3$ y $a_3 = 18$ para calcular $a_1$:
   $$18 = a_1 \\cdot 3^2.$$
   $$18 = a_1 \\cdot 9.$$
   $$a_1 = 2.$$

4. Ahora calculamos el octavo término usando la fórmula:

   \`\`\`python
   a1 = 2
   r = 3
   n = 8
   a_n = a1 * r**(n - 1)
   print(f'El octavo término es {a_n}.')  # Resultado: 4374
   \`\`\`

   Sustituyendo en la fórmula:

   $$a_8 = 2 \\cdot 3^{8 - 1} = 2 \\cdot 3^7 = 2 \\cdot 2187 = 4374.$$

Por lo tanto, el octavo término es **4374**.    `
    },
    {
        id: 16,
        pregunta: `
Las matrices $A$ y $B$ representan la cantidad de paquetes entregados en un día por dos vehículos de una empresa de transporte a las comunas de Valparaíso y Viña del Mar, en horario **am** y **pm**:

$$
A = \\begin{pmatrix}
30 & 10 \\\\
25 & 10
\\end{pmatrix},
\\quad
B = \\begin{pmatrix}
15 & 6 \\\\
10 & 6
\\end{pmatrix}.
$$

Si $C$ representa la matriz resultante de la suma de ambas matrices, interprete $c_{2,1}$.
        `,
        respuestas: [
            "Paquetes entregados por el segundo vehículo en Viña del Mar durante la mañana.",
            "Paquetes entregados en Valparaíso por ambos vehículos durante la tarde.",
            "Paquetes entregados por ambos vehículos en Valparaíso durante la mañana.",
            "Paquetes entregados por ambos vehículos en Viña del Mar durante la mañana." // Respuesta correcta
        ],
        respuestaCorrecta: 3,
        explicacion: `
La matriz $C$ se calcula como:

$$
C = A + B = \\begin{pmatrix}
30 + 15 & 10 + 6 \\\\
25 + 10 & 10 + 6
\\end{pmatrix} = \\begin{pmatrix}
45 & 16 \\\\
35 & 16
\\end{pmatrix}.
$$

El elemento $c_{2,1}$ representa la suma de los paquetes entregados por ambos vehículos en **Viña del Mar** durante el **horario de la mañana (am)**:

$$
c_{2,1} = 25 + 10 = 35.
$$

Por lo tanto, $c_{2,1}$ indica que se entregaron **35 paquetes en Viña del Mar durante la mañana**.
        `
    },
    {
        id: 17,
        pregunta: `
Las matrices $A$ y $B$ representan la cantidad de paquetes entregados en un día por dos vehículos de una empresa de transporte a las comunas de Valparaíso y Viña del Mar, en horario **am** y **pm**:

$$
A = \\begin{pmatrix}
30 & 10 \\\\
25 & 10
\\end{pmatrix},
\\quad
B = \\begin{pmatrix}
15 & 6 \\\\
10 & 6
\\end{pmatrix}.
$$

Si se quiere obtener la diferencia de paquetes entregados por ambos vehículos, ¿cuál operación matemática debe realizarse entre las matrices ﻿A﻿ y ﻿B﻿? Calculela.
        `,
        respuestas: [
            "La operación matemática es $A \\cdot B$ y la matriz resultante es $\\begin{pmatrix} 45 & 16 \\\\ 35 & 16 \\end{pmatrix}$.",
            "La operación matemática es $A + B$ y la matriz resultante es $\\begin{pmatrix} 45 & 16 \\\\ 35 & 16 \\end{pmatrix}$.",
            "La operación matemática es $A - B$ y la matriz resultante es $\\begin{pmatrix} 15 & 4 \\\\ 15 & 4 \\end{pmatrix}$.", // Respuesta correcta
            "La operación matemática es $B - A$ y la matriz resultante es $\\begin{pmatrix} -15 & -4 \\\\ -15 & -4 \\end{pmatrix}$."
        ],
        respuestaCorrecta: 2,
        explicacion: `
La diferencia de paquetes entregados por ambos vehículos se obtiene calculando $A - B$:

$$
A - B = \\begin{pmatrix}
30 - 15 & 10 - 6 \\\\
25 - 10 & 10 - 6
\\end{pmatrix} = \\begin{pmatrix}
15 & 4 \\\\
15 & 4
\\end{pmatrix}.
$$

Por lo tanto, la operación matemática es $A - B$, y la matriz resultante es:

$$
\\begin{pmatrix}
15 & 4 \\\\
15 & 4
\\end{pmatrix}.
$$
        `
    },
    {
        id: 18,
        pregunta: `
Las matrices $A$ y $B$ representan la cantidad de paquetes entregados en un día por dos vehículos de una empresa de transporte a las comunas de Valparaíso y Viña del Mar, en horario **am** y **pm**:

$$
A = \\begin{pmatrix}
30 & 10 \\\\
25 & 10
\\end{pmatrix},
\\quad
B = \\begin{pmatrix}
15 & 6 \\\\
10 & 6
\\end{pmatrix}.
$$

Para el siguiente día laboral, la cantidad de paquetes entregados por el vehículo 1 disminuyó en un 15% respecto al día anterior y la del vehículo 2 aumentó en un 25% respecto al día anterior. ¿Cuántos paquetes fueron entregados en total por la empresa de transporte en la comuna de Valparaíso para el horario pm?
        `,
        respuestas: [
            "35 paquetes.",
            "40 paquetes.",
            "50 paquetes.",
            "16 paquetes." // Respuesta correcta
        ],
        respuestaCorrecta: 3,
        explicacion: `
La matriz resultante de los paquetes ponderados se calcula como:

$$P = 0.85 \\cdot A + 1.25 \\cdot B.$$

Sustituyendo las matrices $A$ y $B$:

$$
P = 0.85 \\cdot \\begin{pmatrix}
30 & 10 \\\\
25 & 10
\\end{pmatrix} + 1.25 \\cdot \\begin{pmatrix}
15 & 6 \\\\
10 & 6
\\end{pmatrix}.
$$

Realizando los cálculos:

1. Matriz $0.85 \\cdot A$:
$$
0.85 \\cdot \\begin{pmatrix}
30 & 10 \\\\
25 & 10
\\end{pmatrix} = \\begin{pmatrix}
25.5 & 8.5 \\\\
21.25 & 8.5
\\end{pmatrix}.
$$

2. Matriz $1.25 \\cdot B$:
$$
1.25 \\cdot \\begin{pmatrix}
15 & 6 \\\\
10 & 6
\\end{pmatrix} = \\begin{pmatrix}
18.75 & 7.5 \\\\
12.5 & 7.5
\\end{pmatrix}.
$$

3. Suma de las matrices:
$$
P = \\begin{pmatrix}
25.5 & 8.5 \\\\
21.25 & 8.5
\\end{pmatrix} + \\begin{pmatrix}
18.75 & 7.5 \\\\
12.5 & 7.5
\\end{pmatrix} = \\begin{pmatrix}
44.25 & 16 \\\\
33.75 & 16
\\end{pmatrix}.
$$

4. El total de paquetes entregados en Valparaíso durante el horario **pm** es el elemento $P_{1,2}$:
$$
P_{1,2} = 16.
$$

Por lo tanto, **16 paquetes fueron entregados en Valparaíso durante el horario pm**.
        `
    },
    {
        id: 19,
        pregunta: `
En una tienda de verduras, un comerciante vende dos tipos de manzanas: Manzana Fuji y Manzana Royal. El comerciante vende el kilo de Manzana Fuji a 1000 pesos y el kilo de Manzana Royal a 1500 pesos. Si en total tiene 150 kilos de manzana y recauda un total de 175.000 pesos al venderlas, la situación anterior se modela a través del siguiente sistema de ecuaciones:

$$
x + y = 150,
\\quad 1000x + 1500y = 175000,
$$

donde $x$ representa los kilos de Manzana Fuji y $y$ los kilos de Manzana Royal.

¿Cuántos kilos de cada tipo de manzana tiene el comerciante? Responda utilizando la representación matricial del sistema de ecuaciones.
        `,
        respuestas: [
            "80 kilos de Manzana Fuji y 70 kilos de Manzana Royal.",
            "100 kilos de Manzana Fuji y 50 kilos de Manzana Royal.", // Respuesta correcta
            "90 kilos de Manzana Fuji y 60 kilos de Manzana Royal.",
            "110 kilos de Manzana Fuji y 40 kilos de Manzana Royal."
        ],
        respuestaCorrecta: 1,
        explicacion: `
Para resolver este sistema de ecuaciones mediante la representación matricial, escribimos las ecuaciones en forma matricial:

$$
A \\cdot X = B,
$$

donde:
- $A = \\begin{pmatrix} 1 & 1 \\\\ 1000 & 1500 \\end{pmatrix}$
- $X = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$
- $B = \\begin{pmatrix} 150 \\\\ 175000 \\end{pmatrix}$.

El sistema se resuelve calculando la inversa de $A$ y multiplicándola por $B$:

$$
X = A^{-1} \\cdot B.
$$

Código en Python para resolverlo:

\`\`\`python
import numpy as np

A = np.array([[1, 1],
              [1000, 1500]])

B = np.array([[150],
              [175000]])

A_inv = np.linalg.inv(A)
Sol = A_inv.dot(B)

print(f'La matriz de las soluciones es:\\n\\n{Sol}')
\`\`\`

El resultado del cálculo es:

$$
\\text{Matriz de soluciones: } \\begin{pmatrix} 100 \\\\ 50 \\end{pmatrix}.
$$

Por lo tanto, el comerciante tiene:
- **100 kilos de Manzana Fuji**,
- **50 kilos de Manzana Royal**.
        `
    },
    {
        id: 20,
        pregunta: `
Un turista desea trasladarse en Santiago desde el Palacio de La Moneda hasta el centro comercial "Costanera Center". Si utiliza el metro, deberá recorrer $9$ estaciones, y la distancia recorrida se modela mediante la función:
    
$$f(t) = 0.4t$$
    
Si utiliza un bus, la distancia recorrida se modela mediante la función:
    
 $$g(t) = 0.3t.$$

Si se sabe que la distancia entre ambos puntos es de aproximadamente $6$ kilómetros, ¿cuánto tiempo tardará el turista en llegar con cada una de las opciones?
`,
        respuestas: [
            "Metro: 15 minutos; Bus: 20 minutos.", // Respuesta correcta
            "Metro: 12 minutos; Bus: 20 minutos.",
            "Metro: 20 minutos; Bus: 15 minutos.",
            "Metro: 18 minutos; Bus: 24 minutos."
        ],
        respuestaCorrecta: 0,
        explicacion: `
Para calcular el tiempo que tarda en llegar, resolvemos para $t$ en cada función cuando la distancia es $6$ kilómetros.
    
1. **Metro:**
       $$f(t) = 0.4t$$
       $$6 = 0.4t$$
       $$t = \\frac{6}{0.4} = 15 \\text{ minutos.}$$
    
2. **Bus:**
       $$g(t) = 0.3t$$
       $$6 = 0.3t$$
       $$t = \\frac{6}{0.3} = 20 \\text{ minutos.}$$
    
Por lo tanto, el turista tardará:
- **15 minutos en metro.**
- **20 minutos en bus.**
        `
    },
    {
        id: 21,
        pregunta: `
La temperatura de un servidor (en °C) está modelada por la función:
    
$$T(t) = -0.5t^2 + 3t + 20,$$
    
donde $t$ corresponde al tiempo transcurrido (en horas) desde el inicio de la jornada laboral, que comienza a las 08:00 horas y termina a las 17:00 horas. Determine la temperatura del servidor a las 13:00 horas y al finalizar la jornada laboral.
        `,
        respuestas: [
            "A las 13:00 horas: 22.5°C; Al finalizar la jornada: 6.5°C.", // Respuesta correcta
            "A las 13:00 horas: 32.5°C; Al finalizar la jornada: 20°C.",
            "A las 13:00 horas: 28.5°C; Al finalizar la jornada: 25°C.",
            "A las 13:00 horas: 34°C; Al finalizar la jornada: 18°C."
        ],
        respuestaCorrecta: 0,
        explicacion: `
Para encontrar la temperatura a un tiempo específico, evaluamos $T(t)$ en los valores correspondientes:
    
1. **A las 13:00 horas:** $t = 13 - 8 = 5$
       $$T(5) = -0.5(5)^2 + 3(5) + 20$$
       $$T(5) = -0.5(25) + 15 + 20 = -12.5 + 35 = 22.5°C.$$
    
2. **Al finalizar la jornada:** $t = 17 - 8 = 9$
       $$T(9) = -0.5(9)^2 + 3(9) + 20$$
       $$T(9) = -0.5(81) + 27 + 20 = -40.5 + 47 = 6.5°C.$$
    
Por lo tanto:
    - **A las 13:00 horas:** 22.5°C.
    - **Al finalizar la jornada:** 6.5°C.
        `
    },

    {
        id: 22,
        pregunta: `
El número de usuarios de una red social está modelado por la función:
    
$$U(t) = \\frac{1000}{1 + 9e^{-0.5t}},$$
    
donde $t$ corresponde al tiempo transcurrido en meses. Determine la cantidad de usuarios transcurridos $12$ meses.
        `,
        respuestas: [
            "900 usuarios.",
            "978 usuarios.", // Respuesta correcta
            "850 usuarios.",
            "1000 usuarios."
        ],
        respuestaCorrecta: 1,
        explicacion: `
Para encontrar la cantidad de usuarios transcurridos $t = 12$ meses, evaluamos la función $U(t)$:
    
$$U(12) = \\frac{1000}{1 + 9e^{-0.5(12)}}.$$
    
1. Calculamos $e^{-0.5(12)}$:
       $$e^{-6} \\approx 0.002478752.$$
    
2. Sustituimos en la ecuación:
       $$U(12) = \\frac{1000}{1 + 9(0.002478752)}.$$
       $$U(12) = \\frac{1000}{1 + 0.022308768}.$$
       $$U(12) = \\frac{1000}{1.022308768} \\approx 978.$$
    
Por lo tanto, después de 12 meses, la red social tendrá aproximadamente **978 usuarios**.
        `
    },
    {
        id: 23,
        pregunta: `
El tiempo de ejecución de un algoritmo de ordenación (en segundos) está modelado por la función:

$$A(n) = 0.01n^2 + 0.5n + 2,$$

donde $n$ es la cantidad de elementos a ordenar. Determine el tiempo de ejecución para ordenar $1,200$ elementos.
`,
        respuestas: [
            "15000 segundos.",
            "15002 segundos.", // Respuesta correcta
            "14950 segundos.",
            "14990 segundos."
        ],
        respuestaCorrecta: 1,
        explicacion: `
Para calcular el tiempo de ejecución, evaluamos $A(n)$ con $n = 1200$:

$$A(1200) = 0.01(1200)^2 + 0.5(1200) + 2.$$

1. Calculamos cada término:
   $$0.01(1200)^2 = 0.01(1440000) = 14400.$$
   $$0.5(1200) = 600.$$
   $$2 = 2.$$

2. Sumamos los resultados:
   $$A(1200) = 14400 + 600 + 2 = 15002.$$

Por lo tanto, el tiempo de ejecución para ordenar $1200$ elementos es **15002 segundos**.
        `
    },
    {
        id: 24,
        pregunta: `
El consumo de energía (en $kWh$) de un *Data Center* está modelado por la función:

$$E(t) = 50\\cdot \\log(t + 1) + 200,$$

donde $t$ corresponde al tiempo (en horas) desde el inicio del monitoreo. Determine el consumo de energía del *Data Center* después de $5$ horas.
`,
        respuestas: [
            "289.59 kWh.", // Respuesta correcta
            "250.00 kWh.",
            "245.23 kWh.",
            "260.00 kWh."
        ],
        respuestaCorrecta: 0,
        explicacion: `
Para calcular el consumo de energía después de $5$ horas, evaluamos $E(t)$ con $t = 5$:

$$E(5) = 50 \\cdot \\log(5 + 1) + 200.$$

1. Calculamos $\\log(6)$:
   $$\\log(6) \\approx 0.778151.$$

2. Sustituimos en la ecuación:
   $$E(5) = 50 \\cdot 0.778151 + 200.$$
   $$E(5) = 38.91 + 200 = 289.59.$$

Por lo tanto, el consumo de energía después de $5$ horas es **289.59 kWh**.
    `
    },
    {
        id: 25,
        pregunta: `
La carga de trabajo en un proyecto (en porcentaje) está modelada por la función:

$$W(t) = 100e^{-0.1t},$$

donde $t$ corresponde al tiempo transcurrido (en semanas) desde el inicio del proyecto. Determine la carga de trabajo al inicio del proyecto.
`,
        respuestas: [
            "100%.", // Respuesta correcta
            "90%.",
            "95%.",
            "80%."
        ],
        respuestaCorrecta: 0,
        explicacion: `
Para calcular la carga de trabajo al inicio del proyecto ($t = 0$), evaluamos $W(t)$ con $t = 0$:

$$W(0) = 100e^{-0.1(0)}.$$

1. Calculamos $e^0$:
   $$e^0 = 1.$$

2. Sustituimos en la ecuación:
   $$W(0) = 100 \\cdot 1 = 100.$$

Por lo tanto, la carga de trabajo al inicio del proyecto es **100%**.
`
    },

    {
        id: 26,
        pregunta: `
El tiempo de ejecución de un algoritmo en función de la cantidad de elementos de entrada está modelado mediante la siguiente relación basada en datos observados:

$$T(n) = 0.02n,$$

donde $n$ es la cantidad de elementos y $T(n)$ el tiempo en milisegundos. Calcula el tiempo de ejecución para una entrada de $1,500$ elementos.
`,
        respuestas: [
            "30 ms.", // Respuesta correcta
            "40 ms.",
            "25 ms.",
            "50 ms."
        ],
        respuestaCorrecta: 0,
        explicacion: `
Para calcular el tiempo de ejecución para $n = 1500$, evaluamos $T(n)$:

$$T(1500) = 0.02(1500).$$

1. Realizamos el cálculo:
   $$T(1500) = 30.$$

Por lo tanto, el tiempo de ejecución es **30 ms**.
    `
    },
    {
        id: 27,
        pregunta: `
Considere la sucesión:

$$g_{n} = 5n^{3}.$$

Determine si el término $40.000$ pertenece a la sucesión. Si es así, indique en qué posición se encuentra.
`,
        respuestas: [
            "Sí, pertenece y está en la posición $20$.", // Respuesta correcta
            "No, no pertenece a la sucesión.",
            "Sí, pertenece y está en la posición $16$.",
            "Sí, pertenece y está en la posición $25$."
        ],
        respuestaCorrecta: 0,
        explicacion: `
Para determinar si $40.000$ pertenece a la sucesión, resolvemos para $n$ en la ecuación:

$$g_n = 5n^3 \quad \text{y} \quad g_n = 40.000.$$

1. Igualamos y resolvemos para $n$:
   $$40.000 = 5n^3.$$
   $$n^3 = \\frac{40.000}{5} = 8.000.$$

2. Calculamos la raíz cúbica:
   $$n = \\sqrt[3]{8.000} = 20.$$

3. Verificamos:
   Sustituyendo $n = 20$ en la fórmula de la sucesión:
   $$g_{20} = 5(20)^3 = 5(8.000) = 40.000.$$

Por lo tanto:
- **Sí, $40.000$ pertenece a la sucesión y está en la posición $20$.**

Código en *Python* para validar:

\`\`\`python
# Función de la sucesión
def g_n(n):
return 5 * n**3

# Verificar si 40.000 pertenece
term = 40000
for n in range(1, 100):  # Consideramos un rango razonable
if g_n(n) == term:
print(f"El término {term} pertenece a la sucesión en la posición {n}.")
break
    \`\`\`
        `
    },
    {
        id: 28,
        pregunta: `
Considere la sucesión:

$$a_{n} = 3n^{2} + 7.$$

Determine el quinto término de la sucesión.
`,
        respuestas: [
            "82", // Respuesta correcta
            "75",
            "80",
            "85"
        ],
        respuestaCorrecta: 0,
        explicacion: `
Para calcular el quinto término, evaluamos la sucesión con $n = 5$:

$$a_5 = 3(5)^2 + 7.$$

1. Calculamos $5^2$:
   $$5^2 = 25.$$

2. Sustituimos en la fórmula:
   $$a_5 = 3(25) + 7 = 75 + 7 = 82.$$

Por lo tanto, el quinto término de la sucesión es **82**.
    `
    },
    {
        id: 29,
        pregunta: `
Un nuevo software tiene $500$ usuarios y se espera que el número de usuarios crezca un $15\\%$ respecto al mes anterior. Considere que $b_{n}$ es el número de usuarios transcurridos $n$ meses.

Calcule cuántos usuarios tendrá el software al cabo de tres meses y al cabo de seis meses.
`,
        respuestas: [
            "760 usuarios al cabo de 3 meses; 1157 usuarios al cabo de 6 meses.", // Respuesta correcta
            "575 usuarios al cabo de 3 meses; 1000 usuarios al cabo de 6 meses.",
            "600 usuarios al cabo de 3 meses; 1100 usuarios al cabo de 6 meses.",
            "700 usuarios al cabo de 3 meses; 1200 usuarios al cabo de 6 meses."
        ],
        respuestaCorrecta: 0,
        explicacion: `
Para calcular el número de usuarios, usamos la fórmula de crecimiento exponencial donde cada mes el número de usuarios aumenta un $15\\%$:

$$b_{n} = b_{n-1} \\cdot 1.15.$$

1. **Número de usuarios al cabo de 3 meses**:
   Partimos con $b_{0} = 500$ y calculamos iterativamente:
   - $b_{1} = 500 \\cdot 1.15 = 575.$
   - $b_{2} = 575 \\cdot 1.15 \\approx 661.$
   - $b_{3} = 661 \\cdot 1.15 \\approx 760.$

   Por lo tanto, al cabo de 3 meses habrá **760 usuarios**.

2. **Número de usuarios al cabo de 6 meses**:
   Continuamos desde $b_{3}$:
   - $b_{4} = 760 \\cdot 1.15 \\approx 874.$
   - $b_{5} = 874 \\cdot 1.15 \\approx 1005.$
   - $b_{6} = 1005 \\cdot 1.15 \\approx 1157.$

   Por lo tanto, al cabo de 6 meses habrá **1157 usuarios**.
    `
    },
    {
        id: 30,
        pregunta: `
Un estudiante de ingeniería informática planea ahorrar para un proyecto personal. El primer mes deposita $12.000$, y cada mes aumenta el depósito en $2.000$. Considere que $a_{i}$ corresponde al depósito mensual del estudiante. 

Determine:

1. ¿Cuánto depositó el estudiante en febrero del segundo año?

2. ¿Cuál será el total ahorrado al finalizar dos años?
`,
        respuestas: [
            "En febrero del segundo año depositó 38.000 el total ahorrado al finalizar dos años es 840.000.", // Respuesta correcta
            "En febrero del segundo año depositó 36.000; el total ahorrado al finalizar dos años es 576.000.",
            "En febrero del segundo año depositó 34.000; el total ahorrado al finalizar dos años es 560.000.",
            "En febrero del segundo año depositó 40.000; el total ahorrado al finalizar dos años es 860.000."
        ],
        respuestaCorrecta: 0,
        explicacion: `
Para calcular los valores, usamos la fórmula de una progresión aritmética donde:

$$a_i = a_1 + (i - 1)d,$$

donde:
- $a_1 = 12.000$ es el depósito del primer mes.
- $d = 2.000$ es el incremento mensual.
- $i$ es el número del mes.

### 1. Depósito en febrero del segundo año
Febrero del segundo año es el mes 14 (12 meses del primer año más 2 meses):
$$a_{14} = 12.000 + (14 - 1) \\cdot 2.000 = 12.000 + 26.000 = 38.000.$$

Por lo tanto, en febrero del segundo año depositó **\$38.000**.

### 2. Total ahorrado al finalizar dos años
El total ahorrado en 24 meses es la suma de los depósitos:
$$S_{n} = \\frac{n}{2}(a_1 + a_n),$$
donde $n = 24$, $a_1 = 12.000$, y $a_{24} = 12.000 + (24 - 1) \\cdot 2.000 = 12.000 + 46.000 = 58.000$.

Sustituyendo:
$$S_{24} = \\frac{24}{2}(12.000 + 58.000) = 12(70.000) = 840.000.$$

Por lo tanto, al finalizar dos años el total ahorrado será **\$840.000**.
    `
    },
    {
        id: 31,
        pregunta: `
Por lo general, los proyectos son organizados en varias etapas que deben completarse secuencialmente.

La fase inicial de un proyecto de software tiene una duración de $3$ meses y cada fase subsecuente reduce su duración en un $10\\%$ debido a la experiencia ganada.

Determine:

1. ¿Cuánto dura la quinta fase?

2. Calcula la duración total del proyecto después de $10$ fases.
        `,
        respuestas: [
            "La quinta fase dura 2.0 meses; la duración total del proyecto después de 10 fases es 19.5 meses.", // Respuesta correcta
            "La quinta fase dura 2.5 meses; la duración total del proyecto después de 10 fases es 20.0 meses.",
            "La quinta fase dura 1.8 meses; la duración total del proyecto después de 10 fases es 18.0 meses.",
            "La quinta fase dura 2.2 meses; la duración total del proyecto después de 10 fases es 19.0 meses."
        ],
        respuestaCorrecta: 0,
        explicacion: `
Para calcular la duración de cada fase, usamos la fórmula de disminución geométrica donde:

$$d_i = d_1 \\cdot (1 - r)^{i - 1},$$

donde:
- $d_1 = 3$ meses es la duración inicial.
- $r = 0.10$ es la tasa de reducción.
- $i$ es el número de la fase.

### 1. Duración de la quinta fase
Para $i = 5$:
$$d_5 = 3 \\cdot (1 - 0.10)^{5 - 1} = 3 \\cdot (0.90)^4 \\approx 1.97.$$

Por lo tanto, la quinta fase dura aproximadamente **2.0 meses**.

### 2. Duración total del proyecto después de 10 fases
La duración total es la suma de las duraciones de todas las fases:
$$S_{n} = \\sum_{i=1}^{n} d_1 \\cdot (1 - r)^{i - 1}.$$

Para $n = 10$:
$$S_{10} = 3 \\cdot \\sum_{i=0}^{9} (0.90)^i.$$

Resolviendo:
$$S_{10} \\approx 19.5.$$

Por lo tanto, la duración total del proyecto después de 10 fases es **19.5 meses**.
    `
    },
    {
        id: 32,
        pregunta: `
En una sucesión aritmética, la diferencia entre un término y el anterior es $4$, y el décimo término es $-20$. 

Determine:

1. El primer término de la sucesión.

2. Utilice un código en *Python* para calcular el término que ocupa el lugar $100$.

3. Determinar la posición del número $1.680$ en la secuencia.
`,
        respuestas: [
            "El primer término es -56; el término en la posición 100 es 340; el término 1680 está en la posición 435.", // Respuesta correcta
            "El primer término es -50; el término en la posición 100 es 330; el término 1680 está en la posición 430.",
            "El primer término es -60; el término en la posición 100 es 350; el término 1680 está en la posición 440.",
            "El primer término es -54; el término en la posición 100 es 336; el término 1680 está en la posición 432."
        ],
        respuestaCorrecta: 0,
        explicacion: `
La fórmula de una sucesión aritmética es:

$$a_n = a_1 + (n - 1)d,$$

donde:
- $a_n$ es el término en la posición $n$.
- $a_1$ es el primer término.
- $d$ es la diferencia común.
- $n$ es la posición del término.

### 1. Primer término
Dado que el décimo término es $-20$:
$$a_{10} = a_1 + (10 - 1)d.$$
Sustituyendo:
$$-20 = a_1 + 9(4).$$
$$-20 = a_1 + 36.$$
$$a_1 = -56.$$

Por lo tanto, el primer término es **-56**.

### 2. Término en la posición 100
Usamos la fórmula con $n = 100$:
$$a_{100} = a_1 + (100 - 1)d.$$
Sustituyendo:
$$a_{100} = -56 + 99(4).$$
$$a_{100} = -56 + 396 = 340.$$

Por lo tanto, el término en la posición 100 es **340**.

### 3. Posición del número 1680
Para encontrar la posición de 1680, usamos la fórmula:
$$a_n = a_1 + (n - 1)d.$$
Despejamos $n$:
$$n = \\frac{a_n - a_1}{d} + 1.$$
Sustituyendo:
$$n = \\frac{1680 - (-56)}{4} + 1.$$
$$n = \\frac{1680 + 56}{4} + 1 = \\frac{1736}{4} + 1 = 434 + 1 = 435.$$

Por lo tanto, el número 1680 está en la posición **435**.
    `
    },
    {
        id: 33,
        pregunta: `
El tercer término de una sucesión geométrica es $5$ y el sexto término es $40$. 

Determine:

1. La razón geométrica de la sucesión.

2. El primer término de la sucesión.

3. ¿Qué lugar ocupa en esta sucesión el término $20.480$?
`,
        respuestas: [
            "La razón de la sucesión geométrica es 2.0; el primer término es 1.25; el término 20.480 está en la posición 15.", // Respuesta correcta
            "La razón de la sucesión geométrica es 3.0; el primer término es 2.0; el término 20.480 está en la posición 14.",
            "La razón de la sucesión geométrica es 1.5; el primer término es 1.0; el término 20.480 está en la posición 16.",
            "La razón de la sucesión geométrica es 2.5; el primer término es 1.5; el término 20.480 está en la posición 13."
        ],
        respuestaCorrecta: 0,
        explicacion: `
La fórmula de una sucesión geométrica es:

$$a_n = a_1 \\cdot r^{n - 1},$$

donde:
- $a_n$ es el término en la posición $n$.
- $a_1$ es el primer término.
- $r$ es la razón común.
- $n$ es la posición del término.

### 1. Razón geométrica
Dado que $a_3 = 5$ y $a_6 = 40$, la relación entre los términos es:
$$a_6 = a_3 \\cdot r^{6 - 3}.$$
Sustituyendo:
$$40 = 5 \\cdot r^3.$$
$$r^3 = \\frac{40}{5} = 8.$$
$$r = \\sqrt[3]{8} = 2.0.$$

Por lo tanto, la razón geométrica es **2.0**.

### 2. Primer término
Usamos la fórmula para encontrar $a_1$:
$$a_3 = a_1 \\cdot r^{3 - 1}.$$
Sustituyendo:
$$5 = a_1 \\cdot 2^2.$$
$$5 = a_1 \\cdot 4.$$
$$a_1 = \\frac{5}{4} = 1.25.$$

Por lo tanto, el primer término es **1.25**.

### 3. Posición del término 20,480
Para encontrar la posición de \(20,480\), usamos la fórmula y despejamos $n$:
$$a_n = a_1 \\cdot r^{n - 1}.$$
Despejamos $n$:
$$n = \\frac{\\log(\\frac{a_n}{a_1})}{\\log(r)} + 1.$$
Sustituyendo:
$$n = \\frac{\\log(\\frac{20480}{1.25})}{\\log(2)} + 1.$$
$$n = \\frac{\\log(16384)}{\\log(2)} + 1 = \\frac{14}{1} + 1 = 15.$$

Por lo tanto, el término \(20,480\) está en la posición **15**.
`
    },
    {
        id: 34,
        pregunta: `
Una empresa de desarrollo de software está diseñando una aplicación para optimizar el uso de servidores en la nube. Dos servicios principales se ejecutan en paralelo en cada servidor: Servicio A y Servicio B. Cada uno consume una cantidad de recursos en términos de CPU y memoria, que varía según el tiempo de ejecución.

El sistema de ecuaciones que se plantea a continuación permite determinar los minutos "$x$" destinados al ejecutarse el Servicio A y los minutos "$y$" destinados al ejecutarse el Servicio B, en cada servidor:

$$
\\begin{aligned}
2x + y &= 10, \\\\
3x - 2y &= 8.
\\end{aligned}
$$

¿Cuántos minutos debe ejecutarse el Servicio A en cada servidor?
`,
        respuestas: [
            "4 minutos.", // Respuesta correcta
            "3 minutos.",
            "5 minutos.",
            "6 minutos."
        ],
        respuestaCorrecta: 0,
        explicacion: `
Para resolver el sistema de ecuaciones:

$$
\\begin{aligned}
2x + y &= 10, \\\\
3x - 2y &= 8.
\\end{aligned}
$$

### Paso 1: Despejamos $y$ de la primera ecuación
$$y = 10 - 2x.$$

### Paso 2: Sustituimos $y = 10 - 2x$ en la segunda ecuación
$$3x - 2(10 - 2x) = 8.$$
$$3x - 20 + 4x = 8.$$
$$7x = 28.$$
$$x = 4.$$

### Paso 3: Sustituimos $x = 4$ en la primera ecuación para encontrar $y$
$$2(4) + y = 10.$$
$$8 + y = 10.$$
$$y = 2.$$

### Solución final
El **Servicio A** debe ejecutarse durante **4 minutos** en cada servidor, y el **Servicio B** durante **2 minutos**.
        `
    },
    {
        id: 35,
        pregunta: `
El tiempo de carga (en minutos) de un camión eléctrico en función de la cantidad de estaciones de carga activas se puede modelar con la siguiente tabla:
    
    | Días (n) | Distancia (D(n)) |
    |----------|-------------------|
    |    1     |         5         |
    |    3     |        15         |
    |    5     |        25         |
    |    7     |        35         |
    
Determine la forma algebraica que modela esta función:
    `,
        respuestas: [
            "$$D(n) = 5n$$", // Respuesta correcta
            "$$D(n) = 2n + 5$$",
            "$$D(n) = 10n$$",
            "$$D(n) = 5n + 10$$"
        ],
        respuestaCorrecta: 0,
        explicacion: `
    Para encontrar la forma algebraica que modela esta función, seguimos los pasos siguientes:
    
    1. **Analizamos la tabla**:
       - Observamos que los valores de \( D(n) \) aumentan en 10 unidades por cada incremento de 2 en \( n \), lo que sugiere una relación lineal.
    
    2. **Determinamos la pendiente (\( m \))**:
       - Usamos la fórmula para la pendiente: 
         $$ m = \\frac{\\Delta D(n)}{\\Delta n} $$
         $$ m = \\frac{15 - 5}{3 - 1} = \\frac{10}{2} = 5 $$
    
    3. **Encontramos la intersección (\( b \))**:
       - Usamos un punto conocido, por ejemplo, \( (1, 5) \), y sustituimos en la fórmula general:
         $$ D(n) = mn + b $$
         $$ 5 = 5(1) + b $$
         $$ b = 5 - 5 = 0 $$
    
    4. **Escribimos la ecuación**:
       - La ecuación final que modela esta función es:
         $$ D(n) = 5n $$
    
    Por lo tanto, la respuesta correcta es:
    $$ D(n) = 5n $$
    `
    },
    {
        id: 36,
        pregunta: `

¿Es necesario que las matrices tengan la misma cantidad de filas y columnas para poder multiplicarse?
`,
        respuestas: [
            "Sí, es necesario que tengan la misma cantidad de filas y columnas.",
            "No, solo es necesario que el número de columnas de la primera matriz coincida con el número de filas de la segunda matriz.", // Respuesta correcta
            "No, las matrices se pueden multiplicar siempre que tengan filas y columnas, independientemente de sus dimensiones."
        ],
        respuestaCorrecta: 1,
        explicacion: `
Para multiplicar dos matrices, no es necesario que tengan la misma cantidad de filas y columnas. 

La condición para que la multiplicación sea posible es que **el número de columnas de la primera matriz coincida con el número de filas de la segunda matriz**. En este caso, $A$ tiene $2$ columnas y $B$ tiene $2$ filas, por lo que $A \\cdot B$ es posible.

La matriz resultante tendrá tantas filas como la primera matriz ($A$) y tantas columnas como la segunda matriz ($B$), es decir, será de orden $3 \\times 4$.
        `
    },
    {
        id: 37,
        pregunta: `
Respecto a la matriz $A$ dada por:
    
$$
A = \\begin{pmatrix}
2 & 3 \\\\
1 & 2
\\end{pmatrix}
$$
    
La matriz $A$ no es una matriz cuadrada. Indique si esta afirmación es verdadera o falsa.
        `,
        respuestas: [
            "Verdadero.",
            "Falso." // Respuesta correcta
        ],
        respuestaCorrecta: 1,
        explicacion: `
    Una matriz es cuadrada si tiene el mismo número de filas que de columnas. En este caso, la matriz $A$ es de orden $2 \\times 2$ (2 filas y 2 columnas), lo que significa que sí es una matriz cuadrada. Por lo tanto, la afirmación es **falsa**.
        `
    },
    {
        id: 38,
        pregunta: `
Dada la matriz $B$:
    
$$
B = \\begin{pmatrix}
5 & 7 & 3 \\\\
1 & 4 & 8 \\\\
2 & 6 & 9
\\end{pmatrix}
$$

Determine el **orden** de la matriz $B$ y seleccione la respuesta correcta.
        `,
        respuestas: [
            "$3 \\times 3$.", // Respuesta correcta
            "$2 \\times 3$.",
            "$3 \\times 2$.",
            "$2 \\times 2$."
        ],
        respuestaCorrecta: 0,
        explicacion: `
    Para determinar el orden de la matriz, contamos el número de filas y columnas:
    
    1. La matriz $B$ tiene **3 filas**: 
       $\\begin{pmatrix} 
       5 & 7 & 3 \\\\ 
       1 & 4 & 8 \\\\ 
       2 & 6 & 9 
       \\end{pmatrix}$.
    
    2. La matriz $B$ tiene **3 columnas**: Cada fila tiene 3 elementos.
    
    Por lo tanto, el orden de la matriz es **$3 \\times 3$**, es decir, 3 filas y 3 columnas.
        `
    },
    {
        id: 39,
        pregunta: `
Considere la matriz $C$:

$$
C = \\begin{pmatrix}
2 & 4 & 6 & 8 \\\\
3 & 9 & 12 & 15
\\end{pmatrix}
$$

¿Cuál es el **orden** de la matriz $C$? Seleccione la respuesta correcta.
`,
        respuestas: [
            "$2 \\times 4$.", // Respuesta correcta
            "$4 \\times 2$.",
            "$2 \\times 3$.",
            "$4 \\times 4$."
        ],
        respuestaCorrecta: 0,
        explicacion: `
Para determinar el orden de la matriz, contamos el número de filas y columnas:

1. La matriz $C$ tiene **2 filas**:
   $\\begin{pmatrix} 
   2 & 4 & 6 & 8 \\\\ 
   3 & 9 & 12 & 15 
   \\end{pmatrix}$.

2. La matriz $C$ tiene **4 columnas**: Cada fila tiene 4 elementos.

Por lo tanto, el orden de la matriz es **$2 \\times 4$**, es decir, 2 filas y 4 columnas.
        `
    },
    {
        id: 40,
        pregunta: `
Considere la matriz $D$ y una matriz propuesta como su inversa:

$$
D = \\begin{pmatrix}
1 & 2 \\\\
3 & 4
\\end{pmatrix}, \\quad
D^{-1} = \\begin{pmatrix}
-2 & 1 \\\\
1.5 & -0.5
\\end{pmatrix}.
$$

¿Es correcto que $D^{-1}$ sea la inversa de $D$? Indique si esta afirmación es verdadera o falsa.
        `,
        respuestas: [
            "Verdadero.", // Respuesta correcta
            "Falso."
        ],
        respuestaCorrecta: 0,
        explicacion: `
    Para verificar si $D^{-1}$ es la inversa de $D$, calculamos el producto $D \\cdot D^{-1}$ y comprobamos si el resultado es la matriz identidad $I$.
    
    1. Calculamos $D \\cdot D^{-1}$:
    
    $$
    D \\cdot D^{-1} = \\begin{pmatrix}
    1 & 2 \\\\
    3 & 4
    \\end{pmatrix} \\cdot \\begin{pmatrix}
    -2 & 1 \\\\
    1.5 & -0.5
    \\end{pmatrix}.
    $$
    
    Multiplicamos fila por columna:
    - Elemento $(1, 1)$: $(1)(-2) + (2)(1.5) = -2 + 3 = 1$.
    - Elemento $(1, 2)$: $(1)(1) + (2)(-0.5) = 1 - 1 = 0$.
    - Elemento $(2, 1)$: $(3)(-2) + (4)(1.5) = -6 + 6 = 0$.
    - Elemento $(2, 2)$: $(3)(1) + (4)(-0.5) = 3 - 2 = 1$.
    
    El producto es:
    $$
    D \\cdot D^{-1} = \\begin{pmatrix}
    1 & 0 \\\\
    0 & 1
    \\end{pmatrix}.
    $$
    
    2. El resultado es la matriz identidad $I$, por lo que **$D^{-1}$ es efectivamente la inversa de $D$**. La afirmación es **verdadera**.
        `
    },
    {
        id: 41,
        pregunta: `
Considere la matriz $E$ y una matriz propuesta como su inversa:

$$
E = \\begin{pmatrix}
2 & 3 \\\\
1 & 4
\\end{pmatrix}, \\quad
E^{-1} = \\begin{pmatrix}
4 & -3 \\\\
-1 & 2
\\end{pmatrix}.
$$

¿Es correcto que $E^{-1}$ sea la inversa de $E$? Indique si esta afirmación es verdadera o falsa.
        `,
        respuestas: [
            "Verdadero.",
            "Falso." // Respuesta correcta
        ],
        respuestaCorrecta: 1,
        explicacion: `
    Para verificar si $E^{-1}$ es la inversa de $E$, calculamos el producto $E \\cdot E^{-1}$ y comprobamos si el resultado es la matriz identidad $I$.
    
    1. Calculamos $E \\cdot E^{-1}$:
    
    $$
    E \\cdot E^{-1} = \\begin{pmatrix}
    2 & 3 \\\\
    1 & 4
    \\end{pmatrix} \\cdot \\begin{pmatrix}
    4 & -3 \\\\
    -1 & 2
    \\end{pmatrix}.
    $$
    
    Multiplicamos fila por columna:
    - Elemento $(1, 1)$: $(2)(4) + (3)(-1) = 8 - 3 = 5$.
    - Elemento $(1, 2)$: $(2)(-3) + (3)(2) = -6 + 6 = 0$.
    - Elemento $(2, 1)$: $(1)(4) + (4)(-1) = 4 - 4 = 0$.
    - Elemento $(2, 2)$: $(1)(-3) + (4)(2) = -3 + 8 = 5$.
    
    El producto es:
    $$
    E \\cdot E^{-1} = \\begin{pmatrix}
    5 & 0 \\\\
    0 & 5
    \\end{pmatrix}.
    $$
    
    2. El resultado **no es la matriz identidad**. Por lo tanto, la matriz propuesta no es la inversa de $E$ y la afirmación es **falsa**.
        `
    },

    {
        id: 42,
        pregunta: `
Considere la matriz $F$ y su transpuesta propuesta:

$$
F = \\begin{pmatrix}
1 & 2 & 3 \\\\
4 & 5 & 6
\\end{pmatrix}, \\quad
F^T = \\begin{pmatrix}
1 & 4 \\\\
2 & 5 \\\\
3 & 6
\\end{pmatrix}.
$$

¿Es correcto que $F^T$ sea la transpuesta de $F$? Indique si esta afirmación es verdadera o falsa.
`,
        respuestas: [
            "Verdadero.", // Respuesta correcta
            "Falso."
        ],
        respuestaCorrecta: 0,
        explicacion: `
La transpuesta de una matriz $F$ se obtiene intercambiando sus filas por columnas. Dada la matriz:

$$
F = \\begin{pmatrix}
1 & 2 & 3 \\\\
4 & 5 & 6
\\end{pmatrix},
$$

su transpuesta es:
$$
F^T = \\begin{pmatrix}
1 & 4 \\\\
2 & 5 \\\\
3 & 6
\\end{pmatrix}.
$$

    Al comparar, la matriz propuesta coincide con la transpuesta calculada. Por lo tanto, la afirmación es **verdadera**.
        `
    },
    {
        id: 43,
        pregunta: `
Considere la matriz $G$ y una matriz propuesta como su transpuesta:

$$
G = \\begin{pmatrix}
7 & 8 \\\\
9 & 10 \\\\
11 & 12
\\end{pmatrix}, \\quad
G^T = \\begin{pmatrix}
7 & 9 & 11 \\\\
8 & 10 & 12
\\end{pmatrix}.
$$

¿Es correcto que $G^T$ sea la transpuesta de $G$? Indique si esta afirmación es verdadera o falsa.
        `,
        respuestas: [
            "Verdadero.",
            "Falso." // Respuesta correcta
        ],
        respuestaCorrecta: 0,
        explicacion: `
    La transpuesta de una matriz $G$ se obtiene intercambiando sus filas por columnas. Dada la matriz:
    
    $$
    G = \\begin{pmatrix}
    7 & 8 \\\\
    9 & 10 \\\\
    11 & 12
    \\end{pmatrix},
    $$
    
    su transpuesta es:
    $$
    G^T = \\begin{pmatrix}
    7 & 9 & 11 \\\\
    8 & 10 & 12
    \\end{pmatrix}.
    $$
    
    Al comparar, la matriz propuesta coincide con la transpuesta calculada. Por lo tanto, la afirmación es **verdadera**.
        `
    },
    {
        id: 44,
        pregunta: `
La cantidad de visitantes a un parque natural (en miles) en función del tiempo transcurrido desde su apertura (en años) está modelada por la función:

$$V(t) = 3t^2 - 12t + 20,$$

donde $t$ corresponde al tiempo transcurrido (en años) desde la apertura del parque. 

1. Determine la cantidad de visitantes al cabo de 4 años.  
2. ¿En qué año el parque tuvo exactamente 8 mil visitantes?
        `,
        respuestas: [
            "1. 20 mil visitantes; 2. Al año 2 y al año 5.", // Respuesta correcta
            "1. 16 mil visitantes; 2. Al año 1 y al año 4.",
            "1. 24 mil visitantes; 2. Al año 3 y al año 6.",
            "1. 18 mil visitantes; 2. Al año 1 y al año 5."
        ],
        respuestaCorrecta: 0,
        explicacion: `
    Para resolver los puntos:
    
    ### 1. Cantidad de visitantes al cabo de 4 años:
    Evaluamos $V(t)$ en $t = 4$:
    $$V(4) = 3(4)^2 - 12(4) + 20.$$
    $$V(4) = 3(16) - 48 + 20.$$
    $$V(4) = 48 - 48 + 20 = 20.$$
    
    Por lo tanto, al cabo de 4 años hubo **20 mil visitantes**.
    
    ---
    
    ### 2. ¿Cuándo el parque tuvo exactamente 8 mil visitantes?
    Buscamos los valores de $t$ tales que $V(t) = 8$:
    $$3t^2 - 12t + 20 = 8.$$
    Simplificamos:
    $$3t^2 - 12t + 12 = 0.$$
    Dividimos entre 3:
    $$t^2 - 4t + 4 = 0.$$
    Factorizamos:
    $$(t - 2)(t - 2) = 0.$$
    $$t = 2.$$
    
    Por lo tanto, el parque tuvo **8 mil visitantes al cabo de 2 años**.
    
    ---
    
    Conclusión:
    - **1. Al cabo de 4 años:** 20 mil visitantes.
    - **2. Exactamente 8 mil visitantes:** Al año 2.
        `
    }












































];

export default matematicasDB;
