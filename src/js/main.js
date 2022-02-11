let navButton = document.querySelector(".nav__button");
let navList = document.querySelector(".nav__list");

navButton.addEventListener("click", function () {
	if (navList.classList.contains("active")) {
		this.setAttribute("aria-expanded", "false");
		this.setAttribute("aria-label", "menu");
		navList.classList.remove("active");
	} else {
		navList.classList.add("active");
		this.setAttribute("aria-label", "close menu");
		this.setAttribute("aria-expanded", "true");
	}
});
