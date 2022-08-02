const body = document.querySelector('body');

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey I'm red!";
body.appendChild(para);

const heading = document.createElement('h3');
heading.style.cssText = 'color: blue;';
heading.textContent = "I'm a blue h3!";
body.appendChild(heading);

const container = document.createElement('div');
container.classList.add('container');

const heading2 = document.createElement('h1');
heading2.textContent = "I'm in a div";
container.appendChild(heading2);

const para2 = document.createElement('p');
para2.textContent = 'ME TOO!';
container.appendChild(para2);

body.appendChild(container);

const btn = document.createElement('button');
btn.textContent = 'CLICK ME';
btn.addEventListener('click', function (e) {
	e.target.classList.toggle('clicked');
});
body.appendChild(btn);
