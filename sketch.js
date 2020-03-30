//object syntax
// let ball1 = {x: 100, y: 100, size: 200, vx: 4, vy: 4, color: [23, 16, 87]}
// let ball2 = {x: 200, y: 200, size: 50, vx: 5, vy: 5, color: [237, 170, 242]}
// let ball3 = {x: 300, y: 100, size: 100, vx: -5, vy: 2, color: [252, 172, 230]}
// let ball4 = {x: 100, y: 300, size: 25, vx: 10, vy: 3, color: [220, 194, 240]}
// let ball5 = {x: 10, y: 10, size: 75, vx: 8, vy: 5, color: [185, 213, 250]}
// let ball6 = {x: 20, y: 20, size: 125, vx: 2, vy: 8, color: [117, 255, 156]}
// let ball7 = {x: 10, y: 10, size: 55, vx: 1, vy: 10, color: [0, 0, 255]}


let bouncing_balls = []


function setup() {

    // create a canvas that fills the browser window and attach it to your HTML
    createCanvas(windowWidth, windowHeight).parent('p5')
    // the p5 variables "width" and "height" hold the dimensions of the canvas

for (let i=0; i<3; i++) {

let random_ball = { x: random(0, width),
                    y: random(0, height),
                    size: random(50,200),
                    vsize: random(1,30),
                    vx: random(1,10),
                    vy: random(1,12),
                    color: [random(0,255),random(0,255),random(0,255)]

                }

bouncing_balls.push(random_ball)

  }
}

function draw() {

   background(255,255,255,0)

   for (let ball of bouncing_balls) {

    fill(ball.color)
    stroke(random(0,255), 0, random(0,255))
    strokeWeight(8)
    noFill()
    rect(ball.x,ball.y,ball.size)

    // ball.size += ball.vsize
    //
    // if (ball.size >= 500) {
    //     ball.vsize = -ball.vsize
    // }
    // if (ball.size <= 10){
    //     ball.vsize = -ball.vsize
    // }


    ball.x = ball.x + ball.vx
    ball.y = ball.y + ball.vy

    ball.vy = ball.vy + 0.1

    if (ball.x >= width) {
      ball.vx = -ball.vx
    }

    if (ball.x <= 0) {
      ball.vx = -ball.vx
    }

    if (ball.y >= height) {
      ball.vy = -ball.vy * 1
    }

    if (ball.y <= 0) {
      ball.vy = -ball.vy
    }
  }
}

// if the window is resized, resize the canvas to match
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
