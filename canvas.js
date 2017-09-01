var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
var x = Math.random() * innerWidth;
var dx = (Math.random() - 0.5) * 10;
var dy = (Math.random() - 0.5) * 10;
var radius  = 50;
var y = Math.random() * innerHeight;
function animate(){
  c.clearRect(0,0,innerWidth,innerHeight);
  requestAnimationFrame(animate);
  c.beginPath();
  c.arc(x + 1,y + 1,radius,0,2*Math.PI);
  c.fill();

  if(x + radius > innerWidth || x - radius < 0){
    dx = -dx;
  }
  if(y + radius > innerHeight || y - radius < 0){
    dy = -dy;
  }

  x += dx;
  y += dy;
}

animate();
