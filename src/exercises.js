function removeFirstElement(array){
    //usamos slice() para NO modificar el array original y no shift()
    return array.slice(1);
}