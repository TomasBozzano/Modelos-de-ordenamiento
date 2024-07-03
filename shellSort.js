function shellSort(arreglo){
    let gap = Math.floor(arreglo.length/2)
    while(gap > 0){
        for(let i = gap; i < arreglo.length; i++){
            let temp = arreglo[i]
            let j = i
            while(j >= gap && arreglo[j-gap] > temp){
                arreglo[j] = arreglo[j-gap]
                j -= gap
            }
            arreglo[j] = temp
        }
        gap = Math.floor(gap/2)
    }
    return arreglo
}