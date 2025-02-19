const inputField = document.getElementById('item-input');
const itemPriority = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox-recurring');

const onItemInput = event => {
    console.log(event.target.value);
};

const onPriorityInput = event => {
    console.log(event.target.value);
};

const onCheck = event => {
    console.log(
        event.target.checked
            ? 'item will be added as recurring items!'
            : 'item will added as non-recurring items!',
    );
};

const onFocus = event => {
    console.log('focused on input field!');
    event.target.style = `
		border-color: #3498db;
		box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
		background-color: #f0f8ff;
		transition: all 0.3s ease;
	`;
};

const onBlur = event => {
    console.log('focus out of input field!');
    event.target.style = `
		transition: all 0.1s ease;
	`;
};

inputField.addEventListener('input', onItemInput);
inputField.addEventListener('focus', onFocus);
inputField.addEventListener('blur', onBlur);
// can use input and change both
itemPriority.addEventListener('change', onPriorityInput);
checkbox.addEventListener('change', onCheck);
