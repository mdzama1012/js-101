// no parameters --> todays date and time.
let d = new Date();

d = d.toString();

// there are many ways to init the date.
d = new Date(2020, 11, 10, 16, 30, 0); // month is offset by 1.
d = new Date('2020-12-10T16:30:00');

// unix timestamp is system for describing a point in time (ms passed since 1th jan 1970).
d = Date.now();

// can find timestamp of any date and time.
d = new Date();
d = new Date(2020, 11, 10, 16, 30, 0);
d = d.getTime();
// d = d.valueOf();

// make a date using timestamp.
d = new Date(1607598000000);

// convert millisecond to second.
d = new Date();
d = Math.floor(d.getTime() / 1000);
// d = Math.floor(Date.now() / 1000);

console.log(typeof d, d);
