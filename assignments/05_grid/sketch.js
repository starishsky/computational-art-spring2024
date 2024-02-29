let gridSize = 10;
let numCols, numRows;
let noiseValue;
let diameter;

let colorGrid = [];


function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);

  numCols = width / gridSize;
  numRows = height / gridSize;
  
  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      const x = col * gridSize;
      const y = row * gridSize;

      //constants are like lets but they aren't reassigned
      
      noiseValue = noise(col * 0.1, row * 0.1);
      
      diameter = gridSize * (1 + sin(noiseValue * TWO_PI));
      //2pi is pi2 and used for sine to be twice the ratio of circ to dia
      //also this makes the diameter follow the grid size along a sine curve and apply a noise value and blah blah
      
      ellipse(x, y, diameter, diameter);
      noStroke();
      

      fill(random(255), random(255), random(255));
    }
  }
}

