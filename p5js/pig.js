background(255, 255, 255);
push();
strokeWeight(30);
line(0, 100, 600, 250);
pop();

background(107, 142, 35);

let pigX = 100;
let pigY = 200;
let pigS = 1;

//---------------------------making the pig

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
}

function draw() {
  pig();
}

let chickenX = 220;
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
}

chicken();

let sheepX = 330;
let sheepY = 200;
let sheepS = 1;

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
}

sheep();
