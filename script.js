let position = 0; // Posición inicial del personaje

document.addEventListener('click', (event) => {
    if (event.button === 0) { // Verifica si es el clic izquierdo
        position += 50; // Mueve hacia adelante
        updateCharacterPosition();
    } else if (event.button === 2) { // Verifica si es el clic derecho
        position -= 50; // Mueve hacia atrás
        updateCharacterPosition();
    }
});

// Actualiza la posición del personaje
function updateCharacterPosition() {
    const character = document.getElementById('character');
    character.style.transform = `translateX(${position}px)`;
}

// Prevenir el menú contextual del clic derecho
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});