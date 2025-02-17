const text = document.querySelector('.card');
const itemList = document.querySelector('.items');
const items = itemList.querySelectorAll('li');

const runHandler = () => {
  console.log('handling run');
  console.log(text.classList);

  // * can loop thought the classes.
  itemList.classList.forEach((c) => console.log(c));

  // * apply dark-css by adding 'dark' class.
  text.classList.add('dark');

  // * remove card-css by removing 'card' class.
  // text.classList.remove('card');

  // * toggle the class hence toggle css-styles on an element.
  // text.classList.toggle('dark');

  // * replace class-names
  // text.classList.replace('card', 'dark');
};

document.querySelector('#run-btn').onclick = runHandler;
