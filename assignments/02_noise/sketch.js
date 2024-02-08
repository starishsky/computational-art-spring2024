let leon;

let particles = [];
const num = 2000;

const noiseScale = 0.01;

function preload(){
  leon = loadImage('leon.png')
}
function setup(){
  createCanvas(2400,3000);
  // colorMode(RGB, 100);
  
  for(let i = 0; i < num; i++){
    particles.push(createVector(random(width), random(height)));
  }
  stroke(0);
  strokeWeight(2);
}

function draw() {
  
  background(92, 19, 19);
  
  //thing that shows the particles on the screen
  for(let i = 0; i < num; i++){
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    //math that makes particles move
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)){
      p.set(random(width), random(height));
    }
  }
  image (leon, 0, 0);
  }

  //changes noise seed with mouse click
  function mouseReleased(){
    noiseSeed(millis());
  }
  function onScreen(v) {
    return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
  }