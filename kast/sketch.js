let balls = [];
let angleInputs = [];
let speedInputs = [];


function setup() {
	createCanvas(800, 800);
	angleMode(DEGREES);
	for (let i = 0; i < 3; i++) {
		let angle = 45;
		let speed = 500;
		balls.push(new Bold(50, angle, speed));
	}
}

function draw() {
	t = millis() / 1000;
	background('blue');
	for (let ball of balls) {
		ball.opdater(t);
		ball.show();

	}
}
class Bold {
	static g = 9.82;

	constructor(r, vinkel, v0) {
		this.x = 0;
		this.y = height;
		this.r = r;
		this.vinkel = vinkel;
		this.v0 = v0;
	}

	opdater(t) {

		let v0x = 0.25 * this.v0 * cos(-this.vinkel);
		let v0y = 0.5 * this.v0 * sin(-this.vinkel);
		let led1 = 1 / 2. * (Bold.g) * (t ** 2) * 6;
		let led2 = v0y * t;
		this.x = v0x * t;
		this.y = led1 + led2 + height;
	}

	show() {
		this.x = constrain(this.x, 0, width - this.r);
		this.y = constrain(this.y, -999, height - this.r);
		fill('red');
		circle(this.x, this.y, this.r * 2);
	}
}