const word = document.getElementById('word');

const changeText = () => {
    setTimeout(() => {
        word.textContent = "Analista Programador";
    }, 4000);

    setTimeout(() => {
        resetAnimation();
    }, 8000);
}

const resetAnimation = () => {
    if (word.textContent === "Analista Programador") {
        word.textContent = "Frontend Developer";
        changeText();
    }
}


changeText();

