var t = 0;
var trans = 0;
var x = 20;
var r = 255;
var g = 255;
var b = 255;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  console.log("Ready to listen to Input -->");
}

function draw(){
  background(0);

  fill(255,255,255,0)
  strokeWeight(5);
  stroke(r,g,b,trans)
  ellipse(touchX, touchY, x, x);

  x = x + 5;
  trans = trans - 9;
}

function touchStarted() {
  ellipse(touchX, touchY, 5, 5);
  httpGet('/trigger_1');
  trans = 255;
  x = 20;
  r = 255 - random(100,200);
  g = 255 - random(200,255);
  b = 255 - random(1,255);
}

function deviceMoved() {
  setMoveThreshold(5);
  httpGet('/trigger_1');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
