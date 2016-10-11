
var vol = 1.0;

function preload() {  // preload() runs once
  song = loadSound('sound/uptown.mp3');
}

function setup() {
  createCanvas(720, 200);
  background(255,0,0);
  song.play();
}

function mousePressed() {
  if (mouseX<windowWidth/2) {
    masterVolume(0.2,1.0);
  }else if (mouseX>windowWidth/2){
    masterVolume(1.0);
  }
}
