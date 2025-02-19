// try to dry this code to understand working of setTimeout(), clearTimeout() and event loop.
const changeBtn = document.getElementById('change-btn');
const cancelChangeBtn = document.getElementById('cancel-change-btn');
let timerId = null;

const changeHeading = () => {
    timerId = setTimeout(() => {
        document.querySelector('h1').textContent = 'Hello, World!';
        timerId = null;
    }, 3000);
};

const cancelChangeHeading = () => {
    if (timerId) {
        clearTimeout(timerId);
        console.log('change stopped, cleared set timeout!');
    }
    timerId = null;
};

changeBtn.addEventListener('click', changeHeading);
cancelChangeBtn.addEventListener('click', cancelChangeHeading);
