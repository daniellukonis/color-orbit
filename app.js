console.log('attached')
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function resizeCanvas(margin) {
  canvas.width = window.innerWidth - margin
  canvas.height = window.innerHeight - margin
}

resizeCanvas(400)

function clearCanvas() {
  context.save()
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.restore()
}

function radToDeg(rad) {
  return rad * (180 / Math.PI)
}

let angle = 0

function draw() {
  context.save()
  context.lineWidth = 4
  context.translate(canvas.width / 2, canvas.height / 2)
  context.beginPath()
  context.arc(0, 0, 100, 0, 2 * Math.PI)
  context.stroke()
  context.restore()

  context.save()
  context.lineWidth = 4
  context.translate(canvas.width / 2, canvas.height / 2)
  context.rotate(angle)
  context.beginPath()
  context.arc(95, 0, 25, 1.5, 1.5 * Math.PI)
  context.stroke()
  context.restore()

  context.save()
  context.lineWidth = 4
  context.fillStyle = `hsl(${radToDeg(angle)}, 100%, 50%`
  context.translate(canvas.width / 2, canvas.height / 2)
  context.rotate(angle)
  context.beginPath()
  context.arc(97, 0, 20, 0, 2 * Math.PI)
  context.stroke()
  context.fill()
  context.restore()
}


let fps = 30; // Set the desired FPS
let now;
let then = Date.now();
let interval = 1000 / fps;
let delta;

function loop() {
  // Your drawing code here
  clearCanvas()
  draw()
  angle += 0.01

  now = Date.now();
  delta = now - then;

  if (delta > interval) {
    then = now - (delta % interval);
    requestAnimationFrame(loop);
  } else {
    setTimeout(() => {
      requestAnimationFrame(loop);
    }, interval - delta);
  }
}

loop(); // Start the animation loop
