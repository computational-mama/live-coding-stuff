// {"P5LIVE":{"name":"bmwalker","mod":"1745876338930"}} 

let libs = ["https://tetunori.github.io/BMWalker.js/dist/v0.6.1/bmwalker.js", "includes/libs/bmwalker.js", 'https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)
	// .add(src(o0).scale(1.03), .9)
	// .modulateScale(noize(1000), .1)
	.out()
// sandbox - end



const W = 360;

// Biological motion walker instance
const bmw = new BMWalker();

function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER)
}

function draw() {
	background(20, 190, 100);
	// Set walker parameters.
	const azimuth = 0;
	const angularVelocity = Math.PI / 4;
	const elevation = Math.PI / 4;
	const roll = 0;
	bmw.setCameraParam(azimuth, angularVelocity, elevation, roll);
	translate(width / 2, height / 2);
	stroke(10)
	strokeWeight(3)
	// Get current markers
	const walkerHeight = 500;
	const markers = bmw.getMarkers(walkerHeight);
	fill(20, 190, 100, 150)
	// Draw markers
	markers.forEach((m) => {
		circle(m.x, m.y, 40);
	});

	const lineMarkers = bmw.getLineMarkers(walkerHeight);

	// Draw lines
	// stroke(200)
	// lineMarkers.forEach((m) => {
	// 	line(m[0].x, m[0].y, m[1].x, m[1].y);
	// });
}