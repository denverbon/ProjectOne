let img;
function preload() {
  img = loadImage('stars.jpg');
}
function setup() {
  createCanvas(675,1200);
 

}
let value = 0;
function draw() {
 image(img, 0, 0);
// keyPressed();
	drawMoon(value);


}

function drawMoon(phase){
  	let p = phase;
    //moon shadow
      fill(25);
  	  stroke(0);
  	  quad(300,300,150,450,300,600,450,450);

    if (phase <= 15){
      p = map(phase,0,15,150,450);
    
      fill(250);
  	  stroke(0);
  	  quad(300,300,150,450,300,600,p,450);
    }
    if (phase >= 15){
      p = map(phase,15,30,150,450);

      fill(250);
      stroke(0);
      quad(300,300,p,450,300,600,450,450);
    }


}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = value - 1;
  } else if (keyCode === RIGHT_ARROW) {
    value = value + 1;
  }
}