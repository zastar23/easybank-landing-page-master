const btn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const blob = document.querySelector(".color-blob");
const navList = document.querySelector(".nav-list");

btn.addEventListener("click", () => {
	if (nav.style.display === "none") {
		nav.style.display = "block";
		blob.classList.add("dark");
		navList.classList.add("drop-shadow");
	} else {
		nav.style.display = "none";
		blob.classList.remove("dark");
		navList.classList.remove("drop-shadow");
	}
});
