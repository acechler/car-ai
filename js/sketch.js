// reference: https://p5js.org/examples/objects-car-instances.html


class Car {

  constructor(cColor, x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 10;

    this.color = cColor;
    this.doors = 4;
    this.isConvertible = false;
    this.speed = 0;
  }

  start(speed) {
    this.speed = speed;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  move() {
    // Wrap x around boundaries
    if (this.x < -20) {
      this.x = width;
    } else if (this.x > width) {
      this.x = -20;
    }

    if (this.y < -20) {
      this.y = height;
    } else if (this.y > height) {
      this.y = -20;
    }

    switch (keyCode) {
      case 68: // D key
        this.x += this.speed;
        break;
      case 65: // A key
        this.x -= this.speed;
        break;
      case 87: // W key
        this.y -= this.speed;
        break;
      case 83: // S key
        this.y += this.speed;
        break;
    }
  }
} //end class Car

let rav4;

function setup() {
  createCanvas(800, 800);
  rav4 = new Car("silver", 100, 300);

  console.log("rav4", rav4);


  rav4.start(2.3);
}

function draw() {
  background("beige");

  rav4.display();
  rav4.move();
  //console.table(rav4);
}
