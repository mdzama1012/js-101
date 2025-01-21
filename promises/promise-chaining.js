console.log('Solving callback hell using promise chaining...');

function getData(endpoint) {
	return new Promise(function (resolve, reject) {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', endpoint);
		xhr.onreadystatechange = function () {
			if (this.readyState === 4) {
				if (this.status === 200) {
					resolve(this);
				} else {
					reject(new Error(`Error fetching data!`));
				}
			}
		};
		setTimeout(() => xhr.send(), Math.floor(Math.random() * 1000) + 3000);
	});
}

// Consume the promise
getData('./movies.json')
	.then(res => JSON.parse(res.responseText))
	.then(res => {
		console.log('Movies:', res);
		return getData('./directors.json');
	})
	.then(res => JSON.parse(res.responseText))
	.then(res => {
		console.log('Directors:', res);
		return getData('./actors.json');
	})
	.then(res => JSON.parse(res.responseText))
	.then(res => console.log('Actors:', res))
	.catch(err => console.log(err));
