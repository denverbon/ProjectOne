let img;
function preload() {
  img = loadImage('stars.jpg');
}
function setup() {
  createCanvas(675,1200);
 

}

function draw() {
 image(img, 0, 0);
	drawMoon(2);


}

function drawMoon(phase){
  	let p4 = phase;
    
    fill(45);
  	stroke(0);
  	quad(300,300,150,450,300,600,450,450);

    if (phase < 15){
      p4 = map(phase,0,14,150,450);
    
    fill(250);
  	stroke(0);
  	quad(300,300,150,450,300,600,p4,450);
  }
    if (phase)
}
