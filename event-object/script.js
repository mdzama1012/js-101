const logo = document.querySelector('img');

const onClick = event => {
    console.log('type of event: ' + event.type);
    console.log(new Date(event.timeStamp + Date.now()));

    // console.log(event);
    // In this case both are same.
    // console.log(event.target);
    // console.log(event.currentTarget);

    console.log(event.clientX);
    console.log(event.clientY);
    console.log(event.offsetX);
    console.log(event.offsetY);
    console.log(event.screenX);
    console.log(event.screenY);
    console.log(event.pageX);
    console.log(event.pageY);
};

const onDrag = event => {
    document.querySelector('h1').innerHTML =
        `X ${event.clientX}, Y ${event.clientY}`;
};

logo.addEventListener('drag', onDrag);
logo.addEventListener('click', onClick);

document.querySelector('a').addEventListener('click', event => {
    // this will not take me to the linked page with is the default behavior of <a> tag hence prevent the default behavior.
    event.preventDefault();
    console.log('link was click but default behavior is prevented.');
});

// document.body.addEventListener('click', event => {
// 	console.log(event.target);
// 	console.log(event.currentTarget);
// });

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/
