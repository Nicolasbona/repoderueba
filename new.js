
//var pepita

var pepita = {energia:100};
pepita.volar = function(distancia) {
   this.energia = this.energia - 2 * distancia;

};
pepita.kmQuePuedeVolar= function(distancia){
  if (this.energia<=10){
    this.energia=10;
    return this.energia;
  }
  else{
    this.volar(distancia);
  }
};

// Objetos perder poder

  var bien ={
  poder: 10,
  combatirAl: function(enemigo){
    enemigo.poder-=this.poder;
  }
}

var mal ={
  poder:15,
  combatirAl: function(enemigo){
    enemigo.poder-=this.poder;
  }
}

bien.combatirAl(mal);
console.log(mal.poder);
mal.combatirAl(bien);
console.log(bien.poder);

// O 

var bien = {
  poder: 10,
  combatirAl: function(mal){
	mal.perderPoder(this.poder);
  }
}

var mal = {
  poder: 15,
  perderPoder: function(bien){
  	this.poder-=bien;
  }
}



var itinerario = {
   atraccionesTuristicas: ['Louvre', 'Torre Eiffel', 'Obelisco']
};

itinerario.visitarTodasLasAtracciones = function () {
   this.atraccionesTuristicas.forEach(function(atraccion) {
      this.recorrer(atraccion);
   });
};

itinerario.recorrer = function(atraccion) {
   console.log('Recorriendo ' + atraccion);
};

//

gru.saludarAntesDeIrADormir  = function() {
    var villano = this ;
  	villano.minions.forEach(function(minion){
         villano.saludarA(minion);
});
};

// BIND

var minion = {nombre: "Bob"};
function saludar() {
   console.log('Hola ' + this.nombre);
}
saludar(); // FALLA!
var saludarABob = saludar.bind(minion);
saludarABob(); // Hola Bob

gru.saludarAntesDeIrADormir  = function() {
     this.minions.forEach(function(minion){
         this.saludarA(minion);
}.bind(this));
};

// THIS O PARAMETRO EN forEach

gru.saludarAntesDeIrADormir  = function() {
     this.minions.forEach(function(minion){
         this.saludarA(minion);
},this);
};



var botella = { nivelDeAgua:0,
              vaciar: function(){
              	this.nivelDeAgua=0;
              },
              llenar: function(){
                this.nivelDeAgua=250;
              },
              estaVacia: function(){
              if(this.nivelDeAgua==0){
                 	return true;
                 }
               else{
                 	return false;
                 }
              }
            }
            

var bonoNulo ={
	calcularMontoBono: function(empleado){
		return 0;
	}
}

var bonoPorCantidadDeVentas = {
	calcularMontoBono: function(empleado){
		if(empleado.cantidadVentas <=10){
			return 0;
		}else{
			return empleado.sueldoBasico*0.25;
		}
	}
}
var bonoPorPresentismo = {
	calcularMontoBono: function(empleado){
		if(empleado.cantidadFaltas <=0){
			return empleado.sueldoBasico*0.10;
		}else{
			return 0;
		}
	}
}

var ernesto = {
 	dineroDisponible:0,
	sueldoBasico:1200,
	cantidadVentas:4,
  	cantidadFaltas:0,
	bono:bonoNulo,
   	cobrarSueldo: function(){
      this.dineroDisponible+=(this.sueldoBasico+this.bono.calcularMontoBono(this));
    }
};
var ernestina = {
	dineroDisponible:0,             	
  	sueldoBasico:1000,
	cantidadVentas:12,
  	cantidadFaltas:10,
	bono:bonoPorCantidadDeVentas,
  	cobrarSueldo: function(){
      this.dineroDisponible+=(this.sueldoBasico+this.bono.calcularMontoBono(this));
    }
};
var anabel = {  
	dineroDisponible:0,              
  	sueldoBasico:1500,
  	cantidadVentas:13,
  	cantidadFaltas:2,
  	bono:bonoPorPresentismo,
  	cobrarSueldo: function(){
      this.dineroDisponible+=(this.sueldoBasico+this.bono.calcularMontoBono(this));
    }
};