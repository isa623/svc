let balls = [];
let angleInputs = [];
let speedInputs = [];
let running = false;
let oldt = 0;

function setup() {
	createCanvas(800, 800);
	angleMode(DEGREES);

	for (let i = 0; i < 3; i++) {
		let angle = (i + 1) * 15
		let angleInput = createInput(angle.toString());
		angleInput.position(10, height + 10 + i * 30);
		angleInputs.push(angleInput);

		let v0 = 300 + (i + 1) * 100
		let speedInput = createInput(v0.toString());
		speedInput.position(70, height + 10 + i * 30);
		speedInputs.push(speedInput);
	}

	let startButton = createButton("Start");
	startButton.position(10, height + 100);
	startButton.mousePressed(start);

	let pauseButton = createButton("Pause");
	pauseButton.position(70, height + 100);
	pauseButton.mousePressed(pause);

	let videreButton = createButton("Videre");
	videreButton.position(140, height + 100);
	videreButton.mousePressed(videre);
}

function draw() {
	if (running) {
		t = millis() / 1000;
		deltat = t - oldt;
		background('blue');
		for (let ball of balls) {
			ball.opdater(deltat);
			ball.show();
		}
		oldt = t;
	} else {
		oldt = millis() / 1000;
	}
}

function start() {
	running = true;
	balls = [];
	for (let i = 0; i < 3; i++) {
		let angle = parseFloat(angleInputs[i].value());
		let speed = parseFloat(speedInputs[i].value());
		if (!isNaN(angle) && !isNaN(speed)) {
			balls.push(new Bold(50, angle, speed));
		}
	}
}

function pause() {
	running = false;
}

function videre() {
	running = true;
}

class Bold {
	static g = 9.82;

	constructor(r, vinkel, v0) {
		this.x = 0;
		this.y = height;
		this.r = r;
		this.vinkel = vinkel;
		this.v0 = v0;
		this.time = 0;
	}

	opdater(deltat) {
		this.time += deltat;
		let t = this.time;
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