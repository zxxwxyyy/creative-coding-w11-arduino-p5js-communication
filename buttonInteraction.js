// ----- functions for button interaction

// ----- enemies moving mode/in different speed
// function moveEnemies(){
//   isMoving = !isMoving
//   isMovingMedium = false;
//   isMovingHard = false;
//   isMovingEasy = false;
// }

// function moveModeHard(){
//   isMovingHard = !isMovingHard
//   isMoving = false;
//   isMovingEasy = false;
//   isMovingMedium = false;
// }

// function moveModeMedium(){
//   isMovingMedium = !isMovingMedium
//   isMoving = false;
//   isMovingHard = false;
//   isMovingEasy = false;
// }

// function moveModeEasy(){
//   isMovingEasy = !isMovingEasy
//   isMoving = false;
//   isMovingMedium = false;
//   isMovingHard = false;
// }

// function pause(){
//   isMovingEasy = false
//   isMoving = false;
//   isMovingMedium = false;
//   isMovingHard = false;
// }

// ----- create new enemies
   function newEnemies(){
    for(let i = 0; i < 3; i++){
      enemiesArray.push(new Enemies(random(50, 750), random(150, 420), this.r)) 
      }
    
     
    for(let g = 0; g < 3; g++){
        sqenemiesArray.push(new Sqenemies(random(50, 700), random(200, 420), this.w, this.h))
      }

      isMovingEasy = false
      isMoving = false;
      isMovingMedium = false;
      isMovingHard = false;
  }

// ----- reset the map, using splice function to splice existing enemies them push new.
  function reSet(){
    for(let i = 0; i < 20; i++){
      enemiesArray.splice(i, 20)
      enemiesArray.push(new Enemies(random(50, windowWidth - 350), random(150, windowHeight - 180), this.r)) 
    }
    for(let g = 0; g < 15; g++){
      sqenemiesArray.splice(g, 15)
      sqenemiesArray.push(new Sqenemies(random(50, windowWidth - 350), random(150, windowHeight - 180), this.w, this.h))
    }
    j = 0
    // isMovingEasy = false
    isMoving = false;
    // isMovingMedium = false;
    // isMovingHard = false;
  }
  
  