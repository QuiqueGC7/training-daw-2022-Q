window.onload = function(e) {
    console.log('documento cargado')
    //Cambiar titulo del segundo h2
    const title = document.getElementsByTagName('h2')[1].innerText = 'Titulo cambiado, Hola desde JS!!'
    //Selecionar elemento con id == username
    const username = document.getElementById('username') 
    console.log(username)
    //Cambiar de color de todos los .first que esten dentro de un articulo
    const first = document.getElementsByClassName('first')
    for (const node of first){
        node.style.color='blue'
        console.log(node.innerHTML);
    }
    //Seleccionar todos los elementos li con class == item
    const li = document.querySelectorAll('li.item')
    for (const node of li){
        console.log(node.innerHTML);
    }
    //Seleccionar todos los buttons dentro de class == buttons
    const buttons = document.querySelectorAll('.buttons button')
    for (const node of buttons){
        console.log(node.innerHTML);
    }
    // Cambiar el color de fondo del primer párrafo
    const parrafo = document.querySelector('.first')
        parrafo.style.backgroundColor='black'
        console.log(parrafo.innerHTML);
    // Cambiar el color de frente de los elementos buttons dentro de class == buttons
    for (const node of buttons){
        node.style.color='blue'
        console.log(node.innerHTML);
    }
}   0