import P5 from 'p5';

export default class Chaos {
	/**
	 * Creates an instance of Chaos.
	 * @param {number} width The width of the canvas
	 * @param {number} height The height of the canvas
	 * @memberof Chaos
	 */
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.points = [];
	}

	/**
	 * Regenerate the Chaos Game
	 *
	 * @param {*} options
	 * @memberof Chaos
	 */
	generate(options) {
		this.points = [];
		if (options.initialization.random) {
			for (let i = 0; i < options.initialization.points; i += 1) {
				const x = Math.random() * this.width;
				const y = Math.random() * this.height;
				this.points.push(new P5.Vector(x, y));
			}
		} else {
			const center = new P5.Vector(this.width / 2, this.height / 2);
			const TWO_PI = 2 * Math.PI;
			const length = Math.min(this.width, this.height);
			for (let i = 0; i < options.initialization.points; i += 1) {
				const angle = i * TWO_PI / options.initialization.points;

				const pos = P5.Vector.fromAngle(angle);
				pos.mult(length / 2);
				pos.add(center);
				this.points.push(pos);
			}
		}
	}

	/**
	 * @param {P5} sketch
	 * @memberof Chaos
	 */
	draw(sketch) {
		sketch.stroke(255);
		sketch.strokeWeight(4);
		
		for (const point of this.points) {
			sketch.point(point.x, point.y);
		}
	}
}
