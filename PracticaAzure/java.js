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
  }
}

// Función para eliminar un coche
function deleteCar(index) {
  cars.splice(index, 1);
}


// Event Listener para el formulario de agregar coche
const addCarForm = document.getElementById('addCarForm');
addCarForm.addEventListener('submit', addCar);

const sql = require('mssql');

const config = {
  user: 'jaumecalduch@gmail.com',
  password: 'jaume822002',
  server: 'tallerdecotxes.azurewebsites.net',
  database: 'TallerCotxesDatabase',
  options: {
    encrypt: true
  }
};

// Conectarse a la base de datos
sql.connect(config, function(err) {
  if (err) {
    console.log(err);
  }
});

document.getElementById("carForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var carMake = document.getElementById("carMake").value;
  var carModel = document.getElementById("carModel").value;

  // Insertar el coche en la base de datos
  const request = new sql.Request();
  const query = `INSERT INTO Coches (Marca, Modelo) VALUES ('${carMake}', '${carModel}')`;
  request.query(query, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log("Coche agregado a la base de datos");
    }
  });

  var carItem = document.createElement("li");
  carItem.textContent = carMake + " " + carModel;

  document.getElementById("cars").appendChild(carItem);

  document.getElementById("carMake").value = "";
  document.getElementById("carModel").value = "";
});

function showCars() {
  const request = new sql.Request();
  const query = "SELECT Marca, Modelo FROM Coches";
  request.query(query, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      // Limpiar la lista antes de mostrar los coches
      document.getElementById("cars").innerHTML = "";

      // Recorrer los resultados y mostrar los coches en la lista
      result.recordset.forEach(function(car) {
        var carItem = document.createElement("li");
        carItem.textContent = car.Marca + " " + car.Modelo;
        document.getElementById("cars").appendChild(carItem);
      });
    }
  });
}

document.getElementById("showCarsButton").addEventListener("click", function() {
  showCars();
});

document.getElementById("carForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var carMake = document.getElementById("carMake").value;
  var carModel = document.getElementById("carModel").value;

  // Agregar el coche a la base de datos
  addCar(carMake, carModel);

  var carItem = document.createElement("li");
  carItem.textContent = carMake + " " + carModel;

  document.getElementById("cars").appendChild(carItem);

  document.getElementById("carMake").value = "";
  document.getElementById("carModel").value = "";
});

function addCar(make, model) {
  const request = new sql.Request();
  const query = `INSERT INTO Coches (Marca, Modelo) VALUES ('${make}', '${model}')`;
  request.query(query, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log("Coche agregado a la base de datos");
    }
  });
}