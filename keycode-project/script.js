const onKeyDown = event => {
	event.preventDefault();
	const keyCodes = {
		'event.key': event.key == ' ' ? 'Space' : event.key,
		'event.code': event.code,
		'event.keyCode': event.keyCode,
	};
	const container = document.querySelector('#container');
	container.innerHTML = '';
	for (const key in keyCodes) {
		const div = document.createElement('div');
		div.className = 'code-box';
		div.insertAdjacentText('afterbegin', `${key}: ${keyCodes[key]}`);
		container.appendChild(div);
	}
};

document.addEventListener('keydown', onKeyDown);
