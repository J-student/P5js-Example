let X=201;
let XS=1;

let Y=201;
let YS=1;
function setup() {
	createCanvas(windowWidth, windowHeight);}
	


function draw() {
frameRate(400);
background(255,255,255);
if (X >= windowWidth-200 || X <= 200){XS=XS*-1}
if (Y >=windowHeight-200||Y<=200){YS=YS*-1}
	
	stroke(0,0,0);
fill(240,255,0);
ellipse(X,Y, 400, 400);
X+=XS
Y+=YS
	
stroke(0,0,0);
fill(0,0,0);
arc(X,Y +20,300,300,0,PI,CHORD);

	
stroke(0,0,0);
fill(255,255,255);
rect(X-144, Y +20, 290 , 10);
ellipse(X-75, Y -60, 100,100);
ellipse(X+75, Y -60,100,100);
	
stroke(0,0,0);
fill(0,0,0);
ellipse(X -75 + 5*XS, Y - 60 + 5*YS,70,70);
ellipse(X +75 + 5*XS, Y - 60 + 5*YS,70,70);
}
