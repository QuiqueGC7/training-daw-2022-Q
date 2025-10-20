window.onload = () => {
    // Listar todos los divs
    console.log('start');
    const divs = document.getElementsByTagName('div')
    console.log(`divs ${divs.length}`);
    for (const node of divs) {
            console.log(node.innerHTML);
        }
    
    // Listar todos los elementos con style == 'buttons'
    console.log('start');
    const buttons = document.getElementsByClassName('buttons')
    console.log(`buttons ${buttons.length}`);
    for (const node of buttons) {
            console.log(node.innerHTML);
        }
   

    // Listar 1 div con class buttons
    const All = document.querySelector('div.buttons')
    console.log(`All ${All.length}`);
    for (const node of All) {
            console.log(node.innerHTML);
        }

    // Listar todos los divs con class == buttons
    const divsButton = document.querySelectorAll('div.buttons')
    console.log(`divsButton ${divsButton.length}`);
    for (const node of divsButton) {
            console.log(node.innerHTML);
        }
}