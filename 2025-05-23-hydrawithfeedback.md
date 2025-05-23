# hydra with image + feedback

<img width="731" alt="Screenshot 2025-05-23 at 11 55 20 PM" src="https://github.com/user-attachments/assets/3333c56f-8f7d-436f-b812-1dcd62cd108c" />


```
s0.initImage("https://i.ibb.co/cSW0TDth/Grounded-Bird-Watching-07-Wahi-Background-Removed.png")

src(s0).diff(src(o0).rotate(()=>Math.sin(time)*0.1).scale(0.91))
  .out(o0)

```
