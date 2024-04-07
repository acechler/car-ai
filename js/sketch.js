// reference: https://p5js.org/examples/objects-car-instances.html

class Car {
  /* Constructor expects parameters for
  fill color, x and y coordinates that
  will be used to initialize class properties.
  */
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

  start(speed) { // method expects parameter!
    this.speed = speed;
  }

  display() { // method!
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  move() { // method!
    this.x += this.speed;
    // Wrap x around boundaries
    if (this.x < -20) {
      this.x = width;
    } else if (this.x > width) {
      this.x = -20;
    }
  }
} //end class Car


let rav4;



function setup() {
  createCanvas(200, 400);
  /* Construct the 3 Cars */
  //constructor expects cColor, x, y
  rav4 = new Car("silver", 100, 300);

  
  console.log("rav4", rav4);

  
  //call start methods of Car instances
  //the start method expects a number for speed
  rav4.start(2.3);

}

function draw() {
  background("beige");
  
  rav4.display();
  rav4.move();

}

