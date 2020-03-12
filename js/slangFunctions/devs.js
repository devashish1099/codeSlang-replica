function devs(){
    let r = 10;
    for (let i = 0; i < points.length; i++) {
        points[i].x = points[i].x + r*Math.cos(i*10);
        points[i].y = points[i].y + r*Math.sin(i*10);
    }
}