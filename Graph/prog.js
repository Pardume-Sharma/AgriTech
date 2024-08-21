let Nitrogen = document.querySelector(".Nitrogen-progress");
let NitrogenValueContainer = document.querySelector(".Nitrogen-value");
let Phosphorus = document.querySelector(".Phosphorus-progress");
let PhosphorusValueContainer = document.querySelector(".Phosphorus-value");
let Potassium = document.querySelector(".Potassium-progress");
let PotassiumValueContainer = document.querySelector(".Potassium-value");
let Moisture = document.querySelector(".Moisture-progress");
let MoistureValueContainer = document.querySelector(".Moisture-value");

let NitrogenValue = 55;
let PhosphorusValue = 65;
let PotassiumValue = 45;
let MoistureValue = 33;

NitrogenValueContainer.textContent = `${NitrogenValue}%`
Nitrogen.style.background = `conic-gradient(
    #4d5bf9 ${NitrogenValue * 3.6}deg,
    #cadcff ${NitrogenValue * 3.6}deg
)`;

PhosphorusValueContainer.textContent = `${PhosphorusValue}%`
Phosphorus.style.background = `conic-gradient(
    #4d5bf9 ${PhosphorusValue * 3.6}deg,
    #cadcff ${PhosphorusValue * 3.6}deg
)`;

PotassiumValueContainer.textContent = `${PotassiumValue}%`
Potassium.style.background = `conic-gradient(
    #4d5bf9 ${PotassiumValue * 3.6}deg,
    #cadcff ${PotassiumValue * 3.6}deg
)`;

MoistureValueContainer.textContent = `${MoistureValue}%`
Moisture.style.background = `conic-gradient(
    #4d5bf9 ${MoistureValue * 3.6}deg,
    #cadcff ${MoistureValue * 3.6}deg
)`;