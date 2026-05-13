// FUNCION PARA EL PRIMER EJERCICIO
function removeFirstElement(array) {
    // Usamos slice() para NO modificar el array original y no shift()
    return array.slice(1);
}

// FUNCION PARA EL SEGUNDO EJERCICIO
function removeLastThreeIfValid(array) {
    if (array.length <= 5) {
        return 'ERROR: el arreglo debe tener mas de 5 elementos';
    }

    // Usamos slice(0, -3) porque devuelve UN NUEVO array sin los ultimos 3 elementos, SIN modificar el original
    return array.slice(0, -3);
}

// FUNCION PARA EL TERCER EJERCICIO
function addNumberToArray(array, number) {
    return array.map((item) => item + number);
}

//FUNCION PARA EL CUARTO EJERCICIO
function createArrayFromOneToN(number) {
    const result = []
    for (let i = 1; i <= number; i++) {
        result.push(i);
    }
    return result;
}