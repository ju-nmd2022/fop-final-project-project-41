function setup() {
  createCanvas(1024, 768);
  frameRate(30);
}

background(107, 142, 35);

let roadsX = 200;
let roadsY = 200;

let hayX = 600;
let hayY = -438;
let hayS = 1;

let tractorX = 500;
let tractorY = 110;
let tractorS = 0.6;

let chickenX = 200;
let chickenY = 200;
let chickenS = 1;

let barnX = 300;
let barnY = -1600;
let barnS = 1;

let treeX = 400;
let treeY = 70;
let treeS = 0.7;

function roads() {
  push();
  stroke(244, 204, 140);
  strokeWeight(50);
  line(roadsX - 200, roadsY, roadsX + 400, roadsY + 100);
  line(roadsX - 200, roadsY - 200, roadsX + 400, roadsY - 100);
  line(roadsX - 200, roadsY - 400, roadsX + 400, roadsY - 300);
  line(roadsX - 200, roadsY - 800, roadsX + 400, roadsY - 700);
  line(roadsX - 200, roadsY - 1400, roadsX + 400, roadsY - 1300);
  stroke(135, 206, 250);
  line(roadsX - 200, roadsY - 600, roadsX + 400, roadsY - 500);
  line(roadsX - 200, roadsY - 1000, roadsX + 400, roadsY - 900);
  line(roadsX - 200, roadsY - 1200, roadsX + 400, roadsY - 1100);
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
  push();
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
  pop();

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
  push();
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
  pop();

  //second front tire
  //dark grey
  push();
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
  pop();

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
  push();
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
  pop();

  //WINDOWS
  push();
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

// chicken drawn and moving
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
}

function barn() {
  push();
  //GREY PART OF ROOF
  fill(100, 100, 100);
  beginShape();
  vertex(barnX + 90 * barnS, barnY - 85 * barnS);
  vertex(barnX + 170 * barnS, barnY - 83 * barnS);
  vertex(barnX + 200 * barnS, barnY - 55 * barnS);
  vertex(barnX + 217 * barnS, barnY - 20 * barnS);
  vertex(barnX + 120 * barnS, barnY + barnS);
  endShape(CLOSE);

  //RED PARTS
  fill(255, 0, 0);
  strokeWeight(2);
  beginShape();
  vertex(barnX + barnS, barnY + barnS);
  vertex(barnX + 10 * barnS, barnY + 50 * barnS);
  vertex(barnX + 130 * barnS, barnY + 60 * barnS);
  vertex(barnX + 145 * barnS, barnY - 10 * barnS);
  bezierVertex(
    barnX + 100 * barnS,
    barnY - 130 * barnS,
    barnX + 15 * barnS,
    barnY - 90 * barnS,
    barnX + barnS,
    barnY + barnS
  );
  endShape();
  beginShape();
  vertex(barnX + 130 * barnS, barnY + 60 * barnS);
  vertex(barnX + 210 * barnS, barnY + 45 * barnS);
  vertex(barnX + 215 * barnS, barnY - 15 * barnS);
  vertex(barnX + 145 * barnS, barnY - 10 * barnS);
  endShape();

  // WHITE PART OF ROOF
  fill(255, 255, 255);
  strokeWeight(1);
  beginShape();
  vertex(barnX + 217 * barnS, barnY - 13 * barnS);
  vertex(barnX + 145 * barnS, barnY - 8 * barnS);
  vertex(barnX + 120 * barnS, barnY - 55 * barnS);
  vertex(barnX + 90 * barnS, barnY - 80 * barnS);
  vertex(barnX + 50 * barnS, barnY - 80 * barnS);
  vertex(barnX + 30 * barnS, barnY - 60 * barnS);
  vertex(barnX + barnS, barnY + barnS);
  vertex(barnX - 5 * barnS, barnY - 5 * barnS);
  vertex(barnX + 25 * barnS, barnY - 65 * barnS);
  vertex(barnX + 45 * barnS, barnY - 86 * barnS);
  vertex(barnX + 95 * barnS, barnY - 86 * barnS);
  vertex(barnX + 128 * barnS, barnY - 57 * barnS);
  vertex(barnX + 149 * barnS, barnY - 15 * barnS);
  vertex(barnX + 217 * barnS, barnY - 20 * barnS);
  endShape(CLOSE);

  //WINDOWS
  fill(139, 69, 19);
  stroke(255, 255, 255);
  strokeWeight(4);
  rect(barnX + 55 * barnS, barnY - 45 * barnS, 30 * barnS, 30 * barnS);
  rect(barnX + 155 * barnS, barnY + barnS, 15 * barnS, 25 * barnS);
  rect(barnX + 180 * barnS, barnY - 2 * barnS, 15 * barnS, 25 * barnS);
  beginShape();
  vertex(barnX + 40 * barnS, barnY + 53 * barnS);
  vertex(barnX + 40 * barnS, barnY + 10 * barnS);
  vertex(barnX + 90 * barnS, barnY + 12 * barnS);
  vertex(barnX + 85 * barnS, barnY + 56 * barnS);
  endShape();
  line(
    barnX + 40 * barnS,
    barnY + 10 * barnS,
    barnX + 85 * barnS,
    barnY + 55 * barnS
  );
  line(
    barnX + 90 * barnS,
    barnY + 12 * barnS,
    barnX + 40 * barnS,
    barnY + 55 * barnS
  );
  line(
    barnX + 155 * barnS,
    barnY + barnS,
    barnX + 170 * barnS,
    barnY + 25 * barnS
  );
  line(
    barnX + 180 * barnS,
    barnY + barnS,
    barnX + 193 * barnS,
    barnY + 20 * barnS
  );
  fill(244, 204, 140);
  noStroke();
  rect(barnX + 57 * barnS, barnY - 30 * barnS, 26 * barnS, 13 * barnS);
  pop();
}

function tree() {
  push();
  //TRUNK
  fill(139, 69, 19);
  stroke(0, 0, 0);
  strokeWeight(2);
  beginShape();
  vertex(treeX + 180 * treeS, treeY + 50 * treeS);
  bezierVertex(
    treeX + 182 * treeS,
    treeY + 97 * treeS,
    treeX + 190 * treeS,
    treeY + 140 * treeS,
    treeX + 170 * treeS,
    treeY + 160 * treeS
  );
  bezierVertex(
    treeX + 190 * treeS,
    treeY + 165 * treeS,
    treeX + 210 * treeS,
    treeY + 165 * treeS,
    treeX + 230 * treeS,
    treeY + 160 * treeS
  );
  bezierVertex(
    treeX + 210 * treeS,
    treeY + 140 * treeS,
    treeX + 218 * treeS,
    treeY + 97 * treeS,
    treeX + 220 * treeS,
    treeY + 50 * treeS
  );
  endShape();
  //LEAVES
  fill(40, 200, 50);
  ellipse(treeX + 185 * treeS, treeY - 60 * treeS, 40 * treeS);
  ellipse(treeX + 255 * treeS, treeY + 5 * treeS, 50 * treeS);
  ellipse(treeX + 165 * treeS, treeY + 30 * treeS, 50 * treeS);
  ellipse(treeX + 240 * treeS, treeY + 40 * treeS, 40 * treeS);
  ellipse(treeX + 205 * treeS, treeY + 40 * treeS, 70 * treeS);
  ellipse(treeX + 150 * treeS, treeY - 5 * treeS, 50 * treeS);
  ellipse(treeX + 250 * treeS, treeY - 25 * treeS, 40 * treeS);
  ellipse(treeX + 165 * treeS, treeY - 45 * treeS, 60 * treeS);
  ellipse(treeX + 230 * treeS, treeY - 60 * treeS, 55 * treeS);
  noStroke();
  ellipse(treeX + 200 * treeS, treeY - 5 * treeS, 100 * treeS);
  pop();
}

//some variables
let targetChickenY;
let velocity = 1;
let acceleration = 0.1;
let state = "start";
let isGameActive = false;
let backgroundImage;
let button;
let image1, image2, image3;
let logo;
let backgroundImage2;

//executionCount variable and functionality also obtained from chatGPT-----
let executionCount = 0;

function keyPressed(e) {
  if (e.keyCode === 32) {
    jump();
  }
}

//making the chicken jump and counting how many times it jumped
function jump() {
  chickenY -= 100;
  targetChickenY = chickenY + 100;
  setTimeout(() => {
    while (chickenY < targetChickenY) {
      velocity += 0.1;
      chickenY += velocity;
    }
  }, 100);
  targetChickenY -= 51;

  //counting jumps
  executionCount++;

  const desiredExecutionCount = 5;
  if (executionCount === desiredExecutionCount) {
    console.log("The function has been executed 5 times.");
  }
}

function preload() {
  backgroundImage2 = loadImage("farmBackground2.jpg");
  backgroundImage = loadImage("farmBackground.jpg");
  image1 = loadImage("pig.png");
  image2 = loadImage("lamb.png");
  image3 = loadImage("chicken.png");
  logo = loadImage("Countrylogo.png");
}

//startscreen
function startScreen() {
  fill(255, 255, 255);
  image(backgroundImage, 0, 0, 1024, 768);
  noStroke();
  rect(90, 230, 860, 260);

  image(image1, 400, 250, image1.width * 0.27, image1.height * 0.27); // Scale down the image by half
  image(image2, 650, 250, image1.width * 0.37, image1.height * 0.27);
  image(image3, 170, 250, image1.width * 0.24, image1.height * 0.34);
  image(logo, 360, 40);

  push();
  fill("green");
  strokeWeight(3);
  rect(430, 550, 200, 50, 10);
  fill(255, 255, 255);
  noStroke();
  textSize(30);
  text("Start Game", 453, 585);
  pop();
}

//gamescreen
function gameScreen() {
  createCanvas(600, 560);
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
  barn(rotate(-0.1));
  barnY = barnY + 1;
  tree();
  treeY = treeY + 1;
}

//losescreen
function loseScreen() {
  fill(255, 255, 255);

  image(backgroundImage2, 0, 0, 1024, 768);

  //Making the text for loosing the game --------------------
  text("You were hit by the tractor and turned into ", 130, 120);

  tractor((tractorX = 570), (tractorY = 240), (tractorS = 1.5));

  push();
  fill("green");
  strokeWeight(3);
  rect(430, 550, 200, 50, 10);
  fill(255, 255, 255);
  noStroke();
  textSize(30);
  text("Start Game", 453, 585);
  pop();
}

function winScreen() {
  background(255, 255, 255);
}

function draw() {
  gamescreen(); /*if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "win") {
    winScreen();
  } else if (state === "lose") {
    loseScreen();
  }

  //got help from checking if the button was clicked from chatGPT------

  if (state === "start") {
    // Defining the coordinates and size of the area
    const areaX = 432;
    const areaY = 550;
    const areaWidth = 200;
    const areaHeight = 50;

    // Check if the mouseclick is within the area
    if (
      mouseX >= areaX &&
      mouseX <= areaX + areaWidth &&
      mouseY >= areaY &&
      mouseY <= areaY + areaHeight
    ) {
      // Area was clicked
      console.log("Area clicked!");
      state = "game";
    }
  } else if (state === "game" && targetChickenY < -250) {
    console.log("state");
    state = "lose";
  } else if (state === "game" && targetChickenY > 280) {
    console.log("other state");
    state = "lose";
  } else if (keyIsDown(13) && (state === "lose" || state === "win")) {
    state = "game";
  }

  /*else if (keyIsDown(32) && state === "game") {
    isGameActive = true;
  } else if (keyIsDown(13) && (state === "lose" || state === "win")) {
    state = "game";
  } */
  /*if (buttonPressed && state === "start") {
    state === "game";
  } */
}
