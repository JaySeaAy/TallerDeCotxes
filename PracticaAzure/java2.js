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

  function buscarFotoCoche() {
    const marca = document.getElementById('marca-foto-input').value;
    const modelo = document.getElementById('modelo-foto-input').value;
  
    // Realizar la solicitud HTTP a la función de Azure Functions
    fetch('URL_DE_TU_FUNCION_AZURE', {
      method: 'POST',
      body: JSON.stringify({ marca, modelo })
    })
    .then(response => response.json())
    .then(data => {
      const listaFotos = document.getElementById('fotos-lista');
      listaFotos.innerHTML = '';
  
      // Iterar sobre las fotos recibidas y mostrarlas en el HTML
      data.forEach(foto => {
        const item = document.createElement('li');
        const imagen = document.createElement('img');
        imagen.src = foto;
        item.appendChild(imagen);
        listaFotos.appendChild(item);
      });
    })
    .catch(error => {
      console.error(error);
      // Manejar el error de solicitud
    });
  }