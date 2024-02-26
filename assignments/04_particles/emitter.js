class Emitter {
    constructor(x, y,){
        this.position = createVector(x, y);
        this.particles = [];
    }

    emit(num){
        for(let i = 0; i < num; i++){
            this.particles.push(new Particle(this.position.x, this.position.y));
        }
    }

    applyForce(force){
        for(let particle of this.particles){
            particle.applyForce(force);
        }
    }
    update(){
        for(let particle of this.particles){
            particle.update();
        }
    }

    show(){
        for(let particle of this.particles){
            particle.show();
        }
        this.particles = this.particles.filter(particle => !particle.finished());
    }
}