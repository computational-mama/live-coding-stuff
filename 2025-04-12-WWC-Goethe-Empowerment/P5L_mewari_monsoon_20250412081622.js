// {"P5LIVE":{"name":"mewari_monsoon","mod":"1744445782133"}} 

/*	
	_hydra_scope // cc ojack.xyz + teddavis.org 2021
	pass p5 canvas into hydra as source sketch surface manipulations
	+ see HY5 demos for better hydra + p5 bridge
*/


let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js']

// hydra canvas + init
let hc = document.createElement('canvas')
hc.width = window.innerWidth
hc.height = window.innerHeight
document.body.appendChild(hc)
let hydra = new Hydra({detectAudio: false,canvas: hc})
hydra.setResolution(window.innerWidth*2, window.innerHeight*2) // retina res
noize = hydra.synth.noise // use noize() since noise() is taken by p5js

let pg // store hydra texture

// sandbox - start
noize()
// .modulateScale(noize(2)).color(0,0.1,2).blend(osc(1,-0.1).colorama(2))
// .mask(shape(30,0.8,0.2)
// .pixelate(150,150)
// .scale(1,9/16))
.out(o1)

src(o0)
	.layer(src(s0))
	.scale(0.996)
	// .scrollY(.005)
	// .modulateScale(noize(1))
	.modulateScale(osc(2,0.03))
	.modulate(src(s0))
	// .mask(shape(20,0.8))
	.out()
// sandbox - stop

let shiksha = "न शिक्षा देनी\,\n न शिक्षा लेनी"

let mic;
let micSize;

function preload() {
		img = loadImage("https://i.ibb.co/tzK8q0Q/badimadar-Medium.jpg")
		ambapole = loadImage("https://i.ibb.co/YvSy39L/cutout-ambapole.png")
		font = loadFont("includes/demos-data/fonts/RobotoMono-Regular.otf")
		paint = loadImage("https://i.ibb.co/DPGXNvNV/IMG-2720-Large.png")
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	mic = new p5.AudioIn()
	mic.start()
	// pass p5 canvas to hydra as s0 source
	s0.init({src: drawingContext.canvas})
	pg = createGraphics(hc.width, hc.height)

	background(0)
	textFont("Jaini")
	textAlign(CENTER, CENTER)
	// imageMode(CENTER)
}

function draw() {
	pg.drawingContext.drawImage(hc, 0, 0, pg.width, pg.height) // update texture
	clear()
	fill(220,100,200)
	stroke(255,40)
	strokeWeight(12)
	
	micSize = mic.getLevel()*1000
	
	textSize(100+micSize)

	let offset = 10
	// image(ambapole,0,0,width,height)
	text(shiksha, width / 2 + sin(frameCount * .03) * offset, height / 2 + cos(frameCount * .03) * offset)
	

	// push()
	// translate(width / 2,height/2)
	// image(paint,100,0,paint.width/20*micSize,paint.height/20*micSize)
	// scale(-1,1)
	// image(paint,100,0,paint.width/20*micSize,paint.height/20*micSize)
	// pop()
}


function googleFont(fontName) {
	let link = document.createElement("link")
	link.href = "https://fonts.googleapis.com/css?family=" + encodeURI(fontName) + '&display=swap'
	link.rel = "stylesheet"
	document.head.appendChild(link)
	return fontName
}