// Liqian Zhang
// Creative Coding W11 Arduino & p5js communication
// using arduino button, photocell and potentiometer to control my w4 sketch - csgo aimlab. 
// My map size was hard coded into 600, 800; which doesn't fit in all device. 
// In order to compatiable for all device, I set it to windowWidth and windowHeight.
// references: Creative coding w11 class demo, serial pot example.
// references: https://itp.nyu.edu/physcomp/labs/labs-serial-communication/two-way-duplex-serial-communication-using-p5js/
// background image & arm image from in game screenshot

let crosshairArray = []
let enemiesArray = []
let enemies = []
let shapeArray = []
let sqenemiesArray = []
let arm;
let aimMap;
let isMoving = false;
let isMovingHard = false;
let isMovingMedium = false;
let isMovingEasy = false;

// ----- loading map, arm
function preload(){
  arm = loadImage('images/arm.png')
  aimMap = loadImage('images/background.png')
  // instruction = createImg('images/instruction.jpg')

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);       // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing

  serial.list();                      // list the serial ports
  serial.openPort(portName);              // open a serial port

  
  // ----- randomly create 2 different shapes of enemies
  for(let i = 0; i < 20; i++){
    enemiesArray.push(new Enemies(random(50, windowWidth - 350), random(150, windowHeight - 180), this.r)) 
  }
  for(let g = 0; g < 15; g++){
    sqenemiesArray.push(new Sqenemies(random(50, windowWidth - 350), random(150, windowHeight - 180), this.w, this.h))
  }
  // ----- creating a instruction for user to follow on the right of the canvas.
  instruction = createImg('images/instruction.jpg')
  instruction.position(windowWidth - 300, 10)
  instruction.size(300, windowHeight - 100)
}



function draw() {
  background(200);
  // ----- drawing background map
  rectMode(CENTER)
  image(aimMap, 0, 0, windowWidth, windowHeight)
  // ----- display current mode
  textSize(25);
  text("Current Mode: " + mode[j], 20, 60);

  // ----- create enemies
  for(let i = 0; i < enemiesArray.length; i++){
    enemiesArray[i].display()
    if(isMoving){
    enemiesArray[i].move()
    
    }
   }
  

  for(let g = 0; g < sqenemiesArray.length; g++){
    sqenemiesArray[g].display()
    if(isMoving){
      sqenemiesArray[g].move()
      }
   }
    
  createCrosshair()

  if(isFired){
    fired();
  }
  // console.log(isFired)
  if(isReset){
    reSet()
    textSize(18)
    text("Resetting.. " , 20, 80);

  }
}

