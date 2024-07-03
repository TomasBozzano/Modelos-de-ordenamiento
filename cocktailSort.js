function cocktailSort(arreglo){
    let swapped = true
    let start = 0
    let end = arreglo.length - 1
    while(swapped){
        swapped = false
        for(let i = start; i < end; i++){
            if(arreglo[i] > arreglo[i+1]){
                swap(arreglo, i, i+1)
                swapped = true
            }
        }
        if(!swapped){
            break
        }
        swapped = false
        end--
        for(let i = end - 1; i >= start; i--){
            if(arreglo[i] > arreglo[i+1]){
                swap(arreglo, i, i+1)
                swapped = true
            }
        }
        start++
    }
    return arreglo
}