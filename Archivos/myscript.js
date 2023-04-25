



//INICIO CODIGO DEL JUEGO

const preguntasDificiles = [
  {
    question: "¿Cuál es la cantidad máxima de vértices que puede tener un poliedro convexo con caras triangulares?",
    options: ["6", "10", "12", "20", "30"],
    answer: "12",
    answered: false
  },
  {
    question: "¿Qué nombre recibe la partícula subatómica compuesta por dos quarks y un antiquark?",
    options: ["Protón", "Neutrón", "Pión", "Kaón", "Barión lambda"],
    answer: "Barión lambda",
    answered: false
  },
  {
    question: "¿Cuál es el nombre de la teoría económica que defiende que el mercado se regula automáticamente sin necesidad de intervención del Estado?",
    options: ["Marxismo", "Keynesianismo", "Liberalismo", "Socialismo", "Anarquismo"],
    answer: "Liberalismo",
    answered: false
  },
  {
    question: "¿Cuál es la función principal del músculo orbicularis oculi?",
    options: ["Cerrar los ojos", "Abrir los ojos", "Mover los ojos", "Levantar las cejas", "Arrugar la frente"],
    answer: "Cerrar los ojos",
    answered: false
  },
  {
    question: "¿Cuál es el nombre de la constelación que contiene la estrella más brillante del cielo nocturno?",
    options: ["Orión", "Sirio", "Andrómeda", "Pegaso", "Casiopea"],
    answer: "Can Mayor",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del fenómeno físico que ocurre cuando un material se somete a una tensión por encima de su límite elástico y se deforma permanentemente?",
    options: ["Elastoplasticidad", "Elastometría", "Deformación plástica", "Fractura dúctil", "Fluencia"],
    answer: "Deformación plástica",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del proceso de oxidación de un ácido graso que ocurre en las mitocondrias y produce energía?",
    options: ["Fotosíntesis", "Glucólisis", "Ciclo de Krebs", "Beta-oxidación", "Fosforilación oxidativa"],
    answer: "Beta-oxidación",
    answered: false
  },
  {
    question: "¿Cuál es el nombre de la técnica matemática que se utiliza para encontrar la solución de un sistema de ecuaciones lineales?",
    options: ["Cálculo diferencial", "Cálculo integral", "Álgebra lineal", "Método de Euler", "Método de eliminación de Gauss"],
    answer: "Método de eliminación de Gauss",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del principio que establece que el tiempo de tránsito de una señal de radio de ida y vuelta entre dos puntos es proporcional a la distancia entre ellos?",
    options: ["Principio de Snell", "Principio de Fermat", "Principio de Huygens", "Principio de Leibniz", "Principio de Maupertuis"],
    answer: "Principio de Fermat",
    answered: false
  },
  {    
    question: "¿Cuál es el nombre del proceso en el que una célula se divide en dos células hijas?",    
    options: ["Meiosis", "Mitosis", "Citocinesis", "Apoptosis", "Endocitosis"],
    answer: "Mitosis",
    answered: false
  },
  {
    question: "¿Cuál es la partícula elemental que tiene una carga eléctrica negativa?",
    options: ["Neutrón", "Protón", "Electrón", "Positrón", "Muón"],
    answer: "Electrón",
    answered: false
  },
  {
    question: "¿En qué año se publicó la teoría de la relatividad general de Albert Einstein?",
    options: ["1905", "1915", "1925", "1935", "1945"],
    answer: "1915",
    answered: false
  },
  {
    question: "¿Cuál es el nombre de la célula reproductora femenina?",
    options: ["Óvulo", "Espermatozoide", "Cigoto", "Gameto", "Zigoto"],
    answer: "Óvulo",
    answered: false
  },
  {
    question: "¿Cuál es el nombre de la hormona producida por el páncreas que regula los niveles de glucosa en sangre?",
    options: ["Adrenalina", "Insulina", "Glucagón", "Cortisol", "Progesterona"],
    answer: "Insulina",
    answered: false
  },
  {
    question: "¿Cuál es la unidad básica de la estructura de los seres vivos?",
    options: ["Célula", "Átomo", "Molécula", "Orgánulo", "Tisular"],
    answer: "Célula",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del proceso mediante el cual las plantas convierten la luz solar en energía?",
    options: ["Fotosíntesis", "Respiración", "Transpiración", "Fermentación", "Glicólisis"],
    answer: "Fotosíntesis",
    answered: false
  },
  {
    question: "¿Cuál es la partícula elemental que no tiene carga eléctrica?",
    options: ["Neutrón", "Protón", "Electrón", "Positrón", "Muón"],
    answer: "Neutrón",
    answered: false
  },
  {
    question: "¿Cuál es el proceso por el cual el núcleo de un átomo emite partículas o radiación?",
    options: ["Fisión", "Fusión", "Radiación", "Desintegración", "Dispersión"],
    answer: "Desintegración",
    answered: false
  },
  {
    question: "¿Cuál es la capa más externa de la Tierra?",
    options: ["Núcleo", "Manto", "Corteza", "Magma", "Placas tectónicas"],
    answer: "Corteza",
    answered: false
  },
  {
    question: "¿Qué evento de JavaScript se produce cuando una promesa es rechazada?",
    options: ["onerror", "onreject", "onfailure", "oncatch", "nop existe tal evento"],
    answer: "nop existe tal evento",
    answered: false
  }
]

const preguntasFaciles = [
  {
    question: "¿En qué país se encuentra la Torre de Pisa?",
    options: ["Francia", "Italia", "España", "Reino Unido", "Alemania"],
    answer: "Italia",
    answered: false
  },
  {
    question: "¿Quién es el personaje principal de la película Forrest Gump?",
    options: ["Forrest Gump", "Jenny Curran", "Dan Taylor", "Teniente Dan", "Bubba Blue"],
    answer: "Forrest Gump",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del personaje principal de la película Toy Story?",
    options: ["Buzz Lightyear", "Woody", "Mr. Potato Head", "Slinky Dog", "Rex"],
    answer: "Woody",
    answered: false
  },
  {
    question: "¿Cuál es el nombre de la famosa serie de televisión animada creada por Matt Groening?",
    options: ["Family Guy", "South Park", "The Simpsons", "American Dad", "Futurama"],
    answer: "The Simpsons",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del protagonista en la película La La Land?",
    options: ["Sebastian Wilder", "Mia Dolan", "Keith", "Greg", "Brad"],
    answer: "Sebastian Wilder",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del personaje principal de la película de Disney Aladdin?",
    options: ["Jasmine", "Genio", "Abu", "Jafar", "Aladdin"],
    answer: "Aladdin",
    answered: false
  },
  {
    question: "¿En qué ciudad se encuentra la famosa estatua Cristo Redentor?",
    options: ["Buenos Aires", "Ciudad de México", "Santiago de Chile", "Río de Janeiro", "Bogotá"],
    answer: "Río de Janeiro",
    answered: false
  },
  {
    question: "¿Cuál es el nombre de la famosa película de ciencia ficción dirigida por James Cameron?",
    options: ["The Terminator", "Jurassic Park", "Avatar", "Blade Runner", "Interstellar"],
    answer: "Avatar",
    answered: false
  },
  {
    question: "¿Quién es el protagonista en la película de acción Die Hard?",
    options: ["John McClane", "Hans Gruber", "Holly Gennero", "Al Powell", "Argyle"],
    answer: "John McClane",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del personaje principal en la película Matilda de Roald Dahl?",
    options: ["Matilda Wormwood", "Agatha Trunchbull", "Miss Jennifer Honey", "Harry Wormwood", "Michael Wormwood"],
    answer: "Matilda Wormwood",
    answered: false
  },
  {
    question: "¿En qué ciudad se encuentra la Torre Eiffel?",
    options: ["Madrid", "Roma", "Berlín", "París", "Londres"],
    answer: "París",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del personaje principal de la película de Disney The Lion King?",
    options: ["Mufasa", "Timón", "Scar", "Simba", "Nala"],
    answer: "Simba",
    answered: false
  },
  {
    question: "¿Quién es el autor de la novela clásica de ciencia ficción 'La Guerra de los Mundos'?",
    options: ["H.G. Wells", "Jules Verne", "Isaac Asimov", "Arthur C. Clarke", "Ray Bradbury"],
    answer: "H.G. Wells",
    answered: false
  },
  {
    question: "¿En qué año se estrenó la primera película de la saga Star Wars?",
    options: ["1975", "1977", "1979", "1981", "1983"],
    answer: "1977",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del protagonista en la película de ciencia ficción The Matrix?",
    options: ["Morpheus", "Neo", "Trinity", "Agent Smith", "Cypher"],
    answer: "Neo",
    answered: false
  },
  {
    question: "¿Quién escribió la famosa novela 'El Principito'?",
    options: ["Jorge Luis Borges", "Antoine de Saint-Exupéry", "Gabriel García Márquez", "Mario Vargas Llosa", "Pablo Neruda"],
    answer: "Antoine de Saint-Exupéry",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del personaje principal en la serie de televisión Breaking Bad?",
    options: ["Jesse Pinkman", "Hank Schrader", "Walter White", "Skyler White", "Gus Fring"],
    answer: "Walter White",
    answered: false
  },
  {
    question: "¿En qué año se fundó Apple Inc.?",
    options: ["1972", "1976", "1980", "1984", "1990"],
    answer: "1976",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del personaje principal en la película de ciencia ficción Terminator 2?",
    options: ["Sarah Connor", "John Connor", "T-800", "Miles Dyson", "Robert Brewster"],
    answer: "John Connor",
    answered: false
  },
  {
    question: "¿Cuál es el nombre de la montaña más alta del mundo?",
    options: ["Monte Everest", "Monte Kilimanjaro", "Monte Aconcagua", "Monte Denali", "Monte Vinson"],
    answer: "Monte Everest",
    answered: false
  }
  
]

const preguntasMedias = [
  {
    question: "¿Cuál es la ley física que establece que toda fuerza tiene una reacción igual y opuesta?",
    options: ["Ley de la gravedad", "Ley de Coulomb", "Ley de Ohm", "Ley de Newton", "Ley de la termodinámica"],
    answer: "Ley de Newton",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del componente que se encarga de procesar y ejecutar instrucciones en una computadora?",
    options: ["Memoria RAM", "Unidad de procesamiento central (CPU)", "Disco duro", "Tarjeta de video", "Fuente de poder"],
    answer: "Unidad de procesamiento central (CPU)",
    answered: false
  },
  {
    question: "¿Cuál es la novela más famosa del escritor ruso Fiódor Dostoyevski?",
    options: ["Crimen y castigo", "Los hermanos Karamazov", "El idiota", "Memorias del subsuelo", "El jugador"],
    answer: "Crimen y castigo",
    answered: false
  },
  {
    question: "¿Cuál es el nombre de la célula sanguínea que se encarga de transportar el oxígeno en el cuerpo humano?",
    options: ["Eritrocito", "Plaqueta", "Leucocito", "Linfocito", "Monocito"],
    answer: "Eritrocito",
    answered: false
  },
  {
    question: "¿En qué año se fundó la ciudad de Roma?",
    options: ["753 a.C.", "323 a.C.", "27 a.C.", "476 d.C.", "1453 d.C."],
    answer: "753 a.C.",
    answered: false
  },
  {
    question: "¿Quién descubrió la ley de la conservación de la energía?",
    options: ["Isaac Newton", "Albert Einstein", "James Clerk Maxwell", "Robert Boyle", "Hermann von Helmholtz"],
    answer: "Hermann von Helmholtz",
    answered: false
  },
  {
    question: "¿En qué país se encuentra la ciudad de Petra, conocida por sus antiguas construcciones talladas en la roca?",
    options: ["Egipto", "Jordania", "Líbano", "Turquía", "Irak"],
    answer: "Jordania",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del proceso que se utiliza para purificar agua y hacerla potable?",
    options: ["Floculación", "Osmosis inversa", "Cloración", "Sedimentación", "Esterilización"],
    answer: "Osmosis inversa",
    answered: false
  },
  {
    question: "¿Cuál es el metal más pesado que se encuentra de manera natural en la Tierra?",
    options: ["Oro", "Plomo", "Mercurio", "Uranio", "Plutonio"],
    answer: "Uranio",
    answered: false
  },
  {
    question: "¿Quién es el autor de la novela clásica 'Moby-Dick'?",
    options: ["Herman Melville", "Nathaniel Hawthorne", "Edgar Allan Poe", "Mark Twain", "Ralph Waldo Emerson"],
    answer: "Herman Melville",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del proceso que se utiliza para separar los componentes de una mezcla mediante la evaporación selectiva de cada uno?",
    options: ["Destilación", "Filtración", "Decantación", "Cromatografía", "Lixiviación"],
    answer: "Destilación",
    answered: false
  },
  {
    question: "¿En qué año se llevó a cabo el primer viaje tripulado a la Luna?",
    options: ["1961", "1969", "1975", "1983", "1997"],
    answer: "1969",
    answered: false
  },
  {
    question: "¿Quién fue el primer presidente de Estados Unidos?",
    options: ["George Washington", "John Adams", "Thomas Jefferson", "Abraham Lincoln", "Theodore Roosevelt"],
    answer: "George Washington",
    answered: false
  },
  {
    question: "¿Cuál es el nombre de la hormona producida por la glándula tiroides que regula el metabolismo?",
    options: ["Insulina", "Testosterona", "Estrógeno", "Adrenalina", "Tiroxina"],
    answer: "Tiroxina",
    answered: false
  },
  {
    question: "¿En qué ciudad se encuentra la famosa escultura de la 'Sirenita'?",
    options: ["Copenhague", "Estocolmo", "Oslo", "Helsinki", "Reikiavik"],
    answer: "Copenhague",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del proceso que se utiliza para medir la cantidad de una sustancia en una muestra mediante una reacción química?",
    options: ["Espectroscopia", "Cromatografía", "Titulación", "Electroforesis", "Hidrólisis"],
    answer: "Titulación",
    answered: false
  },
  {
    question: "¿Quién fue el pintor holandés que creó la famosa obra 'La noche estrellada'?",
    options: ["Vincent van Gogh", "Johannes Vermeer", "Rembrandt van Rijn", "Jan van Eyck", "Hieronymus Bosch"],
    answer: "Vincent van Gogh",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del principal pigmento fotosintético en las plantas?",
    options: ["Clorofila", "Carotenoide", "Ficoeritrina", "Ficocianina", "Xantofila"],
    answer: "Clorofila",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del proceso que se utiliza para convertir un líquido en vapor mediante la aplicación de calor?",
    options: ["Evaporación", "Condensación", "Sublimación", "Fusión", "Solidificación"],
    answer: "Evaporación",
    answered: false
  },
  {
    question: "¿Cuál es el nombre de la estructura en el cerebro que se encarga del control de los movimientos y la coordinación?",
    options: ["Cerebelo", "Hipotálamo", "Tálamo", "Lóbulo frontal", "Lóbulo parietal"],
    answer: "Cerebelo",
    answered: false
  }
  
]

const pregunta = document.getElementById("pregunta")
const elecciones = document.getElementById("elecciones");
const progreso = document.getElementById("progreso");

let numeroPreguntas = 0;
let puntuacion = 0;
let numeroAleatorio = 0;
let modoDificultad = "medium";
let arrayPreguntas=[];


function elegirDificultad() {
 
    const modos = document.getElementsByName("modo");
    for (let i = 0; i < modos.length; i++) {
      if (modos[i].checked) {
        modoDificultad = modos[i].value;
        break;
      }
    }

    console.log(modoDificultad);
    if (modoDificultad === "easy") {
      arrayPreguntas = preguntasFaciles;
    } else if (modoDificultad === "medium") {
      arrayPreguntas = preguntasMedias;
    } else if (modoDificultad === "hard") {
      arrayPreguntas = preguntasDificiles;
    }
    
}

function mostrarPregunta() {

   

  return new Promise((resolve, reject) => {
    numeroAleatorio = Math.floor(Math.random() * 20);
    while (arrayPreguntas[numeroAleatorio].answered) {
      numeroAleatorio = Math.floor(Math.random() * 20);
    }
    pregunta.textContent = arrayPreguntas[numeroAleatorio].question;

    opciones = elecciones.querySelectorAll(".eleccion")
    let i = 0
    opciones.forEach(element => {
      element.style.backgroundColor = "#d0d0d0";
      element.textContent = arrayPreguntas[numeroAleatorio].options[i];
      i++
    });

    progreso.textContent = `Pregunta ${numeroPreguntas + 1} de ${arrayPreguntas.length}`;

    resolve();
  });

}
let final = 0;

function comprobarRespuesta(identificador) {

  clearInterval(intervalo);
  const opcion = document.getElementById(identificador)
  let respuestaSeleccionada = opcion.textContent;
  console.log(numeroAleatorio)
  let respuestaCorrecta = arrayPreguntas[numeroAleatorio].answer;
  if (respuestaSeleccionada == respuestaCorrecta) {
    setTimeout(() => {
      opcion.style.background = "green";
      puntuacion += 3;
    }, 3000);
  } else {
    setTimeout(() => {
      opcion.style.background = "red";
      if (puntuacion == 0) {
        puntuacion = 0
      } else {
        puntuacion -= 1;
      }
    }, 3000);
  }

  setTimeout(() => {
    iniciarContador();
    arrayPreguntas[numeroAleatorio].answered = true;
    final++
    numeroPreguntas++;
    if (final == 20) {
      finalizarJuego()
    } else

      mostrarPregunta()


  }, 4000);

}

let intervalo;

function iniciarContador() {

  reloj = document.getElementById("timerSegundos")
  intervalo = setInterval(() => {
    reloj.textContent = reloj.textContent - 1;
    if (reloj.textContent <= 0) {
      reloj.textContent = 0;
      finalizarJuego();
    }
  }, 1000);
}


function finalizarJuego() {
  clearInterval(intervalo);
  pregunta.textContent = `¡Juego terminado! Obtuviste ${puntuacion} puntos `;
  localStorage.clear();
  if (localStorage.length == 0) {
    localStorage.setItem("jugador", JSON.stringify([]));
  }
  jugador = {
    puntos: puntuacion
  };
  productos = JSON.parse(localStorage.getItem("jugador"));
  productos.push(jugador);
  localStorage.setItem("jugador", JSON.stringify(jugador));

  elecciones.innerHTML = "";
  progreso.textContent = "";
}


function empezarJuego() {
  
  document.getElementsByClassName("instrucciones-contenedor")
  botonComenzar = document.getElementById("startGame");
  instruccionesContenedor = document.getElementById("instrucciones-contenedor")

  botonComenzar.addEventListener('click', () => {
    instruccionesContenedor.style.opacity = 0;
    instruccionesContenedor.style.display = 'none';
    elegirDificultad();
    iniciarContador()
    mostrarPregunta().then(() => { });
  });

}

empezarJuego();












