
// 
let x;
let y;
let vinkel = 45;
let v0 = 500;
let g = 9.82;
let y0

function setup() {
	createCanvas(800, 800)
	angleMode(DEGREES);
	y0 = height

}

function draw() {
	background('blue')

	let t = millis() / 1000;

	let v0x = 0.25 * v0 * cos(-vinkel);
	let v0y = 0.5 * v0 * sin(-vinkel);
	let led1 = 1 / 2. * (g) * (t ** 2) * 6
	let led2 = v0y * t
	x = v0x * t;
	y = led1 + led2 + y0;

	circle(x, y, 50)
	fill('red')
	//constrain(x + 50, width, height)
	console.log(x, y, led1, led2, t)
}

















/*
let X0 = 0;
let Y0 = 400;
let vinkel = radians(45);
let g = 0.0005;
let T = 0;
let x = X0;
let y = Y0;
let hastighed = 0.25;

let gammelTid = 0;
let tidForbi = 0;


function opdaterTid(tid) {
	let gammelTid = (tid - tidForbi) / 1000;
	tidForbi = tid
	update();
	draw();

}

function update() {
	T +=;
	X = speed * cos(-vinkel) * T + X0;
	Y = 0.5 * g * T ** 2 + speed * sin(-vinkel) * T + Y0;
}

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background('blue')
	arc(X, Y, 10, 0, 2 * PI)
	fill('red')
}

function kast() {

	y = hastighed * g * t ** 2 + V0y * t
	x = V0x * t
}*/

