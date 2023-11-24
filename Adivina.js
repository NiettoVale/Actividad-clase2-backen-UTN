const readlineSync = require("readline-sync");

const generarAleatoreo = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const game = () => {
  let random = generarAleatoreo();
  console.log("He Elegido un número entre 1 y 100, podrás adivinarlo?");
  let userNumber = readlineSync.question("Ingresa un número: ");

  while (parseInt(userNumber) !== random) {
    if (userNumber > random) {
      console.log("El número que elegí es mas bajo!!!");
      userNumber = readlineSync.question("Ingresa otro número: ");
    } else {
      console.log("El número que elegí es mas alto!!!");
      userNumber = readlineSync.question("Ingresa otro número: ");
    }

    if (userNumber == random) {
      console.log("\n\nFelicitaciones adivinaste el número!!!");
      break;
    }
  }
};

game();
