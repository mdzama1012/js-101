const colors = [
  '#2C3E50', // Midnight Blue
  '#8E44AD', // Dark Purple
  '#34495E', // Dark Slate Blue
  '#16A085', // Dark Teal
  '#2C3E50', // Dark Navy
  '#7F8C8D', // Gray
  '#C0392B', // Dark Red
  '#27AE60', // Dark Green
  '#D35400', // Dark Orange
  '#2E4053', // Charcoal Blue
];
const randomColorPicker = () => {
  const randomPick = Math.floor(Math.random() * 10);
  return colors[randomPick];
};

// mostly we use querySelectorAll()
// select multiple elements and edit them.
let listItems = document.querySelectorAll('li');
console.log(typeof listItems, listItems);
// set attribute of all the list item.
listItems.forEach((item, index) => {
  item.setAttribute('class', 'item');
  item.style.color = randomColorPicker();
  index === 0 &&
    (item.innerHTML = ` Cheese
					<button class="remove-item btn-link text-red">
						<i class="fa-solid fa-xmark"></i>
					</button>`);
});

// use of getElementByClass() methods.
listItems = document.getElementsByClassName('item');
console.log(typeof listItems, listItems);
// convert HTMLCollection to array.
const listItemsArray = Array.from(listItems);
listItemsArray.forEach((item) => {
  console.log(item.innerText);
});

// ! use of getElementsByTagName() methods.
// listItems = document.getElementsByTagName('li');
// const listItemsArray = Array.from(document.getElementsByTagName('li'));
// listItemsArray.forEach(item => {
// 	console.log(item.innerText);
// });
