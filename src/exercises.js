function removeFirstElement(array){
    //usamos slice() para NO modificar el array original y no shift()
    return array.slice(1);
}

function removeLastThreeIfValid(array){
    if (array.length <= 5){
        return 'ERROR: el arreglo debe tener mas de 5 elementos';
    }
//usamos slice(0,-3) porque devuelve UN NUEVO array sin los ultimos 3 elemntos, SIN modificar el original
    return array.slice(0,-3);
}