let output = null;

const parent = document.querySelector('.parent');
const children = parent.children;
children[0].style = 'color: orange';
children[1].style = 'color: green';
children[2].style = 'color: red';

output = parent.firstElementChild.innerText;
output = parent.lastElementChild.innerText;

const secondChild = parent.querySelector('div:nth-child(2)');

secondChild.innerText = 'Child Two';
secondChild.previousElementSibling.innerText = 'Child One';
secondChild.nextElementSibling.innerText = 'Child Three';
secondChild.parentElement.style = `border: 5px dotted;
padding: 10px`;

console.log(output);
