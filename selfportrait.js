function setup() {
  let cnv = createCanvas(600, 600);
}


function eyes(){
  fill(51);
  ellipse(200, 300, 80, 90);
  ellipse(330, 300, 80, 90);
  fill(255);
  // nostroke()
  ellipse(200, 278, 45, 45);
  ellipse(330, 278, 45, 45);
  // rect(172, 315, 55, 20, 5, 5 ,20 ,20);
  // rect(302, 315, 55, 20, 5, 5 ,20 ,20);
  strokeWeight(13);
  stroke(255);
  noFill();
  arc(200, 320, 55, 45, TWO_PI, PI, OPEN);
  arc(330, 320, 55, 45, TWO_PI, PI, OPEN);
  strokeWeight(1);

}

function brow(){
  stroke(0);
  strokeWeight(10);
  noFill();
  arc(200, 265, 75, 55, PI, TWO_PI, OPEN);
  arc(330, 265, 75, 55, PI, TWO_PI, OPEN);
  strokeWeight(1);
  arc(190, 180, 45, 55, PI, TWO_PI, OPEN);
  arc(340, 180, 45, 55, PI, TWO_PI, OPEN);
}

function mouth(){
  strokeWeight(1);
  stroke(0);
  arc(243, 400, 45, 50, TWO_PI, PI, OPEN);
  arc(287, 400, 45, 50, TWO_PI, PI, OPEN);
}
  
function face(){
  strokeWeight(2);
  stroke(0);
  fill(255);
  // ellipse(265,270, 400, 380);
  rect(85,130, 360,335, 55, 45, 20,55);
}
  
function hair(){
  noStroke()
  fill(0);
  arc(265, 220, 400, 350, PI, TWO_PI, OPEN);
}
function draw() {
  background(255);
  face();
  hair();
  brow();
  eyes();
  mouth();
  
}
