
12-04-2025
## parts of the chorao set (some parts)
```
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// computational mama
await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")


hydraText.font = "sans-serif"
hydraText.lineWidth = "2%"
hydraText.align = "center"

str = "empowerment\n wilding\n code"

s0.initImage("https://i.ibb.co/cSW0TDth/Grounded-Bird-Watching-07-Wahi-Background-Removed.png")

src(s0).
rotate(()=>time).repeat(5,5,0.5)
.scale(1,9/16)
  .out(o0)

osc(8,0.1,10)
// .kaleid(20)
// .color(2.5,-2,80)
.modulate(noise(2))
// .modulate(osc(5,0.3).rotate(180))
// .modulateKaleid(osc(3))
// .scale(()=>a.fft[0])
.scale(1,9/16)
// .mask(o0,0.3)
// .layer(o2,0.2)
// .mask(shape(3,0.2,0.5).modulate(noise(0)).scrollX(()=>Math.sin(time)*0.4).scale(1,9/16))
// .mask(noise(9))
// .modulatePixelate(noise(14),100,200)
// .diff(o2)
  .out(o1)

render(o1)

solid(.1,.2,.9)
	.blend(src(o2).scale(1.02).color(0,0,0.9))
// 	.layer(text("empowerment\n wilding\n"))
	.diff(strokeText("empowerment\n wilding\n").modulateScale(noise(3,0.1), .4))
	.out(o2)
```
