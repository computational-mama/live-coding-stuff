hydra

---
12-04-2025

part 1 is in `o3` output and part 2 is the birds, ends with WWC text of the chorao set
```
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// computational mama
await loadScript("https://asmatzaile.github.io/hyper-hydra/hydra-text.js")


hydraText.font = "sans-serif"
hydraText.lineWidth = "5%"
hydraText.align = "center"

str = "women\n wilding\n code"

s0.initImage("https://i.ibb.co/cSW0TDth/Grounded-Bird-Watching-07-Wahi-Background-Removed.png")

//part 1
shape(20,0.01,0.5)
.scale(0.3)
.scrollY(()=>(-time/4))
.scale(0.9)
.rotate(45)
.repeat(15,15,0.6)
// .scale(0.909)
//pixelate(150,150)
.scale(5.0)
.modulateScale(o3)
.out(o3)

src(s0)
  .rotate(()=>time)
  .repeat(3,3,0.5)
// .scale(()=>a.fft[0]*1.2)
.scale(1,9/16)
  .out(o0)

osc(8,0.1,10)
// .kaleid(20)
.color(2.5,1,80)
.modulate(noise(2))
.modulate(osc(5,0.3).rotate(180))
// .modulateKaleid(osc(3))
.scale(1,9/16)
// .mask(o0,0.2)
// .layer(o2,0.2)
// .mask(shape(70,0.2,0.5).modulate(noise(0)).scrollX(()=>Math.sin(time)*0.4).scale(1,9/16))
// .mask(noise(9))
// .modulatePixelate(noise(14),100,200)
//.diff(o2)
  .out(o1)

render(o1)

solid(.1,.2,.9)
	.blend(src(o2).scale(1.02).color(0,0,0.9))
	.layer(text("women\n wilding\n code")
//            .modulate(osc(10))
          )
// 	.diff(strokeText("women\n wilding\n code").modulateScale(noise(3,0.2), .4))
	.out(o2)
```


