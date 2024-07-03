function bubbleSort(arreglo){
    for(let i = 0; i< arreglo.length; i++){
        for(let j = 0; j < arreglo.length; j++){
            if(arreglo[j] > arreglo[j+1]){
                swap(arreglo, j, j+1)
            }
        }
    }
    return arreglo
}