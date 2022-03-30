/*REQUERIMIENTO 1 - MEDIA  --------------------------------------------->DAVID*/

function GenerarNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Creo un array para llevar la cuenta de los valores
let arrayD = [];

// inicializo el array con la cuenta de los valores a cero
for (let index = 0; index < 10; index++) {
  arrayD.push(0);
}

// saco aleatorios algunos aleatorios con el for
for (let i = 0; i <= 100; i++) {
  // obtengo el aleatorio entre 3 y 6
  let randomIndex = GenerarNum(3, 6);
  // incremento las apariciones de este valor
  arrayD[randomIndex]++;
}
// muestro el array resultante
console.log(arrayD);

var suma1 = 0;
var indiceD = 0;

for (let i = 0; i < arrayD.length; i++) {
  console.log(arrayD[i]);
  suma1 += arrayD[i];
  indiceD++;
}

let mediaD = suma1 / 10;
console.log("MEDIA: " + mediaD);

/*REQUERIMIENTO 1 - MEDIA -----------------------------------------------------------------------------------> PABLO FERNÁNDEZ*/

//CREO UN ARRAY CON VARIOS NÚMEROS
var array = [
  90, 90, 10, 30, 30, 50, 50, 10, 80, 90, 10, 110, 120, 130, 140, 150, 160, 170,
  180, 190,
];
var array2 = [];
var array10 = [];
var suma = 0;
var indices = 0;
//AÑADIMOS A UN NUEVO ARRAY TODOS LOS VALORES MENORES DE 100
for (let i = 0; i < array.length; i++) {
  if (array[i] <= 100) {
    array2.push(array[i]);
  }
}
//AÑADIMOS A UN NUEVO ARRAY LOS 10 PRIMEROS VALORES DEL ANTERIOR ARRAY
for (let i = 0; i < 10; i++) {
  array10.push(array2[i]); //add los primeros 10 valores
}
//RECORREMOS EL ARRAY SUMANDO TODOS LOS VALORES Y SUMANDO LA CANTIDAD DE NÚMEROS
for (let i = 0; i < array10.length; i++) {
  console.log(array10[i]);
  suma += array[i];
  indices++;
}
//DIVIDIMOS LA SUMA TOTAL ENTRE 10 PARA OBTENER LA MEDIA
let media1 = suma / 10;
console.log("MEDIA: " + media1);

/*REQUERIMIENTO 1 - MEDIA -----------------------------------------------------------------------------------> SERGIO GÓMEZ*/

//FUNCION GENERA NUMERO ALEATORIO//

function generAleario(numeroArr) {
  let Numero;
  Numero = Math.floor(Math.random() * 100); // Math.floor para generar numero aleatorio redondeando a entero
  return Numero;
}

//FUNCION QUE CARGA LOS NUMEROS ALEATORIOS DE LA FUNCION generAleatorio en el ARRAY//

var numeroArr = []; // Declara el array

function cargaNumeros() {
  while (numeroArr.length !== 10) {
    var n = generAleario(numeroArr);
    numeroArr.push(n);
  }
  return numeroArr;
}
console.log(cargaNumeros());

//MEDIA//
var suma = 0;
var media2 = 0.0;

for (let i = 0; i < numeroArr.length; i++) {
  //Recorre Array y suma cada uno de los elementos incluidos

  suma += numeroArr[i];
}

media2 = suma / 10;
console.log("La media es: " + media2);

/*REQUERIMIENTO 1 - MEDIA -----------------------------------------------------------------------------------> JORGE GARCÍA*/

/* Declaramos el Array dandole valores y creamos las variables igualandolas a 0 */

var array10num = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
var sumaMedia = 0;
var media10num = 0;

/* Creamos un bucle para que vaya recorriendo el array y mostrando cada posicion por pantalla */

let i = 0;
while (i < array10num.length) {
  console.log(`El número es: ${array10num[i]}`);
  i++;
}

/* Un segundo bucle para sacar la media del Array, lo vamos recorriendo y por cada vuelta acumulamos el valor 
  en la variable, al finalizar el bucle sacamos la media y la mostramos por pantalla. */

for (let i = 0; i < array10num.length; i++) {
  sumaMedia += array10num[i];
}
media10num = sumaMedia / array10num.length;

console.log(`La media de los 10 números es: ${media10num}`);

/********************************************************* REQUERIMIENTO 2 - MODA ******************************************************** */
console.log("REQUERIMIENTO 2 - MODA");

array10.sort(function (a, b) {
  //ORDENAMOS EL ARRAY DE MENOR A MAYOR
  return a - b; //SI a ES MENOR QUE b SE PINTA a ANTES, SI ES MAYOR, SE PINTA b ANTES
});
//PINTAMOS EL ARRAY ORDENADO
console.log("PINTAMOS ORDENADO");
for (let i = 0; i < array10.length; i++) {
  console.log(array10[i]);
}
console.log("-------------------");
var a = new Map(); //CREAMOS UN MAP
var contador = 0; //INICIALIZAMOS EL CONTADOR
//REALIZAMOS DOS BUCLES ANIDADOS PARA SUMAR LA CANTIDAD DE REPETICIONES QUE HAY POR CADA NÚMERO
for (let i = 0; i < array10.length; i++) {
  for (let j = 0; j < array10.length; j++) {
    if (array10[i] == array10[j]) {
      //SI ARRAY[I] ES IGUAL A ARRAY[J]
      contador++; //SUMAMOS 1 AL CONTADOR
      a.set(array10[i], contador); //METEMOS EL VALOR EN EL MAP, ARRRAY[10] COMO KEY Y CONTADOR COMO VALUE
    } else {
      //SI NO ES IGUAL
      contador = 0; //VOLVEMOS A IGUALES A 0 EL CONTADOR
    }
  }
}

const mapaOrder = new Map([...a.entries()].sort((a, b) => b[1] - a[1])); // CREAMOS UN NUEVO MAP ORDENADO DE MAYOR A MENOR
var moda;
const mk = [...mapaOrder.keys()]; //CONVERTIMOS EN ARRAY EL MAPA ORDENADO
moda = mk[0]; //COGEMOS EL PRIMER VALOR (QUE ES EL VALOR QUE MÁS SE REPITE) Y LO IGUALAMOS A LA MODA

/********************************************************* REQUERIMIENTO 3 - MEDIANA ******************************************************** */

/* La mediana se realiza a través de la librería Math 
y método Ceil. Con este método, en caso de que sea impar, 
redondeamos al alza. Si fuese par su uso no sería necesario. */

var mediana = indices / 2;
let pos = Math.ceil(mediana);

//SOLUCIONES
console.log("SOLUCIONES");
console.log("1 - La Media es :" + media1);
console.log("2 - La Moda es : " + moda);
console.log("3 - La Mediana:" + array[pos]);
