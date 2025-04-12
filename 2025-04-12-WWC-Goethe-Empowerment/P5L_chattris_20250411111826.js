// {"P5LIVE":{"name":"chattris","mod":"1744370306660"}} 

let font
let libs = ["https://cdn.jsdelivr.net/npm/@davepagurek/p5.csg@0.0.1", 'https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

H.pixelDensity(1) // 2 = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
// P5.toggle(0) // optionally hide p5

src(s0)
	// .modulateHue(src(o0).scale(1.001), 1)
	// .scale(0.999)
	// .scrollX(0.3)
	
	// .modulate(noize(10))
	// .pixelate(100,100)
	// .modulateScale(o0,0.9)
	// .mask(shape(20, 0.8).scale(1, 9 / 16).pixelate(50,50))
	// .modulate(noize(2).modulateScale(o0,0.9))
	.out(o0)
// sandbox - end

function preload() {
	font = loadFont("includes/demos-data/fonts/RobotoMono-Regular.otf")
}

let chatri;
let mic;
let cam;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);

	chatri = csg(() => {
			rotateX(PI);
			cone(130, 90, 8, 1, false);
		})
		.union(() => {
			cylinder(100, 40, 20);
		})
		.union(() => {
			translate(0, 5);
			sphere(101);
		})
		.union(() => {
			translate(0, -100);
			rotateX(PI);
			cone(50, 40, 12);
		})
		.union(() => {
			translate(0, -105);
			rotateX(TWO_PI);
			// sphere(100);
			cone(15, 60, 8);
		})
		.union(() => {
			translate(0, -135);
			sphere(11);
		})
		.union(() => {
			translate(0, -145);
			cylinder(3, 20);
		})
		.done();


	mic = new p5.AudioIn()
	mic.start()

	// Create a p5.Camera object.
	cam = createCamera();

	// Place the camera at the top-center.
	cam.setPosition(0, -420, 800);
	textSize(70)
	textFont(font)
	textAlign(CENTER, CENTER)
}

function draw() {
	// clear();
	// background(10, 80, 200)
	orbitControl();

	noStroke();
	// lights();
	let micLevel = 1 + mic.getLevel() * 10
	// normalMaterial();
	fill(255,100)
	stroke(10,40)
	let chattris = 5
	translate(0, -width / 2, -60)
	push()

	for(i = 0; i < chattris; i++) {
		translate(0, i + 200, 0)
		// scale(micLevel/2)
		// scale(sin(i+frameCount/200)*2)
		// rotateY(i + frameCount / 160)
		// rotateX(i * frameCount / 160)
		model(chatri);
	}
	pop()

	// push()
	// translate(0,height/2,100)
	// // fill(frameCount/10%255,10)
	// rotateY(frameCount/160)
	// text("code.drift", 0,0)
	// pop()

}