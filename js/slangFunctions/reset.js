function reset(){
    for (let index = 0; index <= 720; index++) {
        points[index].x = initialR*Math.cos((index/720)*2*PI) + width/2;
        points[index].y = initialR*Math.sin((index/720)*2*PI) + height/2;
        //ctx.lineTo(points[index].x,points[index].y);
    }
    R = initialR;
}