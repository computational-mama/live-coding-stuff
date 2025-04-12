// {"P5LIVE":{"name":"darbari-main","mod":"1744417445938"}} 

let libs = ["includes/libs/p5.variableFont.js"]


let beats = 60
let m = 0
let jisko = "जिसको अकेले में"
let haan = "हाँ हाँ कर"
let ghar = "घर जाने दे"
let haankarat = "हाँ हाँ करत"
let jiskoArr;
let haanArr

function preload() {

	ladyRight = loadImage("https://i.ibb.co/4WdsgFd/horse.png")
	ladyLeft = loadImage("https://i.ibb.co/bBqJnbV/Pari-on-a-Composite-Horse-19th-century.png")


	loadGoogleFont("Anek Devanagari", {
		wght: [200, 800],
		wdth: [75, 100],
	});

}

function setup() {
	createCanvas(windowWidth, windowHeight)
	angleMode(DEGREES)
	frameRate(60)
	imageMode(CENTER)
	textAlign(CENTER, CENTER)
	jiskoArr = split(jisko, " ")
	haanArr = split(haan, " ")
	haanKArr = split(ghar, " ")
}

function draw() {
	background(255, 10, 140,10)
	let bpm = frameCount % int(60 / (beats / 60))

	const n = 75 + (sin(frameCount * 0.05) * 0.5 + 0.5) * 25;

	fill("yellow")

let m = 200 + (sin(frameCount * 0.008) *  bpm) * 600;
	textFont("Anek Devanagari", 260, {
		wdth: 75,
		wght: m
	});
	let a = frameCount / 30 % jiskoArr.length
	// image(ladyRight, bpm*width/4, 280,ladyRight.width/2,ladyRight.height/2)
	// text(jiskoArr[a],250+a*(width)/jiskoArr.length,height/2);
	// text(haanArr[a],450+a*(width/1.6)/jiskoArr.length,height/2+200);
	// image(ladyLeft, bpm*width/4, 600,ladyLeft.width/2,ladyLeft.height/2)
	// for(j = 0; j < height; j += 190) {
	// 	for(i = 0; i < width; i += 190) {
	// 			let m = 200 + (sin(frameCount * 0.008) *  bpm) * 600;
	// textFont("Anek Devanagari", 60, {
	// 	wdth: m,
	// 	// wght: m+j
	// });
	// fill(120,10,190,90)
	// 		push()
	// 		translate(i, j)
	// 		rotate(sin(frameCount+i)*100)
	// 		text(haanKArr[1], 0,0);
	// 		pop()
	// 	}
	// }

	if(bpm == 0) {
		m += 30
	push()
	// image(ladyRight, m, height / 2)
	scale(-1, 1)
	// image(ladyRight, -width + m, height / 2)

	pop()
	
	
	}
	
	
	fill(random(255),random(255),random(255))
	noStroke()
	khidki(random(width-90),random(height-90))
}

function khidki(x, y) {
	// noFill()
	beginShape();
	vertex(0 + x, 200 + y);
	vertex(0 + x, 100 + y);
	bezierVertex(10 + x, 10 + y, 40 + x, 40 + y, 75 + x, 0 + y);
	bezierVertex(110 + x, 40 + y, 140 + x, 10 + y, 150 + x, 100 + y);
	vertex(150 + x, 200 + y);
	endShape(CLOSE);
}