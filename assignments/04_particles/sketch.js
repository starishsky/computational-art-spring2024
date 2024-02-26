let emitter;
let img;


function preload(){
    img = loadImage('howl.png');
}

function setup(){
    createCanvas(1920, 1040);
    
    emitter = new Emitter(width / 2, height / 2);
}

function draw(){
    image(img,0,0);
    // background(0);
    let force = createVector(0, 0.03);
    emitter.applyForce(force);
    emitter.emit(1);
    emitter.update();
    emitter.show();
}