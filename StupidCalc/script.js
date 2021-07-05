const selectOperations = document.querySelector('.calculate-options');
const sum = 'sum';
const multiply = 'multiply';
const divide = 'divide';
const subtract = 'subtract';
const percentage = 'percentage';

const clean = document.querySelector('.clean');
const result = document.querySelector('.result');
const firstInputError = document.querySelector('.error-first-input');
const firstInputNanError = document.querySelector('.error-nan-first-input');
const secondInputError = document.querySelector('.error-second-input');
const secondInputNanError = document.querySelector('.error-nan-second-input');
const error = document.querySelector('.error');
const calculate = document.querySelector('.calculate');
const floatSplit = document.querySelector('.float-split');
const floatSplitLabel = document.querySelector('.float-split-label');

selectOperations.addEventListener('change', () => {

    if (selectOperations.value === divide) {

        floatSplit.classList.remove('hidden');
        floatSplitLabel.classList.remove('hidden');

    } else {

        floatSplit.classList.add('hidden');
        floatSplitLabel.classList.add('hidden');

    };
});

calculate.addEventListener('click', () => {

    if (selectOperations.value === sum) {

        const firstInput = document.querySelector('.first-number');
        const secondInput = document.querySelector('.second-number');

        const input1 = firstInput.value.replace(",", ".");
        const input2 = secondInput.value.replace(",", ".");
        const sumNums = Number(input1) + Number(input2);

        if (isNaN(sumNums)) {

            if (isNaN(input1) && isNaN(input2)) {

                firstInputNanError.classList.remove('hidden');
                secondInputNanError.classList.remove('hidden');
                firstInput.classList.add('border-error');
                secondInput.classList.add('border-error');

            } else if (isNaN(input2)) {

                secondInputNanError.classList.remove('hidden');
                secondInput.classList.add('border-error');

                firstInputNanError.classList.add('hidden');
                firstInput.classList.remove('border-error');

            } else if (isNaN(input1)) {

                firstInputNanError.classList.remove('hidden');
                firstInput.classList.add('border-error');

                secondInputNanError.classList.add('hidden');
                secondInput.classList.remove('border-error');

            };

            result.textContent = "";
            error.classList.add('hidden');

        } else {
            result.textContent = String(sumNums).replace(".", ",");

            error.classList.add('hidden');
            firstInputNanError.classList.add('hidden');
            secondInputNanError.classList.add('hidden');
            firstInput.classList.remove('border-error');
            secondInput.classList.remove('border-error');

        };
    };

    if (selectOperations.value === multiply) {

        const firstInput = document.querySelector('.first-number');
        const secondInput = document.querySelector('.second-number');

        const input1 = firstInput.value.replace(",", ".");
        const input2 = secondInput.value.replace(",", ".");
        const multiplyNums = Number(input1) * Number(input2);

        if (isNaN(multiplyNums)) {

            if (isNaN(input1) && isNaN(input2)) {

                firstInputNanError.classList.remove('hidden');
                firstInput.classList.add('border-error');

                secondInputNanError.classList.remove('hidden');
                secondInput.classList.add('border-error');

            } else if (isNaN(input2)) {

                secondInputNanError.classList.remove('hidden');
                secondInput.classList.add('border-error');

                firstInputNanError.classList.add('hidden');
                firstInput.classList.remove('border-error');

            } else if (isNaN(input1)) {

                firstInputNanError.classList.remove('hidden');
                firstInput.classList.add('border-error');

                secondInputNanError.classList.add('hidden');
                secondInput.classList.remove('border-error');

            };

            result.textContent = "";
            error.classList.add('hidden');

        } else {

            result.textContent = String(multiplyNums).replace(".", ",");

            error.classList.add('hidden');
            firstInputNanError.classList.add('hidden');
            secondInputNanError.classList.add('hidden');
            firstInput.classList.remove('border-error');
            secondInput.classList.remove('border-error');

        };
    };

    if (selectOperations.value === divide) {

        const firstInput = document.querySelector('.first-number');
        const secondInput = document.querySelector('.second-number');

        const input1 = firstInput.value.replace(",", ".");
        const input2 = secondInput.value.replace(",", ".");
        const divideNums = Number(input1) / Number(input2);

        if (Number(input2) === 0) {

            result.textContent = "";
            error.classList.remove('hidden');
            firstInputNanError.classList.add('hidden');
            secondInputNanError.classList.add('hidden');
            firstInput.classList.remove('border-error');
            secondInput.classList.remove('border-error');

        } else if (isNaN(divideNums)) {

            if (isNaN(input1) && isNaN(input2)) {

                firstInputNanError.classList.remove('hidden');
                firstInput.classList.add('border-error');

                secondInputNanError.classList.remove('hidden');
                secondInput.classList.add('border-error');

            } else if (isNaN(input2)) {

                secondInputNanError.classList.remove('hidden');
                secondInput.classList.add('border-error');

                firstInputNanError.classList.add('hidden');
                firstInput.classList.remove('border-error');

            } else if (isNaN(input1)) {

                firstInputNanError.classList.remove('hidden');
                firstInput.classList.add('border-error');

                secondInputNanError.classList.add('hidden');
                secondInput.classList.remove('border-error');

            };

            result.textContent = "";
            error.classList.add('hidden');

        } else {
            const floatNumber = floatSplit.value;

            function floatSplitCount(float) {

                const resultString = String(divideNums).replace(",", ".");
                result.textContent = Number(resultString).toFixed(float).replace(".", ",");

            };

            floatSplitCount(floatNumber);

            error.classList.add('hidden');
            firstInputNanError.classList.add('hidden');
            secondInputNanError.classList.add('hidden');
            firstInput.classList.remove('border-error');
            secondInput.classList.remove('border-error');

        };
    };

    if (selectOperations.value === subtract) {

        const firstInput = document.querySelector('.first-number');
        const secondInput = document.querySelector('.second-number');

        const input1 = firstInput.value.replace(",", ".");
        const input2 = secondInput.value.replace(",", ".");
        const subtractNums = Number(input1) - Number(input2);

        if (isNaN(subtractNums)) {

            if (isNaN(input1) && isNaN(input2)) {

                firstInputNanError.classList.remove('hidden');
                firstInput.classList.add('border-error');

                secondInputNanError.classList.remove('hidden');
                secondInput.classList.add('border-error');

            } else if (isNaN(input2)) {

                secondInputNanError.classList.remove('hidden');
                secondInput.classList.add('border-error');

                firstInputNanError.classList.add('hidden');
                firstInput.classList.remove('border-error');

            } else if (isNaN(input1)) {

                firstInputNanError.classList.remove('hidden');
                firstInput.classList.add('border-error');

                secondInputNanError.classList.add('hidden');
                secondInput.classList.remove('border-error');

            };

            result.textContent = "";
            error.classList.add('hidden');

        } else {
            result.textContent = String(subtractNums).replace(".", ",");

            error.classList.add('hidden');
            firstInputNanError.classList.add('hidden');
            secondInputNanError.classList.add('hidden');
            firstInput.classList.remove('border-error');
            secondInput.classList.remove('border-error');

        };
    };

    if (selectOperations.value === percentage) {
        
        const firstInput = document.querySelector('.first-number');
        const secondInput = document.querySelector('.second-number');

        const input1 = firstInput.value.replace(",", ".");
        const input2 = secondInput.value.replace(",", ".");
        const percentageNums = Number(input1) * Number(input2) / 100;

        if (isNaN(percentageNums)) {

            if (isNaN(input1) && isNaN(input2)) {

                firstInputNanError.classList.remove('hidden');
                firstInput.classList.add('border-error');

                secondInputNanError.classList.remove('hidden');
                secondInput.classList.add('border-error');

            } else if (isNaN(input2)) {

                secondInputNanError.classList.remove('hidden');
                secondInput.classList.add('border-error');

                firstInputNanError.classList.add('hidden');
                firstInput.classList.remove('border-error');

            } else if (isNaN(input1)) {

                firstInputNanError.classList.remove('hidden');
                firstInput.classList.add('border-error');

                secondInputNanError.classList.add('hidden');
                secondInput.classList.remove('border-error');

            };

            result.textContent = "";
            error.classList.add('hidden');

        } else {
            result.textContent = String(percentageNums).replace(".", ",");

            error.classList.add('hidden');
            firstInputNanError.classList.add('hidden');
            secondInputNanError.classList.add('hidden');
            firstInput.classList.remove('border-error');
            secondInput.classList.remove('border-error');

        };
    };
});

clean.addEventListener('click', () => {

    const firstInput = document.querySelector('.first-number');
    const secondInput = document.querySelector('.second-number');

    firstInput.value = "";
    secondInput.value = "";

    result.textContent = "";

    error.classList.add('hidden');
    firstInputNanError.classList.add('hidden');
    secondInputNanError.classList.add('hidden');

    firstInput.classList.remove('border-error');
    secondInput.classList.remove('border-error');

    floatSplit.value = "";

});