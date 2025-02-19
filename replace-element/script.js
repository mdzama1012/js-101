const getButton = () => {
    const btn = document.createElement('button');
    btn.className = 'remove-item btn-link text-red';
    const i = document.createElement('i');
    i.className = 'fa-solid fa-xmark';
    btn.insertAdjacentElement('afterbegin', i);
    return btn;
};

const buttonHTML = `
	<button class="remove-item btn-link text-red">
		<i class="fa-solid fa-xmark"></i>
	</button>`;

// make a function to replace the first item of the list.
const replaceFirstItem = () => {
    const firstItem = document.querySelector('li:first-child');
    const replacementItem = document.createElement('li');
    replacementItem.insertAdjacentText('afterbegin', 'Replaced First');
    replacementItem.insertAdjacentElement('beforeend', getButton());
    firstItem.replaceWith(replacementItem);
};

// make a function to replace the second item of the list.
const replaceSecondItem = () => {
    const secondItem = document.querySelector('li:nth-child(2)');
    secondItem.outerHTML = `<li>
		Replaced Second
		<button class="remove-item btn-link text-red">
			<i class="fa-solid fa-xmark"></i>
		</button>
	</li>`;
};

// make a function to replace all the items of the list.
const replaceAllItems = () => {
    const listItems = document.querySelectorAll('li');
    listItems.forEach((item, index) => {
        item.outerHTML = `<li>Replaced-${index + 1} Item` + buttonHTML + `</li`;
    });
};

// make a function to replace the header "Shopping List".
const replaceHeading = () => {
    const parent = document.querySelector('header');
    const h1 = parent.querySelector('h1');
    const h2 = document.createElement('h2');
    h2.insertAdjacentText('afterbegin', 'Shopping List');
    parent.replaceChild(h2, h1);
};

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceHeading();
