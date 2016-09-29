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

  fill(255,255,255,0)         // create an invisible ellipse
  strokeWeight(5);            // defines thickness of ring
  stroke(r,g,b,trans)         // creates visible ring around ellipse
  ellipse(touchX, touchY, x, x);

  x = x + 5;
  trans = trans - 9;
}

function touchStarted() {      // detects user touching screen
  httpGet('/trigger_1');       // sends trigger to server
  trans = 255;                 // redefines ring transparency
  x = 20;                      // redefines ellipse diameter
  r = 255 - random(100,200);   //randomize RGB value for every ring
  g = 255 - random(200,255);
  b = 255 - random(1,255);
}

function deviceShaken() {
  httpGet('/trigger_1');
}

function windowResized() {      // resizes canvas to fit window
  resizeCanvas(windowWidth, windowHeight);
}
