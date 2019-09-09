/*
Voronoi Surface
By Everardo Reyes-Garcia
Based on Voronoi Ripples by Jason Labbe

The size of canvas is adjusted to fit A4 paper sheet format

Click "s" to save diagram as SVG
Click "p" to save diagram as PNG
Click any other key to show / hide lines and points

main.js = blub parameters, animation, color
bob.js = tesselation behavior

*/

var voronoi;
var boundingBox;
var diagram;

var bobCount = 100;
var bobs = [];
var globalHue;
var showPoints = false;
var debug = true;


function setup() {
  createCanvas(min(windowWidth, 400), min(windowHeight, 566), SVG);

  textAlign(CENTER);
  colorMode(HSB, 255);

  globalHue = random(100,140);

  voronoi = new Voronoi();
  boundingBox = {xl:1, xr:width-1, yt:1, yb:height-1};

  for (let i = 0; i < bobCount; i++) {
    bobs[i] = new Bob(random(width), random(height));
  }
}


function draw() {
  background(globalHue,255,255);

  // Simulate bobs.
  for (let i = 0; i < bobs.length; i++) {
    //bobs[i].move();
  }

  // Collect data to draw voronoi.
  let transform = [];

  for (let i = 0; i < bobs.length; i++) {
    transform.push({x:bobs[i].pos.x,
                	y:bobs[i].pos.y,
                	color:color(globalHue, 200, 200, bobs[i].vel.mag()*30)});
  }

  voronoi.recycle(diagram);
  diagram = voronoi.compute(transform, boundingBox);

  for (let i = 0; i < diagram.cells.length; i++) {
    if (!diagram.cells[i].halfedges.length) {
      continue;
    }

    fill(diagram.cells[i].site.color);

    if (debug) {
      stroke(0);
      strokeWeight(0.1);
    } else {
      noStroke();
    }

    // Draw a cell.
    beginShape();
    for (let j = 0; j < diagram.cells[i].halfedges.length; j++) {
      let v = diagram.cells[i].halfedges[j].getStartpoint();
      vertex(v.x, v.y);
    }
    endShape(CLOSE);
  }

  // Draw points.
  if (debug || showPoints) {
    for (let i = 0; i < bobs.length; i++) {
      if (debug) {
        stroke(0, 100);
        strokeWeight(3);
      } else {
        stroke(globalHue, 150, 150, bobs[i].vel.mag()*5);
        strokeWeight(bobs[i].vel.mag()*1.5);
      }

      point(bobs[i].pos.x, bobs[i].pos.y);
    }
  }

  fill(255);
  noStroke();
  let tooltip = "".concat("Click to toggle points.\n",
                          "Press any key to show debugging info.");
  //text(tooltip, 10, 570);
}


function keyPressed() {
  debug = !debug;
  if(key == "s"){
    save("mySVG.svg");
  }
  if(key == "p"){
    save("myPNG.png");
  }
}


function mousePressed() {
  showPoints = !showPoints;
}
