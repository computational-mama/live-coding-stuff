
<img width="1440" alt="Screenshot 2025-05-07 at 1 13 13 PM" src="https://github.com/user-attachments/assets/6079912d-c206-4efa-8dda-78f209ad6d9c" />

```
s0.initImage("https://i.ibb.co/tzK8q0Q/badimadar-Medium.jpg")

shape(4,0.6,0.06)
// .mask(src(s0).scrollX(()=>time*0.1))
.mask(shape(2).invert().repeat(1,8))
.repeat(2,1)
.mask(src(s0).scrollX(()=>time*0.1))
  .out(o0)
```
