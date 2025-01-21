const colorBox = document.getElementById('color-box');
const h2 = document.querySelector('h2');
let intervalId = null;

function showRandomColor() {
	const randomHex = Math.floor(Math.random() * 16777215).toString(16);
	colorBox.style.backgroundColor = `#${randomHex}`;
}
function handleStartStop() {
	if (!intervalId) {
		h2.style.display = 'none';
		intervalId = setInterval(showRandomColor, 500);
	} else {
		clearInterval(intervalId);
		intervalId = null;
		h2.style.display = 'block';
		document.querySelector('h2').innerText = colorBox.getAttribute('style');
	}
}

colorBox.addEventListener('click', handleStartStop);
