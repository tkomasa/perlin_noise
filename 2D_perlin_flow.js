let inc = 0.1;
var scl = 10;
var cols, rows;

var fr; //framerate counter

function setup() {
    createCanvas(600, 600);
    cols = floor(width / scl);
    rows = floor(height / scl);
    fr = createP('') //framerate counter
}

function draw() {
    let yoff = 0;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
            var index = (x + y * width) * 4;
            var r = noise(xoff, yoff) * 255;
            xoff += inc;

            fill(r)
            rect(x * scl, y * scl, scl, scl)
        }
        yoff += inc;
    }

    fr.html(floor(frameRate())); //framerate counter
}