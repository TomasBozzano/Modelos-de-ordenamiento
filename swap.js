export function swap(arreglo,num, comp){
    let aux = arreglo[num];
    arreglo[num] = arreglo[comp];
    arreglo[comp] = aux; 
}