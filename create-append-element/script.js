// quick and dirty.
const addListItem = item => {
	const listItem = document.createElement('li');
	// insert content in the element node.
	listItem.innerHTML = ` ${item}
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
	document.querySelector('.items').appendChild(listItem);
};

// clear and performant.
const addListItemClear = item => {
	const listItem = document.createElement('li');
	const text = document.createTextNode(`${item}`);
	const button = document.createElement('button');
	button.className = 'remove-item btn-link text-red';
	const icon = document.createElement('i');
	icon.className = 'fa-solid fa-xmark';
	button.appendChild(icon);
	listItem.appendChild(text);
	listItem.appendChild(button);
	document.querySelector('.items').appendChild(listItem);
};

addListItem('Cheese');
addListItemClear('Eggs');
addListItemClear('Chicken');
