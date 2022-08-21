const slider = document.querySelector('#slider');
const output = document.querySelector('.slider-output');

output.textContent = slider.value;

slider.addEventListener('input', () => {
	output.textContent = slider.value;
});
