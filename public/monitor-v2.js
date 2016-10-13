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
  background(0);
  song.loop();
  song_b.loop();

  analyzer = new p5.Amplitude();
  analyzer.setInput(song);

  analyzer_b = new p5.Amplitude();
  analyzer_b.setInput(song_b);
}

function draw(){

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

  fill(255,255,255,255);
  ellipse(windowWidth/4,windowHeight/2,leftDiameter);

  var rms = analyzer.getLevel();
  var rms_b = analyzer_b.getLevel();

  overwriteWaveform();
  makeWaveform(rms);
  makeWaveform_b(rms_b);



  reduceTargets();
  song.setVolume(vol);
  song_b.setVolume(vol_b);
  reduceSound();
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
  vol = 1;
  vol_b = 1;
}

function makeWaveform(x) {
  stroke(255,255,255,255);
  strokeWeight(1);
  line(canvas.width/2,frameCount%windowHeight,canvas.width/2+x*200,frameCount%windowHeight);
}

function makeWaveform_b(x) {
  stroke(255,255,255,255);
  strokeWeight(1);
  line(canvas.width/2,frameCount%windowHeight,canvas.width/2-x*200,frameCount%windowHeight);
}

function overwriteWaveform() {
  stroke(0,0,0,255);
  strokeWeight(1);
  line(0,frameCount%windowHeight+2,canvas.width/4,frameCount%windowHeight+2);
}

function makeIndicator(y) {
  fill(255,255,255,255);
  rect(windowWidth/2+windowWidth/4+100,100,50,y*10);
  console.log(y*10);
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
