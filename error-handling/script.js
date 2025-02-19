/** User Link: https://httpstat.us/ website to get mock responses.
 *
 * Top 10 Status Codes:
 * 200: success
 * 201: successfully created
 * 204: no content
 * 400: bad request
 * 401: unauthorized
 * 403: forbidden
 * 404: not found
 * 500: internal error (error on server side)
 */

let endpoint = 'https://httpstat.us/500';
function dummyResponse() {
    return fetch(endpoint);
}
function dummyPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isRejected = true;
            if (isRejected) {
                console.log('some async task!');
                reject('Something went wrong!');
            } else {
                console.log('some async task!');
                resolve('Async task completed successfully!');
            }
        }, 2000);
    });
}

// ! handle responses and promises with .then() and .catch()
const message = document.getElementById('message');
// dummyResponse()
// 	.then(res => {
// 		if (!res.ok) {
// 			message.style.color = 'red';
// 			message.textContent = `${res.status} ${res.statusText}`;
// 		} else {
// 			message.style.color = 'green';
// 			message.textContent = `${res.status} ${res.statusText}`;
// 		}
// 		// body contains the plain text data.
// 		// res.json() given an error.
// 		return res.text();
// 	})
// 	.then(res => console.log(res))
// 	.catch(error => console.log(error.message));

// dummyPromise()
// 	.then(res => console.log(res))
// 	.catch(error => console.log(error));

// ! handle responses and promises with async and await.
const tempFunction1 = async () => {
    try {
        const res = await dummyPromise();
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};
const tempFunction2 = async () => {
    try {
        const res = await dummyResponse();
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const data = await res.text();
        console.log('Uncaught: ' + data);
    } catch (error) {
        console.log(error.message);
    }
};
tempFunction1();
tempFunction2();
