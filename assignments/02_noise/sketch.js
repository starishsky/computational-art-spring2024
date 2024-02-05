let x, y;
let r, g, b;

function setup(){
  createCanvas(1280,720);
  background(0);
}

function draw(){
  if (mouseIsPressed){
    r = random(0,255);
    g = 5
    b = random(0,255);
    x = random(0,1280);
    y = random(0,720);
    ellipse(x,y,50,50);
    fill(r,g,b, 100);
    noStroke();
    circle(x, y, 24)
  }

}