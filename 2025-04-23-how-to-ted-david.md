```javascript
// p5 » hydra
// pass p5 into hydra
// built on HY5Live

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

H.pixelDensity(2) // 2x retina


let c1, c2, c3, c4

src(s0)
.blend(o0,0.45)
	.modulate(voronoi(5))
	// .modulateScale(osc(3))
	.scrollX(()=>time/60)
	.scrollX(()=>time/60)
	// .scrollY(()=>time/60)
	.scale(0.999)
	.out(o0)


function preload() {
	c2 = loadImage("https://i.ibb.co/cSW0TDth/Grounded-Bird-Watching-07-Wahi-Background-Removed.png")

}

function setup() {
	createCanvas(windowWidth, windowHeight)
	angleMode(DEGREES)
	c2.resize(100, 100)
}

function draw() {
	background(80,90,200)
	translate(width / 2, height / 2)
	for(i = 0; i < 360; i += 30) {
		let r = 300*sin(frameCount/10)
		let m = frameCount%60
		let x1 = r * cos(i-frameCount/10+m)
		let y1 = r * sin(i-frameCount/10+m)
		image(c2, x1, y1)
	}

	textSize(90)
	textAlign(CENTER,CENTER)
	fill(80,90,200)
	stroke(255)
	strokeWeight(4)
	text("code.yatra",200,0)
	text("ted davis",-200,70)
	text("How to HY5",0,-130)
		textSize(50)
	text("28/04/2025T",0,180)
	text("4pm IST",250,300)
	
}
```
