const myslide = document.querySelectorAll('.myslide');
const dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);

function autoSlide() {
	counter += 1;
	slidefun(counter);
}

function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}

function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}

function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}