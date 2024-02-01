let ricardo;

let smallPoint, largePoint;

function preload () {
  ricardo = loadImage('ricardo.jpg');
}

function setup() {
 // put setup code here

  createCanvas(1136, 852);
  smallPoint = 4;
  largePoint = 20;
  imageMode(CENTER);
  noStroke();
  background(255);
  ricardo.loadPixels();
}

function draw() {
  // put drawing code here

  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let y = floor(random(ricardo.height));
  let x = floor(random(ricardo.width));
  let pix = ricardo.get(x, y);
  fill(pix, 128);
  ellipse(x, y, pointillize, pointillize);
}
