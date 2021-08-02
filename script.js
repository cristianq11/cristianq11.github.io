var btnno = document.getElementById("btnno");
var btnyes = document.getElementById("btnyes");

btnno.addEventListener("mouseenter", () => {
  var pos = coordenadas();
  btnno.style.top = `${pos.posy}px`;
  btnno.style.left = `${pos.posx}px`;
});

var coordenadas = () => {
  var ancho = innerWidth - 150;
  var alto = innerHeight - 50;
  var posx = Math.floor(Math.random() * ancho);
  var posy = Math.floor(Math.random() * alto);
  return { posx, posy };
};

btnyes.addEventListener("click", () => {
  alert("Ya sabia que si querias UwU");
});
