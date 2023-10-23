document.addEventListener('DOMContentLoaded', function() {
    const preguntas = [
        {
            pregunta: "¿Cuál es la capital de Francia?",
            opciones: ["Madrid", "París", "Londres"],
            respuestaCorrecta: "París"
        },
        {
            pregunta: "¿En qué año comenzó la Primera Guerra Mundial?",
            opciones: ["1914", "1918", "1922"],
            respuestaCorrecta: "1914"
        }
    ];

    let preguntaActual = 0;
    let puntos = 0;

    function mezclarPreguntas(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    function mostrarPregunta(pregunta) {
        const preguntaDiv = document.getElementById('pregunta');
        preguntaDiv.textContent = pregunta.pregunta;

        const opcionesDiv = document.getElementById('opciones');
        opcionesDiv.innerHTML = ""; // Limpiar opciones anteriores

        pregunta.opciones.forEach((opcion, index) => {
            const opcionDiv = document.createElement('div');
            opcionDiv.className = 'opcion';
            opcionDiv.textContent = `${String.fromCharCode(97 + index)}) ${opcion}`;
            opcionDiv.addEventListener('click', function() {
                manejarClic(opcion);
            });
            opcionesDiv.appendChild(opcionDiv);
        });
    }

    function manejarClic(opcionSeleccionada) {
        const pregunta = preguntas[preguntaActual];
        const respuestaCorrecta = pregunta.respuestaCorrecta;
        
        if (opcionSeleccionada === respuestaCorrecta) {
            puntos++;
        }

        preguntaActual++;

        if (preguntaActual < preguntas.length) {
            mostrarPregunta(preguntas[preguntaActual]);
        } else {
            mostrarResultado();
        }
    }

    function mostrarResultado() {
        const preguntaDiv = document.getElementById('pregunta');
        preguntaDiv.textContent = '¡Quiz completado!';

        const opcionesDiv = document.getElementById('opciones');
        opcionesDiv.innerHTML = ""; // Limpiar opciones

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = `Puntos: ${puntos}`;
    }

    // Iniciar el quiz
    const preguntasAleatorias = mezclarPreguntas(preguntas);
    mostrarPregunta(preguntasAleatorias[preguntaActual]);
});
