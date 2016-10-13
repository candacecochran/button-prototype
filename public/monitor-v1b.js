var socket = io('/mike-v');
var message_state = 0;          // Each of these defines a global variables that will be referenced later
var rightDiameter = 0;
var leftDiameter = 0;
var indBool = 0;
var trans = 255;
var vol = 0;
var vol_b = 0;
var trans = 0;
var x = 20;
var r = 255;
var g = 255;
var b = 255;
var analyzer;
var analyzer_b;
var i = 0;

function preload() {  // preload() runs once
  song = loadSound('sound/work.mp3');
  song_b = loadSound('sound/have.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  song.loop();
  song_b.loop();

  analyzer = new p5.Amplitude();
  analyzer.setInput(song);

  analyzer_b = new p5.Amplitude();
  analyzer_b.setInput(song_b);
}

function draw(){
  background(0);
  if(message_state==0){         // checks to see if triggers have been pressed
  }
  else if(message_state==1){    //if trigger 1 is pressed, executes code within
    if(leftDiameter<100) {                // makes sure circle doesn't get bigger than 100%
      leftDiameter = leftDiameter+3;
      if(rightDiameter>10) {
        rightDiameter = rightDiameter - 5;
      }    // adds 10 to the diameter of the circle
    }

    message_state = 2;                    // resets message state variable so no more is added to diameter
  }
  else if(message_state==2){
  }
  else if(message_state==3) {             // if trigger 2 is pressed, executes code within
    if(rightDiameter<100) {
      rightDiameter = rightDiameter+3;
      if(leftDiameter>10) {
        leftDiameter = leftDiameter - 5;
      }
    }

    message_state = 4;
  }
  else {
  }


  makeIndicator(leftDiameter);
  makeIndicator_b(rightDiameter);

  reduceTargets();
  song.setVolume(vol);
  song_b.setVolume(vol_b);
  reduceSound();
}

function reduceTargets() {
  if (rightDiameter>0){                                                 // verifies circle diameter is not a negative number
    rightDiameter = rightDiameter-.9;                                 // subtracts .7 from circle diameter
  }

  if (leftDiameter>0){
    leftDiameter = leftDiameter-.9;
  }
  else {
  }
}

function reduceSound() {
  vol = leftDiameter/100;
  vol_b = rightDiameter/100;
}


function makeIndicator(y) {
  if(y<windowHeight) {
    fill(0,0,255,255);
    rect(0,0,windowWidth/2,y*10);
    console.log(y*10);
  }
}

function makeIndicator_b(y) {
  if(y<windowHeight) {
    fill(255,0,0,255);
    rect(windowWidth/2,0,windowWidth/2,y*10);
    console.log(y*10);
  }
}


socket.on('trigger_1', function(){                                    // listens for trigger, and redefines message_state variable
  console.log("trigger 1 listener fired");
  message_state=1;
  trans = 255;                 // redefines ring transparency
  x = 20;                      // redefines ellipse diameter
  r = 255 - random(100,200);   //randomize RGB value for every ring
  g = 255 - random(200,255);
  b = 255 - random(1,255);
})

socket.on('trigger_2', function(){
  console.log("trigger 2 listener fired");
  message_state=3;
})

function windowResized() {                                            // resizes canvas to fill entire browser window
  resizeCanvas(windowWidth, windowHeight);
}
