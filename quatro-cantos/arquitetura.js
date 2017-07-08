var pb = [0, 255]; // preto ou branco

function predio() { // prédio de fundo com janelas apagando e ascendend - barão de iguapé
  stroke(0);
  fill(0);
  rect(300, 50, 200, 710); // prédio - fundo preto
  fill(255);
  rect(302, 108, 196, 650); // prédio - fundo branco
  stroke(0);
  strokeWeight(1);
  for (var i = 112; i < 700; i = i + 19.6) {
    for (var j = 305; j < 496; j = j + 8) {
      fill(random(pb)); // sorteia preto ou branco
      rect(j, i, 6, 10); // desenha janelas grandes
      rect(j, i + 12.6, 6, 4); // desenha janelas pequenas
    }
  }
  for (var w = 305; w < 496; w = w + 8) {
    fill(255);
    stroke(255);
    rect(w, 58, 6, 42); // desenha janelas superiores
  }
  for (var l = 317; l < 485; l = l + 33) {
    stroke(0);
    strokeWeight(2);
    line(l, 30, l, 760); // desenha colunas verticais
    line(317, 30, 482, 30); // desenha coluna horizontal superior
  }
}

function calcada() { //padrão do chão da praça
  fill(0);
  noStroke();

  beginShape(); // padrão superior - preto
  vertex(370, 774);
  vertex(430, 774);
  vertex(430, 794);
  bezierVertex(430, 790, 405, 795, 405, 814);
  vertex(395, 814);
  bezierVertex(395, 795, 370, 790, 370, 794);
  endShape(CLOSE);

  beginShape(); // arco externo - preto
  vertex(310, 860);
  vertex(300, 860);
  bezierVertex(300, 735, 500, 735, 500, 860);
  vertex(490, 860);
  bezierVertex(490, 748, 310, 748, 310, 860);
  endShape();

  beginShape(); // ornamento de baixo
  vertex(405, 816);
  vertex(405, 820);
  vertex(430, 828);
  vertex(424, 834);
  vertex(405, 828);
  vertex(418, 840);
  vertex(412, 846);
  vertex(405, 840);
  vertex(406, 852);
  vertex(400, 858);
  vertex(394, 852);
  vertex(395, 840);
  vertex(388, 846);
  vertex(382, 840);
  vertex(395, 828);
  vertex(376, 834);
  vertex(370, 828);
  vertex(395, 820);
  vertex(395, 816);
  endShape(CLOSE);
}

function mappin() {
  fill(255);
  stroke(0);
  strokeWeight(1);

  rect(300, 600, 200, 160); // fundo
  for (var i = 638; i < 724; i += 28) { // divisão dos andares
    line(300, i, 500, i);
  }

  for (var j = 304.875; j < 500; j += 27.875) { // portas
    noStroke();
    fill(0);
    rect(j, 726, 23, 34);
  }

  for (var l = 306.875; l < 500; l += 27.875) { //janelas andares 1, 2 e 3
    for (var m = 642; m < 722; m += 28) {
      stroke(0);
      fill(255);
      rect(l, m, 19, 20);
      line(l, m + 5, l + 19, m + 5);
      line(l + 9.5, m + 5, l + 9.5, m + 15);
      fill(0);
      rect(l, m + 15, 19, 5);
    }
  }

  for (var o = 306.875; o < 500; o += 27.875) { // fundo janelas superiores
    rect(o, 610, 19, 21);
  }

  for (var p = 307.875; p < 495; p += 4) { // cobertura janelas superiores
    stroke(255);
    line(p, 610, p, 623);
  }

  stroke(0); // parte superior, blu star line
  line(300, 605, 500, 605);
  rect(360, 605, 80, 33);
  for (var q = 362; q < 440; q += 4) { // cobertura janelas superiores
    stroke(255);
    line(q, 603, q, 623);
  }

  textSize(18);
  textAlign(CENTER); // letreiro
  text("MAPPIN STORES", 401, 583);
  noFill();
  stroke(0);
  strokeWeight(1);
  beginShape(); // telhado
  vertex(300, 600);
  vertex(320, 580);
  vertex(340, 590);
  vertex(340, 584);
  vertex(360, 584);
  vertex(360, 590);
  vertex(440, 590);
  vertex(440, 584);
  vertex(460, 584);
  vertex(460, 590);
  vertex(480, 580);
  vertex(500, 600);
  endShape();
}

function igreja() { // igreja santo antonio
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(640, 710, 159, 100); // fundo
  line(640, 715, 799, 715);
  for (var i = 650; i < 799; i += 30) { // colunas verticais corpo do prédio
    rect(i, 715, 20, 95);
  }
  line(640, 755, 799, 755); // linhas horizontais no centro do corpo do prédio
  line(640, 760, 799, 760);
  line(640, 765, 799, 765);
  // torre central, de cima p baixo
  triangle(705, 621, 720, 600, 735, 621); // 1
  rect(700, 620, 40, 5); // 2
  rect(695, 625, 50, 5); // 3
  rect(700, 630, 40, 10); // 4
  rect(705, 632, 13, 6); // 5
  rect(722, 632, 13, 6);
  rect(695, 640, 50, 5); // 6
  rect(700, 645, 40, 50); // 7
  rect(700, 695, 40, 5); // 8
  rect(700, 700, 40, 10); // 9
  fill(0); // 10
  rect(705, 705, 30, 5);
  // base da torre - esq p dir
  rect(640, 705, 40, 5);
  rect(760, 705, 40, 5);
  fill(255);
  beginShape();
  vertex(680, 705);
  vertex(700, 680);
  vertex(700, 710);
  vertex(680, 710);
  endShape(CLOSE);
  beginShape();
  vertex(740, 680);
  vertex(760, 705);
  vertex(760, 710);
  vertex(740, 710);
  endShape(CLOSE);
  // portas
  fill(255);
  line(710, 740, 730, 740);
  rect(652, 720, 16, 35);
  rect(772, 720, 16, 35);
  for (var jX = 655; jX < 785; jX += 60) {
    for (var jY = 725; jY < 810; jY += 55) {
      rect(jX, jY, 10, 30);
    }
  }
  triangle(652, 720, 660, 715, 668, 720); //  triangulos em cima da porta
  triangle(772, 720, 780, 715, 788, 720);
  line(720, 780, 720, 810); // corte vertical da porta central
  rect(710, 650, 20, 45); // porta maior da torre
  rect(715, 660, 10, 35); // porta menor da torre
  line(700, 655, 740, 655);
  line(710, 685, 730, 685);
  line(720, 580, 720, 600); // cruz
  line(716, 585, 724, 585);
  fill(0);
  noStroke();
  ellipse(720.5, 593, 5, 5);
  fill(255); // janelas
  stroke(0);
  ellipse(690, 735, 8, 8); // janelas
  ellipse(750, 735, 8, 8);
  noFill();
  strokeWeight(1);
  beginShape();
  vertex(680, 730);
  vertex(685, 730);
  vertex(685, 725);
  vertex(695, 725);
  vertex(695, 730);
  vertex(700, 730);
  vertex(700, 740);
  vertex(695, 740);
  vertex(695, 745);
  vertex(685, 745);
  vertex(685, 740);
  vertex(680, 740);
  vertex(680, 730);
  endShape();
  beginShape(); // segunda janela
  vertex(740, 730);
  vertex(745, 730);
  vertex(745, 725);
  vertex(755, 725);
  vertex(755, 730);
  vertex(760, 730);
  vertex(760, 740);
  vertex(755, 740);
  vertex(755, 745);
  vertex(745, 745);
  vertex(745, 740);
  vertex(740, 740);
  vertex(740, 730);
  endShape();
  for (i = 640; i < 800; i += 30) {
    for (j = 765; j < 800; j += 3) {
      line(i, j, i + 10, j);
    }
  }
}

function calcados() {
  stroke(0);
  strokeWeight(1);
  fill(255);
  rect(620, 720, 135, 55); // fundo da loja baixa
  fill(0);
  rect(620, 730, 135, 45); // fundo preto
  fill(255);
  for (var i = 725; i < 770; i += 15) { // linhas horizontais
    rect(620, i, 135, 5);
  }
  rect(620, 760, 135, 5); // ultima linha horizontal
  rect(686, 725, 12, 55); // colunas verticais 1 e 2 
  rect(731, 725, 12, 55);
  for (var j = 620; j < 755; j += 45) {
    rect(j, 720, 12, 60); // colunas verticais maiores
    rect(j + 2, 718, 8, 49);
    rect(j + 4, 716, 4, 53);
    rect(j + 21, 725, 12, 35); // colunas verticais menores, reduzidas de 5 para 3
    rect(j + 23, 723, 8, 39);
    rect(j + 25, 721, 4, 43);
  }
  rect(755, 700, 44, 80); // loja alta (direita) - fundo 
  fill(0);
  rect(755, 700, 44, 70); // fundo preto
  rect(758, 773, 38, 7); // fundo do interior da loja
  for (i = 757; i < 798; i += 4) { // friso vertical
    stroke(255);
    strokeWeight(1);
    line(i, 760, i, 768);
  }
  for (j = 760; j < 798; j += 12) { // linhas verticais menores, 4
    strokeWeight(2);
    line(j, 705, j, 760);
  }
  fill(0); // retangulos horizontais pretos
  noStroke();
  rect(755, 720, 44, 4);
  rect(755, 740, 44, 4);
  for (j = 760; j < 798; j += 12) { // linhas verticais menores, 4
    strokeWeight(2);
    stroke(255);
    line(j + 6, 702, j + 6, 760); // linhas verticais maiores
  }
  for (var l = 710; l < 760; l += 5) { // linhas horizontais brancas
    strokeWeight(2);
    stroke(255);
    line(760, l, 795, l);
  }
}

function lutetia() {
  fill(255);
  stroke(0);
  strokeWeight(1);
  beginShape(); // último andar
  vertex(0, 590);
  vertex(30, 590);
  vertex(32, 592);
  vertex(38, 598);
  vertex(40, 598);
  vertex(40, 600);
  vertex(120, 600);
  vertex(160, 605);
  vertex(160, 620);
  vertex(0, 620);
  endShape(CLOSE);
  rect(0, 620, 160, 176); // corpo central
  fill(0);
  rect(10, 595, 10, 10); // ultima janela
  for (i = 0; i < 160; i += 3) { // friso
    line(i, 624, i, 632);
  }
  for (i = 10; i < 160; i += 40) { // janelas do corpo central
    for (j = 622; j < 770; j += 30) {
      rect(i, j, 10, 20); // janelas do corpor central
      line(i, j + 22, i + 10, j + 22); // adorno inferior das janelas do corpo central
      rect(i, 610, 10, 10); // janelas superiores
    }
  }
  line(40, 600, 40, 770); // linhas verticais
  line(120, 600, 120, 770);
  rect(0, 780, 160, 10); // fundo preto loja
  fill(255);
  rect(0, 793, 160, 3); // barra interna das lojas
  rect(0, 796, 140, 12); // retângulo interno da loja
  beginShape(); // canto
  vertex(150, 796);
  vertex(160, 796);
  vertex(160, 802);
  vertex(150, 808);
  endShape(CLOSE);
  for (i = 0; i < 160; i += 35) { // colunas das lojas
    rect(i, 780, 10, 30);
  }
  line(0, 770, 160, 770); // linhas horizontais acima das lojas
  line(0, 775, 160, 775);
  rect(0, 737, 160, 5); // retângulo em cima das primeiras janelas
  noFill();
  for (i = 48; i < 160; i += 40) { // linhas das janelas superiores
    rect(i, 608, 14, 14);
  }
  for (i = 710; i < 770; i += 32) {
    for (j = 5; j < 160; j += 20) {
      line(j, i, j, i + 10); // linha janela vertical
    }
  }
  for (j = 5; j < 160; j += 40) {
    line(j, 710, j + 20, 710); // linha janela horizontal
    line(j, 712, j + 20, 712);
  }
  line(120, 725, 160, 725); // sacada
  line(120, 730, 160, 730);
  for (i = 120; i < 160; i += 3) {
    line(i, 725, i, 737);
  }
  fill(0);
  rect(35, 642, 5, 95); // friso vertical
}

function esquinaQuitanda() {
  beginShape(); // corpo central
  vertex(120, 595);
  vertex(160, 580);
  vertex(180, 580);
  vertex(240, 595);
  vertex(240, 745);
  vertex(180, 760);
  vertex(160, 760);
  vertex(120, 745);
  endShape(CLOSE);
  for (i = 125; i < 235; i += 20) { // janelas portas
    fill(255);
    rect(i, 735, 10, 5);
    for (j = 600; j < 760; j += 28) {
      fill(0);
      rect(i, j, 10, 20);
    }
  }
  line(160, 580, 160, 760); // linhas verticais
  line(180, 580, 180, 760); // linhas verticais
  for (i = 620; i < 760; i += 28) { // linhas horizontais
    line(120, i, 240, i);
  }
  fill(255);
  noStroke();
  beginShape(); // corte inferior
  vertex(120, 745);
  vertex(120, 762);
  vertex(240, 762);
  vertex(240, 745);
  vertex(180, 760);
  vertex(160, 760);
  endShape(CLOSE)
  stroke(0);
  rect(160, 585, 20, 5); // pequenas horizontais
  rect(160, 590, 20, 5);
}

function lateralIguape() {
  fill(255);
  stroke(0);
  strokeWeight(1);
  beginShape();
  vertex(260, 745);
  vertex(280, 750);
  vertex(280, 610);
  vertex(260, 625);
  endShape(CLOSE);
  rect(280, 610, 20, 140);
}

function marisa() {
  strokeWeight(1);
  fill(255);
  stroke(0);
  beginShape(); // corpo central
  vertex(520, 700);
  vertex(570, 690);
  vertex(640, 700);
  vertex(640, 760);
  vertex(595, 770);
  vertex(545, 770);
  vertex(520, 760);
  endShape(CLOSE);
  line(520, 720, 570, 710); // barra superior
  line(570, 710, 640, 720);
  line(570, 690, 570, 710);
  rect(545, 720, 50, 10); // rect 2
  rect(550, 714, 40, 6); // rect 1
  rect(568, 716, 4, 4); // relogio
  line(520, 730, 545, 720); // linha 1
  line(520, 740, 545, 730); // linha 2
  line(595, 720, 640, 730); // linha 3
  line(595, 730, 640, 740); // linha 4
  line(545, 730, 545, 770); // linha 5
  line(595, 730, 595, 770); // linha 5
  fill(0);
  for (i = 525; i < 640; i += 25) { // portas
    rect(i, 740, 15, 30);
  }
  noStroke();
  fill(255);
  beginShape(); // recorte inferior
  vertex(520, 760);
  vertex(545, 770);
  vertex(595, 770);
  vertex(640, 760);
  vertex(640, 772);
  vertex(520, 772);
  endShape(CLOSE);
}

function othon() {
  fill(255);
  stroke(0);
  strokeWeight(1);
  beginShape(); // corpo central
  vertex(650, 198);
  vertex(710, 188);
  vertex(790, 188);
  vertex(790, 860);
  vertex(710, 860);
  vertex(650, 850);
  endShape(CLOSE);
  rect(790, 580, 9, 280); // lateral 1
  rect(790, 300, 4, 560); // lateral 2
  rect(645, 580, 5, 270); // lateral 3
  line(650, 776, 790, 776); // linha 1
  line(650, 790, 790, 790); // linha 2
  fill(0);
  for (i = 652; i < 790; i += 10) {
    rect(i, 776, 6, 10); // janelas 1
    rect(i, 800, 6, 60); //portas
  }
  strokeWeight(1);
  line(710, 188, 710, 860); // linha vertical central
  fill(255);
  noStroke();
  beginShape(); // recorte
  vertex(650, 850);
  vertex(710, 860);
  vertex(650, 860);
  endShape(CLOSE);
  stroke(0);
  strokeWeight(1);
  for (i = 652; i < 790; i += 10) { // janelas
    for (j = 208; j < 760; j += 27) // janelas
      rect(i, j, 6, 20);
  }
  line(650, 208, 790, 208); // linhas superiores
  line(650, 204, 790, 204);
}

function esquina() {
  fill(0);
  rect(90, 594, 20, 20); // caixa 0
  fill(255);
  beginShape(); // corpo central
  vertex(40, 580);
  vertex(60, 580);
  vertex(140, 622);
  vertex(140, 810);
  vertex(60, 860);
  vertex(40, 860);
  vertex(0, 810);
  vertex(0, 622);
  endShape(CLOSE);
  noFill();
  for (i = 4; i < 40; i += 10) { // janelas 01
    for (j = 656; j < 810; j += 28) {
      rect(i, j, 6, 24);
    }
  }
  for (i = 24; i < 100; i += 20) { // portas
    fill(255);
    rect(i, 830, 12, 30);
    fill(0);
    rect(i, 840, 12, 20);
    noFill();
  }
  for (j = 656; j < 810; j += 28) { // janelas centrais
    rect(44, j, 12, 24);
  }
  for (j = 656; j < 810; j += 28) { // janelas 2
    rect(60, j, 12, 24);
  }
  for (i = 76; i < 110; i += 10) { // janelas 03
    for (j = 656; j < 810; j += 28) {
      rect(i, j, 6, 24);
    }
  }
  for (j = 656; j < 810; j += 28) { // janelas 4
    rect(116, j, 18, 24);
  }
  line(10, 825, 120, 825); // linha horizontal 1
  line(40, 580, 40, 860); // verticais centrais
  line(60, 580, 60, 860);
  fill(255);
  noStroke();
  beginShape(); // recorte
  vertex(0, 810);
  vertex(40, 860);
  vertex(60, 860);
  vertex(140, 810);
  vertex(140, 861);
  vertex(0, 861);
  endShape(CLOSE);
  stroke(0);
  line(0, 650, 140, 650); // linhas 1
  line(0, 652, 140, 652);
  line(0, 622, 140, 622); // linhas 2
  line(0, 624, 140, 624);
  beginShape(); // janela A
  vertex(4, 635);
  vertex(7, 630);
  vertex(10, 630);
  vertex(10, 650);
  vertex(4, 650);
  endShape(CLOSE);
  beginShape(); // janela E
  vertex(76, 635);
  vertex(79, 630);
  vertex(82, 630);
  vertex(82, 650);
  vertex(76, 650);
  endShape(CLOSE);
  beginShape(); // janela B
  vertex(34, 630);
  vertex(37, 630);
  vertex(40, 635);
  vertex(40, 650);
  vertex(34, 650);
  endShape(CLOSE);
  beginShape(); // janela F
  vertex(106, 630);
  vertex(109, 630);
  vertex(112, 635);
  vertex(112, 650);
  vertex(106, 650);
  endShape(CLOSE);
  beginShape(); // janela C
  vertex(44, 635);
  vertex(47, 630);
  vertex(53, 630);
  vertex(56, 635);
  vertex(56, 650);
  vertex(44, 650);
  endShape(CLOSE);
  beginShape(); // janela D
  vertex(60, 635);
  vertex(63, 630);
  vertex(69, 630);
  vertex(72, 635);
  vertex(72, 650);
  vertex(60, 650);
  endShape(CLOSE);
  beginShape(); // janela G
  vertex(116, 635);
  vertex(119, 630);
  vertex(131, 630);
  vertex(134, 635);
  vertex(134, 650);
  vertex(116, 650);
  endShape(CLOSE);
  rect(14, 630, 6, 20); // janelas do penultimo andar
  rect(24, 630, 6, 20);
  rect(86, 630, 6, 20);
  rect(96, 630, 6, 20);
  rect(40, 583, 20, 3); // ornamentos superiores
  rect(43, 577, 14, 3);
  fill(0);
  rect(44, 602, 12, 20); // ultima janela
}

function outros() {
  stroke(0);
  strokeWeight(1);
  line(799, 780, 799, 860);
}

function pmr() { // paulo mendes da rocha
  //fill(255, 60, 41);
  fill(128);
  noStroke();
  rect(260, 710, 20, 100);
  rect(260, 710, 280, 20);
  rect(520, 710, 20, 100);
  rect(340, 710, 5, 40);
  rect(460, 710, 5, 40);
  beginShape();
  vertex(320, 750);
  vertex(480, 750);
  vertex(500, 790);
  vertex(300, 790);
  endShape(CLOSE);
}
