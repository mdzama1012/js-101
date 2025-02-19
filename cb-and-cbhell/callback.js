console.log('Example use case of a callback function');

const notes = [
    { note_id: 5, note: 'Life is awesome!' },
    { note_id: 10, note: 'Coding is fun!' },
    { note_id: 15, note: 'I am learning JavaScript!' },
    //... more notes
];
function createNote(newNote, callbackFunction) {
    setTimeout(() => {
        notes.push(newNote);
        callbackFunction();
    }, 2000);
}
function getAllNotes() {
    setTimeout(() => notes.forEach((note) => console.log(note.note)), 1000);
}

// createNote({ note_id: 20, note: 'Lets explore the callback function!' });
// getAllNotes();

createNote(
    { note_id: 20, note: 'Lets explore the callback function!' },
    getAllNotes,
);
