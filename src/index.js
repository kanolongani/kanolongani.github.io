import './styles/index.css';
import { setupNav } from './modules/nav';
import { setupScroll } from './modules/scroll';
import { setupReveal } from './modules/reveal';
import { setupTypewriter } from './modules/typewriter';

const setYear = () => {
	const year = String(new Date().getFullYear());
	document.querySelectorAll('.js-year').forEach((el) => {
		el.textContent = year;
	});
};

setupNav();
setupScroll();
setupReveal();
setupTypewriter();
setYear();
