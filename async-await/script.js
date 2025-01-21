// The code demonstrates the use of JavaScript's fetch API to make asynchronous HTTP requests and handle the responses using promises and async/await syntax.

const exampleOfAsync = async () => {
	const res1 = await fetch('https://jsonplaceholder.typicode.com/todos');
	const result1 = await res1.json();
	console.log(result1);
	const res2 = await fetch('https://jsonplaceholder.typicode.com/todos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			userId: 1,
			id: 101,
			title: 'New Todo',
			completed: false,
		}),
	});
	const result2 = await res2.json();
	console.log(result2);
};
exampleOfAsync();

// ! Example of using fetch API with traditional Promise Usage
// fetch('https://jsonplaceholder.typicode.com/todos')
// 	.then(res => res.json())
// 	.then(res => console.log(res))
// 	.then(res =>
// 		fetch('https://jsonplaceholder.typicode.com/todos', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				userId: 1,
// 				id: 101,
// 				title: 'New Todo',
// 				completed: false,
// 			}),
// 		})
// 	)
// 	.then(res => res.json())
// 	.then(res => console.log(res))
// 	.catch(err => console.error(err.message));
