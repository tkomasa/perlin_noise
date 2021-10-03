let inc = 0.01;
let start = 0;

function setup() {
    createCanvas(1200, 800); // bases random number off size of graph area
}

function draw() {
    background(51);

    stroke(255);
    noFill();
    beginShape();
    let xoff = start;
    for (let x = 0; x < width; x++) {
        stroke(255);
        // let y = random(height);
        let y = noise(xoff) * height;
        vertex(x, y);

        document.getElementById('counter').innerHTML = y;

        xoff += inc;
    }
    endShape();

    start += inc;
}