let listaCoches = []; // Lista para almacenar los coches

function agregarCoche(nombre, modelo) {
  const coche = { nombre, modelo }; // Crear un objeto de coche con el nombre y modelo proporcionados
  listaCoches.push(coche); // Agregar el coche a la lista
}

function mostrarCoches() {
  const lista = document.getElementById('coches-lista'); // Obtener el elemento de lista en HTML

  // Limpiar la lista antes de agregar los elementos
  lista.innerHTML = '';

  // Iterar sobre la lista de coches y agregar cada coche como un elemento de lista en HTML
  listaCoches.forEach((coche) => {
    const item = document.createElement('li');
    item.textContent = `Nombre: ${coche.nombre}, Modelo: ${coche.modelo}`;
    lista.appendChild(item);
  });
}

// Función para agregar un coche desde la página HTML
function agregarCocheHTML() {
  const nombre = document.getElementById('nombre-input').value;
  const modelo = document.getElementById('modelo-input').value;

  agregarCoche(nombre, modelo);
}

function borrarCoche() {
    const marca = document.getElementById('borrar-marca-input').value;
    const modelo = document.getElementById('borrar-modelo-input').value;
  
    // Buscar el coche en la lista y eliminarlo
    listaCoches = listaCoches.filter((coche) => coche.nombre !== marca || coche.modelo !== modelo);
  
    // Mostrar la lista actualizada
    mostrarCoches();
  }