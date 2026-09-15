// script.js
const examData = [
    {
        idModulo: "modulo-2",
        nombreCorto: "Módulo 2: Fundamentos de Desarrollo Front-End",
        modulo: "Módulo 2: Fundamentos de Desarrollo Front-End",
        activo: true,
        preguntas: [
            { id: "m2_1", tipo: "multiple", texto: "¿Cuál es el rol principal de la W3C en el desarrollo web?", opciones: { A: "Proveer hosting gratuito.", B: "Desarrollar y estandarizar tecnologías web como HTML, CSS y el DOM.", C: "Compilar código JavaScript." }, correcta: "B" },
            { id: "m2_2", tipo: "multiple", texto: "¿Qué propiedad o concepto de CSS define la jerarquía visual y su peso asociado?", opciones: { A: "El modelo de cajas y los selectores por ID.", B: "La especificidad, el origen de los estilos y la herencia.", C: "La utilización exclusiva de estilos en línea." }, correcta: "B" },
            { id: "m2_3", tipo: "true_false", texto: "HTML es considerado un lenguaje de programación de propósito general con estructuras condicionales.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m2_4", tipo: "true_false", texto: "El DOM (Document Object Model) representa la estructura del documento como un árbol de nodos.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m2_5", tipo: "fill_blank", texto: "Completa el acrónimo: Las siglas HTML significan HyperText ________ Language.", correcta: "Markup" },
            { id: "m2_6", tipo: "fill_blank", texto: "Escribe el comando de Git para crear y cambiar inmediatamente a una nueva rama llamada 'feature': git ________ -b feature", correcta: "checkout" },
            { id: "m2_7", tipo: "code", texto: "Desarrollo de código: Escribe una etiqueta HTML semántica básica para estructurar el pie de página (footer) de un sitio web.", correcta: "<footer></footer>" },
            { id: "m2_8", tipo: "code", texto: "Desarrollo de código: Escribe la línea de código HTML necesaria para enlazar una hoja de estilos externa llamada 'style.css'.", correcta: "<link rel=\"stylesheet\" href=\"style.css\">" },
            { id: "m2_9", tipo: "multiple", texto: "¿Qué método del DOM se usa para obtener un elemento por su identificador único ID?", opciones: { A: "querySelectorClass", B: "getElementByTagName", C: "getElementById" }, correcta: "C" },
            { id: "m2_10", tipo: "true_false", texto: "Git y GitHub son exactamente la misma herramienta y tienen la misma funcionalidad.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m2_11", tipo: "fill_blank", texto: "Escribe la etiqueta HTML utilizada para insertar una imagen: <________ src='imagen.jpg' alt='texto'>", correcta: "img" },
            { id: "m2_12", tipo: "multiple", texto: "¿Qué comando de Git permite consolidar los cambios en el repositorio local creando un commit?", opciones: { A: "git push origin main", B: "git commit", C: "git clone" }, correcta: "B" },
            { id: "m2_13", tipo: "true_false", texto: "Bootstrap es un framework de diseño front-end basado en componentes y sistemas de rejilla (grid).", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m2_14", tipo: "fill_blank", texto: "Escribe el atributo HTML obligatorio en una etiqueta <a> que define la dirección URL de destino.", correcta: "href" },
            { id: "m2_15", tipo: "code", texto: "Desarrollo de código: Escribe un bloque HTML básico que contenga un encabezado principal con el texto 'Bienvenido'.", correcta: "<h1>Bienvenido</h1>" },
            { id: "m2_16", tipo: "multiple", texto: "¿Qué etiqueta HTML se utiliza para definir una lista ordenada?", opciones: { A: "<ul>", B: "<ol>", C: "<li>" }, correcta: "B" },
            { id: "m2_17", tipo: "true_false", texto: "El elemento <meta charset=\"UTF-8\"> es indispensable para definir la codificación de caracteres en un documento HTML.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m2_18", tipo: "fill_blank", texto: "Escribe la etiqueta HTML utilizada para crear un campo de entrada de texto de formulario: <________ type=\"text\">", correcta: "input" },
            { id: "m2_19", tipo: "code", texto: "Desarrollo de código: Escribe una etiqueta HTML semántica para la sección de cabecera principal de una página web.", correcta: "<header></header>" },
            { id: "m2_20", tipo: "multiple", texto: "¿Cuál de los siguientes selectores CSS tiene mayor especificidad?", opciones: { A: "Selector de clase .clase", B: "Selector de etiqueta div", C: "Selector de ID #identificador" }, correcta: "C" },
            { id: "m2_21", tipo: "true_false", texto: "La propiedad CSS z-index funciona en elementos que tienen un posicionamiento estático (position: static).", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m2_22", tipo: "fill_blank", texto: "Escribe la propiedad CSS utilizada para cambiar el tipo de fuente de un texto: ________-family", correcta: "font" },
            { id: "m2_23", tipo: "code", texto: "Desarrollo de código: Escribe una regla CSS para cambiar el color del texto de todos los párrafos a rojo (red).", correcta: "p { color: red; }" },
            { id: "m2_24", tipo: "multiple", texto: "¿Qué comando de Git se utiliza para descargar un repositorio remoto por primera vez?", opciones: { A: "git clone", B: "git pull", C: "git fetch" }, correcta: "A" },
            { id: "m2_25", tipo: "true_false", texto: "Las Hojas de Estilo en Cascada (CSS) permiten separar el contenido estructural (HTML) de la presentación visual.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" }
        ]
    },
    {
        idModulo: "modulo-3",
        nombreCorto: "Módulo 3: Fundamentos de Programación en JavaScript",
        modulo: "Módulo 3: Fundamentos de Programación en JavaScript",
        activo: true,
        preguntas: [
            { id: "m3_1", tipo: "multiple", texto: "¿Cuál es el objetivo principal de utilizar la metodología BEM?", opciones: { A: "Compilar JavaScript de forma asíncrona.", B: "Mantener un código CSS modular, escalable y evitar colisiones globales.", C: "Reemplazar HTML por SASS." }, correcta: "B" },
            { id: "m3_2", tipo: "multiple", texto: "¿Qué característica principal aporta un preprocesador CSS como SASS?", opciones: { A: "El uso de variables, anidamiento de reglas y mixins.", B: "Ejecución directa de consultas SQL.", C: "Eliminación de errores en JavaScript." }, correcta: "A" },
            { id: "m3_3", tipo: "true_false", texto: "En CSS Flexbox, la propiedad `justify-content` alinea los elementos a lo largo del eje principal.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m3_4", tipo: "true_false", texto: "La propiedad CSS `margin` define el espacio interior entre el contenido y el borde del elemento.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m3_5", tipo: "fill_blank", texto: "Completa la nomenclatura BEM para un modificador: bloque__elemento--________", correcta: "modificador" },
            { id: "m3_6", tipo: "fill_blank", texto: "En SASS, las variables se declaran utilizando el símbolo especial: ________", correcta: "$" },
            { id: "m3_7", tipo: "code", texto: "Desarrollo de código: Escribe una regla CSS para seleccionar un elemento con el ID 'principal'.", correcta: "#principal {}" },
            { id: "m3_8", tipo: "code", texto: "Desarrollo de código: Escribe una regla en SASS o CSS que aplique un color de fondo azul (#0000ff) a un selector de clase `.caja`.", correcta: ".caja { background-color: #0000ff; }" },
            { id: "m3_9", tipo: "multiple", texto: "¿Qué posicionamiento CSS saca al elemento del flujo normal y lo fija respecto al viewport?", opciones: { A: "position: relative;", B: "position: static;", C: "position: fixed;" }, correcta: "C" },
            { id: "m3_10", tipo: "true_false", texto: "Los elementos de bloque ocupan todo el ancho disponible en su contenedor y generan un salto de línea.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m3_11", tipo: "fill_blank", texto: "Escribe la unidad CSS relativa al tamaño de fuente del elemento raíz (`<html>`): ________", correcta: "rem" },
            { id: "m3_12", tipo: "multiple", texto: "¿Qué metodología clasifica reglas CSS en Base, Layout, Módulo, Estado y Tema?", opciones: { A: "OOCSS", B: "SMACSS", C: "BEM" }, correcta: "B" },
            { id: "m3_13", tipo: "true_false", texto: "La propiedad `display: none;` oculta un elemento visualmente pero mantiene el espacio físico que este ocupaba.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m3_14", tipo: "fill_blank", texto: "Escribe la propiedad CSS utilizada para cambiar el color del texto: ________", correcta: "color" },
            { id: "m3_15", tipo: "code", texto: "Desarrollo de código: Escribe una regla CSS para hacer que un contenedor utilice el modelo Flexible Box (`display flex`).", correcta: ".contenedor { display: flex; }" },
            { id: "m3_16", tipo: "multiple", texto: "¿Cuál es el comportamiento por defecto de la propiedad `flex-direction` en un contenedor flexbox?", opciones: { A: "column", B: "row", C: "row-reverse" }, correcta: "B" },
            { id: "m3_17", tipo: "true_false", texto: "SASS permite utilizar directivas de control como @if, @for y @each.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m3_18", tipo: "fill_blank", texto: "Completa la propiedad CSS abreviada para configurar márgenes internos: ________", correcta: "padding" },
            { id: "m3_19", tipo: "code", texto: "Desarrollo de código: Escribe una regla CSS para centrar elementos horizontalmente utilizando flexbox (justify-content).", correcta: ".contenedor { justify-content: center; }" },
            { id: "m3_20", tipo: "multiple", texto: "¿Qué unidad CSS es relativa al ancho del viewport (ventana del navegador)?", opciones: { A: "em", B: "vw", C: "vh" }, correcta: "B" },
            { id: "m3_21", tipo: "true_false", texto: "El modelo de cajas (box-sizing: border-box) incluye el padding y el borde dentro del ancho y alto total declarado del elemento.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m3_22", tipo: "fill_blank", texto: "Escribe la propiedad CSS utilizada para alinear elementos verticalmente en un contenedor flexbox: align-________", correcta: "items" },
            { id: "m3_23", tipo: "code", texto: "Desarrollo de código: Escribe una regla CSS que establezca un ancho máximo de 1200px y un margen automático a los lados para centrar un contenedor.", correcta: ".container { max-width: 1200px; margin: 0 auto; }" },
            { id: "m3_24", tipo: "multiple", texto: "¿Qué selector BEM representa un modificador de un bloque?", opciones: { A: "bloque_elemento", B: "bloque--modificador", C: "bloque__modificador" }, correcta: "B" },
            { id: "m3_25", tipo: "true_false", texto: "Las fuentes externas en CSS se pueden importar y utilizar mediante la regla @import o la etiqueta <link>.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" }
        ]
    },
    {
        idModulo: "modulo-4",
        nombreCorto: "Módulo 4: Programación Avanzada en JavaScript",
        modulo: "Módulo 4: Programación Avanzada en JavaScript",
        activo: true,
        preguntas: [
            { id: "m4_1", tipo: "multiple", texto: "¿Cuál es el ámbito (scope) de una variable declarada con `let` dentro de un bloque?", opciones: { A: "Alcance global.", B: "Alcance de bloque, disponible únicamente dentro del bloque definido.", C: "Alcance dinámico de consola." }, correcta: "B" },
            { id: "m4_2", tipo: "multiple", texto: "¿Qué método de arreglos en JavaScript permite agregar uno o más elementos al final?", opciones: { A: "shift()", B: "unshift()", C: "push()" }, correcta: "C" },
            { id: "m4_3", tipo: "true_false", texto: "El operador `===` en JavaScript compara tanto el valor como el tipo de dato de forma estricta.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m4_4", tipo: "true_false", texto: "Una variable declarada con `const` puede ser reasignada libremente en cualquier momento posterior del código.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m4_5", tipo: "fill_blank", texto: "Completa el nombre del método de arreglos que elimina y retorna el último elemento: .________()", correcta: "pop" },
            { id: "m4_6", tipo: "fill_blank", texto: "Escribe la palabra reservada en JavaScript para declarar una función tradicional: ________ sumar(a, b) { return a + b; }", correcta: "function" },
            { id: "m4_7", tipo: "code", texto: "Desarrollo de código: Escribe una función flecha (*arrow function*) llamada `multiplicar` que reciba dos parámetros `x` e `y` y retorne su producto.", correcta: "const multiplicar = (x, y) => x * y;" },
            { id: "m4_8", tipo: "code", texto: "Desarrollo de código: Escribe una estructura condicional `if` que verifique si una variable `edad` es mayor o igual a 18.", correcta: "if (edad >= 18) {}" },
            { id: "m4_9", tipo: "multiple", texto: "¿Qué devuelve por defecto una función en JavaScript que no especifica sentencia `return`?", opciones: { A: "null", B: "undefined", C: "0" }, correcta: "B" },
            { id: "m4_10", tipo: "true_false", texto: "El ciclo `do...while` ejecuta su bloque de código al menos una vez antes de evaluar la condición lógica.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m4_11", tipo: "fill_blank", texto: "Escribe la propiedad utilizada para conocer la longitud de un arreglo o cadena de texto: ________", correcta: "length" },
            { id: "m4_12", tipo: "multiple", texto: "¿Qué función global convierte una cadena numérica con decimales a un número flotante?", opciones: { A: "parseFloat()", B: "parseInt()", C: "NumberString()" }, correcta: "A" },
            { id: "m4_13", tipo: "true_false", texto: "El método `Array.push()` modifica el arreglo original agregando elementos al inicio del mismo.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m4_14", tipo: "fill_blank", texto: "Escribe el operador lógico que representa la operación 'Y' (AND) en JavaScript: ________", correcta: "&&" },
            { id: "m4_15", tipo: "code", texto: "Desarrollo de código: Escribe una línea de código JavaScript para imprimir por consola el mensaje 'Hola Mundo'.", correcta: "console.log('Hola Mundo');" },
            { id: "m4_16", tipo: "multiple", texto: "¿Cuál de los siguientes métodos de arreglos busca el primer elemento que cumple una condición lógica?", opciones: { A: "filter()", B: "find()", C: "map()" }, correcta: "B" },
            { id: "m4_17", tipo: "true_false", texto: "El método Array.includes() retorna un valor booleano (true o false) indicando si un elemento existe en el arreglo.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m4_18", tipo: "fill_blank", texto: "Escribe el nombre del método de arreglos que elimina el primer elemento de un arreglo: .________()", correcta: "shift" },
            { id: "m4_19", tipo: "code", texto: "Desarrollo de código: Escribe un ciclo for clásico en JavaScript que itere desde i = 0 hasta i < 5.", correcta: "for (let i = 0; i < 5; i++) {}" },
            { id: "m4_20", tipo: "multiple", texto: "¿Qué operador se utiliza para evaluar una condición ternaria en JavaScript?", opciones: { A: "? :", B: "&& ||", C: "=>" }, correcta: "A" },
            { id: "m4_21", tipo: "true_false", texto: "En JavaScript, las cadenas de texto (strings) son mutables y sus caracteres individuales pueden modificarse directamente por índice.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m4_22", tipo: "fill_blank", texto: "Escribe la palabra clave utilizada para manejar errores en bloques try...catch: ________", correcta: "catch" },
            { id: "m4_23", tipo: "code", texto: "Desarrollo de código: Escribe una sentencia switch básica evaluando una variable llamada dia.", correcta: "switch(dia) {}" },
            { id: "m4_24", tipo: "multiple", texto: "¿Qué tipo de dato devuelve el operador typeof null en JavaScript por un error histórico?", opciones: { A: "null", B: "object", C: "undefined" }, correcta: "B" },
            { id: "m4_25", tipo: "true_false", texto: "Las funciones callback son funciones que se pasan como argumentos a otras funciones para ser ejecutadas posteriormente.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" }
        ]
    },/*
    {
        idModulo: "modulo-5",
        nombreCorto: "Módulo 5: Fundamentos de Bases de Datos Relacionales",
        modulo: "Módulo 5: Fundamentos de Bases de Datos Relacionales",
        activo: true,
        preguntas: [
            { id: "m5_1", tipo: "multiple", texto: "¿Qué pilar de la POO permite que una clase herede propiedades y métodos de otra?", opciones: { A: "Polimorfismo", B: "Encapsulamiento", C: "Herencia" }, correcta: "C" },
            { id: "m5_2", tipo: "multiple", texto: "¿Qué ventaja principal ofrecen las Promesas frente a los callbacks tradicionales?", opciones: { A: "Bloquean el hilo principal.", B: "Evitan el callback hell y proveen manejo estructurado con `.catch()`.", C: "Convierten todo a síncrono." }, correcta: "B" },
            { id: "m5_3", tipo: "true_false", texto: "El bucle de eventos (*Event Loop*) permite a JavaScript realizar operaciones no bloqueantes a pesar de ser single-threaded.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m5_4", tipo: "true_false", texto: "El método `JSON.parse()` se utiliza para convertir un objeto de JavaScript en una cadena de texto JSON.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m5_5", tipo: "fill_blank", texto: "Completa la palabra clave utilizada junto a `await` para manejar operaciones asíncronas de manera síncrona visual: ________", correcta: "async" },
            { id: "m5_6", tipo: "fill_blank", texto: "Escribe el método de una promesa que se ejecuta obligatoriamente cuando esta es rechazada o falla: .________()", correcta: "catch" },
            { id: "m5_7", tipo: "code", texto: "Desarrollo de código: Escribe una petición HTTP usando la API moderna `fetch` para consultar una URL ('https://api.example.com/data').", correcta: "fetch('https://api.example.com/data')" },
            { id: "m5_8", tipo: "code", texto: "Desarrollo de código: Escribe la sintaxis para desestructurar las propiedades `nombre` y `edad` de un objeto llamado `usuario`.", correcta: "const { nombre, edad } = usuario;" },
            { id: "m5_9", tipo: "multiple", texto: "¿Qué método de arreglos crea un nuevo arreglo transformando cada uno de sus elementos mediante una función?", opciones: { A: "filter()", B: "forEach()", C: "map()" }, correcta: "C" },
            { id: "m5_10", tipo: "true_false", texto: "Una función declarada con `async` siempre retorna implícitamente una Promesa.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m5_11", tipo: "fill_blank", texto: "Escribe el operador de propagación (*spread operator*) compuesto por tres puntos: ________", correcta: "..." },
            { id: "m5_12", tipo: "multiple", texto: "¿Qué método convierte un objeto JavaScript en texto plano formato JSON?", opciones: { A: "JSON.parse()", B: "JSON.stringify()", C: "JSON.toText()" }, correcta: "B" },
            { id: "m5_13", tipo: "true_false", texto: "El método `Array.filter()` modifica y muta el arreglo original eliminando los elementos que no cumplen la condición.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m5_14", tipo: "fill_blank", texto: "Escribe el nombre de la API moderna de JavaScript orientada a realizar solicitudes de red basada en promesas: ________", correcta: "fetch" },
            { id: "m5_15", tipo: "code", texto: "Desarrollo de código: Escribe una clase en JavaScript llamada `Persona` que contenga un constructor con un parámetro `nombre`.", correcta: "class Persona { constructor(nombre) { this.nombre = nombre; } }" },
            { id: "m5_16", tipo: "multiple", texto: "¿Qué método estático de Promise se resuelve cuando *todas* las promesas pasadas como iterable se han cumplido exitosamente?", opciones: { A: "Promise.race()", B: "Promise.all()", C: "Promise.any()" }, correcta: "B" },
            { id: "m5_17", tipo: "true_false", texto: "El método Array.reduce() permite reducir un arreglo a un único valor acumulado mediante una función reductora.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m5_18", tipo: "fill_blank", texto: "Escribe el nombre de la palabra clave en JavaScript para exportar un módulo por defecto: export ________", correcta: "default" },
            { id: "m5_19", tipo: "code", texto: "Desarrollo de código: Escribe una sentencia try...catch básica para manejo de excepciones asíncronas o síncronas.", correcta: "try {} catch (error) {}" },
            { id: "m5_20", tipo: "multiple", texto: "¿Qué método de arreglos en JavaScript verifica si *al menos uno* de los elementos cumple con la condición evaluada?", opciones: { A: "every()", B: "some()", C: "filter()" }, correcta: "B" },
            { id: "m5_21", tipo: "true_false", texto: "Las clases en JavaScript introducidas en ES6 son un reemplazo total y cambian por completo el modelo subyacente de prototipos.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m5_22", tipo: "fill_blank", texto: "Escribe la palabra clave para importar un módulo en JavaScript: ________", correcta: "import" },
            { id: "m5_23", tipo: "code", texto: "Desarrollo de código: Escribe el uso del operador rest (...) en los parámetros de una función para recibir un número indefinido de argumentos llamados args.", correcta: "function sumar(...args) {}" },
            { id: "m5_24", tipo: "multiple", texto: "¿Qué función nativa del navegador permite programar la ejecución de código después de un retraso en milisegundos?", opciones: { A: "setInterval", B: "setTimeout", C: "setDelay" }, correcta: "B" },
            { id: "m5_25", tipo: "true_false", texto: "El método Object.keys() retorna un arreglo con los nombres de las propiedades enumerables de un objeto.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" }
        ]
    },
    {
        idModulo: "modulo-6",
        nombreCorto: "Módulo 6: Desarrollo de Aplicaciones Web Node Express",
        modulo: "Módulo 6: Desarrollo de Aplicaciones Web Node Express",
        activo: true,
        preguntas: [
            { id: "m6_1", tipo: "multiple", texto: "¿Qué es una SPA (Single Page Application) en Vue.js?", opciones: { A: "Una app ejecutada exclusivamente en servidores remotos.", B: "Una aplicación web que carga una sola página HTML y dinamiza vistas mediante componentes.", C: "Un archivo estático comprimido." }, correcta: "B" },
            { id: "m6_2", tipo: "multiple", texto: "¿Cuál es la directiva oficial de Vue.js para enlace de datos bidireccional (*two-way binding*)?", opciones: { A: "v-bind", B: "v-for", C: "v-model" }, correcta: "C" },
            { id: "m6_3", tipo: "true_false", texto: "La directiva `v-if` remueve y destruye completamente el elemento del DOM cuando la condición es falsa, a diferencia de `v-show`.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m6_4", tipo: "true_false", texto: "En Vue.js, los Componentes de Un Solo Archivo utilizan la extensión de archivo `.js` obligatoriamente.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m6_5", tipo: "fill_blank", texto: "Completa la directiva oficial abreviada para enlaces dinámicos de atributos (`v-bind`): ________:src='imagen'", correcta: ":" },
            { id: "m6_6", tipo: "fill_blank", texto: "Escribe el nombre del hook del ciclo de vida en Vue que se ejecuta cuando el componente ya ha sido montado en el DOM: ________()", correcta: "mounted" },
            { id: "m6_7", tipo: "code", texto: "Desarrollo de código: Escribe una directiva `v-for` dentro de una etiqueta HTML para recorrer un arreglo llamado `items` con alias `item` y clave `:key='item.id'`.", correcta: "v-for='item in items' :key='item.id'" },
            { id: "m6_8", tipo: "code", texto: "Desarrollo de código: Escribe la abreviatura oficial de la directiva `v-on` para escuchar un evento de clic (`click`) llamando a un método `guardar`.", correcta: "@click='guardar'" },
            { id: "m6_9", tipo: "multiple", texto: "¿Qué patrón arquitectónico orienta el diseño reactivo de Vue.js?", opciones: { A: "MVVM (Model-View-ViewModel)", B: "MVC tradicional de servidor", C: "Microservices" }, correcta: "A" },
            { id: "m6_10", tipo: "true_false", texto: "La opción `data` en un componente con Options API debe ser una función que retorna un objeto con propiedades reactivas.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m6_11", tipo: "fill_blank", texto: "Escribe la directiva condicional alternativa que se coloca inmediatamente después de un bloque `v-if`: ________", correcta: "v-else" },
            { id: "m6_12", tipo: "multiple", texto: "¿Qué atributo especial es obligatorio proveer al usar la directiva `v-for` para mantener la trazabilidad de nodos?", opciones: { A: "id", B: ":key", C: "ref" }, correcta: "B" },
            { id: "m6_13", tipo: "true_false", texto: "El comando oficial actual recomendado para crear un proyecto moderno basado en Vue y Vite es `npm create vue@latest`.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m6_14", tipo: "fill_blank", texto: "Escribe el nombre de la herramienta oficial de enrutamiento para aplicaciones Vue: Vue ________", correcta: "Router" },
            { id: "m6_15", tipo: "code", texto: "Desarrollo de código: Escribe la estructura básica del objeto de opciones de un componente Vue que incluya la función `data` retornando un mensaje `{ texto: 'Hola' }`.", correcta: "data() { return { texto: 'Hola' } }" },
            { id: "m6_16", tipo: "multiple", texto: "¿Qué directiva de Vue.js se utiliza para renderizar contenido HTML sin escapar (raw HTML)?", opciones: { A: "v-html", B: "v-text", C: "v-bind" }, correcta: "A" },
            { id: "m6_17", tipo: "true_false", texto: "En Vue.js, las referencias a elementos del DOM o componentes hijos se manejan mediante el atributo especial ref.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m6_18", tipo: "fill_blank", texto: "Escribe la directiva oficial de Vue para enlace de eventos: v-________", correcta: "on" },
            { id: "m6_19", tipo: "code", texto: "Desarrollo de código: Escribe una directiva v-show en una etiqueta HTML con la condición isVisorActivo.", correcta: "v-show='isVisorActivo'" },
            { id: "m6_20", tipo: "multiple", texto: "¿Qué propiedad de la instancia de Vue permite definir métodos ejecutables desde la interfaz o la lógica?", opciones: { A: "computed", B: "methods", C: "data" }, correcta: "B" },
            { id: "m6_21", tipo: "true_false", texto: "La directiva v-once renderiza el elemento y los componentes una sola vez y omite futuras actualizaciones de re-renderizado.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m6_22", tipo: "fill_blank", texto: "Escribe el nombre de la función de Vue Composition API que define variables reactivas primitivas: ref(________)", correcta: "val" },
            { id: "m6_23", tipo: "code", texto: "Desarrollo de código: Escribe una directiva v-model vinculada a una propiedad llamada email.", correcta: "v-model='email'" },
            { id: "m6_24", tipo: "multiple", texto: "¿Cómo se denominan los bloques lógicos de estilo en un Componente de Un Solo Archivo (Single File Component) de Vue?", opciones: { A: "<template>", B: "<script>", C: "<style>" }, correcta: "C" },
            { id: "m6_25", tipo: "true_false", texto: "Las variables definidas con reactive() en la Composition API de Vue solo aceptan tipos de datos primitivos como números o strings.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" }
        ]
    },
    {
        idModulo: "modulo-7",
        nombreCorto: "Módulo 7: Acceso a Datos en Aplicaciones Node",
        modulo: "Módulo 7: Acceso a Datos en Aplicaciones Node",
        activo: true,
        preguntas: [
            { id: "m7_1", tipo: "multiple", texto: "¿Cuál es el mecanismo principal en Vue para pasar datos de un componente padre a un hijo?", opciones: { A: "$emit", B: "props", C: "Vue Router" }, correcta: "B" },
            { id: "m7_2", tipo: "multiple", texto: "¿Cuál es el propósito de utilizar Vuex ou Pinia en una aplicación Vue avanzada?", opciones: { A: "Compilar SASS.", B: "Reemplazar Axios.", C: "Gestionar y centralizar el estado global compartido." }, correcta: "C" },
            { id: "m7_3", tipo: "true_false", texto: "Un componente hijo puede modificar directamente y sin restricciones las `props` recibidas desde su componente padre.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m7_4", tipo: "true_false", texto: "Las propiedades computadas (`computed`) en Vue se caracterizan por calcular valores y cachearlos automáticamente según sus dependencias reactivas.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m7_5", tipo: "fill_blank", texto: "Completa el método utilizado dentro de un componente hijo para emitir un evento personalizado hacia el padre: this.$________('mi-evento')", correcta: "emit" },
            { id: "m7_6", tipo: "fill_blank", texto: "Escribe la opción de componentes Vue utilizada para observar cambios reactivos específicos y ejecutar efectos secundarios: ________", correcta: "watch" },
            { id: "m7_7", tipo: "code", texto: "Desarrollo de código: Escribe la definición de `props` en Options API para recibir una propiedad de tipo String llamada `titulo` que sea obligatoria (`required: true`).", correcta: "props: { titulo: { type: String, required: true } }" },
            { id: "m7_8", tipo: "code", texto: "Desarrollo de código: Escribe una propiedad computada llamada `nombreCompleto` que concatene `this.nombre` y `this.apellido` con un espacio.", correcta: "computed: { nombreCompleto() { return this.nombre + ' ' + this.apellido; } }" },
            { id: "m7_9", tipo: "multiple", texto: "¿Qué rol cumplen las mutaciones (`mutations`) dentro de un store clásico de Vuex?", opciones: { A: "Modificar directamente el estado (`state`) de forma síncrona.", B: "Ejecutar peticiones HTTP asíncronas.", C: "Renderizar vistas HTML." }, correcta: "A" },
            { id: "m7_10", tipo: "true_false", texto: "Las pruebas End-to-End (E2E) con herramientas como Cypress simulan flujos reales e interacciones completas del usuario en la aplicación.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m7_11", tipo: "fill_blank", texto: "Escribe el nombre de la propiedad de instancia que permite acceder al store global de Vuex en Options API: this.$________", correcta: "store" },
            { id: "m7_12", tipo: "multiple", texto: "¿Qué elementos de Vuex manejan operaciones asíncronas antes de comprometer una mutación?", opciones: { A: "Getters", B: "Actions", C: "Modules" }, correcta: "B" },
            { id: "m7_13", tipo: "true_false", texto: "El flujo de datos mediante `props` en Vue sigue un modelo bidireccional por defecto.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m7_14", tipo: "fill_blank", texto: "Escribe el nombre de la biblioteca de componentes UI de diseño material muy popular para Vue: ________", correcta: "Vuetify" },
            { id: "m7_15", tipo: "code", texto: "Desarrollo de código: Escribe una llamada para emitir un evento llamado `actualizar` pasando el valor `5` utilizando la instancia de Vue.", correcta: "this.$emit('actualizar', 5);" },
            { id: "m7_16", tipo: "multiple", texto: "¿Qué función cumple el helper mapState en Vuex?", opciones: { A: "Mapear acciones asíncronas", B: "Mapear propiedades del estado global a computed properties locales", C: "Modificar mutaciones directas" }, correcta: "B" },
            { id: "m7_17", tipo: "true_false", texto: "En Pinia, ya no existen las mutaciones (mutations), permitiendo modificar el estado directamente desde las acciones.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m7_18", tipo: "fill_blank", texto: "Escribe el nombre del argumento principal que recibe una función mutation en Vuex para alterar el estado: ________", correcta: "state" },
            { id: "m7_19", tipo: "code", texto: "Desarrollo de código: Escribe una propiedad computada con getter y setter en Options API.", correcta: "computed: { get() {}, set(val) {} }" },
            { id: "m7_20", tipo: "multiple", texto: "¿Qué opción de Vue se utiliza para configurar filtros personalizados o mixins globales en versiones clásicas?", opciones: { A: "mixins", B: "components", C: "directives" }, correcta: "A" },
            { id: "m7_21", tipo: "true_false", texto: "Los slots (ranuras) en Vue permiten distribuir contenido de forma dinámica desde el componente padre hacia la plantilla del componente hijo.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m7_22", tipo: "fill_blank", texto: "Escribe la etiqueta especial de Vue utilizada para renderizar contenido de un slot: <________>", correcta: "slot" },
            { id: "m7_23", tipo: "code", texto: "Desarrollo de código: Escribe una directiva personalizada básica en un componente Vue con el gancho mounted.", correcta: "mounted(el) { el.focus(); }" },
            { id: "m7_24", tipo: "multiple", texto: "¿Qué herramienta o librería complementaria se utiliza habitualmente para pruebas unitarias de componentes Vue?", opciones: { A: "Vitest / Jest", B: "Webpack", C: "Nodemon" }, correcta: "A" },
            { id: "m7_25", tipo: "true_false", texto: "La directiva v-memo en Vue se utiliza para memorizar un subárbol de la plantilla y optimizar el rendimiento de renderizado.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" }
        ]
    },
    {
        idModulo: "modulo-8",
        nombreCorto: "Módulo 8: Implementación de API Backend Node Express",
        modulo: "Módulo 8: Implementación de API Backend Node Express",
        activo: true,
        preguntas: [
            { id: "m8_1", tipo: "multiple", texto: "¿Cuál es la importancia principal de contar con un portafolio de productos digitales?", opciones: { A: "Demostrar competencias técnicas reales y potenciar el perfil laboral.", B: "Obtener licencias de software gratis.", C: "Reemplazar el código fuente." }, correcta: "A" },
            { id: "m8_2", tipo: "multiple", texto: "¿Qué plataforma se utiliza comúnmente para alojar código y desplegar páginas web estáticas con GitHub Pages?", opciones: { A: "Behance", B: "GitHub", C: "Postman" }, correcta: "B" },
            { id: "m8_3", tipo: "true_false", texto: "El archivo `README.md` es fundamental en un repositorio ya que documenta la descripción, tecnologías, instrucciones de instalación y uso del proyecto.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m8_4", tipo: "true_false", texto: "El comando `git clone` se utiliza para enviar los cambios locales directamente hacia un repositorio remoto.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m8_5", tipo: "fill_blank", texto: "Completa el nombre del lenguaje de marcado ligero utilizado para redactar archivos de documentación en repositorios: ________", correcta: "Markdown" },
            { id: "m8_6", tipo: "fill_blank", texto: "Escribe el comando de Git que muestra el estado actual del directorio de trabajo y los archivos modificados: git ________", correcta: "status" },
            { id: "m8_7", tipo: "code", texto: "Desarrollo de código: Escribe el comando de Git necesario para enviar los commits locales de la rama principal al repositorio remoto.", correcta: "git push origin main" },
            { id: "m8_8", tipo: "code", texto: "Desarrollo de código: Escribe el comando de npm utilizado para instalar todas las dependencias listadas en el archivo `package.json`.", correcta: "npm install" },
            { id: "m8_9", tipo: "multiple", texto: "¿Qué archivo de configuración en Node.js detalla las dependencias, scripts y metadatos del proyecto?", opciones: { A: "index.js", B: "config.json", C: "package.json" }, correcta: "C" },
            { id: "m8_10", tipo: "true_false", texto: "El archivo `.gitignore` sirve para especificar qué archivos y carpetas (como `node_modules`) no deben ser rastreados ni subidos a Git.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m8_11", tipo: "fill_blank", texto: "Escribe el nombre de la carpeta generada localmente que almacena los paquetes instalados por npm: ________", correcta: "node_modules" },
            { id: "m8_12", tipo: "multiple", texto: "¿Qué utilidad tiene incorporar un video demostrativo o captura del producto en el portafolio?", opciones: { A: "Reemplazar totalmente el código fuente.", B: "Mostrar de forma visual y rápida las capacidades y funcionamiento de la aplicación.", C: "Gestionar estados globales." }, correcta: "B" },
            { id: "m8_13", tipo: "true_false", texto: "El comando `git init` se utiliza para clonar un repositorio externo existente en la computadora.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "F" },
            { id: "m8_14", tipo: "fill_blank", texto: "Escribe el comando de Git para agregar los cambios del directorio de trabajo al área de preparación (*staging area*): git ________ .", correcta: "add" },
            { id: "m8_15", tipo: "code", texto: "Desarrollo de código: Escribe una línea dentro de un archivo `.gitignore` para ignorar completamente la carpeta `node_modules/`.", correcta: "node_modules/" },
            { id: "m8_16", tipo: "multiple", texto: "¿Cuál es el propósito principal de una rama (branch) en Git?", opciones: { A: "Duplicar archivos en el disco duro", B: "Desarrollar características o corregir errores de forma aislada sin afectar la rama principal", C: "Comprimir el código fuente" }, correcta: "B" },
            { id: "m8_17", tipo: "true_false", texto: "El comando git merge se utiliza para fusionar los cambios de una rama en otra.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m8_18", tipo: "fill_blank", texto: "Escribe el comando de Git para ver el historial de commits realizados: git ________", correcta: "log" },
            { id: "m8_19", tipo: "code", texto: "Desarrollo de código: Escribe un comando de Git para crear una nueva rama llamada dev y cambiar a ella inmediatamente.", correcta: "git checkout -b dev" },
            { id: "m8_20", tipo: "multiple", texto: "¿Qué comando de Git permite descartar los cambios locales no preparados en el directorio de trabajo?", opciones: { A: "git reset", B: "git checkout -- .", C: "git delete" }, correcta: "B" },
            { id: "m8_21", tipo: "true_false", texto: "Node Package Manager (npm) es el administrador de paquetes oficial predeterminado para el ecosistema de Node.js.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" },
            { id: "m8_22", tipo: "fill_blank", texto: "Escribe el comando de npm para instalar un paquete como dependencia de desarrollo: npm install ________ -D", correcta: "package" },
            { id: "m8_23", tipo: "code", texto: "Desarrollo de código: Escribe un script en el archivo package.json para ejecutar una aplicación usando node llamado \"start\": \"node index.js\".", correcta: "\"start\": \"node index.js\"" },
            { id: "m8_24", tipo: "multiple", texto: "¿Qué servicio de alojamiento gratuito ofrece GitHub para sitios web estáticos directamente desde un repositorio?", opciones: { A: "GitHub Pages", B: "GitHub Storage", C: "GitHub Hosting" }, correcta: "A" },
            { id: "m8_25", tipo: "true_false", texto: "El archivo .npmignore tiene un funcionamiento similar a .gitignore pero se utiliza específicamente para excluir archivos al publicar paquetes en el registro de npm.", opciones: { V: "Verdadero", F: "Falso" }, correcta: "V" }
        ]
    }*/
];

// Función para renderizar dinámicamente los módulos y el panel de control del docente
function inicializarExamen() {
    const container = document.getElementById("modulos-container");
    const navContainer = document.getElementById("sidebar-nav");
    const togglesContainer = document.getElementById("docente-toggles");
    
    container.innerHTML = "";
    
    // Mantener enlace fijo de consejos
    navContainer.innerHTML = `<a href="#consejos" class="nav-link">💡 Consejos del Examen</a>`;
    togglesContainer.innerHTML = "";

    examData.forEach(mod => {
        // 1. Crear checkbox de control docente
        const toggleLabel = document.createElement("label");
        toggleLabel.classList.add("docente-toggle-label");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = mod.activo;
        checkbox.dataset.id = mod.idModulo;
        checkbox.addEventListener("change", (e) => {
            mod.activo = e.target.checked;
            actualizarVisibilidadModulos();
        });
        
        toggleLabel.appendChild(checkbox);
        toggleLabel.appendChild(document.createTextNode(` ${mod.nombreCorto}`));
        togglesContainer.appendChild(toggleLabel);

        // 2. Crear enlace en la barra de navegación lateral solo si está activo
        if (mod.activo) {
            const navLink = document.createElement("a");
            navLink.href = `#${mod.idModulo}`;
            navLink.classList.add("nav-link");
            navLink.textContent = mod.nombreCorto;
            navLink.id = `nav-${mod.idModulo}`;
            navContainer.appendChild(navLink);
        }

        // 3. Crear contenedor del Módulo en el formulario
        const moduloDiv = document.createElement("div");
        moduloDiv.classList.add("modulo");
        moduloDiv.id = mod.idModulo;
        if (!mod.activo) {
            moduloDiv.classList.add("oculto-modulo");
        }
        
        const h2 = document.createElement("h2");
        h2.textContent = mod.modulo;
        moduloDiv.appendChild(h2);
        
        mod.preguntas.forEach((p, index) => {
            const preguntaDiv = document.createElement("div");
            preguntaDiv.classList.add("pregunta");
            preguntaDiv.id = `container-${p.id}`;
            
            const badge = document.createElement("span");
            badge.classList.add("badge-tipo");
            let tipoLabel = "Selección Múltiple";
            if (p.tipo === "true_false") tipoLabel = "Verdadero / Falso";
            if (p.tipo === "fill_blank") tipoLabel = "Completación";
            if (p.tipo === "code") tipoLabel = "Desarrollo de Código";
            badge.textContent = tipoLabel;
            preguntaDiv.appendChild(badge);
            
            const pTexto = document.createElement("p");
            pTexto.textContent = `${index + 1}. ${p.texto}`;
            preguntaDiv.appendChild(pTexto);
            
            if (p.tipo === "multiple" || p.tipo === "true_false") {
                for (let letra in p.opciones) {
                    const label = document.createElement("label");
                    const input = document.createElement("input");
                    input.type = "radio";
                    input.name = p.id;
                    input.value = letra;
                    
                    label.appendChild(input);
                    label.appendChild(document.createTextNode(` ${letra}) ${p.opciones[letra]}`));
                    preguntaDiv.appendChild(label);
                }
            } else if (p.tipo === "fill_blank") {
                const input = document.createElement("input");
                input.type = "text";
                input.name = p.id;
                input.placeholder = "Escribe tu respuesta aquí...";
                preguntaDiv.appendChild(input);
            } else if (p.tipo === "code") {
                const textarea = document.createElement("textarea");
                textarea.name = p.id;
                textarea.placeholder = "Escribe o desarrolla tu código aquí...";
                preguntaDiv.appendChild(textarea);
            }
            
            const feedbackDiv = document.createElement("div");
            feedbackDiv.id = `feedback-${p.id}`;
            preguntaDiv.appendChild(feedbackDiv);
            
            moduloDiv.appendChild(preguntaDiv);
        });
        
        container.appendChild(moduloDiv);
    });
}

// Función para actualizar visibilidad en tiempo real desde el Panel Docente
function actualizarVisibilidadModulos() {
    const navContainer = document.getElementById("sidebar-nav");
    navContainer.innerHTML = `<a href="#consejos" class="nav-link">💡 Consejos del Examen</a>`;

    examData.forEach(mod => {
        const moduloDiv = document.getElementById(mod.idModulo);
        if (mod.activo) {
            moduloDiv.classList.remove("oculto-modulo");
            const navLink = document.createElement("a");
            navLink.href = `#${mod.idModulo}`;
            navLink.classList.add("nav-link");
            navLink.textContent = mod.nombreCorto;
            navContainer.appendChild(navLink);
        } else {
            moduloDiv.classList.add("oculto-modulo");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    inicializarExamen();
});

// Manejar la evaluación del examen al enviar
document.getElementById('examenForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let puntajeTotal = 0;
    let preguntasTotales = 0;

    examData.forEach(mod => {
        if (!mod.activo) return;

        mod.preguntas.forEach(p => {
            preguntasTotales++;
            const contenedorPregunta = document.getElementById(`container-${p.id}`);
            const feedbackDiv = document.getElementById(`feedback-${p.id}`);
            
            let esCorrecto = false;
            let respuestaUsuarioTexto = "";

            if (p.tipo === "multiple" || p.tipo === "true_false") {
                const seleccionada = document.querySelector(`input[name="${p.id}"]:checked`);
                if (seleccionada) {
                    respuestaUsuarioTexto = seleccionada.value;
                    if (respuestaUsuarioTexto === p.correcta) {
                        esCorrecto = true;
                    }
                }
            } else if (p.tipo === "fill_blank") {
                const inputVal = document.querySelector(`input[name="${p.id}"]`).value.trim();
                respuestaUsuarioTexto = inputVal;
                if (inputVal.toLowerCase() === p.correcta.toLowerCase()) {
                    esCorrecto = true;
                }
            } else if (p.tipo === "code") {
                const textVal = document.querySelector(`textarea[name="${p.id}"]`).value.trim();
                respuestaUsuarioTexto = textVal;
                if (textVal.length > 0) {
                    const limpioUser = textVal.replace(/\s+/g, ' ').toLowerCase();
                    const limpioCorrecto = p.correcta.replace(/\s+/g, ' ').toLowerCase();
                    if (limpioUser.includes(limpioCorrecto) || limpioUser === limpioCorrecto) {
                        esCorrecto = true;
                    }
                }
            }
            
            if (esCorrecto) {
                puntajeTotal++;
                contenedorPregunta.style.borderLeft = "4px solid #16a34a";
                feedbackDiv.className = "feedback-item correcto";
                feedbackDiv.innerHTML = "✔ ¡Correcto!";
            } else {
                contenedorPregunta.style.borderLeft = "4px solid #dc2626";
                feedbackDiv.className = "feedback-item incorrecto";
                
                let textoRespuestaCorrecta = p.correcta;
                if ((p.tipo === "multiple" || p.tipo === "true_false") && p.opciones[p.correcta]) {
                    textoRespuestaCorrecta = `${p.correcta}) ${p.opciones[p.correcta]}`;
                }
                
                if (respuestaUsuarioTexto !== "") {
                    if (p.tipo === "code") {
                        feedbackDiv.innerHTML = `✖ Incorrecto. La solución de código correcta es:<br><pre style="background:#f1f5f9; padding:8px; border-radius:4px; margin-top:5px; overflow-x:auto;"><code>${p.correcta}</code></pre>`;
                    } else {
                        feedbackDiv.innerHTML = `✖ Incorrecto. La respuesta o solución correcta es: <strong>${textoRespuestaCorrecta}</strong>`;
                    }
                } else {
                    if (p.tipo === "code") {
                        feedbackDiv.innerHTML = `✖ No respondida. La solución de código correcta es:<br><pre style="background:#f1f5f9; padding:8px; border-radius:4px; margin-top:5px; overflow-x:auto;"><code>${p.correcta}</code></pre>`;
                    } else {
                        feedbackDiv.innerHTML = `✖ No respondida. La respuesta o solución correcta es: <strong>${textoRespuestaCorrecta}</strong>`;
                    }
                }
            }
        });
    });

    const divResultado = document.getElementById('resultado');
    divResultado.classList.remove('oculto');
    
    let porcentaje = preguntasTotales > 0 ? Math.round((puntajeTotal / preguntasTotales) * 100) : 0;
    
    divResultado.innerHTML = `
        <h3>Resultado de la Evaluación</h3>
        <p>Has obtenido <strong>${puntajeTotal}</strong> de <strong>${preguntasTotales}</strong> aciertos en los módulos activos.</p>
        <p>Calificación final: <strong>${porcentaje}%</strong></p>
    `;
    
    divResultado.scrollIntoView({ behavior: 'smooth' });
});