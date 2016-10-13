var socket = io('/mike-v');

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  strokeWeight(0);
  fill(244,66,66,255);
  rect(0,0,windowWidth/2,windowHeight);

  fill(237,45,45,255);
  rect(windowWidth/2,0,windowWidth/2,windowHeight);

  fill(255,255,255,255);
  textSize(150);
  text("1",windowWidth/6,windowHeight/2);

  fill(255,255,255,255);
  textSize(150);
  text("2",windowWidth/2+windowWidth/6,windowHeight/2);

  fill(0,0,0,195);
  rect(0, windowHeight-windowHeight/10, windowWidth, windowHeight/10);

  fill(255);
  textSize(32);
  text("Choose your team!",windowWidth/8,windowHeight-15);
}

function touchStarted() {
  if(touchX<windowWidth/2) {
    location.href = 'participant-1.html'
  }
  else {
    location.href = 'participant-2.html'
  }
}


function windowResized() {                                            // resizes canvas to fill entire browser window
  resizeCanvas(windowWidth, windowHeight);
}
