document.addEventListener('DOMContentLoaded', function() {
  const preguntas = [
    {
      pregunta: "¿Cuál es la capital de Francia?",
      opciones: ["Madrid", "París", "Londres", "Roma"],
      respuestaCorrecta: "París"
    },
    {
      pregunta: "¿En qué año comenzó la Primera Guerra Mundial?",
      opciones: ["1914", "1918", "1922", "1935"],
      respuestaCorrecta: "1914"
    }
  ];
  let preguntaActual = 0;
  let puntos = 0;

  //funcion para ordenar aleatoriamente las preguntas, de esta forma no saldran en el mismo orden
  const mezclarPreguntas = (array) => {
    return array.sort(() => Math.random() - 0.5);
  }

  //funcion encargada de mostrar preguntas, limpia las respuestas para agregar las nuevas (linea 27 en adelante)
  const mostrarPregunta = (pregunta) => {
    const preguntaSection = document.getElementById('pregunta');
    preguntaSection.textContent = pregunta.pregunta;
    const opcionesSection = document.getElementById('opciones');
    opcionesSection.innerHTML = ""; 
    pregunta.opciones.forEach((opcion, index) => {
      const opcionSection = document.createElement('section');
      opcionSection.className = 'opcion';
      opcionSection.textContent = opcion;
      opcionSection.addEventListener('click', function() {
        manejarClic(opcion);
      });
      opcionesSection.appendChild(opcionSection);
    });
  }

  //funcion manejarClic, para no usar botones, se usa la funcion para que las opciones sean clickeables.
  //se comparan las respuestas para el puntaje.
  const manejarClic = (opcionSeleccionada) => {
    const pregunta = preguntas[preguntaActual];
    const respuestaCorrecta = pregunta.respuestaCorrecta;
    if (opcionSeleccionada === respuestaCorrecta) {
      puntos++;
      Swal.fire({
        icon: 'success',
        title: 'Correcto!',
        text: `Respondiste bien. +1 punto`,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Continuar'
      }).then((result) => {
        if (result.isConfirmed) {
          preguntaActual++;
          if (preguntaActual < preguntas.length) {
          mostrarPregunta(preguntas[preguntaActual]);
          } else {
          mostrarResultado();
          }
        }
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Inorrecto!',
        text: `Respondiste mal. +0 puntos`,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Continuar'
      }).then((result) => {
        if (result.isConfirmed) {
          preguntaActual++;
          if (preguntaActual < preguntas.length) {
          mostrarPregunta(preguntas[preguntaActual]);
          } else {
          mostrarResultado();
          }
        }
      })
    }
  }

  //sale unicamente cuando el contador de preguntas acaba. limpia la pantalla y da el resultado final
  const mostrarResultado = () => {
    const preguntaSection = document.getElementById('pregunta');
    preguntaSection.textContent = '¡Quiz completado!';
    const opcionesSection = document.getElementById('opciones');
    opcionesSection.innerHTML = "";
    const resultadoSection = document.getElementById('resultado');
    resultadoSection.textContent = `Puntos: ${puntos}`;

    Swal.fire({
      icon: 'success',
      title: 'Terminaste!',
      text: `Tuviste un total de ${puntos}`,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Reiniciar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    })
  }

  //inicia el quiz con preguntas en orden aleatorio
  const preguntasAleatorias = mezclarPreguntas(preguntas);
  mostrarPregunta(preguntasAleatorias[preguntaActual]);
});