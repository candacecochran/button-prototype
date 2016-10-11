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

function preload() {  // preload() runs once
  song = loadSound('sound/work.mp3');
  song_b = loadSound('sound/have.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  song.loop();
  song_b.loop();
}

function draw(){

  background(0);                // sets page background black

  if(message_state==0){         // checks to see if triggers have been pressed
  }
  else if(message_state==1){    //if trigger 1 is pressed, executes code within
    if(leftDiameter<100) {                // makes sure circle doesn't get bigger than 100%
      leftDiameter = leftDiameter+10;
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
      rightDiameter = rightDiameter+10;
      if(leftDiameter>10) {
        leftDiameter = leftDiameter - 5;
      }
    }

    message_state = 4;
  }
  else {
  }

  fill(255,255,255);
  rect(0,0,windowWidth/2,windowHeight);   // creates white half of screen

  ellipse(windowWidth/2+windowWidth/4,windowHeight/2,rightDiameter);    // creates right circle
  fill(0,0,0,255);                                                      // sets color to black
  ellipse(windowWidth/2-windowWidth/4,windowHeight/2,leftDiameter);     // creates left circle

  textSize(24);                                                         // creates labels
  textStyle(BOLD);
  fill(255,255,255);
  text("TEAM 2", windowWidth/2+windowWidth/4-50, windowHeight-100, 300, 100);
  fill(0);
  text("TEAM 1", windowWidth/2-windowWidth/4-50, windowHeight-100, 300, 100);

  reduceTargets();
  song.setVolume(vol);
  song_b.setVolume(vol_b);
  reduceSound();

  fill(255,255,255,0)         // create an invisible ellipse
  strokeWeight(5);            // defines thickness of ring
  stroke(r,g,b,trans)         // creates visible ring around ellipse
  ellipse(random(50,windowWidth/2), random(50,windowHeight), x, x);

  x = x + 5;
  trans = trans - 9;                                                    // calls function that shrinks circles when no triggers are touched
}

function reduceTargets() {
  if (rightDiameter>0){                                                 // verifies circle diameter is not a negative number
    rightDiameter = rightDiameter-.7;                                 // subtracts .7 from circle diameter
  }

  if (leftDiameter>0){
    leftDiameter = leftDiameter-.7;
  }
  else {
  }
}

function reduceSound() {
  vol = leftDiameter/100;
  vol_b = rightDiameter/100;
  console.log(vol);
  console.log("vol_b: ",vol);
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
