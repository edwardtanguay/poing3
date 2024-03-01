import { Color } from "./Color.js";
import { Field } from "./Field.js";
import { Settings } from "./Settings.js";

export class Game {
	start() {
		this.canvas = document.getElementById("2d-canvas");
		this.canvas.width = Settings.canvas.width;
		this.canvas.height = Settings.canvas.height;
		this.context = this.canvas.getContext("2d");

		requestAnimationFrame(this.update.bind(this));
	}

	update() {
		this.draw();
		this.updateData();
		requestAnimationFrame(this.update.bind(this));
	}

	draw() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.fillStyle = Color.background;
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		this.context.fillStyle = Color.playArea;
		this.context.fillRect(0, 0, this.canvas.width, 50);

		const field = new Field();
		field.draw(this.context);
	}

	updateData() {
		console.log("updateData");
	}
}
