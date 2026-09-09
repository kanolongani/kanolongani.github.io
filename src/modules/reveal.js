const setupReveal = () => {
	const items = document.querySelectorAll('[data-reveal]');
	if (!items.length) {
		return;
	}

	const revealAll = () => {
		items.forEach((item) => item.classList.add('is-visible'));
	};

	const reduceMotion = window.matchMedia(
		'(prefers-reduced-motion: reduce)'
	).matches;

	// No animation when the user opts out, the API is missing, or the tab
	// loaded in the background (IntersectionObserver callbacks are deferred
	// while hidden, which would otherwise leave content stuck at opacity 0).
	if (
		reduceMotion ||
		!('IntersectionObserver' in window) ||
		document.visibilityState === 'hidden'
	) {
		revealAll();
		return;
	}

	const observer = new IntersectionObserver(
		(entries, obs) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				}
				entry.target.classList.add('is-visible');
				obs.unobserve(entry.target);
			});
		},
		{ rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
	);

	items.forEach((item) => observer.observe(item));

	// Belt-and-braces: guarantee everything is shown shortly after load even
	// if observer callbacks never arrive.
	window.setTimeout(revealAll, 2500);
};

export { setupReveal };
