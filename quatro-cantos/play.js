function play() {
  calcada();
  for (var i = 0; i < pessoas.length; i++) {
    pessoas[i].update(); // movendo pessoas
    pessoas[i].plot(); // desenhando pessoas
    pessoas[i].segueMouse(); // seguir o mouse
  }
  marisa();
  outros();
  if (keyIsPressed && key === 'i') {
    calcados();
    igreja(); // desenhando igreja de santo antonio
    lateralIguape()
    esquinaQuitanda();
    lutetia();
    esquina();
  } else if (keyIsPressed && key == 'c') {
    calcados(); // desenhando os prédio de venda de calçados da esquina
    lateralIguape()
    esquinaQuitanda();
    lutetia();
    esquina();
  } else if (keyIsPressed && key == 'l') {
    calcados();
    igreja();
    othon();
    lateralIguape()
    esquinaQuitanda();
    lutetia();
  } else if (keyIsPressed && key == 'e') {
    calcados();
    igreja();
    othon();
    lateralIguape()
    esquinaQuitanda();
  } else {
    calcados();
    igreja();
    othon();
    lateralIguape()
    esquinaQuitanda();
    lutetia();
    esquina();
  }
  if (mouseX > 300 && mouseX < 500 && mouseY > 600 && mouseY < 760) {
    mappin(); // desenhando mappin
  } else {
    predio(); // ou barao de iguape atual 2017
    pmr();
  }
  ruaPlot();
  for (i = 0; i < carros.length; i++) {
    carros[i].carrosPlot(); // desenhando carros
    carros[i].carrosUp();
    carrosB[i].carrosPlot(); // desenhando carros
    carrosB[i].carrosUp();
  }
  for (var j = nuvens.length - 1; j >= 0; j--) {
    nuvens[j].update(); // movendo nuvens
    nuvens[j].desenhaNuvem(); // desenhando nuvens
    if (nuvens[j].desapareceu()) { // tirando nuvens no céu
      nuvens.splice(j, 1);
    }
  }
  
}
