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

		this.cPoints = [];
		// this.current;
		// this.previous = -1;
		// this.options;
	}

	/**
	 * A new random P5 vector in the bounds of width and height
	 * @memberof Chaos
	 */
	randomVector = () => new P5.Vector(
		Math.floor(Math.random() * this.width),
		Math.floor(Math.random() * this.height)
	);


	/**
	 * Regenerate the Chaos Game
	 *
	 * @param {*} options
	 * @memberof Chaos
	 */
	generate(options) {
		this.points = [];
		this.cPoints = [];
		this.current = this.randomVector();
		this.options = options;


		if (options.initialization.random) {
			for (let i = 0; i < options.initialization.points; i += 1) {
				this.points.push(this.randomVector());
			}
		} else {
			const center = new P5.Vector(this.width / 2, this.height / 2);
			const TWO_PI = 2 * Math.PI;
			const length = Math.min(this.width, this.height) - 10;
			for (let i = 0; i < options.initialization.points; i += 1) {
				const angle = i * TWO_PI / options.initialization.points;

				const pos = P5.Vector.fromAngle(angle);
				pos.rotate(-Math.PI / 2);
				pos.mult(length / 2);
				pos.add(center);
				this.points.push(pos);
			}
		}

		this.x = this.current.x;
		this.y = this.current.y;
	}

	/**
	 * @param {P5} sketch
	 * @memberof Chaos
	 */
	drawBase(sketch) {
		sketch.stroke(255);
		sketch.strokeWeight(4);

		for (const point of this.points) {
			sketch.point(point.x, point.y);
		}
	}

	/**
	 * @param {P5} sketch
	 * @memberof Chaos
	 */
	draw(sketch) {
		sketch.stroke(255);
		sketch.strokeWeight(1);

		if (this.options.manipulate.color) {
			sketch.colorMode(sketch.HSB, this.points.length);
		}

		for (let i = 0; i < this.options.initialization.generation; i += 1) {
			const nextIndex = Math.floor(Math.random() * this.points.length);
			const next = this.points[nextIndex];

			this.current.x = sketch.lerp(this.current.x, next.x, this.options.manipulate.lerp);
			this.current.y = sketch.lerp(this.current.y, next.y, this.options.manipulate.lerp);

			if (this.options.manipulate.color) {
				sketch.stroke(nextIndex, this.points.length, this.points.length);
			}

			sketch.point(this.current.x, this.current.y);
			this.previous = next;
		}
		sketch.colorMode(sketch.RGB);
	}
}
