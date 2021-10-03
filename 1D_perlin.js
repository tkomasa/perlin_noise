let inc = 0.01;
let start = 0;

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(51);

    stroke(255);
    noFill();
    beginShape();
    let xoff = start;
    for (let x = 0; x < width; x++) {
        stroke(255);
        let n = map(noise(xoff), 0, 1, -50, 50);
        let s = map(sin(xoff), -1, 1, 0, height);
        let y = s + n;

        // let y = random(height);
        // let y = height / 2 + sin(xoff) * height / 2;
        // let y = noise(xoff) * 100 + height / 2 + sin(xoff) * height / 2;
        vertex(x, y);

        xoff += inc;
    }
    endShape();

    start += inc;
}