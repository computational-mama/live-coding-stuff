
<img width="856" alt="Screenshot 2025-04-27 at 10 43 48 AM" src="https://github.com/user-attachments/assets/8e48752e-f496-44b1-aa01-1c678ca29521" />

```javascript
//hydra

s0.initImage("https://i.ibb.co/ZzmsLxhh/bottle.png")
s1.initImage("https://i.ibb.co/1kmg5hd/biscuit1.png")

src(s0)
.rotate(-Math.PI/2)
.repeat(4,4)
.modulateScale(src(o1))
.diff(src(s1).scrollX(()=>time*0.3).repeat(2,2,0.4),0.9)
  .out(o0)

osc(8,0.5,0)
.thresh()
// .kaleid()
	.kaleid(68)
  .out(o1)

render(o0)
```
