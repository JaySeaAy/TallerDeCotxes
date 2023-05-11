// Array para almacenar los coches
let cars = [];

// Función para mostrar los coches en la lista
function displayCars() {
  const carList = document.getElementById('carList');
  carList.innerHTML = '';

  cars.forEach((car, index) => {
    const carItem = document.createElement('li');
    carItem.className = 'car-item';
    carItem.innerHTML = `
      <span>${car.make}</span>
      <span>${car.model}</span>
      <button onclick="deleteCar(${index})">Eliminar</button>
    `;

    carList.appendChild(carItem);
  });
}

// Función para agregar un coche
function addCar(event) {
  event.preventDefault();

  const makeInput = document.getElementById('makeInput');
  const modelInput = document.getElementById('modelInput');

  const make = makeInput.value;
  const model = modelInput.value;

  if (make && model) {
    const car = { make, model };
    cars.push(car);

    makeInput.value = '';
    modelInput.value = '';

    displayCars();
  }
}

// Función para eliminar un coche
function deleteCar(index) {
  cars.splice(index, 1);
  displayCars();
}

displayCars();

// Event Listener para el formulario de agregar coche
const addCarForm = document.getElementById('addCarForm');
addCarForm.addEventListener('submit', addCar);