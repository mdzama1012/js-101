function getData(endpoint) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const responseBody = JSON.parse(this.responseText);
            console.log(responseBody);
        }
    };
    xhr.send();
}

// ! Not correct (logically wrong) way to deal with asynchronous code
// getData('./movies.json');
// getData('./directors.json');
// getData('./actors.json');

// ! CALLBACK HELL
getData('./movies.json', responseBody => {
    console.log(responseBody);
    getData('./directors.json', responseBody => {
        console.log(responseBody);
        getData('./actors.json', responseBody => {
            console.log(responseBody);
        });
    });
});
