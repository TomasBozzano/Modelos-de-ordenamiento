function selectionSort(arreglo){
    for(let i = 0; i< arreglo.length; i++){
    let min = i;
    for(let j = i; j < arreglo.length; j++){
        if(arreglo[min] > arreglo[j]){
         min = j   
        }
         if(min !== i){
         swap(arreglo, min, i) 
        }
      }
    }
    return arreglo
}