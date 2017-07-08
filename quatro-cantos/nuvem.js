function Nuvem(x, y, n) {
  this.x = x;
  this.y = y;
  this.v = random(-2, 2);
  this.tempoDeVida = random(255, 355);

  this.update = function() {
    this.x = this.x + this.v;
    this.tempoDeVida--;
  }

  this.desapareceu = function() {
    if (this.tempoDeVida < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.desenhaNuvem = function() {
    if (this.estaChovendo()) {
      this.chuva();
      noStroke();
      fill(0, this.tempoDeVida);
      if (keyIsPressed && key == 'r') {
        this.raio(this.x + 20, this.y);
        stroke(0, this.tempoDeVida);
        strokeWeight(random(1));
        fill(255, this.tempoDeVida);
      }
    } else {
      fill(255, this.tempoDeVida);
      stroke(0, this.tempoDeVida);
      strokeWeight(1);
    }
    this.nuvem();
  }

  this.nuvem = function() {
    beginShape();
    vertex(this.x + n, this.y + n);
    vertex(this.x + n + 40, this.y + n);
    bezierVertex(this.x + 40 + n, this.y - 10 + n, this.x + 32 + n, this.y - 10 + n, this.x + 32, this.y - 5);
    bezierVertex(this.x + 32 + n, this.y - 15 + n, this.x + 24 + n, this.y - 15 + n, this.x + 24, this.y - 10);
    bezierVertex(this.x + 24 + n, this.y - 20 + n, this.x + 16 + n, this.y - 20 + n, this.x + 16, this.y - 10);
    bezierVertex(this.x + 16 + n, this.y - 15 + n, this.x + 8 + n, this.y - 15 + n, this.x + 8, this.y - 5);
    bezierVertex(this.x + 8 + n, this.y - 10 + n, this.x + n, this.y - 10 + n, this.x + n, this.y + n);
    endShape();
  }


  this.estaChovendo = function() {
    var d = dist(this.x + 20, this.y - 10, mouseX, mouseY);
    if (d < 320) {
      return true;
    } else {
      return false;
    }
  }

  this.chuva = function() {
    for (var cX = this.x; cX < this.x + 40; cX += 2) {
      for (var cY = this.y; cY < this.y + random(200, 400); cY += 15) {
        stroke(0, this.tempoDeVida);
        strokeWeight(1);
        line(cX + n, cY + random(2) + n, cX + n, cY + random(5, 15) + n);
      }
    }
  }

  this.raio = function(rX, rY) {
    var y_step = 20;
    var r_range = 10;
    var raioW = random(5);
    applyMatrix();
    translate(rX, rY);
    beginShape();
    noFill();
    stroke(255, this.tempoDeVida);
    strokeWeight(raioW);
    vertex(0, raioW);
    for (var i = 1; i < random(10, 20); i++) {
      if (i % 2 === 0) {
        vertex(0 + random(-r_range, r_range), i * y_step + random(-r_range, r_range));
      } else {
        vertex(0 + random(-r_range, r_range), i * y_step + random(-r_range, r_range));
      }
    }
    endShape();
    resetMatrix();
  }
}
