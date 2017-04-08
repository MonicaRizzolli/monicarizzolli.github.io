// GLOBAIS

var formasH = [];
var formasV = [];
var cor = [];
var tamX, tamY;
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2;
var quant;
var corGrade;

function setup() {

  createCanvas(575, 650);

  b1 = color(0);
  b2 = color(255);
  corGrade = random(0, 255);
  quant = random(800, 1200);

  formasH = [quant];
  formasV = [quant];
  cor = [quant];
  tamX = random(40, 70);
  tamY = random(40, 70);


  for (var i = 0; i <= quant; i++) {
    formasH[i] = random(0, width);
    formasV[i] = random(0, height);
    cor[i] = map(formasV[i], 40, height - 70, 0, 255);

  }
}

function draw() {
  // BACKGROUND
  setGradient(0, 0, width, height, b1, b2, Y_AXIS);

  for (var i = 0; i <= quant; i++) {
    noStroke();
    fill(cor[i], 100);
    rect(formasH[i], formasV[i], tamX, tamY);
  }

  // GRADE
  fill(corGrade);

  rect(0, 0, 40, height);
  rect(width / 2 - 20, 0, 40, height);
  rect(width - 40, 0, 40, height);

  rect(0, 0, width, 40);
  rect(0, height / 2 - 20, width, 40);
  rect(0, height - 40, width, 40);
}

function setGradient(x, y, w, h, b1, b2, axis) {
  if (axis == Y_AXIS) { // Top to bottom gradient
    for (var i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(b1, b2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}

function keyPressed() {
  if (keyCode === RETURN) {
    for (var i = 0; i <= quant; i++) {
      formasH[i] = random(0, width);
      formasV[i] = random(0, height);
      cor[i] = map(formasV[i], 40, height - 70, 0, 255);
    }
  } else if (keyCode === SHIFT) {
    corGrade = random(0, 255);
  }
}
