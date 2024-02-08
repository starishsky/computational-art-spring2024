let x, y;
let r, g, b;

function setup(){
  createCanvas(1280,720);
  background(0);
}

function draw() {
  let noiseLevel = 255;
  let noiseScale = 0.009;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      // Scale input coordinates.
      let nx = noiseScale * x;
      let ny = noiseScale * y;
      let nt = noiseScale * frameCount;
      // Compute noise value.
      let c = noiseLevel * noise(nx, ny, nt);
      // Render.
      stroke(c);
      point(x, y);
    }
  }

}