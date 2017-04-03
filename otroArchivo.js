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