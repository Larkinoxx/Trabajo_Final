const inicio = () => {
    const preguntaSection = document.getElementById('pregunta');
    preguntaSection.textContent = 'QUIZ: Cultura General';
    const fraseSection = document.getElementById('frase');
    fraseSection.innerHTML = "¡Veamos que tanto sabes de cultura general!";
    const buttonSection = document.getElementById('button');
    buttonSection.innerHTML = "Iniciar"

    //redireccionamiento a otro archivo html
    const sectionElement = document.getElementById('button');
    sectionElement.addEventListener('click', function() {
        window.location.href = './functions/app.html';
    });
}

inicio();

