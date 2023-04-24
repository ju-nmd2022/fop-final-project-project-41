barnX = 200;
barnY = 200;
barnS = 1;

background(255, 255, 255);
function barn() {
  //GREY PART OF ROOF
  fill(100, 100, 100);
  beginShape();
  vertex(290, 115);
  vertex(370, 117);
  vertex(400, 145);
  vertex(417, 180);
  vertex(320, 200);
  endShape(CLOSE);

  //RED PARTS
  fill(255, 0, 0);
  strokeWeight(2);
  beginShape();
  vertex(200, 200);
  vertex(210, 250);
  vertex(330, 260);
  vertex(345, 190);
  bezierVertex(300, 70, 215, 110, 200, 200);
  endShape();
  beginShape();
  vertex(330, 260);
  vertex(410, 245);
  vertex(415, 185);
  vertex(345, 190);
  endShape();

  // WHITE PART OF ROOF
  fill(255, 255, 255);
  strokeWeight(1);
  beginShape();
  vertex(417, 187);
  vertex(345, 192);
  vertex(320, 145);
  vertex(290, 120);
  vertex(250, 120);
  vertex(230, 140);
  vertex(200, 200);
  vertex(195, 195);
  vertex(225, 135);
  vertex(245, 114);
  vertex(295, 114);
  vertex(328, 143);
  vertex(349, 185);
  vertex(417, 180);
  endShape(CLOSE);

  //WINDOWS
  fill(139, 69, 19);
  stroke(255, 255, 255);
  strokeWeight(4);
  rect(255, 155, 30, 30);
  rect(355, 200, 15, 25);
  rect(380, 198, 15, 25);
  beginShape();
  vertex(240, 253);
  vertex(240, 210);
  vertex(290, 212);
  vertex(285, 256);
  endShape();
  line(240, 210, 285, 255);
  line(290, 212, 240, 255);
  line(355, 200, 370, 225);
  line(380, 200, 393, 220);
  fill(244, 204, 140);
  noStroke();
  rect(257, 170, 26, 13);
}
barn();
