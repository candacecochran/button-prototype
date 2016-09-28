
var socket = io('https://localhost');    //http://socket.io/docs/

var message_state = 0;
var rightDiameter = 0;
var leftDiameter = 0;
var indBool = 0;

function setup(){
  createCanvas(700, 500);
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

  ellipse(400,200,rightDiameter);
  ellipse(200,200,leftDiameter);

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
