// without event delegation.
// const listItems = document.querySelectorAll('li');
// listItems.forEach(listItem => {
// 	listItem.addEventListener('click', event => event.currentTarget.remove());
// });

// using event delegation.
const list = document.querySelector('ul');
list.addEventListener('click', (event) => {
  console.log(event.target.tagName);
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }
});
