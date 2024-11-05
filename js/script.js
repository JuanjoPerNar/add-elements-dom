 // Aquí tu código

const addBtn = document.getElementById('agregar');
const lista = document.getElementById('lista');

addBtn.addEventListener('click', function() {
    const elemento = prompt('Añadir elemento a la lista');
    if (elemento) {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = elemento;
        lista.appendChild(nuevoElemento);
    } else {
        alert('No se ha añadido ningún elemento a la lista') 
    }
})


