let CARS = [
  {
    id: 1,
    brand: "Tesla",
    price: 28_000,
    color: "black",
    hp: 400,
  },
  {
    id: 2,
    brand: "Gentra",
    price: 15_000,
    color: "black",
    hp: 200,
  },
  {
    id: 3,
    brand: "Lamborghini",
    price: 150_000,
    color: "yellow",
    hp: 500,
  },
];

const tbody = document.querySelector(".tbody");
const price = document.querySelector("#sorting__price");
const hp = document.querySelector("#sorting__hp");
const title = document.querySelector("#sorting__title");

let form = document.querySelector(".form");
let carBrand = document.querySelector("#brand");
let carPrice = document.querySelector("#price");
let carHp = document.querySelector("#car__hp");
let carColor = document.querySelector("#color");
let registerBtn = document.querySelector(".registrate__btn");
let table = document.querySelector(".table");
let i = 0;

function sortingNumber(value, type) {
  if (value === "descending") {
    CARS.sort((a, b) => b[type] - a[type]);
  } else if (value === "ascending") {
    CARS.sort((a, b) => a[type] - b[type]);
  }
  createTableData(CARS);
}

function sortingString(value, type) {
  CARS.sort((a, b) => {
    let first = a[type].toLowerCase();
    let second = b[type].toLowerCase();
    if (second > first) return value === "descending" ? 1 : -1;
    if (second < first) return value === "descending" ? -1 : 1;
    return 0;
  });
  createTableData(CARS);
}

title.addEventListener("change", (e) => {
  sortingString(e.target.value, "title");
});

price.addEventListener("change", (e) => {
  sortingNumber(e.target.value, "price");
});
hp.addEventListener("change", (e) => {
  sortingNumber(e.target.value, "hp");
});

function createTableData(data) {
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }
  data.forEach((car, index) => {
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = `
            <td>${index + 1}</td>
            <td>${car.brand}</td>
            <td>${car.price} so'm</td>
            <td>${car.hp}</td>
            <td>${car.color}</td>
            
        `;
    tbody.appendChild(tableRow);
  });
}
createTableData(CARS);

//

form.addEventListener("submit", (e) => {
  while (tbody.firstChild) {
    tbody.firstChild.remove();
  }
  e.preventDefault();
  let newCar = {
    id: i++,
    brand: carBrand.value, // text
    price: carPrice.value, // number
    color: carColor.value, // select
    hp: carHp.value, // number
  };
  carBrand = "";
  carPrice = "";
  carHp = "";
  CARS.push(newCar);
  createTableData(CARS);
});
