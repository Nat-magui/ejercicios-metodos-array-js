const buttonExercise1 = document.querySelector('#btn-exercise-1');
const resultExercise1 = document.querySelector('#result-1');

buttonExercise1.addEventListener('click', () => {
    const input = [1, 2, 3, 4];
    const result = removeFirstElement(input);

    resultExercise1.textContent = JSON.stringify(result);
});