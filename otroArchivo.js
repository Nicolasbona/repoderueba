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

/*
Este es el ejercicio de fizzbuzz del elocuent js una forma de usar el or con el output muy interesante

for(i=1;i<=100;i++){
        var salida="";
      	if(i%3==0){
          salida+="Fizz";
        }
        if(i%5==0){
          salida+="Buzz";
        }
        console.log(salida||i);      
        }
Hacer un ajedrez del elecuent js

var chess="";
for(i=1;i<=8;i++){
  for(j=1;j<=8;j++){
    if((i+j)%2==0){
      chess+=" ";
    }else{
      chess+="#";
    }
  }
  chess+="\n";
}

console.log(chess);


 // esta funcion permite recursivamente buscar con numeros primos de 1 dijito (sea sumando o multiplicando ) un camino para formar el numero dado ej: 10 = 1 x 7+ 3

function buscarSolucion (numero) {
	function encontrarCamino(inicio,recorrido){
		if(inicio==numero){
        	return recorrido+" = "+numero;		
		}
		else if (inicio>numero){
			return null;
		}
		else {
			return encontrarCamino(inicio*7, recorrido+" x 7") ||
			       encontrarCamino(inicio*5, recorrido+" x 5") ||
			       encontrarCamino(inicio*3, recorrido+" x 3") ||
			       encontrarCamino(inicio*2, recorrido+" x 2") ||
			       encontrarCamino(inicio+7, recorrido+" + 7") ||
			       encontrarCamino(inicio+5, recorrido+" + 5") ||
			       encontrarCamino(inicio+3, recorrido+" + 3") ||
			       encontrarCamino(inicio+2, recorrido+" + 2") ||
			       encontrarCamino(inicio+1, recorrido+" + 1") ;
				     
				     
		}
	}
	return encontrarCamino(1,"1");
}
 console.log(buscarSolucion(10));



// Your code here.
function range(start, end){
var array = [];
  if(arguments.length>=3){
	if(arguments[2]>=1){
      
      for (i=start;i<=end;i+=arguments[2]){
         array.push(i);
        }
    }else{
      for (i=end;i<=start;i-=arguments[2]){
         array.unshift(i);
        }
    }
 }else{
   for (i=start;i<=end;i++){
      array.push(i);
   }
  }
  return array;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

console.log(sum(range(1, 10)));
// → 55


// MI SOLUCION  EJERCICIO 4.1
function reverseArray(array){
var newArray=[];
  for(i=array.length-1;i>=0;i--){
  	newArray.push(array[i]);
  }
  return newArray;
}

// SOLUCION DEL ELOCUENT EJERCICIO 4.1

function reverseArray(array){
var newArray=[];
  for(i=0;i<array.length;i++){
  	newArray.unshift(array[i]);
  }
  return newArray;
}

function reverseArray(array){
var newArray=[];
  for(i=0;i<array.length;i++){
  	newArray.unshift(array[i]);
  }
  return newArray;
}

/// MI SOLUCION  EJERCICIO 4.2
function reverseArrayInPlace(array){
  if (array.length%2===0){
    for(i=0;i<Math.floor(array.length/2);i++){
      var element =array[array.length-1-i];
      array[array.length-1-i]=array[i];
      array[i]=element;
    }
  }else{
    for(i=0;i<=Math.floor(array.length/2);i++){
      var element =array[array.length-1-i];
      array[array.length-1-i]=array[i];
      array[i]=element; 
      }
  }
return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// SOLUCION DEL  ELOCUENT  EJERCICIO 4.2
function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/// MI SOLUCION  EJERCICIO 4.3

function arrayToList(array){
  var list=null;
  for(i=array.length-1; i>=0;i--){
    list={valor:array[i], next:list};
  }
  return list;
}

function listToArray(list){
	var newArray=[];
  	for(i=list; i; i=i.next){
    newArray.push(i.valor);
    }
  return newArray
}

function prepend(value,list){
	list={valor:value, list};
 	return list; 
}

function nth(list,position,number){
	if(number==undefined){
  		var number=0;
    }
	if(!list){
    return undefined;
    }else if(position==number){
    	return list.valor;
    }else{
    	return nth(list.next,position,number+1);
    }   
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// MI SOLUCION  EJERCICIO 4.4

function deepEqual (obj,obj2){
	var variablesA=0, variablesB=0;	
   	if(obj===obj2){
    	return true;
    }
    if(obj==null || typeof obj != "object" || obj2== null || typeof obj2 != "object"){
    	return false;
    }
	for (propiedad in obj){
    	variablesA+=1;
     
    }
  	for (var propiedad in obj2){
    		variablesB+=1;
      		if(!(propiedad in obj) || !deepEqual(obj[propiedad],obj2[propiedad])){
        	return false; 
        }
    
    }
 	  	return variablesA==variablesB;
 
  	}



var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


*/