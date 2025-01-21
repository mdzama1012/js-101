// insertAdjacentElement() method.
const insertElement = () => {
	const ref = document.querySelector('.filter');
	// create element to insert
	const div = document.createElement('div');
	div.insertAdjacentText(
		'afterbegin',
		'Example of insertAdjacentElement(); method.'
	);
	ref.insertAdjacentElement('beforebegin', div);
};

// insertAdjacentText() method.
const insertText = () => {
	const ref = document.querySelector('li:nth-child(3)');
	// create element to insert
	const paragraph = document.createElement('li');
	paragraph.insertAdjacentText(
		'afterbegin',
		'Example of insertAdjacentText(); method.'
	);
	ref.insertAdjacentElement('beforebegin', paragraph);
};

// insertAdjacentHTML() method.
const insertHTML = () => {
	const ref = document.querySelector('button[type="submit"');
	const addHTML = `
	<h2>Example of insertAdjacentHTML(); method.</h2>`;
	ref.insertAdjacentHTML('afterend', addHTML);
};

// insertBefore() method.
const insertBeforeElement = () => {
	// choose the parent.
	const parent = document.querySelector('ul');
	const ref = parent.querySelector('li:nth-child(3)');
	const item = document.createElement('li');
	item.insertAdjacentHTML(
		'afterbegin',
		`
			insert me before!
			<button class="remove-item btn-link text-red">
				<i class="fa-solid fa-xmark"></i>
			</button>
		`
	);
	parent.insertBefore(item, ref);
};

insertElement();
insertText();
insertHTML();
insertBeforeElement();
