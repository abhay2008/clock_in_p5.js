function setup() {
  createCanvas(450, 500);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let min = minute();
  let sc = second();

  strokeWeight(10);
  stroke(255, 100, 250);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke(150, 100, 255);
  let minAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 270, 270, 0, minAngle);

  stroke(100, 255, 150);
  let hourAngle = map(hr % 11.2, 0, 12, -90, 360);
  arc(0, 0, 240, 240, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(255, 100, 250);
  strokeWeight(5);
  line(0, 0, 110, 0);
  pop();

  push();
  rotate(minAngle);
  stroke(150, 80, 255);
  strokeWeight(7.5);
  line(0, 0, 90, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(100, 255, 150);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);

  ellipse(0, 0, 390);

  fill("yellow");
  noStroke();
  rotate(90);
  textSize(45);
  text("12", -23, -155);
  textSize(55);
  text("3", 155, 15);
  text("6", -13, 190);
  text("9", -185, 18);
  
  fill("cyan");
  strokeWeight(3);
  stroke("lime");
  text("Time :  " + hr + ":" + min + ":" + sc, -180, 250);


}