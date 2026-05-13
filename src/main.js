//VAMOS CON EL EJERCICIO 1 :D
const buttonExercise1 = document.querySelector('#btn-exercise-1');
const resultExercise1 = document.querySelector('#result-1');

buttonExercise1.addEventListener('click', () => {
    const input = [1, 2, 3, 4];
    const result = removeFirstElement(input);

    resultExercise1.textContent = JSON.stringify(result);
});

//VAMOS CON EL EJERCICIO 2
const buttonExercise2Valid = document.querySelector('#btn-exercise-2-valid');
const buttonExercise2Invalid = document.querySelector('#btn-exercise-2-invalid');
const resultExercise2 = document.querySelector('#result-2');

buttonExercise2Valid.addEventListener('click', () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const result = removeLastThreeIfValid(input);

    resultExercise2.textContent = JSON.stringify(result);
});

buttonExercise2Invalid.addEventListener('click', () => {
    const input = [1, 2, 3, 4, 5];
    const result = removeLastThreeIfValid(input);

    resultExercise2.textContent = result;
});

//VAMOS CON EL EJERCICIO 3 GOGOGO
const buttonExercise3 = document.querySelector('#btn-exercise-3');
const resultExercise3 = document.querySelector('#result-3');

buttonExercise3.addEventListener('click', () => {
    const input = [1, 2, 3, 4];
    const numberToAdd = 5;
    const result = addNumberToArray(input, numberToAdd);

    resultExercise3.textContent = JSON.stringify(result, null, 2);
});

//VAMOS CON EL EJERCICIO 4
const buttonExercise4 = document.querySelector('#btn-exercise-4');
const resultExercise4 = document.querySelector('#result-4');

buttonExercise4.addEventListener('click', () => {
    const input = 5;
    const result = createArrayFromOneToN(input);

    resultExercise4.textContent = JSON.stringify(result);
});

//LET'S GO WITH NUMBER FIVEEEE yei
const buttonExercise5 = document.querySelector('#btn-exercise-5');
const resultExercise5 = document.querySelector('#result-5');

buttonExercise5.addEventListener('click', () => {
    const input = [1, 1, 1, 1, 1, 2, 1, 1, 1];
    const result = findUniqueNumber(input);

    resultExercise5.textContent = JSON.stringify(result);
});