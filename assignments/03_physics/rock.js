class Rock {

    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.r = 16;
      }
      
    
      applyForce(force) {
        this.acc.add(force);
      }

    
      update() {
    
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
      }
    
      show() {
        image (rock1, this.pos.x, this.pos.y, 50, 50);
      }
    }
