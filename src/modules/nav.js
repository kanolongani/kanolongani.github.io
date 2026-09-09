const setIcon = (toggle, open) => {
	const icon = toggle.querySelector('i');
	if (!icon) {
		return;
	}
	icon.classList.toggle('fa-bars', !open);
	icon.classList.toggle('fa-xmark', open);
};

const setupMobileMenu = () => {
	const toggle = document.querySelector('.js-nav-toggle');
	const menu = document.querySelector('.js-nav-menu');
	if (!toggle || !menu) {
		return;
	}

	const setState = (open) => {
		menu.classList.toggle('is-open', open);
		toggle.setAttribute('aria-expanded', String(open));
		toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
		setIcon(toggle, open);
	};

	toggle.addEventListener('click', () => {
		setState(!menu.classList.contains('is-open'));
	});

	menu.addEventListener('click', (event) => {
		if (event.target.closest('.nav__link')) {
			setState(false);
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			setState(false);
		}
	});
};

const setupActiveLink = () => {
	const links = Array.from(document.querySelectorAll('.nav__link'));
	const sections = links
		.map((link) => document.querySelector(link.getAttribute('href')))
		.filter(Boolean);

	if (!sections.length || !('IntersectionObserver' in window)) {
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				}
				links.forEach((link) => {
					link.classList.toggle(
						'is-active',
						link.getAttribute('href') === `#${entry.target.id}`
					);
				});
			});
		},
		{ rootMargin: '-45% 0px -50% 0px' }
	);

	sections.forEach((section) => observer.observe(section));
};

const setupNav = () => {
	setupMobileMenu();
	setupActiveLink();
};

export { setupNav };
