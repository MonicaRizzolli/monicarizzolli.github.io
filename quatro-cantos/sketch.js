var pessoas = [];
var nuvens = [];
var carros = [];
var carrosB = [];

function setup() {
  frameRate(5);
  createCanvas(800, 960);
  noSmooth();
  for (var i = 0; i < 120; i++) { // declarando pessoas
    pessoas[i] = new Pessoa();
  }
  for (i = 0; i < 10; i++) { // declarando carros
    carros[i] = new Carros(random(-300, -50), random(875, 890));
    carrosB[i] = new Carros(random(-300, -50), random(910, 925));
  }
}

function draw() {
  background(255);
  play();
  // if (keyIsPressed && key === 'a') {
  //   saveCanvas('imagem', 'png');
  // }
}



function mousePressed() {
  var n = new Nuvem(mouseX, mouseY, random(-3, 3)); // incluindo nuvens no céu
  if (mouseY < 600) {
    nuvens.push(n);
  }
  var p = new Pessoa();
  if (mouseY > 780 && mouseY < 860 && mouseX > 170 && mouseX < 440 && pessoas.length < 200) {
    pessoas.push(p);
  } else if (mouseY > 780 && mouseY < 860 && mouseX > 440 && mouseX < 610) {
    pessoas.splice(0, random(10));
  }
}
