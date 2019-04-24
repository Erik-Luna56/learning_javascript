//function aPesos(USD) {
  //return aGasolina(USD * 19.85)
//}
//function aGasolina(MXN) {
  //return MXN/19.37;
//}

var agencia =[
  [ "keonnisegg","rojo","1200","agera",'manual'],
  ["toyota","negro",'85','supra','auto'],
  ['nissan','azul','847','nismo','manual']
]
function Car(precio,transmision,modelo) {
  this.precio=precio
  this.transmision=transmision
  this.modelo=modelo

  this.getPrecio = function() {
    return this.precio;
  }
  this.getTransmision = function () {
    return this.transmision;
  }
  this.getModelo = function () {
    return this.modelo;
  }
  this.getDatos = function () {
    return this.precio + " " + this.transmision + " " + this.modelo;
  }

}
agencia.forEach(function (element) {
  var car =  new Car (element[2], element [4], element [3])
  console.log(car.getDatos());
})
