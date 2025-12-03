### Welcome to Udaipur 

<img width="1439" height="718" alt="Screenshot 2025-12-03 at 11 33 35 PM" src="https://github.com/user-attachments/assets/1111a9c2-758c-4346-a584-83b5a870a079" />

```
// p5 = '2'

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox

P5.toggle(0)
s0.initP5()

H.pixelDensity(2)

src(s0)
// .scale(0.6)
// .blend(src(o0),0.2)
// .modulate(noize(130).pixelate(10,10))
.out(o0)

// sandbox
let beats = 60
let welcome = "उदयपुर शहर में आपका स्वागत है"
let welcomeArr;

async function setup() {
	createCanvas(windowWidth, windowHeight)
	cursiveFont = await loadFont(
		"https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap");
	frameRate(60)
	textFont(cursiveFont)
	textWeight(600)
	// textSize(110)
	textSize(min(width, height) * 0.12);

	textAlign(CENTER, CENTER)
	welcomeArr = welcome.split(" ");
	// console.log(welcomeArr)
}

function draw() {
	// background(233, 233, 100)
	clear()
	fill(0)
	stroke(255)
	// strokeWeight(14)
	let bpm = frameCount % int(60 / (beats / 60))
	// circle(500,500,bpm)
// translate(width / 2, height / 2)
	let a = frameCount / 30 % welcomeArr.length
	let c = floor((a) % welcomeArr.length)
	textSize(min(width, height) * 0.16);
	const numRows = 5;
	for(let row = 0; row < welcomeArr.length; row++) {
		const x = width / 2;
		const y = map(row, 0, welcomeArr.length - 1, height * 0.25, height * 0.75);
		textFont('Khand', {fontVariationSettings: `wght ${map(sin(millis() * 0.005 - row), -1, 1, 300, 700)}`});
		text(welcome, x ,y);
		//welcomeArr[ceil(frameCount/50)%welcomeArr.length]
	}
}
```

### cheee

<img width="1440" height="716" alt="Screenshot 2025-12-04 at 12 00 52 AM" src="https://github.com/user-attachments/assets/790dc14f-6ab8-4352-83bb-a6f40d9edf3e" />

```
//p5 = '2'
let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox

P5.toggle(0)
H.pixelDensity(2)

s0.initP5()

src(s0)
// .layer(o0)
// .scale(1.01)
// .modulateScale(src(o1))
// .modulate(noize(20).pixelate(10,10))
// .scrollX(()=>sin(time/5))
.out(o0)

osc()
.thresh()
.kaleid(50)
.mask(shape(50,0.9))
.scale(1,9/16)
// .diff(src(o0))
.out(o1)

render(o0)
// sandbox
let welcome = "उदयपुर शहर में आपका स्वागत है"

let chi = "छी"
let thoo = "थू"
let aay="आय"
let hay="हाय"
let arr = [chi, thoo, aay, hay]
let b = 5
let cursiveFont;

async function setup() {
	createCanvas(windowWidth, windowHeight)
	// angleMode(DEGREES)
	cursiveFont = await loadFont(
		"https://fonts.googleapis.com/css2?family=Modak&display=swap");
	frameRate(60)
	textFont(cursiveFont)
	// textWeight(500)
	textSize(230)
	textAlign(CENTER,CENTER)
}

function draw() {
	background(255)
	// clear()
	fill(90)
	stroke(255)
	let angle; 
	translate(width / 2, height / 2);
	// for (i=0;i<190;i++){
	// // formula r = a + b * angle

	// let angle = sqrt(i) * b;
 //   let r = b * angle + sin(frameCount/10);
 //   let x = r*cos(angle);
 //   let y = r*sin(angle);
    
 //   push();
 //   translate(x, y);
 //   if (i != 0) {
 //     rotate(angle);
 //   }
    text(arr[ceil(frameCount/50)%arr.length],0,0)
 //   pop();
    	

	// }
}

```

### Ganda paani

  ![Screen Recording 2025-12-03 at 11 50 17 PM processed](https://github.com/user-attachments/assets/2f8c65db-93a0-4a3e-99fc-81cec6e1aefa)

```
let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']
let bottle;
let biscuit;
 let x = 0;
        let y = 0;
// sandbox

s0.initP5()

src(s0)
.modulate(noize(2))
.out()

// noize(2)
		// .invert()
		// .modulate(osc(() => sin(time * 0.01) + 30).rotate(0.4))
		// .color(0.1, 0.2, 0.9)
		// .diff(src(s0).modulate(noize(1)),0.8)
	// .out()
// sandbox

function preload() {
	bottle = loadImage('/includes/demos-data/images/bottle.png')
	biscuit = loadImage('/includes/demos-data/images/biscuit.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)
}

function draw() {
	// background('blue')
	// clear()
	
	 x += (mouseX - x) * 0.04;
     y += (mouseY - y) * 0.04;
	image(biscuit,x+70,y,300,300)
	image(bottle, x,y,300,300)
	image(biscuit,x+170,y+170,300,300)
	image(bottle, x+170,y,300,300)
}
```


### All combined
![Screen Recording 2025-12-04 at 12 11 41 AM processed](https://github.com/user-attachments/assets/a04c429e-6fb4-421b-b50d-91707bc63200)


```
// p5 = '2'

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

let badimadar = "https://i.ibb.co/tzK8q0Q/badimadar-Medium.jpg"
let ambapole = "https://i.ibb.co/YvSy39L/cutout-ambapole.png"
let badiImg;

// sandbox
// H.toggle(1)
P5.toggle(0) // optionally hide p5

// H.pixelDensity(2) // 2x retina
s0.initP5()
s1.initImage("https://i.ibb.co/tzK8q0Q/badimadar-Medium.jpg")
s2.initImage("https://i.ibb.co/rGmPh773/cowtiger.jpg")
// s3.initImage("https://i.ibb.co/DPGXNvNV/IMG-2720-Large.png")
s3.initImage("https://i.ibb.co/j97HHDPj/IMG-20250206-122138-Background-Removed.png")

src(s1)
// .blend((src(s2).scale(0.6)),[0,1])
// .mask(s0)
.layer(src(s3).scale(0.6))
.scrollX(()=>time*.12)
.mask(shape(4,0.6,0.006))
.mask(shape(2).invert().repeat(1,8)
.modulate(osc(10))
)
.repeat(2,1)
// .scrollX(()=>time*.12)
.out()

// sandbox

let beats = 60
let welcome = "उदयपुर शहर में आपका स्वागत है"
let welcomeArr;

async function setup() {
	createCanvas(windowWidth, windowHeight)
	cursiveFont = await loadFont(
		"https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap");
	frameRate(60)
	textFont(cursiveFont)
	textWeight(600)
	// textSize(110)
	textSize(min(width, height) * 0.12);

	textAlign(CENTER, CENTER)
	welcomeArr = welcome.split(" ");
	// console.log(welcomeArr)
}

function draw() {
	background(255)
	// fill(0)
	// stroke(255)
	// strokeWeight(14)
	let bpm = frameCount % int(60 / (beats / 60))
	// circle(500,500,bpm)
	let a = frameCount / 30 % welcomeArr.length
	let c = floor((a) % welcomeArr.length)
	textSize(min(width, height) * 0.16);

	const numRows = 5;
	for(let row = 0; row < numRows; row++) {
		const x = width / 2;
		const y = map(row, 0, numRows - 1, height * 0.25, height * 0.75);
		textFont('Khand', {
			fontVariationSettings: `wght ${map(sin(millis() * 0.005 - row), -1, 1, 300, 700)}`
		});
		text(welcome, x, y);
	}
}
```
