const Chance = require("chance");
const readline = require("node:readline");

const chance = new Chance();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Actividad 2: Crear un registro de estudiantes:
rl.question(
  "Ingrese la cantidad de estudiantes a cargar: ",
  function (nroEstudiantes) {
    let estudiantes = [];

    for (let index = 0; index < nroEstudiantes; index++) {
      const estudiante = { nombre: chance.name(), edad: chance.age() };
      estudiantes.push(estudiante);
    }

    console.log(estudiantes);
    rl.close();
  }
);

// Ejemplos de las filminas:
// const randomName = chance.name();
// const randomAge = chance.age();
// const randomEmail = chance.email();

// console.log(
//   `Los datos generados aleatoreamente son: \n${randomName}\n${randomAge}\n${randomEmail}`
// );
