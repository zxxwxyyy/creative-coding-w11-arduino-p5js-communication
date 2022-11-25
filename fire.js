// ----- fire！and eliminate terrorists
// ----- changing mouseX, mouseY to posX, posY so that user can use the potentiometer as mouse to aim, and use the fire button to shoot.
  function fired(){
    for (let i = enemiesArray.length - 1; i >= 0; i--) {
      if (enemiesArray[i].contains(posX, posY)) {
        enemiesArray.splice(i, 1);
      }
    }
    for (let g = sqenemiesArray.length - 1; g >= 0; g--) {
      if (sqenemiesArray[g].contains(posX, posY)) {
        sqenemiesArray.splice(g, 1);
      }
    }
  }
