
<img width="1440" alt="Screenshot 2025-04-23 at 4 36 39 PM" src="https://github.com/user-attachments/assets/c9b1fa0b-cf3c-456d-a525-072cd7017323" />


Written in p5live with hydra
```javascript
let font = googleFont('Cairo')
let hncode = "कोड"
let gjcode = "કોડ "
let mrcode = "कोड"
let encode = "code"
let hnyatra ="यात्रा"
let gjyatra ="યાત્રા"
let mryatra = "यात्रा"
let enyatra = "yatra"

let codeArr = [hncode,gjcode,mrcode,encode]
let yatraArr = [enyatra,mryatra,gjyatra,hnyatra]

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js']

// hydra canvas + init
let hc = document.createElement('canvas')
hc.width = window.innerWidth
hc.height = window.innerHeight
document.body.appendChild(hc)
let hydra = new Hydra({detectAudio: false,canvas: hc})
hydra.setResolution(window.innerWidth*2, window.innerHeight*2) // retina res
noize = noise // use noize() since noise() is taken by p5js

let pg // store hydra texture

// sandbox - start
src(o0)
	.layer(src(s0))
	// .modulateScale(src(s0).pixelate(15, 10), .5)
	.scrollY(1.01)
	.scrollX(1.01)
	// .rotate( ()=>sin(frameCount*.01)*.01 ) // use p5 vars!
	.modulateScale(osc(3, .01), .02)
	.scale(0.996)
	.out()
// sandbox - stop

function preload() {
}

function setup() {
	createCanvas(windowWidth, windowHeight)

	// pass p5 canvas to hydra as s0 source
	s0.init({src: drawingContext.canvas})
	pg = createGraphics(hc.width, hc.height)
	angleMode(DEGREES)
	background(0)
	textFont(font)
	// textStyle(BOLD)
	textAlign(CENTER, CENTER)
}

function draw() {
	pg.drawingContext.drawImage(hc, 0, 0, pg.width, pg.height) // update texture

	clear()
	fill(0)
	stroke(140,90,200,180)
	strokeWeight(4)
	textSize(width / 6)

	let offset = 10
	text(hncode, width / 2 + sin(frameCount * 2) * offset, -70+height / 2 + cos(frameCount * 2) * offset)
	text(enyatra, width / 2 + sin(frameCount * 2) * offset, 60+height / 2 + cos(frameCount * 2) * offset)
}

function keyPressed(){
	if(key == 'S'){
		pg.save('P5LIVE_hydra.png') // save hydra texture
	}
}

function googleFont(fontName) {
	let link = document.createElement("link")
	link.href = "https://fonts.googleapis.com/css?family=" + encodeURI(fontName) + '&display=swap'
	link.rel = "stylesheet"
	document.head.appendChild(link)
	return fontName
}
```
