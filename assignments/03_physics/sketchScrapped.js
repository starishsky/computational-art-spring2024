let fish1;
let fish2;
let shark;
let fishflakes;

var fishX = 0;
var fishY = random(370, 600);

let rocks = [];

function preload(){
  fish1 = loadImage('fish1.png');
  fish2 = loadImage('fish2.png');
  shark = loadImage('shark.png');
  fishflakes = loadImage('fishflakes.png');

  rock1 = loadImage('rock1.png');
  rock2 = loadImage('rock2.png');
  rock3 = loadImage('rock3.png');
  // rocks = [rock1, rock2, rock3];
}

function setup(){
  createCanvas(1280, 720);

  background (250);
}

function draw() {
  background (250);

  //fishes
  fishX = fishX + 5;
  image(fish1, fishX, 370, 75, 75);
  image(fish2, fishX * 1.5, 600, 75, 75);
  image(shark, fishX * 10, 500, 90, 90);

  if (fishX > width){
    fishX = 0;
  }

  // image(rock1, mouseX, mouseY, 50, 50);

  mouseClicked();
  
  water();

}

function mouseClicked() {
  if (mouseIsPressed){
    rocks.push(new Rock(mouseX, mouseY));
  }
}

function water(){
  noStroke();
  fill(161, 213, 255, 100);
  rect(0, height/2, width, height/2);
}


