// JERARQUIAS PROTOTIPO
/*
Se necesita agregar a las hormigas zánganos, que no saben recolectar, y cuando se les pida que defiendan o entreguen alimento, no hacen nada. 
Define el constructor de HormigaZangano e implementa las funciones pedidas.
*/
/*
 * HORMIGA RECOLECTORA
 */ 
function HormigaRecolectora(unaCantidadDeAlimentoTransportado) {
  this.cantidadDeAlimentoTransportado = unaCantidadDeAlimentoTransportado
}
HormigaRecolectora.prototype = {
  recolectar: function(cantidad) {
    this.cantidadDeAlimentoTransportado += cantidad;     
  },
  entregarAlimentoA: function(hormiguero) {
   hormiguero.depositarAlimento(this.cantidadDeAlimentoTransportado);
   this.cantidadDeAlimentoTransportado = 0;
  }
};

/*
 * HORMIGA GUERRERA
 */ 
function HormigaGuerrera() {

}
HormigaGuerrera.prototype = {
  entregarAlimentoA: function(hormiguero) {
  }
};

/*
 * HORMIGA ZANGANO
 */ 

// Define la hormiga aqui
function HormigaZangano(){
  HormigaRecolectora.call();  
}

HormigaZangano.prototype ={
entregarAlimentoA: function(){
	return 0;
},
defenderDe: function(){
	return 0;
}
}

/*
 * HORMIGUERO
 */
function Hormiguero(cantidadDeAlimento, hormigas) {
  this.cantidadDeAlimento = cantidadDeAlimento;
  this.hormigas = hormigas;
}
Hormiguero.prototype = {
   depositarAlimento: function(cantidadAlimento) {
      this.cantidadDeAlimento += cantidadAlimento;
   }, 
   agregarHormiga: function(hormiga) {
     this.hormigas.push(hormiga);
   },
   reclamarAlimento: function(hormiga) {
    this.hormigasAReclamarRecoleccion().forEach(function(hormiga){
      hormiga.entregarAlimentoA(this);
    }, this);
  },
  hormigasAReclamarRecoleccion: function() {
    return this.hormigas;
  },
  expulsar: function(cantidad) {
    this.hormigas.splice(0, 2);
  }
};


// DEVOLVER TODOS LOS VALORES DE UNA LISTA MENOS EL ULTIMO
/*
Splice: Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
arrayObj.splice(start, deleteCount, [item1[, item2[, . . . [,itemN]]]])

arrayObj
        Required. An Array object.
start
        Required. The zero-based location in the array from which to start removing elements.
deleteCount
        Required. The number of elements to remove.
item1, item2,. . ., itemN
        Optional. Elements to insert into the array in place of the deleted elements.

*/

function head (lista){
 	return lista.splice(0,lista.length-1);  
}

var a = [1,2,3];


var x= head (a);

console.log(x);

// Convertir un caracter en el proximo

/*
El String.fromCharCode() 
statico método devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
String.fromCharCode(num1, ..., numN) 

El charCodeAt() 
método devuelve un número indicando el valor Unicode del carácter en el índice proporcionado.
cadena.charCodeAt(indice);
*/
function toCharCode(caracter){
  return caracter.charCodeAt(0);
};

function fromCharCode(caracter){
	return String.fromCharCode(caracter)
};

function next (numero){
	return numero+1;
};


function nextChar(caracter){
  return fromCharCode(next(toCharCode(caracter)));
};

var a="A";
nextChar(a);


// MAP

/*
The map() 
method creates a new array with the results of calling a provided function on every element in this array.
var new_array = arr.map(callback[, thisArg])
callback
  Function that produces an element of the new Array, taking three arguments:
 
  currentValue
    The current element being processed in the array.
    
  index
    The index of the current element being processed in the array.
  
  array
    The array map was called upon.

thisArg
  Optional. Value to use as this when executing callback.

*/

function siguiente(x){
  return x + 1;
}
function siguientes(numeros) {
   return numeros.map(siguiente);
}


var lost = {nombre:"Lost", idiomaOriginal: "ingles"};
var houseOfCards = {nombre: "House of cards", idiomaOriginal: "ingles"};
var friends = {nombre: "Friends", idiomaOriginal: "ingles"};
var series = [
  lost, houseOfCards, friends
];
function nombreDeSerie(serie) {
  //al recibir un elemento devuelve el valor nombre de la posicion
  return serie.nombre;
}

function nombresDeSeries(series) {
  //envio un array de objetos
  return series.map(nombreDeSerie);
}

nombresDeSeries(series);


// Filter

/*
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

callback
  Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise, taking three arguments:

  element
    The current element being processed in the array.
  
  index
    The index of the current element being processed in the array.
  
  array
    The array filter was called upon.

thisArg Optional
  Optional. Value to use as this when executing callback

*/
var lost = {nombre:"Lost", idiomaOriginal: "ingles"};
var houseOfCards = {nombre: "House of cards", idiomaOriginal: "ingles"};
var friends = {nombre: "Friends", idiomaOriginal: "ingles"};
var chavoDelOcho = {nombre: "Chavo del 8", idiomaOriginal: "español"};
var series = [
  lost, houseOfCards, friends,chavoDelOcho
];
function estaSerieEnIngles(serie) {
  // recibe una serie (elemento de la lista) y verifica que el idioma sea inglesw
	return serie.idiomaOriginal==="ingles";
}

function seriesEnIngles(series) {
  // filter usa de cb a estaSerieEnIngles
	return series.filter(estaSerieEnIngles);
}

seriesEnIngles(series);


// funcion que cuenta los Positivos

function contarPositivos(numeros) {
    return numeros.filter(function(numero){
    return numero>0;
    }).length;
}




// Map y filter aplicados juntos


var lost = {nombre:"Lost", idiomaOriginal: "ingles"};
var houseOfCards = {nombre: "House of cards", idiomaOriginal: "ingles"};
var friends = {nombre: "Friends", idiomaOriginal: "ingles"};
var chavoDelOcho = {nombre: "Chavo del 8", idiomaOriginal: "español"};
var series = [
  lost, houseOfCards, friends,chavoDelOcho
];
function estaSerieEnIngles(serie) {
	return serie.idiomaOriginal==="ingles";
}

function titulo (serie){
  return serie.nombre;
}

titulosDeSeriesEnIngles(series);



function titulosDeSeriesEnIngles(series) {
return series.filter(estaSerieEnIngles).map(titulo);
}



// Funcion que devuelve un string con la primera letra en mayuscula
function capitalize(string){
    if(string.length === 0){
      return '';
    } else {
      return string[0].toUpperCase().concat(string.substring(1));
    }
}