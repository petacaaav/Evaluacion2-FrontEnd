document.getElementById("show-characters").addEventListener("click", mostrarTodos);
document.getElementById("find-gohan").addEventListener("click", encontrarGohan);
document.getElementById("filter-saiyans").addEventListener("click", filtrarSaiyans);
document.getElementById("filter-androids").addEventListener("click", filtrarAndroides);
document.getElementById("lowest-power").addEventListener("click", menorPoder);
document.getElementById("highest-power").addEventListener("click", mayorPoder);
document.getElementById("total-power").addEventListener("click", totalPoder);
document.getElementById("position-vegeta").addEventListener("click", posicionVegeta);

function mostrarTodos() {
    let container = document.getElementById("container");
    container.innerHTML = ""; 
    personajes.forEach(personaje => {
        container.innerHTML += mostrarPersonaje(personaje);
    });
}

function mostrarPersonaje(personaje) {
    return `
      <div class="profile">
            <div class="character-profile">
                <div class="character-head">
                    <h1>${personaje.name}</h1>
                    <h2>${personaje.race}</h2>
                </div>
                <img src="${personaje.img}" alt="${personaje.name}">
                <div class="character-stats">
                    <ul>
                        <li>Health: ${personaje.health}</li>
                        <li>Attack: ${personaje.attack}</li>
                        <li>Defense: ${personaje.defense}</li>
                        <li>KI Restore Speed: ${personaje.kiRestoreSpeed}</li>
                    </ul>
                </div>
            </div>
        </div>`;
}

function encontrarGohan() {
    let gohan = personajes.find(personaje => personaje.name === "Gohan");
    mostrarFiltro([gohan]);
}

function filtrarSaiyans() {
    let saiyans = personajes.filter(personaje => personaje.race === "Saiyan");
    mostrarFiltro(saiyans);
}

function filtrarAndroides() {
    let androides = personajes.filter(personaje => personaje.race === "Android");
    mostrarFiltro(androides);
}

function mostrarFiltro(filteredCharacters) {
    let container = document.getElementById("container");
    container.innerHTML = "";
    filteredCharacters.forEach(personaje => {
        container.innerHTML += mostrarPersonaje(personaje);
    });
}

// Menor poder
function menorPoder() {
    let minPoder = personajes.reduce((min, personaje) => personaje.attack < min ? personaje.attack : min, personajes[0].attack);
    let personajeMenorPoder = personajes.find(personaje => personaje.attack === minPoder);
    mostrarFiltro([personajeMenorPoder]);
}

// Mayor poder
function mayorPoder() {
    let maxPoder = personajes.reduce((max, personaje) => personaje.attack > max ? personaje.attack : max, personajes[0].attack);
    let personajeMayorPoder = personajes.find(personaje => personaje.attack === maxPoder);
    mostrarFiltro([personajeMayorPoder]);
}

// Posición de Vegeta (alerta)
function posicionVegeta() {
    let vegetaIndex = personajes.findIndex(personaje => personaje.name === "Vegeta");
    alert(`La posición de Vegeta es: ${vegetaIndex + 1}`);
}

// Suma del poder total de todos los personajes (alerta)
function totalPoder() {
    let total = personajes.reduce((sum, personaje) => sum + personaje.attack, 0);
    alert(`El poder total de todos los personajes es: ${total}`);
}
