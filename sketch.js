let img;
function preload() {
  img = loadImage('stars.jpg');
}
function setup() {
  createCanvas(675,1200);
  image(img, 0, 0);

}

function draw() {
	fill(50);
	stroke(0);
	quad(300,300,150,450,300,600,450,450);

    fill(250);
	stroke(0);
	quad(300,300,150,450,300,600,250,450);
}