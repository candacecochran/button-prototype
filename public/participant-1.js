var t = 0;

function setup(){
  createCanvas(750, 1334);
  background(0);
  console.log("Ready to listen to Input -->");
}

function draw(){
  background(0);

  ellipse(touchX, touchY, 50, 50);
}

function touchStarted() {
  ellipse(touchX, touchY, 5, 5);
  httpGet('/trigger_1');
  t = 1;
}
