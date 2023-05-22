function setup() {
  createCanvas(1024, 768);
  frameRate(30);
  state = "start";

  //for loop to draw multiple tractors
  for (let i = 0; i < 5; i++) {
    let tractorX = i * 100;
    let tractorY = i * 200;
    let tractorSpeed = random(1, 3);

    let tractor = { x: tractorX, y: tractorY, speed: tractorSpeed };

    tractors.push(tractor);
  }
}

background(107, 142, 35);

let baconImage;
let eggImage;
let sweaterImage;

let animal = "none";

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

let pigX = 200;
let pigY = 200;
let pigS = 1;

let sheepX = 200;
let sheepY = 200;
let sheepS = 1;

let barnX = 300;
let barnY = -3100;
let barnS = 1;

let treeX = 400;
let treeY = 70;
let treeS = 0.7;

function mouseClicked() {
  if (state === "start") {
    // Check if the click happened on the start page
    if (mouseX > 100 && mouseX < 200 && mouseY > 100 && mouseY < 200) {
      animal = "chicken";
      page = "game"; // Switch to the game page
    } else if (mouseX > 250 && mouseX < 350 && mouseY > 250 && mouseY < 450) {
      animal = "pig";
      page = "game"; // Switch to the game page
    } else if (mouseX > 260 && mouseX < 360 && mouseY > 260 && mouseY < 360) {
      animal = "sheep";
      page = "game"; // Switch to the game page
    } else {
      animal = "none";
    }
  }
}

function roads() {
  push();
  stroke(244, 204, 140);
  strokeWeight(50);
  line(roadsX - 200, roadsY, roadsX + 400, roadsY + 100);
  line(roadsX - 200, roadsY - 200, roadsX + 400, roadsY - 100);
  line(roadsX - 200, roadsY - 400, roadsX + 400, roadsY - 300);
  line(roadsX - 200, roadsY - 800, roadsX + 400, roadsY - 700);
  line(roadsX - 200, roadsY - 1400, roadsX + 400, roadsY - 1300);
  line(roadsX - 200, roadsY - 1600, roadsX + 400, roadsY - 1500);
  line(roadsX - 200, roadsY - 2000, roadsX + 400, roadsY - 1900);
  line(roadsX - 200, roadsY - 2200, roadsX + 400, roadsY - 2100);
  line(roadsX - 200, roadsY - 2600, roadsX + 400, roadsY - 2500);
  stroke(135, 206, 250);
  line(roadsX - 200, roadsY - 600, roadsX + 400, roadsY - 500);
  line(roadsX - 200, roadsY - 1000, roadsX + 400, roadsY - 900);
  line(roadsX - 200, roadsY - 1200, roadsX + 400, roadsY - 1100);
  line(roadsX - 200, roadsY - 1800, roadsX + 400, roadsY - 1700);
  line(roadsX - 200, roadsY - 2400, roadsX + 400, roadsY - 2300);
  line(roadsX - 200, roadsY - 2800, roadsX + 400, roadsY - 2700);
  line(roadsX - 200, roadsY - 3000, roadsX + 400, roadsY - 2900);
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

function tractor(tractorX, tractorY) {
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

function sheep() {
  fill(255, 255, 255);

  //HEAD
  push();
  fill(240, 234, 214);
  ellipse(sheepX + 90 * sheepS, sheepY + 183 * sheepS, 40 * sheepS);
  pop();

  //FEET
  push();
  fill(240, 234, 214);
  rect(sheepX + 30 * sheepS, sheepY + 240 * sheepS, 7 * sheepS, 8 * sheepS);
  rect(sheepX + 60 * sheepS, sheepY + 240 * sheepS, 7 * sheepS, 10 * sheepS);
  rect(sheepX + 95 * sheepS, sheepY + 215 * sheepS, 5 * sheepS, 8 * sheepS);
  pop();

  //BODY
  //the fluffy part
  push();
  ellipse(sheepX + 45 * sheepS, sheepY + 180 * sheepS, 20 * sheepS);
  ellipse(sheepX + 33 * sheepS, sheepY + 185 * sheepS, 15 * sheepS);
  ellipse(sheepX + 30 * sheepS, sheepY + 200 * sheepS, 20 * sheepS);
  ellipse(sheepX + 30 * sheepS, sheepY + 215 * sheepS, 20 * sheepS);
  ellipse(sheepX + 30 * sheepS, sheepY + 225 * sheepS, 10 * sheepS);
  ellipse(sheepX + 35 * sheepS, sheepY + 235 * sheepS, 15 * sheepS);
  ellipse(sheepX + 48 * sheepS, sheepY + 238 * sheepS, 20 * sheepS);
  ellipse(sheepX + 65 * sheepS, sheepY + 238 * sheepS, 20 * sheepS);
  ellipse(sheepX + 78 * sheepS, sheepY + 235 * sheepS, 15 * sheepS);
  ellipse(sheepX + 87 * sheepS, sheepY + 225 * sheepS, 20 * sheepS);
  ellipse(sheepX + 94 * sheepS, sheepY + 215 * sheepS, 10 * sheepS);
  ellipse(sheepX + 95 * sheepS, sheepY + 200 * sheepS, 20 * sheepS);
  ellipse(sheepX + 90 * sheepS, sheepY + 185 * sheepS, 15 * sheepS);
  ellipse(sheepX + 75 * sheepS, sheepY + 175 * sheepS, 20 * sheepS);
  ellipse(sheepX + 60 * sheepS, sheepY + 175 * sheepS, 20 * sheepS);
  pop();

  //the shape
  push();
  noStroke();
  beginShape();
  vertex(sheepX + 75 * sheepS, sheepY + 170 * sheepS);
  bezierVertex(
    sheepX + 40 * sheepS,
    sheepY + 160 * sheepS,
    sheepX + 5 * sheepS,
    sheepY + 210 * sheepS,
    sheepX + 39 * sheepS,
    sheepY + 240 * sheepS
  );
  bezierVertex(
    sheepX + 90 * sheepS,
    sheepY + 260 * sheepS,
    sheepX + 118 * sheepS,
    sheepY + 190 * sheepS,
    sheepX + 75 * sheepS,
    sheepY + 170 * sheepS
  );
  endShape();
  pop();

  //EAR
  ellipse(
    sheepX + 93 * sheepS,
    sheepY + 185 * sheepS,
    15 * sheepS,
    30 * sheepS
  );

  if (keyIsDown(LEFT_ARROW)) {
    sheepX -= 4;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    sheepX += 4;
  }
}

function pig() {
  fill(253, 215, 228);

  //NOSE
  ellipse(pigX + 94 * pigS, pigY + 159 * pigS, 20 * pigS);

  //HEAD
  ellipse(pigX + 80 * pigS, pigY + 174 * pigS, 50 * pigS);

  //EARS
  beginShape();
  vertex(pigX + 90 * pigS, pigY + 160 * pigS);
  bezierVertex(
    pigX + 100 * pigS,
    pigY + 150 * pigS,
    pigX + 100 * pigS,
    pigY + 170 * pigS,
    pigX + 105 * pigS,
    pigY + 188 * pigS
  );
  bezierVertex(
    pigX + 85 * pigS,
    pigY + 180 * pigS,
    pigX + 90 * pigS,
    pigY + 175 * pigS,
    pigX + 90 * pigS,
    pigY + 170 * pigS
  );
  endShape();
  beginShape();
  vertex(pigX + 70 * pigS, pigY + 155 * pigS);
  bezierVertex(
    pigX + 65 * pigS,
    pigY + 145 * pigS,
    pigX + 55 * pigS,
    pigY + 150 * pigS,
    pigX + 50 * pigS,
    pigY + 165 * pigS
  );
  bezierVertex(
    pigX + 60 * pigS,
    pigY + 164 * pigS,
    pigX + 64 * pigS,
    pigY + 162 * pigS,
    pigX + 65 * pigS,
    pigY + 157 * pigS
  );
  endShape();

  //BACK LEG
  beginShape();
  vertex(pigX + 28 * pigS, pigY + 228 * pigS);
  bezierVertex(
    pigX + 30 * pigS,
    pigY + 240 * pigS,
    pigX + 33 * pigS,
    pigY + 243 * pigS,
    pigX + 37 * pigS,
    pigY + 245 * pigS
  );
  vertex(pigX + 42 * pigS, pigY + 240 * pigS);
  endShape();
  push();
  fill(139, 69, 19);
  triangle(
    pigX + 37 * pigS,
    pigY + 245 * pigS,
    pigX + 42 * pigS,
    pigY + 240 * pigS,
    pigX + 37 * pigS,
    pigY + 234 * pigS
  );
  pop();

  //BODY
  strokeWeight(1);
  push();
  beginShape();
  vertex(pigX + 75 * pigS, pigY + 170 * pigS);
  bezierVertex(
    pigX + 40 * pigS,
    pigY + 160 * pigS,
    pigX + 5 * pigS,
    pigY + 210 * pigS,
    pigX + 39 * pigS,
    pigY + 240 * pigS
  );
  bezierVertex(
    pigX + 90 * pigS,
    pigY + 260 * pigS,
    pigX + 118 * pigS,
    pigY + 190 * pigS,
    pigX + 75 * pigS,
    pigY + 170 * pigS
  );
  endShape();
  pop();

  //FRONT LEGS
  push();
  beginShape();
  vertex(pigX + 65 * pigS, pigY + 235 * pigS);
  bezierVertex(
    pigX + 65 * pigS,
    pigY + 245 * pigS,
    pigX + 75 * pigS,
    pigY + 240 * pigS,
    pigX + 85 * pigS,
    pigY + 242 * pigS
  );
  vertex(pigX + 90 * pigS, pigY + 235 * pigS);
  bezierVertex(
    pigX + 75 * pigS,
    pigY + 235 * pigS,
    pigX + 74 * pigS,
    pigY + 225 * pigS,
    pigX + 75 * pigS,
    pigY + 228 * pigS
  );
  endShape();
  beginShape();
  vertex(pigX + 86 * pigS, pigY + 203 * pigS);
  bezierVertex(
    pigX + 90 * pigS,
    pigY + 210 * pigS,
    pigX + 100 * pigS,
    pigY + 210 * pigS,
    pigX + 103 * pigS,
    pigY + 210 * pigS
  );
  vertex(pigX + 108 * pigS, pigY + 202 * pigS);
  bezierVertex(
    pigX + 96 * pigS,
    pigY + 204 * pigS,
    pigX + 97 * pigS,
    pigY + 200 * pigS,
    pigX + 95 * pigS,
    pigY + 192 * pigS
  );
  endShape();
  pop();
  push();
  fill(139, 69, 19);
  triangle(
    pigX + 103 * pigS,
    pigY + 210 * pigS,
    pigX + 108 * pigS,
    pigY + 202 * pigS,
    pigX + 103 * pigS,
    pigY + 202 * pigS
  );
  triangle(
    pigX + 85 * pigS,
    pigY + 242 * pigS,
    pigX + 90 * pigS,
    pigY + 235 * pigS,
    pigX + 85 * pigS,
    pigY + 235 * pigS
  );
  pop();

  //TAIL
  beginShape();
  vertex(pigX + 51 * pigS, pigY + 215 * pigS);
  bezierVertex(
    pigX + 40 * pigS,
    pigY + 214 * pigS,
    pigX + 40 * pigS,
    pigY + 207 * pigS,
    pigX + 45 * pigS,
    pigY + 203 * pigS
  );
  bezierVertex(
    pigX + 55 * pigS,
    pigY + 204 * pigS,
    pigX + 50 * pigS,
    pigY + 215 * pigS,
    pigX + 35 * pigS,
    pigY + 213 * pigS
  );
  endShape();
  if (keyIsDown(LEFT_ARROW)) {
    pigX -= 4;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    pigX += 4;
  }
}

//some variables --------------------------------------------

let targetChickenY;
let targetPigY;
let targetSheepY;
let velocity = 1;
let acceleration = 0.1;
let state = "start";
let isGameActive = false;
let backgroundImage;
let button;
let image1, image2, image3;
let logo;
let backgroundImage2;
let tractors = [];

//executionCount variable and functionality also obtained from chatGPT-----
let executionCount = 0;

function keyPressed(e) {
  if (e.keyCode === 32) {
    jump();
  }
}

//making the animals jump and counting how many times it jumped
function jump() {
  if (animal === "chicken") {
    chickenY -= 100;
    targetChickenY = chickenY + 100;
    setTimeout(() => {
      while (chickenY < targetChickenY) {
        velocity += 0.1;
        chickenY += velocity;
      }
    }, 100);
    targetChickenY -= 51;
  } else if (animal === "pig") {
    pigY -= 100;
    targetPigY = pigY + 100;
    setTimeout(() => {
      while (pigY < targetPigY) {
        velocity += 0.1;
        pigY += velocity;
      }
    }, 100);
    targetPigY -= 51;
  } else if (animal === "sheep") {
    sheepY -= 100;
    targetSheepY = sheepY + 100;
    setTimeout(() => {
      while (sheepY < targetSheepY) {
        velocity += 0.1;
        sheepY += velocity;
      }
    }, 100);
    targetSheepY -= 51;
  }

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
  baconImage = loadImage("bacon.png");
  eggImage = loadImage("egg.png");
  sweaterImage = loadImage("sweater.png");
}

//startscreen
function startScreen() {
  fill(255, 255, 255);
  image(backgroundImage, 0, 0, 1024, 768);
  noStroke();
  rect(90, 230, 860, 260, 10);

  image(image1, 400, 250, image1.width * 0.27, image1.height * 0.27); // Scale down the image by half
  image(image2, 650, 250, image1.width * 0.37, image1.height * 0.27);
  image(image3, 170, 250, image1.width * 0.24, image1.height * 0.34);
  image(logo, 360, 40);

  push();
  fill("green");
  strokeWeight(3);
  rect(350, 550, 390, 50, 10);
  fill(255, 255, 255);
  noStroke();
  textSize(30);
  text("Click on an animal to start", 373, 585);
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
  /*tractor();
  tractorY = tractorY + 1;
  tractorX = tractorX - 3; */
  chickenY = chickenY + 1;
  barn(rotate(-0.1));
  barnY = barnY + 1;
  tree();
  treeY = treeY + 1;
  pigY = pigY + 1;
  sheepY = sheepY + 1;
  if (animal === "chicken") {
    chicken(chickenX, chickenY, chickenS);
  } else if (animal === "pig") {
    pig(pigX, pigY, pigS);
  } else if (animal === "sheep") {
    sheep(sheepX, sheepY, sheepS);
  }

  // Update and draw each tractor
  for (let i = 0; i < tractors.length; i++) {
    let tractor = tractors[i];

    // Update tractor's position
    tractor.x += tractor.speed;

    // Check if the tractor reaches the bottom of the canvas
    if (tractor.y > height) {
      tractor.y = 0; // Reset the tractor's position to the top
    }

    // Draw the tractor at its current position
    drawTractor(tractor.x, tractor.y);
  }
}

function drawTractor(x, y) {
  // Drawing code for the tractor
  rect(x, y, 30, 40);
  // Add additional drawing code as needed for the tractor shape
}

//losescreen
function loseScreen() {
  fill(255, 255, 255);

  image(backgroundImage2, 0, 0, 1024, 768);

  //Making the text for loosing the game --------------------
  textSize(24);
  text("You were hit by the tractor and turned into ", 130, 120);

  tractor((tractorX = 570), (tractorY = 240), (tractorS = 1.5));

  push();
  fill("green");
  strokeWeight(0);
  rect(430, 550, 200, 50, 10);
  fill(255, 255, 255);
  noStroke();
  textSize(30);
  text("Start Game", 453, 585);
  pop();
}

function winScreen() {
  fill(255, 255, 255);

  image(backgroundImage2, 0, 0, 1024, 768);

  //Making the text for loosing the game --------------------
  textSize(24);
  text("You won the game, congrats!", 130, 120);

  tractor((tractorX = 570), (tractorY = 240), (tractorS = 1.5));

  push();
  fill("green");
  strokeWeight(0);
  rect(430, 550, 200, 50, 10);
  fill(255, 255, 255);
  noStroke();
  textSize(30);
  text("Play Again", 453, 585);
  pop();
}

function draw() {
  if (state === "start") {
    startScreen(); // Check if the click happened on the start page
    if (
      mouseIsPressed &&
      mouseX > 100 &&
      mouseX < 350 &&
      mouseY > 200 &&
      mouseY < 400
    ) {
      animal = "chicken";
      state = "game"; // Switch to the game state
    } else if (
      mouseIsPressed &&
      mouseX > 400 &&
      mouseX < 600 &&
      mouseY > 200 &&
      mouseY < 400
    ) {
      animal = "pig";
      state = "game"; // Switch to the game state
    } else if (
      mouseIsPressed &&
      mouseX > 650 &&
      mouseX < 900 &&
      mouseY > 200 &&
      mouseY < 400
    ) {
      animal = "sheep";
      state = "game"; // Switch to the game state
    } else {
      animal = "none";
    }
  } else if (state === "game") {
    gameScreen();
  } else if (state === "win") {
    winScreen();
  }
  if (
    mouseIsPressed &&
    mouseX > 400 &&
    mouseX < 600 &&
    mouseY > 550 &&
    mouseY < 650
  ) {
    state = "start";
  } else if (state === "lose") {
    loseScreen();
  }
  if (
    mouseIsPressed &&
    mouseX > 400 &&
    mouseX < 600 &&
    mouseY > 550 &&
    mouseY < 650
  ) {
    state = "start";
    {
      if (animal === "pig") {
        image(baconImage, 200, 200, width, height);
        text("You were hit by the tractor and turned into bacon", 130, 120);
      } else if (animal === "chicken") {
        image(eggImage, 200, 200, width, height);
        text("You were hit by the tractor and turned into egg", 130, 120);
      } else if (animal === "sheep") {
        image(sweaterImage, 200, 200, width, height);
        text("You were hit by the tractor and turned into a sweater", 130, 120);
      }
    }
  }
}

//got help from checking if the button was clicked from chatGPT------

/*(state === "start") {
} else if (state === "game" && targetChickenY < -250) {
  console.log("state");
  state = "lose";
} else if (state === "game" && targetChickenY > 280) {
  console.log("other state");
  state = "lose";
} else if (keyIsDown(13) && (state === "lose" || state === "win")) {
  state = "game";
} */
