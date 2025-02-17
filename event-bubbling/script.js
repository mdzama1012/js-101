const form = document.getElementById('item-form');
const parentDiv = document.querySelector('form div:nth-child(2)');
const addItem = document.querySelector('.btn');

form.addEventListener('submit', (event) => event.preventDefault());

// event bubbling in action.
addItem.addEventListener('click', () =>
  console.log('button is clicked and event bubbling started'),
);
parentDiv.addEventListener('click', () =>
  console.log('div is clicked due to event bubbling'),
);
form.addEventListener('click', () =>
  console.log('form is clicked due to event bubbling'),
);
