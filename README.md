# perlin_noise
This is a JS repo for messing around with generating terrain using Perlin noise.

What is Perlin noise? (TL;DR Version)
Perlin noise is effectively random noise with relation. Smooth. This is useful for many things where you need psuedo-randomness, without being fully _random_. Take terrain generation, proabably one of the most common of all use cases. If you used true random generation, it would be a spiky hellscape. With Perlin, you get slopes, valleys, and hills. Congrats you understand this equation now:
![image](https://user-images.githubusercontent.com/70603965/135744584-14fcb46a-6d5f-4bcc-b18e-eddd95c82954.png)

## 1 Dimension:
Within one dimension, Perlin noise manifests fairly simply. Imagine a mountain range with a slice taken out, and you have 1D Perlin noise. To be honest, I have no idea if what I have written is mathmatecally accurate Perlin noise in a single dimension, but I assume it's at least close.
![1d_perlin](https://user-images.githubusercontent.com/70603965/135744706-b8dca4b3-6548-45e5-8f4e-754ec08fbd8e.gif)
As the algorithim generates numbers, it uses the last number generated to seed the next, creating the flow from point to point, while still being randomized at the base level. This will simply increment itself for as long as is it is run.

## 2 Dimensions:

