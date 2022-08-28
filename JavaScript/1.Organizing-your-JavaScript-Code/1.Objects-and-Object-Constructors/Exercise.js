function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.info = function () {
	return `${this.title} by ${this.author}, ${this.pages} pages long, ${
		this.read ? 'read' : 'not read yet'
	}`;
};

programmingBook = new Book(
	'Programming: Principles and Practice Using C++',
	'Bjarne Stroustrup',
	1274,
	true
);

console.log(programmingBook.info());
