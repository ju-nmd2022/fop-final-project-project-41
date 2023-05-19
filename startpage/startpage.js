function draw() {
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
