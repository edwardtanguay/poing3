import Character from "./Character.js";

export default class Ball extends Character {
	constructor(x, y, width, height, spriteImagePath, context) {
		super(x, y, width, height);
		this.spriteImage = new Image();
		this.spriteImage.src = spriteImagePath;
		this.context = context;
	}

	velocity = {
		x: 1,
		y: 1,
	};

	draw() {
		this.context.drawImage(
			this.spriteImage,
			this.position.x,
			this.position.y,
			this.size.width,
			this.size.height
		);
	}
}
