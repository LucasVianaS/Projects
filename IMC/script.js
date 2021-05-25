const btn = document.querySelector('#calculate');
const error = document.querySelector('#error');
const main = document.querySelector('#main');
const clean = document.querySelector('#clean');
const input = document.querySelectorAll('input');
const resultDescription = document.querySelector('#resultDescription');

btn.addEventListener('click', () => {
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;
    const result = document.querySelector('#result');
    const imc = Number(weight) / (Number(height) * Number(height));



    if (isNaN(imc)) {
        error.classList.remove('hidden');
        result.textContent = "";
        indice.textContent = "";
    } else {
        result.textContent = parseFloat(imc).toFixed(2);
        error.classList.add('hidden');


        if (imc < 18.5) {
            resultDescription.textContent = "Magreza";
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultDescription.textContent = "Normal";
        } else if (imc >= 25 && imc <= 29.9) {
            resultDescription.textContent = "Sobrepreso";
        } else if (imc >= 30 && imc <= 39.9) {
            resultDescription.textContent = "Obesidade";
        } else if (imc >= 40) {
            resultDescription.textContent = "Obesidade Grave";
        }
    }

});

clean.addEventListener('click', () => {
    input.forEach(item => {
        item.value = ""
    });

    error.classList.add('hidden');

    indice.textContent = "";

    result.textContent = "";
});
