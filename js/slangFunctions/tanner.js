function tanner(){
    let r = 0.1;
    for (let i = 0; i < points.length; i++) {
        points[i].x = r*Math.tan(points[i].x) + points[i].x;
        points[i].y = r*Math.tan(points[i].y) + points[i].y;
    }
}