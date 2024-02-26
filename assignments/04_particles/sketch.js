let emitter;
let img;

// p5.min.js:2 TypeError: Failed to fetch
//     at O.default.loadImage (p5.min.js:2:634945)
//     at p5.min.js:2:462044
//     at preload (sketch.js:6:11)
//     at g._start (p5.min.js:2:461207)
//     at new g (p5.min.js:2:465605)
//     at p5.min.js:2:451631

// i don't know what this means but i do know it's
//really super annoying when it comes to the live server update

function preload(){
    img = loadImage('howl.png');
}

function setup(){
    createCanvas(1920, 1040);
    
    emitter = new Emitter(1050, 400);
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