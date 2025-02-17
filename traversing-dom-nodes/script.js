let output = null;

const parent = document.querySelector('.parent');
const childNodes = parent.childNodes;
console.log(childNodes);

output = childNodes[0];
output = childNodes[1];
output = childNodes[2];
output = childNodes[3];

childNodes[5].innerText = 'Child One';
childNodes[5].style = 'color: red';

output = parent.firstChild;
output = parent.lastChild;
output = parent.firstChild.nextSibling;
output = parent.lastChild.previousSibling;

const child = document.querySelector('.child');
child.parentNode.style = `border: 5px solid black;
border-radius: 20px;
padding: 20px;
background-color: #F0E9DD;
`;

console.log(typeof output, output);
