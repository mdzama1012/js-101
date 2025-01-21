const notes = [
	{ note_id: 5, note: 'Life is awesome!' },
	{ note_id: 10, note: 'Coding is fun!' },
	{ note_id: 15, note: 'I am learning JavaScript!' },
	//... more notes
];
function getAllNotes() {
	setTimeout(() => notes.forEach(note => console.log(note.note)), 1000);
}
function createNote(newNote) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			notes.push(newNote);
			resolve('successfully created note!');
		}, 2000);
	});
}
const promise = createNote({
	note_id: 20,
	note: 'Lets explore the promises!',
});

promise.then(getAllNotes);
