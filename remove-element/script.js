// using remove() method
function removeClearButton() {
  const button = document.querySelector('#clear');
  button.remove();
}

// using removeFirstChild() method
const removeFirstItem = function () {
  const parent = document.querySelector('ul');
  const child = document.querySelector('li:first-child');
  parent.removeChild(child);
};

// remove nth-child passed in parameters.
const removeNthItem = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove();

const removeAllItems = () =>
  document.querySelectorAll('li').forEach((item) => item.remove());

// removeClearButton();
// removeFirstItem();
// removeNthItem(1);
// removeAllItems();
