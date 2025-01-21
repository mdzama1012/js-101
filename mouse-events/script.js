// mouse events
const icon = document.querySelector('img');

const onClick = () => console.log('left click');
const onDoubleClick = () => console.log('double click');
const onRightClick = () => console.log('right click');
const onMouseDown = () => console.log('mouse is on hold');
const onMouseUp = () => console.log('mouse is released');
const onWheel = () => console.log('mouse wheel scroll');
const onMouseOver = () => console.log('mouse over');
const onMouseOut = () => console.log('mouse out');
const onDragStart = () => console.log('drag started');
const onDrag = () => console.log('you are dragging');
const onDragEnd = () => console.log('dragging ended');

icon.addEventListener('click', onClick);
icon.addEventListener('dblclick', onDoubleClick);
icon.addEventListener('contextmenu', onRightClick);
icon.addEventListener('mousedown', onMouseDown);
icon.addEventListener('mouseup', onMouseUp);
icon.addEventListener('wheel', onWheel);
icon.addEventListener('mouseover', onMouseOver);
icon.addEventListener('mouseout', onMouseOut);
icon.addEventListener('dragstart', onDragStart);
icon.addEventListener('drag', onDrag);
icon.addEventListener('dragend', onDragEnd);
