const svg = document.getElementById('triangles');

svg.addEventListener('click', e => {
	document.documentElement.style.cssText = `
	--dark-color: ${randColor()};
	--light-color: ${randColor()};`;
});

function randColor() {
	const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple'];
	return colors[Math.floor(Math.random() * colors.length)];
}
