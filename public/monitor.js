var socket = io('http://127.0.0.1:8081');
var message_state = 0;
var rightDiameter = 0;
var leftDiameter = 0;
var indBool = 0;
var trans = 255;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw(){

  background(0);

  if(message_state==0){
    console.log('zero');
  }
  else if(message_state==1){
    if(leftDiameter<100) {
      leftDiameter = leftDiameter+10;
    }

    message_state = 2;
  }
  else if(message_state==2){
    console.log('reset');
  }
  else if(message_state==3) {
    if(rightDiameter<100) {
      rightDiameter = rightDiameter+10;
    }

    message_state = 4;
  }
  else {
    console.log('reset');
  }

  fill(255,255,255);
  rect(0,0,windowWidth/2,windowHeight);

  ellipse(windowWidth/2+windowWidth/4,windowHeight/2,rightDiameter);
  fill(0,0,0,255);
  ellipse(windowWidth/2-windowWidth/4,windowHeight/2,leftDiameter);

  textSize(24);
  textStyle(BOLD);
  fill(255,255,255);
  text("TEAM 1", windowWidth/2+windowWidth/4-50, windowHeight-100, 300, 100);
  fill(0);
  text("TEAM 2", windowWidth/2-windowWidth/4-50, windowHeight-100, 300, 100);

  reduceTargets();
}

function reduceTargets() {
  if (rightDiameter>0){
    rightDiameter = rightDiameter-.7;
  }
  else {
    console.log('void');
  }

  if (leftDiameter>0){
    leftDiameter = leftDiameter-.7;
  }
  else {
    console.log('void');
  }
}

socket.on('trigger_1', function(){
  console.log("trigger 1 listener fired");
  message_state=1;
})

socket.on('trigger_2', function(){
  console.log("trigger 2 listener fired");
  message_state=3;
})

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
