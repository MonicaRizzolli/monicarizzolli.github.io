var xDire = 610; // limite de caminhada no eixo x, lado direito
var yCima = 780;

function Pessoa() { // constructor function 
  this.r = 5;
  this.x = random(170, xDire - this.r * 2);
  this.y = random(yCima, 860 - this.r * 2);
  this.vX = random(-2, 2);
  this.vY = random(-2, 2);


  this.segueMouse = function() {
    var easing = 0.05;
    var targetX = mouseX;
    var targetY = mouseY;
    var dX = targetX - this.x;
    var dY = targetY - this.y;
    if (this.estaNoMouse()) {
      this.x += dX * easing; // seguir
      this.y += dY * easing;
    }
  }

  this.estaNoMouse = function() { // checa se o mouse está perto da pessoa
    var d = dist(this.x, this.y, mouseX, mouseY);
    if (d < 100 && mouseX > 180 && mouseX < xDire - 10 && mouseY > yCima + 10 && mouseY < 850) { // o valor limite do x e y está relacionado com a função update
      return true;
    } else {
      return false;
    }
  }

  this.update = function() { // essa função inverte a velocidade nos limites da calçada
    this.x = this.x + this.vX;
    this.y = this.y + this.vY;
    if (this.y < yCima || this.y > 860 - this.r * 2) {
      this.vY = -this.vY;
    }
    if (this.x < 170 || this.x > xDire) {
      this.vX = -this.vX;
    }
  }

  this.plot = function() {
    strokeWeight(1);
    stroke(0);
    fill(255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}
