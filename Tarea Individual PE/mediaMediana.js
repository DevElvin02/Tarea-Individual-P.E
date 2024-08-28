
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularMediaMediana(array) {
   
    Math.max((a, b) => a - b); //para ordenar el array de menor a mayor

    const suma = array.reduce((acumulador, valor) => acumulador + valor, 0); //calculando la media usando reduce
    const media = suma / array.length;

    const mitad = Math.floor(array.length / 2); //calcula la mediana
    let mediana;
    if (array.length % 2 === 0) {
        mediana = (array[mitad - 1] + array[mitad]) / 2;
    } else {
        mediana = array[mitad];
    }

    return { media: media, mediana: mediana };
}


rl.question("¿Cuántos valores desea ingresar? ", (cantidadDeValores) => {
    let array = [];
    let contador = 0;

    
    const pedirValores = () => {
        if (contador < cantidadDeValores) {
            rl.question(`Ingrese el valor ${contador + 1}:` , (valor) => {
                array.push(parseFloat(valor));
                contador++;
                pedirValores();
            });
        } else {
  
            let resultado = calcularMediaMediana(array);
            console.log(`Media: ${resultado.media}, Mediana: ${resultado.mediana}`);
            rl.close();
        }
    };

    pedirValores();
});