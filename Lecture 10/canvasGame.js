var canvas = document.getElementById("game");
var context = canvas.getContext('2d');


canvas.onclick = function(event){
    const x = event.clientX - context.canvas.offsetLeft;
    const y = event.clientY - context.canvas.offsetTop;

    context.beginPath()
    context.arc(x,y,10,0,2*Math.PI);
    context.fillStyle = "red";
    context.fill()
    context.closePath()
}


class player{
    constructor(x,y,radius,color){
        this.pos_x = x;
        this.pos_y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(){
        context.beginPath()
        context.arc(this.pos_x, this.pos_y, this.radius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill()
    }
}

var p = new player(100,100,30,'pink');
p.draw();

