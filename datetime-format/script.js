let x;
let d = new Date();

// get time stamp.
x = d.getTime();
x = d.valueOf();

x = d.getFullYear();
x = d.getMonth() + 1;
// day of the month
x = d.getDate();
// day of the week
x = d.getDay();
x = d.getHours();
x = d.getSeconds();
x = d.getMilliseconds();

x = `Date: ${d.getDate()}-${
  d.getMonth() + 1
}-${d.getFullYear()} Time: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

// api to formate date and time according to the locales.
// x = Intl.DateTimeFormat('en-IN').format(d);
x = Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
}).format(d);

// same as above.
// x = d.toLocaleString('en-US', {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit',
// });

console.log(typeof d, d);
console.log(typeof x, x);
