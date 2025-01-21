// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const evenNums = nums.filter(nums => nums % 2 === 0)
const oddNums = nums.filter(nums => nums % 2)
console.log(evenNums);
console.log(oddNums);



// ! shallow copy explained
// * restrictSocial is the shallow copy of the socials but in case of array of reference types only objects, arrays, functions, and instances of classes.

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 8);
// result[0] = 'xxx';
// console.log(words);
console.log(result);

const socials = [
  { social: 'twitter', url: 'https://twitter.com', screentime: 4 },
  { social: 'facebook', url: 'https://facebook.com', screentime: 2 },
  { social: 'snapchat', url: 'https://snapchat.com', screentime: 5 },
  { social: 'linkedin', url: 'https://linkedin.com', screentime: 2 },
  { social: 'instagram', url: 'https://instagram.com', screentime: 3 },
];
const restrictSocial = socials.filter(social => social.screentime > 2);
// restrictSocial[0].screentime = 100;
// console.log(socials);
console.log(restrictSocial);
