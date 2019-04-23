function aPesos(USD) {
  return aGasolina(USD * 19.85)
}
function aGasolina(MXN) {
  return MXN/19.37;
}
console.log(aPesos(1));
