import myName from './myName';

function component() {
	const element = document.createElement('div');

	element.textContent = myName('Chris');

	return element;
}

document.body.appendChild(component());
