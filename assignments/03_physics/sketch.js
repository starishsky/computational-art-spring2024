let fish1;
let fish2;
let shark;


function preload(){
  fish1 = loadImage('fish1.png');
  fish2 = loadImage('fish2.png');
  shark = loadImage('shark.png');
}


function setup(){
  createCanvas(1280, 720);
  background (250);
  
}

function draw() {
  // noStroke();
  fill(360, 60, 100, 0.5);
  rect(0, height/2, width, height/2);
}