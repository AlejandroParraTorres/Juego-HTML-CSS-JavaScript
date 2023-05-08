

//INICIO CODIGO DEL JUEGO
const pregunta = document.getElementById("pregunta")
const elecciones = document.getElementById("elecciones");
const progreso = document.getElementById("progreso");
const score = document.getElementById("score");
const habilidad1 = document.getElementById("habilidad1");
const habilidad2 = document.getElementById("habilidad2");

let numeroPreguntas = 0;
let puntuacion = 0;
let numeroAleatorio = 0;
let modoDificultad = "medium";
let arrayPreguntas = [];
let seleccionado = false;
let habilidad1Activada = false;
let habilidad2Activada = false;
let parpadear;


function elegirDificultad() {

  const modos = document.getElementsByName("modo");
  for (let i = 0; i < modos.length; i++) {
    if (modos[i].checked) {
      modoDificultad = modos[i].value;
      seleccionado = true;
      break;
    }
  }

  if (modoDificultad === "easy") {
    arrayPreguntas = preguntasFaciles;
  } else if (modoDificultad === "medium") {
    arrayPreguntas = preguntasMedias;
  } else if (modoDificultad === "hard") {
    arrayPreguntas = preguntasDificiles;
  }

}

function comprobarHabilidad1() {
  if(habilidad1Activada== true){
    return ;
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === ' ' && !habilidad1Activada) {
      habilidad1Activada = true;
      habilidad1.style.display = "none";
      clearInterval(intervalo);
      const opcion = elecciones.querySelectorAll("button");
      respuestaCorrecta = arrayPreguntas[numeroAleatorio].answer;
      opcion.forEach(element => {
        if (element.textContent == respuestaCorrecta) {
          parpadear = setInterval(() => {
            element.style.backgroundColor = element.style.backgroundColor === 'orange' ? 'white' : 'orange';
          }, 300);
        } else {
          element.disabled = true;
        }
      });

      setTimeout(() => {
        for (let i = 0; i < opcion.length; i++) {
          if (opcion[i].textContent == respuestaCorrecta) {
            clearInterval(parpadear)
            opcion[i].style.backgroundColor = "green"
            puntuacion += 3;
          }
        }
      }, 3000);

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

  })

}

function comprobarHabilidad2() {
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    if (event.button === 2 && !habilidad2Activada) {
      habilidad2Activada = true;
      event.preventDefault();
      habilidad2.style.display = "none";
      const opcion = elecciones.querySelectorAll("button");
      respuestaCorrecta = arrayPreguntas[numeroAleatorio].answer;
      for (let i = 0; i < 3; i++) {
        eleccionDesactivada = Math.floor(Math.random() * 5);
        while (opcion[eleccionDesactivada].textContent == respuestaCorrecta || opcion[eleccionDesactivada].disabled == true) {
          eleccionDesactivada = Math.floor(Math.random() * 5);
        }
        console.log(eleccionDesactivada);
        opcion[eleccionDesactivada].disabled = true;
      }

    }
  })
}

function mostrarPregunta() {
  return new Promise((resolve, reject) => {
    numeroAleatorio = Math.floor(Math.random() * 21);
    comprobarHabilidad1();
    comprobarHabilidad2();
    while (arrayPreguntas[numeroAleatorio].answered) {
      numeroAleatorio = Math.floor(Math.random() * 21);
    }
    pregunta.textContent = arrayPreguntas[numeroAleatorio].question;

    opciones = elecciones.querySelectorAll("button")
    let i = 0
    opciones.forEach(element => {
      element.disabled = false;
      element.onclick= function(){
        comprobarRespuesta(element.id);
      };
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
  opciones = elecciones.querySelectorAll("button")
  let respuestaSeleccionada = opcion.textContent;
  opciones.forEach(element => {
    if (element.textContent != respuestaSeleccionada) {
      element.disabled = true;
    }else{
      element.onclick=null;
    }
  });
  let respuestaCorrecta = arrayPreguntas[numeroAleatorio].answer;
  parpadear = setInterval(() => {
    opcion.style.backgroundColor = opcion.style.backgroundColor === 'orange' ? 'white' : 'orange';
  }, 300);
  if (respuestaSeleccionada == respuestaCorrecta) {
    setTimeout(() => {
      clearInterval(parpadear)
      opcion.style.background = "green";
      puntuacion += 3;
    }, 3000);
  } else {
    setTimeout(() => {
      clearInterval(parpadear);
      opcion.style.background = "red";
      if (puntuacion == 0) {
        puntuacion = 0
      } else {
        puntuacion -= 1;
      }
    }, 3000);
  }

  setTimeout(() => {
    arrayPreguntas[numeroAleatorio].answered = true;
    final++
    numeroPreguntas++;
    if (final == 20) {
      finalizarJuego()
    } else
    mostrarPregunta().then(() => { iniciarContador() });
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

  const puntuacionAnterior = localStorage.getItem("jugador") ? JSON.parse(localStorage.getItem("jugador")).puntos : 0;

  if (puntuacion > puntuacionAnterior) {
    jugador = {
      puntos: puntuacion
    };
    localStorage.setItem("jugador", JSON.stringify(jugador));
    score.textContent = puntuacion;
  }
  reiniciarJuego();
  elecciones.innerHTML = "";
  progreso.textContent = "";
}

function reiniciarJuego() {
  mensajeFinal = document.getElementById("reiniciarJuego")
  mensajeFinal.style.display = "inline-block";
  let botonReiniciar = document.getElementById("reiniciar");
  botonReiniciar.addEventListener("click", () => {
    location.reload();
  })

}


function empezarJuego() {

  botonComenzar = document.getElementById("startGame");
  instruccionesContenedor = document.getElementById("instrucciones-contenedor")

  botonComenzar.addEventListener('click', () => {
    elegirDificultad();
    if (!seleccionado) {
      alert("Por favor, selecciona una dificultad antes de comenzar el juego.");
      return;
    }
    puntuacionRecogida = localStorage.getItem("jugador") ? JSON.parse(localStorage.getItem("jugador")).puntos : 0;
    score.textContent = "Last Score " + puntuacionRecogida + " pts"

    instruccionesContenedor.style.opacity = 0;
    instruccionesContenedor.style.display = 'none';

    mostrarPregunta().then(() => { iniciarContador() });
  });

}




empezarJuego();












