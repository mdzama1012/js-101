let output = null;

// * select element and change attributes.
// const input = document.getElementById('item-input');
const input = document.querySelector('input[type="text"]');
output = input.id;
output = input.className;
output = input.placeholder;
output = input.type;
// input.placeholder = 'Enter Item to List';
input.setAttribute('placeholder', 'Enter Item to List');

const title = document.querySelector('h1');
title.innerHTML = '<strong>Shopping List</strong>';
title.style.color = 'red';

const list = document.querySelector('ul');
const firstItem = list.querySelector('li:nth-child(1)');
const secondItem = list.querySelector('li:nth-child(2)');
firstItem.innerHTML = ` Hussain Ariz
<button class="remove-item btn-link text-red">
  <i class="fa-solid fa-xmark"></i>
</button>`;
secondItem.innerHTML = 'Apple Juice';
firstItem.style.color = 'blue';
secondItem.style.color = 'red';

console.log(typeof output, output);
