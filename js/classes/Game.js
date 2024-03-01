import Ball from "./Ball.js";
import { Color } from "./Color.js";
import { Field } from "./Field.js";
import Player from "./Player.js";
import { Settings } from "./Settings.js";

export class Game {
	ball;
	player1;
	player2;

	constructor() {
		this.canvas = document.getElementById("2d-canvas");
		this.canvas.width = Settings.canvas.width;
		this.canvas.height = Settings.canvas.height;
		this.context = this.canvas.getContext("2d");

		this.defineGameObjects();
	}

	defineGameObjects() {
		this.ball = new Ball(
			20,
			40,
			20,
			20,
			"images/tennisBall.png",
			this.context
		);

		this.player1 = new Player(
			30,
			Settings.canvas.height / 2,
			40,
			90,
			"images/Baseballschläger.png",
			this.context
		);

		this.player2 = new Player(
			Settings.canvas.width - 35,
			Settings.canvas.height / 2,
			40,
			90,
			"images/Laterne.png",
			this.context
		);
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
		this.player1.draw();
		this.player2.draw();
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
		this.ball.move();
	}
}
