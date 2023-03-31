background(255, 255, 255);
let hayX = 200;
let hayY = 200;
let hayS = 1;

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

hay(rotate(0.1));
