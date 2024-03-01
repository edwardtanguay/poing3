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
		console.log('draw');
	}

	updateData() {
		console.log('updateData');
	}
}
