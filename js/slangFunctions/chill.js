function chill(){
    let r = 10;
    if(R > 0 ){
        for (let i = 0; i < points.length; i++) {
            points[i].x = points[i].x - r*Math.cos((i/720)*2*PI);
            points[i].y = points[i].y - r*Math.sin((i/720)*2*PI);
        }
        R = R - r;
    }
}