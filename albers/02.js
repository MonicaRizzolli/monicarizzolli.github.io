var cores = [];

function setup() {
  createCanvas(600, 450);
  background(255);
  cores = [3];
  for (var i = 0; i <= 3; i++) {
    cores[i] = random(0, 255)
  }

}

function draw() {
  noStroke();

  // retangulo esquerdo - cor 1, selecionada aleatoriamente
  fill(cores[0], cores[1], cores[2]);
  rect(0, 0, width / 2, height);

  // retangulo esquerdo - cor 2, complementar da cor 1
  fill(cores[2], cores[0], cores[1]);
  rect(width / 2, 0, width / 2, height);

  // grade - cor 3 - mistura da cor 1 e 2
  fill(cores[0] + cores[2] / 2, cores[1] + cores[0] / 2, cores[2] + cores[1] / 2);
  rect(80, 115, 140, 220);
  rect(380, 115, 140, 220);

  //retangulos pequenos cor 1
  for (var i = 100; i <= 210; i += 40) {
    for (var j = 135; j <= 360; j += 40) {
      fill(cores[0], cores[1], cores[2]);
      rect(i, j, 20, 20);
      fill(cores[2], cores[0], cores[1]);
      rect(i+300, j, 20, 20);
    }
  }
}

function keyPressed() {
  cores = [3];
  for (var i = 0; i < 3; i++) {
    cores[i] = random(0, 255);
  }
}
