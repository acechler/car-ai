let car;

function setup() {
  createCanvas(800, 800);
  car = new Car(100, 100, 50, 30); // Initialize car
}

function draw() {
  background(100); // Clear the canvas
  fill(255, 0, 0);
  car.update();
  car.draw(); // Draw the car

}


function keyPressed() {
    switch (keyCode) {
      case LEFT_ARROW:
        car.controls.left = true;
        break;
      case RIGHT_ARROW:
        car.controls.right = true;
        break;
      case UP_ARROW:
        car.controls.forward = true;
        break;
      case DOWN_ARROW:
        car.controls.reverse = true;
        break;
    }
    console.table(car);
  }
  
  function keyReleased() {
    switch (keyCode) {
      case LEFT_ARROW:
        car.controls.left = false;
        break;
      case RIGHT_ARROW:
        car.controls.right = false;
        break;
      case UP_ARROW:
        car.controls.forward = false;
        break;
      case DOWN_ARROW:
        car.controls.reverse = false;
        break;
    }
    

  }