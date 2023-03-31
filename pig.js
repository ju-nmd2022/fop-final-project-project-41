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
  //BACK LEG
  beginShape();
  vertex(178, 378);
  bezierVertex(180, 390, 183, 393, 187, 395);
  vertex(192, 390);
  endShape();
  push();
  fill(139, 69, 19);
  triangle(187, 395, 192, 390, 187, 384);
  pop();

  //BODY
  strokeWeight(1);
  push();
  translate(pigX, pigY);
  rotate(0.5);
  ellipse(pigX + pigS, pigY + pigS, 70 * pigS, 80 * pigS);
  pop();

  //FRONT LEGS
  push();
  beginShape();
  vertex(215, 385);
  bezierVertex(215, 395, 225, 390, 235, 392);
  vertex(240, 385);
  bezierVertex(225, 385, 224, 375, 225, 378);
  endShape();
  beginShape();
  vertex(236, 353);
  bezierVertex(240, 360, 250, 360, 253, 360);
  vertex(258, 352);
  bezierVertex(246, 354, 247, 350, 245, 342);
  endShape();
  pop();
  push();
  fill(139, 69, 19);
  triangle(253, 360, 258, 352, 253, 352);
  triangle(235, 392, 240, 385, 235, 385);
  pop();

  //HEAD
}

pig();
