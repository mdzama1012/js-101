const clearAllButton = document.querySelector('#clear');

const onClear = function () {
    const itemList = document.querySelectorAll('li');
    // itemList.forEach(child => child.remove());

    const parentList = document.querySelector('.items');
    while (parentList.firstChild) {
        parentList.removeChild(parentList.firstChild);
        // parentList.firstChild.remove();
    }
    console.log('all items cleared!');
};

const onClearAlert = () => {
    alert('all item will be cleared');
};

const onClearConfirm = () => {
    console.log('all item clear');
};

// ! javascript event listeners.
// * we will use addEventListener() method because it run multiple actions on a single event fire and is modern.
// clearAllButton.onclick = function () {
// 	alert('all item will be cleared');
// };
// clearAllButton.onclick = function () {
// 	console.log('all item clear');
// };

// * using addEventListener() method.
// clearAllButton.addEventListener('click', onClearAlert);
// clearAllButton.addEventListener('click', onClearConfirm);

// * remove the event listener.
// setTimeout(
// 	() => clearAllButton.removeEventListener('click', onClearAlert),
// 	5000
// );

clearAllButton.addEventListener('click', onClear);
// automatically trigger the click event.
setTimeout(() => clearAllButton.click(), 2000);
