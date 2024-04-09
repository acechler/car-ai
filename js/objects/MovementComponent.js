class MovementComponent extends IMovable{

    constructor(velocity, acceleration){
        this.velocity = velocity;
        this.acceleration = acceleration;
    }

    applyForce(){
        console.log('apply force');
    }

    update(){
        console.log('update');
    }

    move(direction){
        console.log('move');
    }
}