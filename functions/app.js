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
    },
    {
      pregunta: "¿Cuál es el río más largo del mundo?",
      opciones: ["Ganges", "Amazonas", "Nilo", "Río Misisipi"],
      respuestaCorrecta: "Nilo"
    },
    {
      pregunta: "¿Qué tipo de animal es la ballena?",
      opciones: ["Reptil", "Mamifero", "Anfibio", "Cefalopodo"],
      respuestaCorrecta: "Mamifero"
    },
    {
      pregunta: "¿Cuál es el océano más grande del mundo?",
      opciones: ["Atlántico", "Antártico", "Ártico", "Pacífico"],
      respuestaCorrecta: "Pacífico"
    },
    {
      pregunta: "¿Quién es el autor de 'El Quijote'?",
      opciones: ["Miguel de Cervantes", "Edgar Allan Poe", "William Shakespeare", "Gabriel García Márquez"],
      respuestaCorrecta: "Miguel de Cervantes"
    },
    {
      pregunta: "¿En qué año llegó Cristóbal Colón a América?",
      opciones: ["1514", "1460", "1487", "1492"],
      respuestaCorrecta: "1492"
    },
    {
      pregunta: "En qué año comenzó la II Guerra Mundial?",
      opciones: ["1935", "1939", "1940", "1945"],
      respuestaCorrecta: "1939"
    },
    {
      pregunta: "¿Cuántos huesos tiene el cuerpo humano?",
      opciones: ["198", "206", "205", "208"],
      respuestaCorrecta: "206"
    },
    {
      pregunta: "¿Qué planeta del sistema solar tiene más lunas?",
      opciones: ["Tierra", "Júpiter", "Saturno", "Venus"],
      respuestaCorrecta: "Saturno"
    },
    {
      pregunta: "¿Qué país tiene forma de bota?",
      opciones: ["España", "Italia", "Portugal", "Francia"],
      respuestaCorrecta: "Italia"
    },
    {
      pregunta: "¿Cuántas patas tienen las arañas?",
      opciones: ["6", "4", "8", "10"],
      respuestaCorrecta: "8"
    },
    {
      pregunta: "¿Cuál es el primero de la lista de los números primos?",
      opciones: ["0", "3", "1", "2"],
      respuestaCorrecta: "2"
    },
    {
      pregunta: "¿A cuál personaje le crecía la nariz cuando mentía?",
      opciones: ["Stitch", "Bambi", "Pinocho", "Simba"],
      respuestaCorrecta: "Pinocho"
    },
    {
      pregunta: "¿Cuánto vale el numero pi?",
      opciones: ["3,1416", "2,7182", "0,5403", "√2"],
      respuestaCorrecta: "3,1416"
    },
    {
      pregunta: "¿Cuál es el símbolo químico del oro?",
      opciones: ["Au", "O", "Ar", "Hg"],
      respuestaCorrecta: "Au"
    },
    {
      pregunta: "¿Cuál es la montaña más alta del mundo?",
      opciones: ["Lhotse I", "Everest", "Kanchenjunga", "Cho Oyu"],
      respuestaCorrecta: "Everest"
    },
    {
      pregunta: "¿Cuánto duró la guerra de los 100 años?",
      opciones: ["110", "105", "116", "100"],
      respuestaCorrecta: "116"
    },
    {
      pregunta: "¿Cuántos días tiene un año bisiesto?",
      opciones: ["367", "365", "364", "366"],
      respuestaCorrecta: "366"
    },
    {
      pregunta: "¿Cuál es el país más grande del mundo?",
      opciones: ["Canadá", "Estados Unidos", "Rusia", "China"],
      respuestaCorrecta: "Rusia"
    },
    {
      pregunta: "¿En qué año cayó el muro de Berlín",
      opciones: ["1945", "1985", "1990", "1989"],
      respuestaCorrecta: "1989"
    },
    {
      pregunta: "¿Cómo se llama la parte del ojo que es sensible a la luz?",
      opciones: ["Iris", "Retina", "Pupila", "Córnea"],
      respuestaCorrecta: "Retina"
    },
    {
      pregunta: "¿En qué país nació Adolf Hitler?",
      opciones: ["Austria", "Polonia", "Alemania", "Suiza"],
      respuestaCorrecta: "Austria"
    },
    {
      pregunta: "¿En qué año se hundió el Titanic",
      opciones: ["1912", "1910", "1915", "1909"],
      respuestaCorrecta: "1912"
    },
    {
      pregunta: "¿Cuántos elementos hay en la Tabla Periódica?",
      opciones: ["117", "116", "118", "115"],
      respuestaCorrecta: "118"
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
  preguntaSection.textContent = `${preguntaActual+1}/25: ${pregunta.pregunta}`;
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

  if (puntos == 0){
    Swal.fire({
      icon: 'error',
      title: 'Terminaste!',
      text: `Tuviste un total de ${puntos}/25. En serio? 0 puntos? No vuelvas, nunca.`,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Reiniciar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '../index.html';
      }
    })
  } else if (puntos > 0 && puntos < 15){
    Swal.fire({
      icon: 'error',
      title: 'Terminaste!',
      text: `Tuviste un total de ${puntos}/25. Estudia más para la proxima :(`,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Reiniciar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '../index.html';
      }
    })
  } else if (puntos > 14 && puntos < 22){
    Swal.fire({
      icon: 'warning',
      title: 'Terminaste!',
      text: `Tuviste un total de ${puntos}/25. Bastante bien, pero puede ser mejor, ánimo :D`,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Reiniciar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '../index.html';
      }
    })
  } else {
    Swal.fire({
      icon: 'success',
      title: 'Terminaste!',
      text: `Tuviste un total de ${puntos}/25. Felicidades, tienes un puntaje bastante alto :0`,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Reiniciar'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '../index.html';
      }
    })
  }
}

  //inicia el quiz con preguntas en orden aleatorio
const preguntasAleatorias = mezclarPreguntas(preguntas);
mostrarPregunta(preguntasAleatorias[preguntaActual]);
