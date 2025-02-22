
let bolde = [];
let vinkelInputs = [];
let hastighedInputs = [];
let farver = ['red', 'yellow', 'green'];
let aktiv = false;
let pauseButton;
let sidsteTid = 0;

function setup() {
	createCanvas(800, 800);
	angleMode(DEGREES);

	for (let i = 0; i < 3; i++) {
		let angle = i * 5 + 35;
		let angleInput = createInput(angle.toString());
		angleInput.position(10, height + 10 + i * 30);
		angleInput.style('background-color', farver[i]);
		vinkelInputs.push(angleInput);

		let v0 = 300
		let hastighedInput = createInput(v0.toString());
		hastighedInput.position(70, height + 10 + i * 30);
		hastighedInput.style('background-color', farver[i]);
		hastighedInputs.push(hastighedInput);
	}

	let startButton = createButton("Start");
	startButton.position(10, height + 100);
	startButton.mousePressed(start);
	pauseButton = createButton("Pause");
	pauseButton.position(70, height + 100);
	pauseButton.mousePressed(pause_videre);
}

function draw() {
	if (aktiv) {
		let tid = millis() / 1000;
		let = dt = tid - sidsteTid;
		background('blue');
		for (let bold of bolde) {
			bold.opdater(dt);
			bold.show();
		}
		sidsteTid = tid;
	} else {
		sidsteTid = millis() / 1000;
	}
}

function start() {
	aktiv = true;
	bolde = [];
	for (let i = 0; i < 3; i++) {
		let angle = parseFloat(vinkelInputs[i].value());
		let hastighed = parseFloat(hastighedInputs[i].value());
		if (!isNaN(angle) && !isNaN(hastighed)) {
			bolde.push(new Bold(50, angle, hastighed, farver[i]));
		}
	}
}

function pause_videre() {
	if (aktiv) {
		pauseButton.html('Videre');
		aktiv = false;
	} else {
		pauseButton.html('Pause');
		aktiv = true;
	}
}

class Bold {
	static g = 9.82;
	static skalerV0x = 0.5;
	static skalerV0y = 1.0;
	static skalerY = 6;

	constructor(r, vinkel, v0, color) {
		this.r = r;
		this.vinkel = vinkel;
		this.v0 = v0;
		this.farve = color;
		this.tid = 0;
	}

	opdater(dt) {
		this.tid += dt;
		let t = this.tid;
		let v0x = this.v0 * cos(-this.vinkel) * Bold.skalerV0x;
		let v0y = this.v0 * sin(-this.vinkel) * Bold.skalerV0y;
		let led1 = 1 / 2. * (Bold.g) * (t ** 2) * Bold.skalerY;
		let led2 = v0y * t;
		this.x = v0x * t;
		this.y = led1 + led2 + height;
	}

	show() {
		this.x = constrain(this.x, 0, width - this.r);
		this.y = constrain(this.y, -999, height - this.r);
		fill(this.farve);
		circle(this.x, this.y, this.r * 2);
	}
}