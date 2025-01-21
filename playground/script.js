const endpoint = 'https://jsonplaceholder.typicode.com/';

const getTODO = fetch(endpoint + '/todos/1');
const getPosts = fetch(endpoint + '/posts/1');

Promise.all([getPosts, getTODO])
	.then(res => Promise.all(res))
	.then(res => console.log(res))
	.catch(err => console.log(err));
