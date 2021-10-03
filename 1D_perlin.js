let inc = 0.01;
let start = 0;

function setup() {
    createCanvas(1880, 700); // bases random number off size of graph area
}

function draw() {
    // background color
    background(51);

    // make line drawing
    stroke(255);
    noFill();
    beginShape();

    // generate number
    let xoff = start;
    for (let x = 0; x < width; x++) {
        stroke(255);
        // let y = random(height);
        let y = noise(xoff) * height;
        vertex(x, y);

        document.getElementById('counter').innerHTML = y; // print to webpage

        xoff += inc;
    }
    endShape();

    start += inc;
}