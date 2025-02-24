/**
 * NOTES (callbacks):
 * callbacks in javascript are functions that are passed as arguments to other functions.
 * they gives us access to async behavior in javascript.
 * these functions are called callback because they are called later in the program execution.
 * the responsibility of call a callback function is on the function that receives it.
 * if any function bocks the callstack it is know as blocking the main thread.
 * event listeners are heavy and takes lots of memory and clearing them is important whenever possible.
 * the variables of event handlers are stored in the memory and they are not garbage collected.
 * the memory is not released until the event listener is removed.
 */

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
    setTimeout(() => notes.forEach(note => console.log(note.note)), 1000);
}

// createNote({ note_id: 20, note: 'Lets explore the callback function!' });
// getAllNotes();

createNote(
    { note_id: 20, note: 'Lets explore the callback function!' },
    getAllNotes,
);

// example of closures, callback and event listeners.

function attachEventListener() {
    let count = 0;
    document.getElementById('clickMe')?.addEventListener('click', function () {
        count++;
        console.log('button clicked:', count);
    });
}
attachEventListener();
