var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

//Boule de glace
function glace() {
  ctx.fillStyle = "brown";
  ctx.beginPath();
  ctx.bezierCurveTo(200, 200, 240, 100, 250, 200);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}
function cornet() {
  ctx.fillStyle = "#AA6522";
  ctx.beginPath(); //Début du chemin
  ctx.moveTo(200, 200);
  ctx.lineTo(250, 200);
  ctx.lineTo(225, 280);
  ctx.closePath(); //Fin du chemin
  ctx.fill();
}
function main(){
  glace();
  cornet()
}
main();
