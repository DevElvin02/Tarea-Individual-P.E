const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Introduzca un número: ", function(answer) {
  let pares = 0;
  let impares = 0;
  for (let char of answer) {
    let num = parseInt(char);
    if (num % 2 == 0) {
        pares += num //4, //4+4=
        
        console.log(`es la sumatoria ${pares}`);
        
    } else {
        impares += num
        console.log(`la sumatoria de impares es ${impares}`);
        
    }
    console.log(num);
  }
  if (pares > impares) {
    console.log("La sumatoria de los pares es mayor que los impares");
  } else if (pares === impares) {
    console.log("La sumatoria de pares e impares es igual");
    
  } else {
    console.log("La sumatoria de los impares es mayor que los pares");
    
  }
  rl.close();
});

//dividir los digitos en pares e impares 
    //para los pares dividir entre 2 y chequear que el residuo sea 0
//sumar los pares y guardarlos en una variable
//sumar los impares y guardarlos en una variable
//comparar variable a y b posterior mostrar el resultado 

