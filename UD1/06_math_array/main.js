// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos
function doCalculation(array) {
    let iContenedor = 0
    let menor = array[0]
    let mayor = array[0]
    console.log("Suma") 
    for (let item of array) {
        if (item<menor){
            menor=item
        }
        if (item>mayor)
            mayor=item
        iContenedor = iContenedor + item
        
    }
    console.log(iContenedor)
    console.log("Media")
    let Media = iContenedor / array.length
    console.log(Media)
    console.log("Mayor")
    console.log(mayor)
    console.log("Menor")
    console.log(menor)
    
    
}



doCalculation([1,2,3,4])
doCalculation([5,5,5,5])
doCalculation([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5])