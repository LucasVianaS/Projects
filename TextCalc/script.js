const selectQuantity = document.querySelector('.select-quantity');
const buttonResult = document.querySelector('.button-result');
const selectWords = 'words';
const selectNoSpaces = 'noSpaces';
const selectSpaces = 'spaces';
const selectCharacters = 'characters';
const selectScores = 'scores';

const result = document.querySelector('.result');

const scores = [".", ",", ";", "/", "?", "!"];
const spaces = " ";

const wordFunction = function wordsFunction() {

    if (selectQuantity.value === selectWords) {
        const wordArray = [];

        const textArea = document.querySelector('.text-area').value;
        const textAreaSplit = textArea.split(" ");
        textAreaSplit.forEach(word => {
            wordArray.push(word);
        });

        result.textContent = `A quantidade de palavras no texto é: ${wordArray.length}`;

    };
};

const spaceFunction = function spacesFunction() {

    if (selectQuantity.value === selectSpaces) {
        const spaceArray = [];

        const textArea = document.querySelector('.text-area').value;
        const textAreaSplit = textArea.split('');

        textAreaSplit.forEach(space => {
            if (space === spaces) {
                spaceArray.push(space);
            };
        });

        result.textContent = `A quantidade de espaços no texto é: ${spaceArray.length}`;

    };
};

const scoreFunction = function scoresFunction() {
    if (selectQuantity.value === selectScores) {
        const scoreArray = [];

        const textArea = document.querySelector('.text-area').value;
        const textAreaSplit = textArea.split('');


        textAreaSplit.forEach(textScore => {
            scores.forEach(score => {
                if (textScore === score) {
                    scoreArray.push(score);
                };
            });

        });

        result.textContent = `A quantidade de pontuações no texto é: ${scoreArray.length}`;

    };
};

const charFunction = function charsFunction() {
    if (selectQuantity.value === selectCharacters) {

        const textArea = document.querySelector('.text-area').value;
        const textAreaSplit = textArea.split('');

        result.textContent = `A quantidade total de caracteres no texto é: ${textAreaSplit.length}`;
    };
};

const noSpaceCharFunction = function noSpacesCharsFunction() {
    if (selectQuantity.value === selectNoSpaces) {
        const noSpaceArray = [];

        const textArea = document.querySelector('.text-area').value;
        const textAreaSplit = textArea.split('');

        textAreaSplit.forEach(char => {
            if (char !== spaces) {
                noSpaceArray.push(char);
            };

        });

        result.textContent = `A quantidade de caracteres sem espaços no texto é: ${noSpaceArray.length}`;

    };
};

buttonResult.addEventListener('click', wordFunction);

buttonResult.addEventListener('click', spaceFunction);

buttonResult.addEventListener('click', scoreFunction);

buttonResult.addEventListener('click', charFunction);

buttonResult.addEventListener('click', noSpaceCharFunction);