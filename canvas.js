var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse = {
  x:undefined,
  y:undefined
}
var maxR = 40;
var minR = 5;
var colorArr = [
  '#f93671',
  '#ffc435',
  '#95f228',
  '#2ffbae',
  '#f72af9'

];
window.addEventListener('mousemove', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse);
});

function Circle(x,y,dx,dy,r){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.r = r;
  this.color = colorArr[Math.floor(Math.random() * colorArr.length)];
  this.draw = function(){
    c.beginPath();
    c.arc(this.x,this.y,this.r,0,2 * Math.PI);
    c.fillStyle = this.color;
    c.fill();
  }
  this.update = function(){
    if (this.x + this.r > innerWidth || this.x - this.r < 0){
      this.dx = -this.dx;
    }
    if (this.y + this.r > innerHeight || this.y - this.r < 0){
      this.dy = -this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;


    // interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.r < 40) {
        this.r += 1;
      }
    }


    else if(this.r > minR){
      this.r -= 1;
    }


    this.draw();
  }
}



var circlesArr = [];


for(var i = 0; i < 800; i++){
  var dx = Math.random() - 0.5 * 2;
  var dy = Math.random() - 0.5 * 2;
  var r = Math.random() * 4 + 1;
  var c = canvas.getContext("2d");
  var x = Math.random() * (innerHeight - r * 2) + r;
  var y = Math.random()  * (innerHeight - r * 2) + r;
  circlesArr.push(new Circle(x,y,dx,dy,r))

}
console.log(circlesArr);





function animate(){
requestAnimationFrame(animate);
c.clearRect(0,0,innerWidth, innerHeight);

for (var i = 0; i < circlesArr.length; i++) {
  circlesArr[i].update();
}


}
animate();
