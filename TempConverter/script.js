const btnCelcius = document.querySelector('.celcius');
const btnFarenheit = document.querySelector('.farenheit');
const btnKelvin = document.querySelector('.kelvin');

const formCelcius = document.querySelector('.celcius-to');
const formFarenheit = document.querySelector('.farenheit-to');
const formKelvin = document.querySelector('.kelvin-to');

const toCelcius = document.querySelectorAll('.to-celcius');
const toFarenheit = document.querySelectorAll('.to-farenheit');
const toKelvin = document.querySelectorAll('.to-kelvin');

const resultCelcius = document.querySelector('.result-celcius');
const resultFarenheit = document.querySelector('.result-farenheit');
const resultKelvin = document.querySelector('.result-kelvin');


const resultLabelCelcius = document.querySelector('.result-label-celcius');
const resultLabelFarenheit = document.querySelector('.result-label-farenheit');
const resultLabelKelvin = document.querySelector('.result-label-kelvin');

const clean = document.querySelectorAll('.clean');

btnCelcius.addEventListener('click', () => {
    formFarenheit.classList.add('hidden');
    formKelvin.classList.add('hidden');
    formCelcius.classList.toggle('hidden');
    resultLabelCelcius.classList.remove('hidden');
    resultCelcius.textContent = "";

    const farenheitTemperature = document.querySelector('.farenheit-temperature').value = "";
    const kelvinTemperature = document.querySelector('.kelvin-temperature').value = "";

    toFarenheit.forEach((item) => {
        item.addEventListener('click', () => {
            const temperature = document.querySelector('.celcius-temperature').value;
            const finalResult = (Number(temperature) * 1.8) + 32;
    
            resultCelcius.textContent = Number(finalResult);
        });
    });

    toKelvin.forEach((item) => {
        item.addEventListener('click', () => {
            const temperature = document.querySelector('.celcius-temperature').value;
            const finalResult = Number(temperature) + 273.15;
    
            resultCelcius.textContent = Number(finalResult);
        });
    });
});

btnFarenheit.addEventListener('click', () => {
    formCelcius.classList.add('hidden');
    formKelvin.classList.add('hidden');
    formFarenheit.classList.toggle('hidden');
    resultLabelFarenheit.classList.remove('hidden');
    resultFarenheit.textContent = "";

    const celciusTemperature = document.querySelector('.celcius-temperature').value = "";
    const kelvinTemperature = document.querySelector('.kelvin-temperature').value = "";

    toCelcius.forEach((item) => {
        item.addEventListener('click', () => {
            const temperature = document.querySelector('.farenheit-temperature').value;
            const finalResult = (Number(temperature) - 32) / 1.8;
            
            resultFarenheit.textContent = Number(finalResult).toFixed(2);
        });
    });

    toKelvin.forEach((item) => {
        item.addEventListener('click', () => {
            const temperature = document.querySelector('.farenheit-temperature').value;
            const finalResult = (Number(temperature) + 459.67) * 5/9;
    
            resultFarenheit.textContent = Number(finalResult).toFixed(2);
        });
    });
});

btnKelvin.addEventListener('click', () => {
    formFarenheit.classList.add('hidden');
    formCelcius.classList.add('hidden');
    formKelvin.classList.toggle('hidden');
    resultLabelKelvin.classList.remove('hidden');
    resultKelvin.textContent = "";

    const celciusTemperature = document.querySelector('.celcius-temperature').value = "";
    const farenheitTemperature = document.querySelector('.farenheit-temperature').value = "";

    toFarenheit.forEach((item) => {
        item.addEventListener('click', () => {
            const temperature = document.querySelector('.kelvin-temperature').value;
            const finalResult = Number(temperature) * 9/5 - 459.67;
    
            resultKelvin.textContent = Number(finalResult).toFixed(2);
        });
    });

    toCelcius.forEach((item) => {
        item.addEventListener('click', () => {
            const temperature = document.querySelector('.kelvin-temperature').value;
            const finalResult = Number(temperature) - 273.15;
            
            resultKelvin.textContent = Number(finalResult).toFixed(2);
        });
    });
});

clean.forEach((item) => {
    item.addEventListener('click', () => {
        const celciusTemperature = document.querySelector('.celcius-temperature').value = "";
        const farenheitTemperature = document.querySelector('.farenheit-temperature').value = "";
        const kelvinTemperature = document.querySelector('.kelvin-temperature').value = "";
        resultCelcius.textContent = "";
        resultFarenheit.textContent = "";
        resultKelvin.textContent = "";
    });
});