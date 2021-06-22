const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");

const navbarOffsetTop = navbar.offsetTop;
const progressBarPercent = [97, 89, 85, 87, 80, 70, 50];

window.addEventListener("scroll", () => {
	mainFb();
});

const mainFb = () => {
	if (window.pageYOffset >= navbarOffsetTop) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}

	sections.forEach((section, i) => {
		if (window.pageYOffset >= section.offsetTop - 10) {
			navbarLinks.forEach((navbarLink) => {
				navbarLink.classList.remove("change");
			});
			navbarLinks[i].classList.add("change");
		}
	});

	if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
		document.querySelectorAll(".progress-percent").forEach((el, i) => {
			el.style.width = `${progressBarPercent[i]}%`;
			el.previousElementSibling.lastElementChild.textContent =
				progressBarPercent[i];
		});
	}
};

mainFb();

window.addEventListener("resize", () => {
	window.location.reload();
});
