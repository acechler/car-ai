 class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.speed = 0;
    this.acceleration = 0.2;
    this.maxSpeed = 3;
    this.friction = 0.05;
    this.angle = 0;

    this.controls = new Controls();
  }

  update() {
    this.move();
  }

  move() {
    //console.groupCollapsed('pie data');
    //console.dir(data);
    //console.table(data);
    //console.groupEnd();

    //console.assert(data.length === 11, {pieCount: data.length, reason: 'Wrong number of pies'});

    if (this.controls.forward) {
      this.speed += this.acceleration;
    }
    if (this.controls.reverse) {
      this.speed -= this.acceleration;
    }

    // Speed adjustments
    this.speed = constrain(this.speed, -this.maxSpeed / 2, this.maxSpeed);
    // Apply friction
    if (this.speed > 0) {
      this.speed -= this.friction;
    } else if (this.speed < 0) {
      this.speed += this.friction;
    }
    // Stop the car if speed is too low
    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }

    // Turning
    if (this.speed !== 0) {
      const flip = this.speed > 0 ? 1 : -1;
      if (this.controls.left) {
        this.angle += 0.03 * flip;
      }
      if (this.controls.right) {
        this.angle -= 0.03 * flip;
      }
    }

    this.x += Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
  }

  draw() {
    push(); // Save the current drawing state
    translate(this.x, this.y); // Move to the car's position
    rotate(-this.angle); // Rotate to the car's angle
    rectMode(CENTER);
    rect(0, 0, this.width, this.height); // Draw the car
    pop(); // Restore the drawing state
  }
} 

