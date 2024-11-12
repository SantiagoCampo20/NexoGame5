function filterGames() {
    // Obtener el valor del input y pasarlo a minúsculas
    let input = document.getElementById('searchInput').value.toLowerCase();
    let games = document.querySelectorAll('.oferta'); // Seleccionar todos los juegos

    // Iterar sobre cada juego para mostrar u ocultar según el filtro
    games.forEach((game) => {
        // Obtener el texto del nombre del juego
        let gameName = game.querySelector('.texto-oferta p').textContent.toLowerCase();

        // Verificar si el nombre del juego contiene el texto del input
        if (gameName.includes(input)) {
            game.style.display = ''; // Mostrar juego
        } else {
            game.style.display = 'none'; // Ocultar juego
        }
    });
}