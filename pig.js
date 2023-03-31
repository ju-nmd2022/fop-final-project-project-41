background(255, 255, 255);
push();
strokeWeight(30);
line(0, 100, 600, 250);
pop();

let pigX = 150;
let pigY = 150;
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
  translate(pigX + pigS, pigY + pigS);
  rotate(0.5);
  ellipse(pigX + pigS, pigY + pigS, 70 * pigS, 80 * pigS);
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
