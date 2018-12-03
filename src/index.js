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
		random: false
	}
};

const chaos = new Chaos(width, height);

const gui = new GUI();
const init = gui.addFolder('Initialization');
init.add(options.initialization, 'points', 1, 100, 1).onChange((v) => chaos.generate(options));
init.add(options.initialization, 'random').onChange((v) => chaos.generate(options));

/**
 * Wrapper function for sketch
 * (also provides JS intellisense in Visual Studio Code)
 * @param {P5} sketch
 */
function renderer(sketch) {
	sketch.setup = () => {
		sketch.createCanvas(width, height);
		chaos.generate(options);
	};

	sketch.draw = () => {
		stats.begin();
		sketch.background(0);

		chaos.draw(sketch);

		stats.end();
	};
}

const myp5 = new P5(renderer, document.getElementById('root'));
