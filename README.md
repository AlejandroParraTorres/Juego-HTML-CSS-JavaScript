# TrainYourMind

Juego de preguntas y respuestas donde tendrás un tiempo limitado para responder X preguntas.

* Cada pregunta respondida correctamente sumará +3 puntos
* Cada pregunta respondida incorrectamente restará -1 punto

El objetivo del juego es lograr la mayor puntuación posible en el tiempo que se mostrará arriba.

Existen tres niveles de dificultad: 

* Facil
* Medio
* Dificil

En cada nivel se presentarán dististas preguntes acorde a la dificultad elegida.

Durante el juego, el usuario tendra un numero limitado de ventajas que se podrán activar si el usuario hace "click derecho" sobre la pantalla o pulsa la tecla "espacio" y que le ayudarán a resolver el juego. Se guardará la puntuacioón en el LocalStorage y siempre se recogerá la mejor puntuación.

------------ ¿Que elementos utilizaré en el juego? ------------
* Uso de promesas -> Para devolver resolve() para volver a iniciar el reloj
* Uso de setTimeOut() y setInterval() -> Para manejar el tiempo del juego, animar un objeto haciendo que parpadee y controlando partes de codigo para que se ejecuten más en adelante
* Uso de localStorage() -> Para almacenar la puntuación del jugador y recuperarla
* Eventos de teclado y raton -> Tengo dos eventos de raton y uno de teclado. Con click izquierdo para seleccionar una opcion y con click derecho para activar una de las bonificaciones. Con la barra espaciadora se activa la segunda bonificacion.
* Uso del stopPropagation() -> Para evitar que cuando el usuario pulse la eleccion se cambie el color de la carta de la pregunta
