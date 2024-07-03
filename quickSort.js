function quickSort(arreglo){
    if(arreglo.length <= 1){
        return arreglo
    }
    let pivot = arreglo[0]
    let left = []
    let right = []
    for(let i = 1; i < arreglo.length; i++){
        if(arreglo[i] < pivot){
            left.push(arreglo[i])
        }else{
            right.push(arreglo[i])
        }
    }
    return quickSort(left).concat(pivot, quickSort(right))
}