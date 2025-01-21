const input = document.querySelector('.form-input');

const onKeyDown = event => {
	if (event.repeat) {
		console.log('event is repeated');
	}

	// event.key property
	console.log(event.key + ' key is down');
	// event.keyCode property
	// https://www.toptal.com/developers/keycode
	console.log(event.keyCode + ' key is down');
	// event.code
	console.log('key with ' + event.code + ' is down');

	// check for combination (short-cut keypress)
	if (event.ctrlKey && event.key === 'c') {
		console.log(`you copied the text '${event.target.value}'`);
	}
};

const onKeyUp = event => {
	console.log(event.key + ' key is up');
};

const onKeyPress = event => {
	console.log(event.key + ' key is pressed');
};

// triggers for both printable as well as non-printable (fires continuously if the key is held down.)
input.addEventListener('keydown', onKeyDown);
// trigger on released.
input.addEventListener('keyup', onKeyUp);
// triggered for printable characters only (keypress event is now considered i.e, deprecated in modern web development and shouldn't be used in new code. Instead, keydown and keyup are recommended.)
input.addEventListener('keypress', onKeyPress);
