// my implementation of insertAfter(); method.
const insertAfter = (element, ref) => {
	ref.parentElement.insertBefore(element, ref.nextElementSibling);
};

const insertAfterElement = () => {
	const parent = document.querySelector('ul');
	const item = document.createElement('li');
	const ref = parent.querySelector('li:nth-child(2)');
	item.insertAdjacentHTML(
		'afterbegin',
		`
			insert me after!
			<button class="remove-item btn-link text-red">
				<i class="fa-solid fa-xmark"></i>
			</button>
		`
	);
	insertAfter(item, ref);
};

insertAfterElement();
