<img width="1440" alt="Screenshot 2025-05-07 at 1 13 22 PM" src="https://github.com/user-attachments/assets/48260239-03d5-4ee0-8546-0360ff0a30a7" />

```
//hy5live
// hydra » p5 (x4)
// get hydra outputs as separate textures into p5
// cc teddavis.org 2024

H.pixelDensity(2)
H.toggle(0)

s0.initImage("https://i.ibb.co/4yTfYV7/taurus-coin.png")
s1.initImage("https://i.ibb.co/tzK8q0Q/badimadar-Medium.jpg")

src(s0)
  .modulateRepeat(osc(12,0.04),10,10)
  .scrollX(()=>time*0.07)
// .kaleid(16)
.scale(1,9/16)
  .out(o0)
  
 src(s1)
 //.thresh()
 //.modulate(osc(2))
 .scrollX(()=>-time*0.07)
 .out(o1)

render() 

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	angleMode(DEGREES)
	P5.zIndex(1)
}

function draw() {
	clear()
	// orbitControl(3)
	// rotateX(frameCount/3)
	noStroke()
	
	H.render() // get hydra o0-o3 as h0-h3
	push()
	translate(-width/2, 0,-190)
	rotateY(60)

	texture(h0)
	plane(height*2,height)
	pop()

	push()
	texture(h1)
	translate(width/2, 0,-190)
	rotateY(-60)
	plane(height*2,height)
	pop()
}
```
