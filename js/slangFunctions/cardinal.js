function cardinal(){
    let r = 10;
    for (let i = 0; i < points.length; i++) {
        points[i].x = r*Math.cos((i/720)*2*PI*3)*Math.cos((i/720)*2*PI) + points[i].x;
        points[i].y = r*Math.cos((i/720)*2*PI*3)*Math.sin((i/720)*2*PI) + points[i].y;
    }
}