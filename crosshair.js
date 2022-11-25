function createCrosshair(){
// drawing Crosshair and arm
  image(arm, posX - 210, windowHeight - 700, 700, 700)
  fill(173,255,47)
  rect(posX + 10, posY, 12, 6)
  rect(posX, posY + 10, 6, 12)
  rect(posX - 10, posY, 12, 6)
  rect(posX, posY - 10, 6, 12)
}
