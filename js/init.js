let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight*0.90;
canvas.width = window.innerWidth*0.90;
//console.log(canvas);

let ctx = canvas.getContext("2d");

let points = [];
for (let i = 0; i <= 720; i++) {
    points.push(new Point(100,100));
}

let height = canvas.height;
let width = canvas.width;
let initialR = 200;
const PI = Math.PI;
let R = initialR;

document.getElementById("reset").onclick = function(){ reset() };
document.getElementById("devs").onclick = function(){ devs() };
document.getElementById("revs").onclick = function(){ revs() };
document.getElementById("tanner").onclick = function(){ tanner() };
document.getElementById("mad").onclick = function(){ mad() };
document.getElementById("humanga").onclick = function(){ humanga() };
document.getElementById("chill").onclick = function(){ chill() };
document.getElementById("hextor").onclick = function(){ hextor() };
document.getElementById("cardinal").onclick = function(){ cardinal() };