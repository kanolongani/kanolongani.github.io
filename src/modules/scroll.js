const setupScroll = () => {
	const btn = document.querySelector('.js-scroll-top');
	const header = document.querySelector('.js-header');
	const progress = document.querySelector('.js-progress');

	const onScroll = () => {
		const y = window.scrollY || document.documentElement.scrollTop;

		if (btn) {
			btn.classList.toggle('is-visible', y > 500);
		}
		if (header) {
			header.classList.toggle('is-scrolled', y > 10);
		}
		if (progress) {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
		}
	};

	onScroll();
	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', onScroll);
};

export { setupScroll };
