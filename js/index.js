// document.getElementById("devs").onclick = function(){ devs() };
//ctx.beginPath();
//ctx.moveTo(shapeX+shapeR,shapeY);
for (let index = 0; index <= 720; index++) {
    points[index].x = initialR*Math.cos((index/720)*2*PI) + width/2;
    points[index].y = initialR*Math.sin((index/720)*2*PI) + height/2;
    //ctx.lineTo(points[index].x,points[index].y);
}
//ctx.stroke();
//ctx.closePath();

function draw(){
    ctx.beginPath();
    ctx.moveTo( points[0].x,points[0].y );
    for (index = 0; index <= 720; index++) {
        ctx.lineTo(points[index].x,points[index].y);
    }
    ctx.stroke();
    ctx.closePath();
}

function start(){
    ctx.clearRect(0,0,width,height);
    draw();
}

setInterval(start,100);
draw();