const PHRASES = [
	'Turning manual work into systems that ship',
	'Multi agent AI, end to end',
	'Scrapers that survive bot defense',
	'RPA that just works',
];

const setupTypewriter = () => {
	const el = document.querySelector('.js-typewriter');
	if (!el) {
		return;
	}

	const reduceMotion = window.matchMedia(
		'(prefers-reduced-motion: reduce)'
	).matches;

	if (reduceMotion) {
		el.textContent = PHRASES[0];
		return;
	}

	let phrase = 0;
	let chars = 0;
	let deleting = false;

	const tick = () => {
		const current = PHRASES[phrase];
		chars += deleting ? -1 : 1;
		el.textContent = current.slice(0, chars);

		let delay = deleting ? 35 : 65;

		if (!deleting && chars === current.length) {
			delay = 1800;
			deleting = true;
		} else if (deleting && chars === 0) {
			deleting = false;
			phrase = (phrase + 1) % PHRASES.length;
			delay = 350;
		}

		window.setTimeout(tick, delay);
	};

	tick();
};

export { setupTypewriter };
