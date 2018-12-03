/* eslint-disable no-unused-vars */

import P5 from 'p5';
import Stats from 'stats-js';
import { GUI } from 'dat.gui';

import Chaos from './chaos';

const width = window.innerWidth;
const height = window.innerHeight;

const stats = new Stats();
stats.setMode(0);
document.getElementById('root').appendChild(stats.domElement);

const options = {
	initialization: {
		points: 3,
		random: false,
		generation: 1000
	},
	manipulate: {
		lerp: 0.5,
		color: true
	}
};

const chaos = new Chaos(width, height);

const gui = new GUI();
let doRegenerate = false;

function regenerate() {
	doRegenerate = true;
	chaos.generate(options);
}

const init = gui.addFolder('Initialization');
init.add(options.initialization, 'points', 1, 100, 1).onChange((v) => regenerate());
init.add(options.initialization, 'random').onChange((v) => regenerate());
init.add(options.initialization, 'generation', 1).onChange((v) => regenerate());

const manipulate = gui.addFolder('Manipulate');
manipulate.add(options.manipulate, 'lerp', 0, 1, 0.01).onChange((v) => regenerate());
manipulate.add(options.manipulate, 'color').onChange((v) => regenerate());

/**
 * Wrapper function for sketch
 * (also provides JS intellisense in Visual Studio Code)
 * @param {P5} sketch
 */
function renderer(sketch) {
	sketch.setup = () => {
		sketch.createCanvas(width, height);
		sketch.background(0);
		chaos.generate(options);
		chaos.drawBase(sketch);
	};

	sketch.draw = () => {
		stats.begin();
		if (doRegenerate) {
			sketch.background(0);
			chaos.drawBase(sketch);
			doRegenerate = false;
		}
		chaos.draw(sketch);

		stats.end();
	};
}

const myp5 = new P5(renderer, document.getElementById('root'));
