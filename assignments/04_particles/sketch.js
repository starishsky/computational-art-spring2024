//apparently you can put all the variables in a big list like this. who knew.
var mousePos,
    pos,
    target,
    vel,
    ctx,
    rad,
    drag,
    speed;

let colorArray;
let ellipseColor;

function setup() {
  createCanvas(windowWidth, windowHeight);  


  noStroke();
  background(16, 21, 30); 
  
  mousePos = createVector(0,0);
  pos = createVector(0,0);
  target = createVector(0,0);
  vel = createVector(0,0);
  
  drag = 0.5
  strength = 0.15;
  //^^spring strength... maybe make this a dial later???
  
  r = 100; 
}

function draw() {
  background(0);  
    
  mousePos.set(mouseX, mouseY);
  target = mousePos;

  var force = p5.Vector.sub(target, pos);
  force = force.mult(strength);
  vel = vel.mult(drag);
  vel = vel.add(force);  
  pos = pos.add(vel);

  let colorArray = [color(255, 0, 255), color(0, 255, 255), color(255, 255, 0)];
  let ellipseColor = random(colorArray);
  
  fill(ellipseColor);
  ellipse(pos.x, pos.y, r);
}