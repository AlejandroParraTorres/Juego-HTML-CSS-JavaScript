

//INICIO CODIGO DEL JUEGO
const pregunta = document.getElementById("pregunta")
const elecciones = document.getElementById("elecciones");
const datosProgreso = document.getElementById("divProgreso");
const progreso = document.getElementById("progreso");
const puntuacionPartida = document.getElementById("puntuacion");
const score = document.getElementById("score");
const habilidad1 = document.getElementById("habilidad1");
const habilidad2 = document.getElementById("habilidad2");
const contenedorPregunta = document.getElementById("contenedor");

let numeroPreguntas = 0;
let puntuacion = 0;
let numeroAleatorio = 0;
let modoDificultad;
let arrayPreguntas = [];
let seleccionado = false;
let habilidad1Activada = false;
let habilidad2Activada = false;
let parpadear;

//Función que asigna el nivel de dificultad a la partida
function elegirDificultad() {
  const modos = document.getElementsByName("modo"); //Recojo los inputs
  for (let i = 0; i < modos.length; i++) {
    if (modos[i].checked) {
      modoDificultad = modos[i].value; //Si el input esta seleccionado guardo el valor
      seleccionado = true; // Lo pongo a true para saber que se ha seleccionado una dificultad
      break;
    }
  }
  //Segun el valor que he recogido asigno las preguntas convenientes 
  if (modoDificultad === "easy") {
    arrayPreguntas = preguntasFaciles;
  } else if (modoDificultad === "medium") {
    arrayPreguntas = preguntasMedias;
  } else if (modoDificultad === "hard") {
    arrayPreguntas = preguntasDificiles;
  }

}

//Funcion para activar la primera habilidad
function comprobarHabilidad1() {
  if(habilidad1Activada== true){
    return ; // Si ya se ha activado no hago nada
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === ' ' && !habilidad1Activada) { // Si ha pulsado espacio y no ha sido activada entro
      habilidad1Activada = true; // Activo la habilidad
      habilidad1.style.display = "none"; // Desaparece el icono relacionado
      clearInterval(intervalo); // Paro el reloj
      const opcion = elecciones.querySelectorAll("button"); // Recojo los botones
      respuestaCorrecta = arrayPreguntas[numeroAleatorio].answer; // Recojo la respuesta correcta
      opcion.forEach(element => {
        if (element.textContent == respuestaCorrecta) {
          parpadear = setInterval(() => { // Cada 0,3 segundos voy cambiando el color de naranja a blanco de la respuesta correcta
            element.style.backgroundColor = element.style.backgroundColor === 'orange' ? 'white' : 'orange';
          }, 300);
        } else {
          element.disabled = true; // Desactivo las incorrectas
        }
      });
      
      //A los tres segundos quito la animacion del parpadeo y cambio el color a verde de la correcta
      setTimeout(() => {
        for (let i = 0; i < opcion.length; i++) {
          if (opcion[i].textContent == respuestaCorrecta) {
            clearInterval(parpadear) // Paro la animacion
            opcion[i].style.backgroundColor = "green"
            puntuacion += 3; // Le añado 3 puntos
          }
        }
      }, 3000);

      //A los cuatro segundos vuelvo a iniciar el reloj mostrando la siguiente pregunta
      setTimeout(() => {
        arrayPreguntas[numeroAleatorio].answered = true; // Pongo a true la pregunta para que no vuelva a salir
        final++ // Aumento la varible para comprobar el final del juego
        numeroPreguntas++; // Aumento el numero de preguntas para el progreso
        if (final == 20) {
          finalizarJuego() // Si ha llegado a X preguntas termina el juego
        } else
        mostrarPregunta().then(() => { iniciarContador() }); // Si todo ha ido bien muestro la siguiente iniciando el contador
      }, 4000);
    }

  })

}

//Funcion para activar la segunda habilidad
function comprobarHabilidad2() {
  document.addEventListener("contextmenu", function (event) { 
    event.preventDefault(); // Evito que haga por defecto la accion de click derecho 
    if (event.button === 2 && !habilidad2Activada) { // Entro si no la he activado aun
      habilidad2Activada = true; // Activo la habilidad
      habilidad2.style.display = "none"; // Desaparece el icono relacionado 
      const opcion = elecciones.querySelectorAll("button");
      respuestaCorrecta = arrayPreguntas[numeroAleatorio].answer;
      for (let i = 0; i < 3; i++) {
        eleccionDesactivada = Math.floor(Math.random() * 5); // Genero un numero aleatoriamente entre 0 y 5
        while (opcion[eleccionDesactivada].textContent == respuestaCorrecta || opcion[eleccionDesactivada].disabled == true) {
          eleccionDesactivada = Math.floor(Math.random() * 5); // Si el numero generado coincide con la respuesta correcta o ya estaba desactivado, vuelvo a generar otro numero
        }
        opcion[eleccionDesactivada].disabled = true; // Desactivo el boton
      }

    }
  })
}

// Funcion que devuelve una promesa
function mostrarPregunta() {
  return new Promise((resolve, reject) => {
    numeroAleatorio = Math.floor(Math.random() * 21);
    comprobarHabilidad1(); // Compruebo si activo la primera habilidad
    comprobarHabilidad2(); // Compruebo si activo la segunda habilidad
    while (arrayPreguntas[numeroAleatorio].answered) {
      numeroAleatorio = Math.floor(Math.random() * 21);  // Genero el numero de la pregunta
    }
    pregunta.textContent = arrayPreguntas[numeroAleatorio].question; // Recupero el texto de la pregunta

    opciones = elecciones.querySelectorAll("button")
    let i = 0
    opciones.forEach(element => {
      element.disabled = false;
      element.onclick= function(event){
        event.stopPropagation(); // Evito que al hacer click sobre el boton se cambie el color de la carta
        comprobarRespuesta(event.target.id);
      };
      element.style.backgroundColor = "#d0d0d0";
      element.textContent = arrayPreguntas[numeroAleatorio].options[i];
      i++
    });

    // Progreso del juego
    progreso.textContent = `Pregunta ${numeroPreguntas + 1} de ${arrayPreguntas.length}`;
    puntuacionPartida.textContent=`Llevas ${puntuacion} puntos`

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
    if (element.textContent != respuestaSeleccionada) { //Desactivo todas las que no ha seleccionado
      element.disabled = true;
    }else{
      element.onclick=null; // Desactivo el onclick para evitar que el usuario pueda volver a hacer click sobre la opcion
    }
  });
  let respuestaCorrecta = arrayPreguntas[numeroAleatorio].answer;
  parpadear = setInterval(() => { // Animación del parapadeo
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
      if (puntuacion == 0) { // La puntuacion nunca baja de 0
        puntuacion = 0
      } else {
        puntuacion -= 1;
      }
    }, 3000);

  }

  setTimeout(() => {
    arrayPreguntas[numeroAleatorio].answered = true; // Pongo la pregunta como contestada para que no salga mas
    final++
    numeroPreguntas++;
    if (final == 20) { // Cuando se contesten las 20 preguntas se acaba el juego 
      finalizarJuego()
    } else
    mostrarPregunta().then(() => { iniciarContador() }); // Muestro la siguiente y reanudo el contador
  }, 4000);

}

let intervalo;


// Funcion que controla el tiempo del juego
function iniciarContador() {

  reloj = document.getElementById("timerSegundos")
  intervalo = setInterval(() => {
    reloj.textContent = reloj.textContent - 1;
    if (reloj.textContent <= 0) {
      reloj.textContent = 0;
      finalizarJuego(); //Si se acaba el tiempo muestro el mensaje de fin del juego
    }
  }, 1000);
}


function finalizarJuego() {

  clearInterval(intervalo); // Paro el reloj del juego
  pregunta.textContent = `¡Juego terminado! Obtuviste ${puntuacion} puntos `;

  //Compruebo si tengo LocalStorage de jugador. Si tengo recojo los puntos si no creo el localStorage con los puntos a 0.
  const puntuacionAnterior = localStorage.getItem("jugador") ? JSON.parse(localStorage.getItem("jugador")).puntos : 0;

  if (puntuacion > puntuacionAnterior) { //Si la puntuacion actual ha superado a la anterior, vuelvo a crear un nuevo jugador con la puntuacion nueva
    jugador = {
      puntos: puntuacion
    };
    localStorage.setItem("jugador", JSON.stringify(jugador));
    score.textContent = puntuacion;
  }
  reiniciarJuego(); // Para poder reiniciar el juego
  elecciones.innerHTML = "";
  datosProgreso.textContent = "";
}

function reiniciarJuego() {
  mensajeFinal = document.getElementById("reiniciarJuego")
  mensajeFinal.style.display = "inline-block";
  let botonReiniciar = document.getElementById("reiniciar");
  botonReiniciar.addEventListener("click", () => {
    location.reload(); //Recargo la página para iniciar el juego
  })

}


function empezarJuego() {

  botonComenzar = document.getElementById("startGame");
  instruccionesContenedor = document.getElementById("instrucciones-contenedor")

  botonComenzar.addEventListener('click', () => {
    elegirDificultad();
    if (!seleccionado) { // Si no ha seleccionado ningun input, me muestras una alerta y no empieza el juego
      alert("Por favor, selecciona una dificultad antes de comenzar el juego.");
      return;
    }

    puntuacionRecogida = localStorage.getItem("jugador") ? JSON.parse(localStorage.getItem("jugador")).puntos : 0;
    score.textContent = "Max Score " + puntuacionRecogida + " pts" //Recojo la puntuacion del localStorage 

    instruccionesContenedor.style.opacity = 0;
    instruccionesContenedor.style.display = 'none'; // Las instrucciones desaparecen.

    mostrarPregunta().then(() => { iniciarContador() });
  });

}


// Cambio de color del contenedor de pregunta  para gestion de bubble.
contenedorPregunta.addEventListener("click",function(){
  numeroRandom= Math.floor(Math.random() * 7);
  contenedorPregunta.style.backgroundColor=coloresCarta[numeroRandom];
})




empezarJuego();












