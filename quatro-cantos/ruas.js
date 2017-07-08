function Carros(x, y) {
  this.x = x;
  this.y = y;
  this.v = random(1, 7);
  this.lar = random(40, 70);


  this.carrosPlot = function() {
    fill(255);
    stroke(0);
    strokeWeight(1);
    rect(this.x, this.y, this.lar, 20);
  }

  this.carrosUp = function() {
    this.x = this.x + this.v;
    if (this.x > width) {
      this.x = random(-300, -100);
      this.lar = random(40, 70);
      this.v = random(1, 7);
    }
  }
}

function ruaPlot() {
  stroke(0);
  strokeWeight(1);
  line(40, 860, width, 860);

  // ciclofaixa
  fill(128, 0, 0);
  noStroke();
  rect(40, 860, 760, 15);
  rect(410, 860, 15, 85);

  // faixa de pedestre
  fill(0);
  for (i = 60; i < 800; i += 550) {
    for(j = 863; j < 950; j += 6){
      rect(i, j, 40, 3);
    }
  }
}
