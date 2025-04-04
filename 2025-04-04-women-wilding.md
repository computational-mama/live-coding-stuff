## OUTPUT

<img width="600" alt="Screenshot 2025-04-04 at 7 23 01 PM" src="https://github.com/user-attachments/assets/8846b97e-bdd4-4712-83e2-34ca889fe02c" />

```
//hydra
// women wilding code - for Goethe Empowerment
//https://hydra.ojack.xyz/?sketch_id=eiSWNQrgFbY4dndW

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// computational mama
await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")


hydraText.font = "sans-serif"
hydraText.lineWidth = "2%"
hydraText.align = "center"

str = "women\n wilding\n code"

s0.initImage("https://i.ibb.co/DWG4QQy/invertmask-white.png")

src(s0).repeat(3,3,0.5)
.scale(1,9/16)
  .out(o0)

osc(18,0.1,10)
.color(2.5,-2,80)
.modulate(osc(5,0.3).rotate(180))
.modulateKaleid(osc(3))
.scale(0.5)
.scale(1,9/16)
.mask(o0,0.3)
// .layer(o2,0.2)
// .mask(shape(24,0.2,0.5).modulate(noise(0)).scrollX(()=>Math.sin(time)*0.4).scale(1,9/16))
// .mask(noise(9))
.modulatePixelate(noise(14),100,200)
.diff(o2)
  .out(o1)

solid(.1,.2,.9)
	.blend(src(o2).scale(1.02).color(0,0,0.9))
	.layer(text(str))
	.diff(strokeText(str).modulateScale(noise(3,0.1), .4))
	.out(o2)


render(o1)
```


