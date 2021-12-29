// Coding Challenge 127: Brownian Motion Snowflake
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/127-brownian-snowflake.html
// https://youtu.be/XUA8UREROYE
// https://editor.p5js.org/codingtrain/sketches/SJcAeCpgE

let current;
let snowflake = [];
let c1;
let c2;
let angle = 2;
let size =2;
let viewportHeight = window.innerHeight*0.97;
let viewportWidth = window.innerWidth*0.97;
let sizing;


if (viewportHeight>viewportWidth) {
  sizing = viewportHeight;
} else {
  sizing = viewportWidth;
}




function setup() {
  var canvas = createCanvas(viewportHeight, viewportHeight);
  canvas.parent('sketch-holder');
  current = new Particle(width / size, 0);
  angle = random(1,6);
  size = random(2,4);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(PI/angle);
  let count = 0;
  while (!current.finished() && !current.intersects(snowflake)) {
    current.update();
    count++;
  }

  // If a particle doesn't move at all we're done
  // This is an exit condition not implemented in the video
  if (count == 0) {
    noLoop();
    console.log('snowflake completed');
  }

  snowflake.push(current);
  current = new Particle(width / size, 0);
  drawParticle(current);

}

function drawParticle(particle) {
  for (let i = 0; i < 6; i++) {
    rotate(PI / 3);
    particle.show();
    for (let p of snowflake) {
      p.show();
    }

    push();
    scale(1, -1);
    particle.show();
    for (let p of snowflake) {
      p.show();
    }
    pop();
  }
}

function resetSketch() {
  window.location.reload();
}
