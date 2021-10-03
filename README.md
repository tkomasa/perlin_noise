# perlin_noise
This is a JS repo for messing around with generating terrain using Perlin noise.


## What is Perlin noise? (TL;DR Version)
Perlin noise is effectively random noise with relation. Smooth. This is useful for many things where you need psuedo-randomness, without being fully _random_. Take terrain generation, proabably one of the most common of all use cases. If you used true random generation, it would be a spiky hellscape. With Perlin, you get slopes, valleys, and hills. Congrats you understand this equation now:

![image](https://user-images.githubusercontent.com/70603965/135744940-5b7eef66-e70a-4d48-bb58-3eab7962760c.png)


## 1 Dimension:
Within one dimension, Perlin noise manifests fairly simply. Imagine a mountain range with a slice taken out, and you have 1D Perlin noise.

![1d_perlin](https://user-images.githubusercontent.com/70603965/135744706-b8dca4b3-6548-45e5-8f4e-754ec08fbd8e.gif)

As the algorithim generates numbers, it uses the last number generated to seed the next, creating the flow from point to point, while still being randomized at the base level. This will simply increment itself for as long as is it is run, with each and every number being related to the last generated value.


## 2 Dimensions:

