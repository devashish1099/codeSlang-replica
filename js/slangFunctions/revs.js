function revs(){
    let r = 10;
    let a = 1;
    for (let i = 0; i < points.length; i++) {
        points[i].x = points[i].x + r*Math.cos((i/720)*2*PI)*a;
        points[i].y = points[i].y + r*Math.sin((i/720)*2*PI)*a;
        a = a*(-1);
    }
}