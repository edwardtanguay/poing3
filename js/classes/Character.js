export default class Character {
	constructor(x, y, width, height) {
		this.position = {
			x: x,
			y: y,
		};
		this.size = {
			width: width,
			height: height,
		};
	}

	velocity = {
		x: 0,
		y: 0,
	};

	move() {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	}

	nextPosition() {
		const nextPosition = {
			x: this.position.x + this.velocity.x,
			y: this.position.y + this.velocity.y,
		};
		return nextPosition;
	}

	draw() {
		console.log('draw character');
	}

}
