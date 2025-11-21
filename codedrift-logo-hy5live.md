# code.drift logo in hy5live (white)

<img width="5760" height="3176" alt="hydra-2025-11-21-23 29 51" src="https://github.com/user-attachments/assets/55e06ff3-544a-4b9a-b594-c47a0bf819ba" />


```javascript
// code hydra [+/-] p5 or drag + drop .js hydra/p5 file(s) here
s0.initP5() 
P5.toggle()

H.pixelDensity(4)

src(o0)
	.layer(src(s0))
	// .modulateScale(src(s0).pixelate(100, 100), .5)
	.scale(0.99)
	.scrollY(1.005)
	// .scrollX(1.003)
	// .rotate( ()=>sin(frameCount*.01)*.01 ) // use p5 vars!
	.modulateScale(osc(10,0.01), .002)
 	// .mask(shape(99,0.8).scale(1,9/16))
	.out()
	

let font = googleFont("Anek Devanagari")
let hncode = "कोड"

function setup() {
	createCanvas(windowWidth, windowHeight)
	textAlign(CENTER,CENTER)
	textFont(font)
	textStyle(BOLD)
	textAlign(CENTER,CENTER)
	angleMode(DEGREES)
}

function draw() {
	background(255)
	clear()
	fill(255)
    stroke(140,90,200,180)
	strokeWeight(3)
	textSize(width / 6)

	let offset = 10
	text(hncode, width / 2 + sin(frameCount * 2) * offset, -30+height / 2 + cos(frameCount * 2) * offset)
	text("drift", width / 2 + sin(frameCount * 2) * offset, 120+height / 2 + cos(frameCount * 2) * offset)
	// pop()
	
	
}


function googleFont(fontName) {
	let link = document.createElement("link")
	link.href = "https://fonts.googleapis.com/css?family=" + encodeURI(fontName) + '&display=swap'
	link.rel = "stylesheet"
	document.head.appendChild(link)
	return fontName
}
```
