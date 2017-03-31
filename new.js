
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
