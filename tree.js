let treeX = 200;
let treeY = 200;
let treeS = 1;

background(255, 255, 255);

function tree() {
  //TRUNK
  fill(139, 69, 19);
  stroke(0, 0, 0);
  strokeWeight(2);
  beginShape();
  vertex(355, 400);
  bezierVertex(380, 410, 420, 410, 445, 400);
  bezierVertex(420, 340, 425, 260, 430, 220);
  vertex(370, 220);
  bezierVertex(375, 260, 380, 340, 355, 400);
  endShape();
}
tree();
