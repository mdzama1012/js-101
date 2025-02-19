const container = document.querySelector('.container');
const nextJokeButton = document.getElementById('joke-btn');
let firstJoke = true;

function updateJoke(jokeText) {
    const div = document.createElement('div');
    div.classList.add('joke');
    div.setAttribute('id', 'joke');
    div.insertAdjacentText('afterbegin', jokeText);
    container.removeChild(document.getElementById('joke'));
    container.insertBefore(div, nextJokeButton);
}
function setStarterJoke(jokeText) {
    const div = document.createElement('div');
    div.classList.add('joke');
    div.setAttribute('id', 'joke');
    div.insertAdjacentText('afterbegin', jokeText);
    container.insertBefore(div, nextJokeButton);
}

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready
function getJoke() {
    const xhr = new XMLHttpRequest();
    // Even though the getJoke() function finishes executing and the xhr object goes out of scope, the callback function (onreadystatechange) still has access to the xhr object. This is due to closures and the event loop's handling of asynchronous tasks.
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = function (event) {
        if (this.readyState === 4 && this.status === 200) {
            const responseBody = JSON.parse(this.responseText);
            if (firstJoke) {
                setStarterJoke(responseBody['value']);
                firstJoke = false;
            } else updateJoke(responseBody['value']);
        }
    };
    xhr.send();
}

nextJokeButton.addEventListener('click', getJoke);
document.addEventListener('DOMContentLoaded', getJoke);
