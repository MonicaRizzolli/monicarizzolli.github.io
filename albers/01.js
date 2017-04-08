var cores = [];
var faixaHorizontal;

function setup() {
  createCanvas(575, 750);
  background(255);
  rectMode(CENTER);
  cores = [6];
  for (var i = 0; i < 15; i++) {
    cores[i] = random(0, 255);
  }
  faixaHorizontal = true;
}

function draw() {
  noStroke();

  // retangulo superior
  fill(cores[0], cores[1], cores[2]);
  rect(width / 2, height / 4, width, height / 2);

  //retangulo inferior
  fill(cores[3], cores[4], cores[5]);
  rect(width / 2, height * 3 / 4, width, height / 2);

  // faixa vertical
  fill(cores[6], cores[7], cores[8]);
  rect(width / 2, height / 2, 100, 475);

  if (faixaHorizontal === true) {
    //faixa horizontal superior
    fill(cores[9], cores[10], cores[11]);
    rect(width / 2, 300, width, 150);

    //faixa horizontal inferior
    fill(cores[12], cores[13], cores[14]);
    rect(width / 2, 450, width, 150);
  }
}

function keyPressed() {
  if (keyCode === RETURN) {
    faixaHorizontal = true;
    cores = [15];
    for (var i = 0; i < 15; i++) {
      cores[i] = random(0, 255);
    }
  } else if (keyCode === SHIFT) {
    faixaHorizontal = false;
  }
}
