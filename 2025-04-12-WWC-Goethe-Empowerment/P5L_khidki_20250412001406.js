// {"P5LIVE":{"name":"khidki","mod":"1744416846491"}} 

let m = 0;
let img

function preload() {
	img = loadImage("https://i.ibb.co/4WdsgFd/horse.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	rectMode(CENTER);
	angleMode(DEGREES);
	frameRate(60);
}

function draw() {
	background(90,30,120);
	camera(200*cos(frameCount),900*sin(frameCount),900)
	camera(200,900,900)
	let a = 20;
	// translate(-width / 2, -height / 2);
	push();
	for(i = 0; i < 360; i += a) {
		let r = 90;
		let y = sin(i) * r;
		let x = cos(i) * r;
		fill(x,0,130,50);
		// noStroke();
		translate(x, 0, y);
		rotateX(sin(frameCount));
// rotateY(frameCount/10)
		khidki(0, 0);
	
	}
	pop();
}

function khidki(x, y) {
	// noFill()
	beginShape();
	vertex(0 + x, 200 + y, 0);
	vertex(0 + x, 100 + y, 0);
	bezierVertex(10 + x, 10 + y, 40 + x, 40 + y, 75 + x, 0 + y);
	bezierVertex(110 + x, 40 + y, 140 + x, 10 + y, 150 + x, 100 + y);
	vertex(150 + x, 200 + y);
	endShape(CLOSE);
}