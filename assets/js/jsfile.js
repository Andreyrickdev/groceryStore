const myslide = document.querySelectorAll('.myslide');
const dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);

function autoSlide() {
	counter += 1;
	slidefun(counter);
}