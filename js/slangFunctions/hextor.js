function hextor(){
    let r = 10;
    for (let i = 0; i < points.length; i++) {
        points[i].x = points[i].x + r*Math.cos(i);
        points[i].y = points[i].y + r*Math.sin(i);
    }
}