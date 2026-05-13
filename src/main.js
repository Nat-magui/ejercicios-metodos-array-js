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