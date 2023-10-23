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
        const preguntaSection = document.getElementById('pregunta');
        preguntaSection.textContent = pregunta.pregunta;

        const opcionesSection = document.getElementById('opciones');
        opcionesSection.innerHTML = ""; // Limpiar opciones anteriores

        pregunta.opciones.forEach((opcion, index) => {
            const opcionSection = document.createElement('Section');
            opcionSection.className = 'opcion';
            opcionSection.textContent = `${String.fromCharCode(97 + index)}) ${opcion}`;
            opcionSection.addEventListener('click', function() {
                manejarClic(opcion);
            });
            opcionesSection.appendChild(opcionSection);
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
        const preguntaSection = document.getElementById('pregunta');
        preguntaSection.textContent = '¡Quiz completado!';

        const opcionesSection = document.getElementById('opciones');
        opcionesSection.innerHTML = ""; // Limpiar opciones

        const resultadoSection = document.getElementById('resultado');
        resultadoSection.textContent = `Puntos: ${puntos}`;
    }

    // Iniciar el quiz
    const preguntasAleatorias = mezclarPreguntas(preguntas);
    mostrarPregunta(preguntasAleatorias[preguntaActual]);
});
