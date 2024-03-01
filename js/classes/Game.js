import Ball from "./Ball.js";
import { Color } from "./Color.js";
import { Field } from "./Field.js";
import { Settings } from "./Settings.js";

export class Game {
	ball;

	constructor() {
		this.canvas = document.getElementById("2d-canvas");
		this.canvas.width = Settings.canvas.width;
		this.canvas.height = Settings.canvas.height;
		this.context = this.canvas.getContext("2d");
		
		this.ball = new Ball(20, 40, 20, 20, "images/tennisBall.png", this.context);
	}

	start() {
		requestAnimationFrame(this.update.bind(this));
	}

	update() {
		this.draw();
		this.updateData();
		requestAnimationFrame(this.update.bind(this));
	}

	draw() {
		this.drawPlayingArea();
		this.ball.draw();
	}

	drawPlayingArea() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.fillStyle = Color.background;
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.fillStyle = Color.playArea;
		this.context.fillRect(0, 0, this.canvas.width, 50);

		const field = new Field();
		field.draw(this.context);
	}

	updateData() {
		// console.log("updateData");
	}
}
