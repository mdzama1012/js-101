const nums = [1, 2, 3, 4, 5];
const doubleNum = nums.map(num => 2 * num);
console.log(doubleNum);

// ! map function provide a deep copy.
const socials = [
  { social: 'twitter', url: 'https://twitter.com', screentime: 4 },
  { social: 'facebook', url: 'https://facebook.com', screentime: 2 },
  { social: 'snapchat', url: 'https://snapchat.com', screentime: 5 },
  { social: 'linkedin', url: 'https://linkedin.com', screentime: 2 },
  { social: 'instagram', url: 'https://instagram.com', screentime: 3 },
];

screenTimes = socials.map(data => ({ social: data.social, screentime: data.screentime }));
// console.log(screenTimes);
screenTimes[0] = { social: 'pinterest', screentime: 10 };
console.log(socials);
console.log(screenTimes);

// ! Chain map methods.
const doNothing = nums.map(num => Math.sqrt(num)).map(num => Math.round(num * num));
console.log(doNothing);
