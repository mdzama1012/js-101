const arr = [1, 2, 3, 4, 5];
const doubleArr = arr.map((num) => 2 * num);
console.log(doubleArr);

// map function provide a deep copy.
const socials = [
    { social: 'twitter', url: 'https://twitter.com', screenTime: 5 },
    { social: 'facebook', url: 'https://facebook.com', screenTime: 2 },
    { social: 'snapchat', url: 'https://snapchat.com', screenTime: 3 },
    { social: 'linkedin', url: 'https://linkedin.com', screenTime: 2 },
    { social: 'instagram', url: 'https://instagram.com', screenTime: 3 },
];

screenTimes = socials.map((data) => ({
    social: data.social,
    screenTime: data.screenTime,
}));
// console.log(screenTimes);
// screenTimes[0] = { social: "raddit", screentime: 10 };
// console.log(socials);
console.log(screenTimes);

// we can chain map function.
const doNothing = arr
    .map((num) => Math.sqrt(num))
    .map((num) => Math.round(num * num));

console.log(doNothing);
