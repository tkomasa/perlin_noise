# perlin_noise
This is a JS repo for messing around with generating Perlin noise.


## What is Perlin noise? (TL;DR Version)
Perlin noise is effectively random noise with relation. Smooth. This is useful for many things where you need psuedo-randomness, without being fully _random_. Take terrain generation, proabably one of the most common of all use cases. If you used true random generation, it would be a spiky hellscape. With Perlin, you get slopes, valleys, and hills. Congrats you understand this equation now:

![image](https://user-images.githubusercontent.com/70603965/135744940-5b7eef66-e70a-4d48-bb58-3eab7962760c.png)


## 1 Dimension:
Within one dimension, Perlin noise manifests fairly simply. Imagine a mountain range with a slice taken out, and you have 1D Perlin noise.

![1d_perlin](https://user-images.githubusercontent.com/70603965/135744706-b8dca4b3-6548-45e5-8f4e-754ec08fbd8e.gif)

As the algorithim generates numbers, it uses the last number generated to seed the next, creating the flow from point to point, while still being randomized at the base level. This will simply increment itself for as long as is it is run, with each and every number being related to the last generated value.

```javascript
for (let x = 0; x < width; x++) {
    stroke(255);
    // let y = random(height);
    let y = noise(xoff) * height;
    vertex(x, y);

    document.getElementById('counter').innerHTML = y; // print to webpage

    xoff += inc;
}
```

Each time a new number is generated, we use that new number, plus the increment, to seed our next number after putting it through `noise()`. This displays in a continuous stream of numbers, flowing from one to the next.


## 2 Dimensions:
Two dimensions, predictably, increases the complexity. Now the newly generated number must be relative to all the positions around it. For a pixel, that is 8 neighbors. Each new value will relative to its surroundings, not just the last generated value. We do this by simply tracking both X and Y within our generation.

```javascript
for (let y = 0; y < height; y++) {
    let xoff = 0;
    for (let x = 0; x < width; x++) {
        let index = (x + y * width) * 4;

        // perlin random
        let r = noise(xoff, yoff) * 255;

        pixels[index + 0] = r;
        pixels[index + 1] = r;
        pixels[index + 2] = r;
        pixels[index + 3] = 255;

        xoff += inc;
    }
    yoff += inc;
}
```

For each coordinate on the XY plane, we can generate the color of it using Perlin noise. This gives us a gradient from white to black by generating an RGB value up to 255. Each pixel gets a greyscale value by just tripling the generated number, i.e. n = 125 ----> rgb(125, 125, 125). Doing this gives us that smooth flow between color, in the same way that 1D generation gives us a smooth flow between Y values.

![2dperlin](https://user-images.githubusercontent.com/70603965/148177274-b0c9c7ac-78b3-4d33-af3f-b812a1716f02.png)

The wonderful thing about this as well is that converting 2D to 3D is incredibly straightforward. The pixel color can be easily translated to a Z value to make a height map. Combined with the already in place X and Y, 3D generation and 2D generation are arguably done the exact same way. 

We can also do fun things like convert height data to vector data, using the same idea of translating to z-values within 3D generation.

![perlin2dflow](https://user-images.githubusercontent.com/70603965/148177132-5a2955f6-22b8-4544-bef9-da11e025045d.gif)
