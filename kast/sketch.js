
// 
let x;
let y;
let vinkel = 45;
let v0 = 500;
let g = 9.82;
let y0
let ball

function setup() {
	createCanvas(800, 800)
	angleMode(DEGREES);
	y0 = height

}

function draw() {
	background('blue')
	ball = new Ball(x, y, 50)


	let t = millis() / 1000;


	let v0x = 0.25 * v0 * cos(-vinkel);
	let v0y = 0.5 * v0 * sin(-vinkel);
	let led1 = 1 / 2. * (g) * (t ** 2) * 6
	let led2 = v0y * t
	x = v0x * t;
	y = led1 + led2 + y0;
	//circle(x, y, 50)
	fill('red')
	//constrain(x + 50, width, height)
	console.log(x, y, led1, led2, t)
	ball.show()
}

class Ball {
	constructor(x, y, r) {
		this.x = x
		this.y = y
		this.r = r
	}
	show() {
		circle(this.x, this.y, this.r * 2)
		fill('red')
	}
}