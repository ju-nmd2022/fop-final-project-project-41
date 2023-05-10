/*background(107, 142, 35);

let roadsX = 200;
let roadsY = 200;

let hayX = 600;
let hayY = -438;
let hayS = 1;

let tractorX = 500;
let tractorY = 110;
let tractorS = 0.6;

function roads() {
  push();
  stroke(244, 204, 140);
  strokeWeight(50);
  line(roadsX - 200, roadsY, roadsX + 400, roadsY + 100);
  line(roadsX - 200, roadsY - 200, roadsX + 400, roadsY - 100);
  line(roadsX - 200, roadsY - 400, roadsX + 400, roadsY - 300);
  stroke(135, 206, 250);
  line(roadsX - 200, roadsY - 600, roadsX + 400, roadsY - 500);
  pop();
}

function hay() {
  // HAY FLOATING IN WATER
  push();
  fill(244, 204, 140);
  strokeWeight(2);
  rect(hayX + hayS, hayY + hayS, 200 * hayS, 100 * hayS, 10);
  line(hayX + hayS, hayY + 85 * hayS, hayX + 200 * hayS, hayY + 85 * hayS);
  pop();
  //ropes
  push();
  stroke(139, 69, 19);
  strokeWeight(10);
  line(hayX + 60 * hayS, hayY + hayS, hayX + 60 * hayS, hayY + 85 * hayS);
  line(hayX + 60 * hayS, hayY + 85 * hayS, hayX + 70 * hayS, hayY + 100 * hayS);
  line(hayX + 140 * hayS, hayY + hayS, hayX + 140 * hayS, hayY + 85 * hayS);
  line(
    hayX + 140 * hayS,
    hayY + 85 * hayS,
    hayX + 150 * hayS,
    hayY + 100 * hayS
  );
  pop();
}

function tractor() {
  //PART WHERE YOU SIT
  push();
  fill(255, 0, 0);
  strokeWeight(2);
  beginShape();
  vertex(tractorX + 180 * tractorS, tractorY + 100 * tractorS);
  vertex(tractorX + 170 * tractorS, tractorY + tractorS);
  bezierVertex(
    tractorX + 150 * tractorS,
    tractorY - 30 * tractorS,
    tractorX + 110 * tractorS,
    tractorY - 30 * tractorS,
    tractorX + 85 * tractorS,
    tractorY + tractorS
  );
  vertex(tractorX + 70 * tractorS, tractorY + 70 * tractorS);
  vertex(tractorX + 120 * tractorS, tractorY + 105 * tractorS);
  vertex(tractorX + 170 * tractorS, tractorY + 100 * tractorS);
  endShape();
  beginShape();
  vertex(tractorX + 130 * tractorS, tractorY - 20 * tractorS);
  bezierVertex(
    tractorX + 120 * tractorS,
    tractorY + 20 * tractorS,
    tractorX + 115 * tractorS,
    tractorY + 60 * tractorS,
    tractorX + 120 * tractorS,
    tractorY + 105 * tractorS
  );
  endShape();
  strokeWeight(2);
  stroke(255, 100, 0);
  fill(255, 255, 0);
  beginShape();
  vertex(tractorX + 150 * tractorS, tractorY - 5 * tractorS);
  bezierVertex(
    tractorX + 150 * tractorS,
    tractorY - 20 * tractorS,
    tractorX + 160 * tractorS,
    tractorY - 20 * tractorS,
    tractorX + 160 * tractorS,
    tractorY - 5 * tractorS
  );
  endShape(CLOSE);
  pop();

  //PIPE IN FRONT
  push();
  fill(50, 50, 50);
  rect(
    tractorX + 60 * tractorS,
    tractorY + 36 * tractorS,
    7 * tractorS,
    20 * tractorS
  );
  fill(100, 100, 100);
  rect(
    tractorX + 61 * tractorS,
    tractorY + 25 * tractorS,
    5 * tractorS,
    10 * tractorS
  );
  pop();

  //BACK TIRE
  //dark grey
  fill(50, 50, 50);
  strokeWeight(2);
  ellipse(
    tractorX + 28 * tractorS,
    tractorY + 115 * tractorS,
    35 * tractorS,
    40 * tractorS
  );
  //medium grey
  fill(150, 150, 150);
  ellipse(
    tractorX + 35 * tractorS,
    tractorY + 115 * tractorS,
    28 * tractorS,
    40 * tractorS
  );
  //light grey
  fill(200, 200, 200);
  strokeWeight(1);
  ellipse(
    tractorX + 35 * tractorS,
    tractorY + 115 * tractorS,
    9 * tractorS,
    13 * tractorS
  );

  //FRONT PART
  push();
  fill(255, 0, 0);
  strokeWeight(2);
  beginShape();
  vertex(tractorX + 113 * tractorS, tractorY + 50 * tractorS);
  vertex(tractorX + 110 * tractorS, tractorY + 105 * tractorS);
  vertex(tractorX + 50 * tractorS, tractorY + 105 * tractorS);
  vertex(tractorX + 50 * tractorS, tractorY + 65 * tractorS);
  endShape();

  beginShape();
  vertex(tractorX + 110 * tractorS, tractorY + 50 * tractorS);
  vertex(tractorX + 80 * tractorS, tractorY + 50 * tractorS);
  vertex(tractorX + 30 * tractorS, tractorY + 65 * tractorS);
  vertex(tractorX + 32 * tractorS, tractorY + 105 * tractorS);
  vertex(tractorX + 50 * tractorS, tractorY + 105 * tractorS);
  vertex(tractorX + 55 * tractorS, tractorY + 68 * tractorS);
  endShape(CLOSE);
  pop();

  //GRILL
  push();
  fill(50, 50, 50);
  beginShape();
  vertex(tractorX + 30 * tractorS, tractorY + 65 * tractorS);
  vertex(tractorX + 55 * tractorS, tractorY + 68 * tractorS);
  vertex(tractorX + 53 * tractorS, tractorY + 85 * tractorS);
  vertex(tractorX + 30 * tractorS, tractorY + 83 * tractorS);
  endShape(CLOSE);
  pop();

  //TIRES
  //dark grey
  fill(50, 50, 50);
  strokeWeight(3);
  ellipse(
    tractorX + 190 * tractorS,
    tractorY + 100 * tractorS,
    70 * tractorS,
    80 * tractorS
  );
  //medium grey
  fill(150, 150, 150);
  strokeWeight(2);
  ellipse(
    tractorX + 200 * tractorS,
    tractorY + 100 * tractorS,
    60 * tractorS,
    80 * tractorS
  );
  //light grey
  fill(200, 200, 200);
  strokeWeight(1);
  ellipse(
    tractorX + 200 * tractorS,
    tractorY + 100 * tractorS,
    15 * tractorS,
    20 * tractorS
  );
  //part above tire
  fill(255, 0, 0);
  strokeWeight(2);
  beginShape();
  vertex(tractorX + 165 * tractorS, tractorY + 95 * tractorS);
  bezierVertex(
    tractorX + 165 * tractorS,
    tractorY + 90 * tractorS,
    tractorX + 170 * tractorS,
    tractorY + 60 * tractorS,
    tractorX + 205 * tractorS,
    tractorY + 60 * tractorS
  );
  bezierVertex(
    tractorX + 210 * tractorS,
    tractorY + 58 * tractorS,
    tractorX + 210 * tractorS,
    tractorY + 56 * tractorS,
    tractorX + 207 * tractorS,
    tractorY + 55 * tractorS
  );
  bezierVertex(
    tractorX + 168 * tractorS,
    tractorY + 50 * tractorS,
    tractorX + 150 * tractorS,
    tractorY + 70 * tractorS,
    tractorX + 150 * tractorS,
    tractorY + 95 * tractorS
  );
  endShape(CLOSE);
  //second front tire
  //dark grey
  fill(50, 50, 50);
  ellipse(tractorX + 93 * tractorS, tractorY + 117 * tractorS, 50 * tractorS);
  //medium grey
  fill(150, 150, 150);
  ellipse(
    tractorX + 100 * tractorS,
    tractorY + 117 * tractorS,
    40 * tractorS,
    50 * tractorS
  );
  //light grey
  fill(200, 200, 200);
  strokeWeight(1);
  ellipse(
    tractorX + 100 * tractorS,
    tractorY + 117 * tractorS,
    10 * tractorS,
    15 * tractorS
  );

  //PLATE IN FRONT
  fill(170, 170, 170);
  strokeWeight(2);
  rect(
    tractorX + 30 * tractorS,
    tractorY + 100 * tractorS,
    27 * tractorS,
    10 * tractorS,
    2
  );

  //HEADLIGHTS
  fill(50, 50, 50);
  strokeWeight(1);
  ellipse(tractorX + 65 * tractorS, tractorY + 80 * tractorS, 10 * tractorS);
  ellipse(tractorX + 30 * tractorS, tractorY + 77 * tractorS, 10 * tractorS);
  fill(255, 255, 0);
  ellipse(
    tractorX + 62 * tractorS,
    tractorY + 80 * tractorS,
    7 * tractorS,
    10 * tractorS
  );
  ellipse(
    tractorX + 28 * tractorS,
    tractorY + 77 * tractorS,
    7 * tractorS,
    10 * tractorS
  );

  //WINDOWS
  fill(255, 255, 255);
  beginShape();
  vertex(tractorX + 120 * tractorS, tractorY + 5 * tractorS);
  vertex(tractorX + 90 * tractorS, tractorY + 5 * tractorS);
  vertex(tractorX + 80 * tractorS, tractorY + 45 * tractorS);
  vertex(tractorX + 110 * tractorS, tractorY + 45 * tractorS);
  endShape(CLOSE);
  beginShape();
  vertex(tractorX + 130 * tractorS, tractorY + 5 * tractorS);
  vertex(tractorX + 125 * tractorS, tractorY + 45 * tractorS);
  vertex(tractorX + 155 * tractorS, tractorY + 40 * tractorS);
  vertex(tractorX + 155 * tractorS, tractorY + 7 * tractorS);
  endShape(CLOSE);
}

/* if roads is equal to this y position I have to make it stop. */

//trying to make chicken work

/*
let chickenX = 200;
let chickenY = 200;
let chickenS = 1;

function chicken() {
  fill(255, 255, 255);
  strokeWeight(1);

  //BEAK
  push();
  fill(255, 165, 0);
  triangle(
    chickenX + 100 * chickenS,
    chickenY + 170 * chickenS,
    chickenX + 108 * chickenS,
    chickenY + 160 * chickenS,
    chickenX + 95 * chickenS,
    chickenY + 155 * chickenS
  );
  pop();

  //HEAD
  ellipse(chickenX + 85 * chickenS, chickenY + 169 * chickenS, 40 * chickenS);

  //MOHAWK
  push();
  fill(255, 0, 0);
  beginShape();
  vertex(chickenX + 75 * chickenS, chickenY + 165 * chickenS);
  bezierVertex(
    chickenX + 65 * chickenS,
    chickenY + 150 * chickenS,
    chickenX + 70 * chickenS,
    chickenY + 150 * chickenS,
    chickenX + 75 * chickenS,
    chickenY + 155 * chickenS
  );
  bezierVertex(
    chickenX + 75 * chickenS,
    chickenY + 145 * chickenS,
    chickenX + 80 * chickenS,
    chickenY + 145 * chickenS,
    chickenX + 80 * chickenS,
    chickenY + 155 * chickenS
  );
  bezierVertex(
    chickenX + 80 * chickenS,
    chickenY + 145 * chickenS,
    chickenX + 85 * chickenS,
    chickenY + 147 * chickenS,
    chickenX + 85 * chickenS,
    chickenY + 153 * chickenS
  );
  endShape(CLOSE);
  pop();

  //FEET
  push();
  fill(255, 165, 0);
  ellipse(
    chickenX + 70 * chickenS,
    chickenY + 240 * chickenS,
    25 * chickenS,
    10 * chickenS
  );
  pop();

  //BODY
  push();
  beginShape();
  vertex(chickenX + 75 * chickenS, chickenY + 170 * chickenS);
  bezierVertex(
    chickenX + 40 * chickenS,
    chickenY + 160 * chickenS,
    chickenX + 5 * chickenS,
    chickenY + 210 * chickenS,
    chickenX + 39 * chickenS,
    chickenY + 240 * chickenS
  );
  bezierVertex(
    chickenX + 90 * chickenS,
    chickenY + 260 * chickenS,
    chickenX + 118 * chickenS,
    chickenY + 190 * chickenS,
    chickenX + 75 * chickenS,
    chickenY + 170 * chickenS
  );
  endShape();
  pop();

  //WING ON SIDE
  push();
  fill(240, 240, 240);
  beginShape();
  vertex(chickenX + 85 * chickenS, chickenY + 220 * chickenS);
  bezierVertex(
    chickenX + 95 * chickenS,
    chickenY + 190 * chickenS,
    chickenX + 65 * chickenS,
    chickenY + 190 * chickenS,
    chickenX + 60 * chickenS,
    chickenY + 210 * chickenS
  );
  bezierVertex(
    chickenX + 57 * chickenS,
    chickenY + 220 * chickenS,
    chickenX + 65 * chickenS,
    chickenY + 220 * chickenS,
    chickenX + 68 * chickenS,
    chickenY + 215 * chickenS
  );
  bezierVertex(
    chickenX + 60 * chickenS,
    chickenY + 225 * chickenS,
    chickenX + 70 * chickenS,
    chickenY + 225 * chickenS,
    chickenX + 75 * chickenS,
    chickenY + 215 * chickenS
  );
  bezierVertex(
    chickenX + 72 * chickenS,
    chickenY + 230 * chickenS,
    chickenX + 85 * chickenS,
    chickenY + 225 * chickenS,
    chickenX + 85 * chickenS,
    chickenY + 220 * chickenS
  );
  endShape();
  pop();

  //WING ON BUTT
  push();
  fill(240, 240, 240);
  beginShape();
  vertex(chickenX + 30 * chickenS, chickenY + 220 * chickenS);
  bezierVertex(
    chickenX + 10 * chickenS,
    chickenY + 215 * chickenS,
    chickenX + 15 * chickenS,
    chickenY + 195 * chickenS,
    chickenX + 25 * chickenS,
    chickenY + 205 * chickenS
  );
  bezierVertex(
    chickenX + 20 * chickenS,
    chickenY + 190 * chickenS,
    chickenX + 25 * chickenS,
    chickenY + 185 * chickenS,
    chickenX + 30 * chickenS,
    chickenY + 200 * chickenS
  );
  bezierVertex(
    chickenX + 30 * chickenS,
    chickenY + 185 * chickenS,
    chickenX + 35 * chickenS,
    chickenY + 185 * chickenS,
    chickenX + 37 * chickenS,
    chickenY + 198 * chickenS
  );
  endShape(CLOSE);
  pop();

  if (keyIsDown(LEFT_ARROW)) {
    chickenX -= 4;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    chickenX += 4;
  }
  if (keyIsDown(UP_ARROW)) {
    chickenY += -10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    chickenY += 4;
  }
}
function keyPressed(e) {
  if (e.keyCode === 32) {
    jump();
  }
}
let targetChickenY;
let velocity = 1;
let acceleration = 0.1;

function jump() {
  chickenY -= 100;
  targetChickenY = chickenY + 100;
  setTimeout(() => {
    while (chickenY < targetChickenY) {
      velocity += 0.1;
      chickenY += velocity;
    }
  }, 100);
}

function draw() {
  background(107, 142, 35);
  roads();
  roadsY += 1;
  hay((hayS = 0.5), rotate(0.18));
  hayY = hayY + 1;
  hayX = hayX - 1;
  tractor();
  tractorY = tractorY + 1;
  tractorX = tractorX - 3;
  chicken();
  chickenY = chickenY + 1;

  if ((y = 530)) {
  }
}

float x,y;
float startX,startY, endX,endY;
float timeSpan;

void setup() {
  size(800,800);
  startX = width/2;
  startY = height/2;
  endX = 100;
  endY = 100;
  timeSpan = 2000.0;
}

