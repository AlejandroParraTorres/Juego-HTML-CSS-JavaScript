



//INICIO CODIGO DEL JUEGO

const preguntas = [
  {
    question: "¿Cuál es la capital de Eritrea?",
    options: ["Asmara", "Yamena", "Kigali", "Lomé", "Bamako"],
    answer: "Asmara",
    answered: false
  },
  {
    question: "¿En qué año comenzó la Guerra de los Cien Años?",
    options: ["1300", "1337", "1376", "1415", "1450"],
    answer: "1337",
    answered: false
  },
  {
    question: "¿En qué año murió el famoso científico Stephen Hawking?",
    options: ["2014", "2016", "2018", "2020", "2022"],
    answer: "2018",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del fenómeno meteorológico que ocurre en el Pacífico tropical?",
    options: ["El Niño", "La Niña", "El Viento Sur", "La Brisa Marítima", "La Corriente Fría"],
    answer: "El Niño",
    answered: false
  },
  {
    question: "¿En qué año se estrenó la película de ciencia ficción Blade Runner?",
    options: ["1980", "1982", "1984", "1986", "1988"],
    answer: "1982",
    answered: false
  },
  {
    question: "¿Quién escribió la novela El Código Da Vinci?",
    options: ["Dan Brown", "Tom Clancy", "John Grisham", "Michael Crichton", "Ken Follett"],
    answer: "Dan Brown",
    answered: false
  },
  {
    question: "¿Cuál es el nombre de la obra cumbre del escritor James Joyce?",
    options: ["Ulises", "Retrato del Artista Adolescente", "Dublineses", "Finnegans Wake", "Exiliados"],
    answer: "Ulises",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del satélite natural de Urano?",
    options: ["Io", "Titán", "Ganimedes", "Tritón", "Miranda"],
    answer: "Miranda",
    answered: false
  },
  {
    question: "¿En qué año se fundó la compañía de tecnología Apple?",
    options: ["1972", "1976", "1980", "1984", "1988"],
    answer: "1976",
    answered: false
  },
  {
    question: "¿En qué año se proclamó la independencia de Brasil?",
    options: ["1808", "1822", "1844", "1860", "1888"],
    answer: "1822",
    answered: false
  },
  {
    question: "¿En qué año se estrenó la película The Shawshank Redemption?",
    options: ["1992", "1994", "1996", "1998", "2000"],
    answer: "1994",
    answered: false
  },
  {
    question: "¿En qué país se encuentra la ciudad de Fez?",
    options: ["Marruecos", "Túnez", "Egipto", "Argelia", "Libia"],
    answer: "Marruecos",
    answered: false
  },
  {
    question: "¿Quién es el autor de la novela Moby Dick?",
    options: ["Herman Melville", "Mark Twain", "Charles Dickens", "F. Scott Fitzgerald", "Ernest Hemingway"],
    answer: "Herman Melville",
    answered: false
  },
  {
    question: "¿Qué país tiene la forma de una bota?",
    options: ["España", "Italia", "Grecia", "Portugal", "Francia"],
    answer: "Italia",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del fundador de la filosofía estoica?",
    options: ["Epicteto", "Séneca", "Marco Aurelio", "Zenón de Citio", "Cicerón"],
    answer: "Zenón de Citio",
    answered: false
  },
  {
    question: "¿Qué escritor colombiano ganó el Premio Nobel de Literatura en 1982?",
    options: ["Gabriel García Márquez", "Mario Vargas Llosa", "Octavio Paz", "Pablo Neruda", "Jorge Luis Borges"],
    answer: "Gabriel García Márquez",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del inventor de la bombilla eléctrica?",
    options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi", "Benjamin Franklin"],
    answer: "Thomas Edison",
    answered: false
  },
  {
    question: "¿En qué país se encuentra la isla de Tasmania?",
    options: ["Australia", "Nueva Zelanda", "Indonesia", "Papúa Nueva Guinea", "Fiyi"],
    answer: "Australia",
    answered: false
  },
  {
    question: "¿Quién pintó el famoso cuadro La Noche Estrellada?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Johannes Vermeer", "Rembrandt van Rijn"],
    answer: "Vincent van Gogh",
    answered: false
  },
  {
    question: "¿Cuál es el nombre del primer presidente de Estados Unidos?",
    options: ["George Washington", "John Adams", "Thomas Jefferson", "Abraham Lincoln", "Franklin D. Roosevelt"],
    answer: "George Washington",
    answered: false
  }
]

const pregunta = document.getElementById("pregunta")
const elecciones = document.getElementById("elecciones");
const progreso = document.getElementById("progreso");

let numeroPreguntas = 0;
let puntuacion = 0;
let numeroAleatorio = 0;

function mostrarPregunta() {
  numeroAleatorio = Math.floor(Math.random() * 20);
  while (preguntas[numeroAleatorio].answered) {
    numeroAleatorio = Math.floor(Math.random() * 20);
  }
  pregunta.textContent = preguntas[numeroAleatorio].question;

  opciones = elecciones.querySelectorAll(".eleccion")
  let i = 0
  opciones.forEach(element => {
    element.style.backgroundColor="#d0d0d0";
    element.textContent = preguntas[numeroAleatorio].options[i];
    i++
  });

  progreso.textContent = `Pregunta ${numeroPreguntas + 1} de ${preguntas.length}`;

}
let final = 0;

function comprobarRespuesta(identificador) {

  const opcion = document.getElementById(identificador)
  let respuestaSeleccionada = opcion.textContent;
  console.log(numeroAleatorio)
  let respuestaCorrecta=preguntas[numeroAleatorio].answer;
  if(respuestaSeleccionada == respuestaCorrecta){
    setTimeout(() => {
      opcion.style.background="green";
      puntuacion+=3;
    }, 3000);
  }else{
      setTimeout(() => {
        opcion.style.background="red";
        if(puntuacion==0){
          puntuacion=0
        }else{
          puntuacion-=1;
        }
      }, 3000);
  }

  setTimeout(() => {
    preguntas[numeroAleatorio].answered = true;
  final++
  numeroPreguntas++;
  if(final==20){
    finalizarJuego()
  }else

  mostrarPregunta()

    
  }, 4000);
  
}

function iniciarContador(){

  reloj=document.getElementById("timerSegundos")
  setInterval(() => {
    reloj.textContent= reloj.textContent-1;
    if (reloj.textContent<=0) {
      reloj.textContent=0;
    }
  }, 1000);
  setTimeout(() => {
    timeOver=document.getElementById("timeOver");
    timeOver.style.display="inline"
    finalizarJuego()
  }, 120000);
}


function finalizarJuego() {
  pregunta.textContent = `¡Juego terminado! Obtuviste ${puntuacion} puntos `;
  elecciones.innerHTML = "";
  progreso.textContent = "";
}


function empezarJuego(){
  
  document.getElementsByClassName("instrucciones-contenedor")
  botonComenzar=document.getElementById("startGame");
  instruccionesContenedor= document.getElementById("instrucciones-contenedor")

  botonComenzar.addEventListener('click', () => {
    instruccionesContenedor.style.opacity = 0;
    instruccionesContenedor.style.display = 'none';
    iniciarContador()
    mostrarPregunta()
  });

}

empezarJuego();












