/**
 *
 * The filter() method of "Array" instances creates a shallow copy of a portion of a
 * given array, filtered down to just the elements from the given array that pass the
 * test implemented by the provided function.
 *
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArr = arr.filter(arr => arr % 2 === 0);
const oddArr = arr.filter(arr => arr % 2);
// console.log(evenArr);
// console.log(oddArr);

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 8);
// result[0] = "xxx";
// console.log(words);
// console.log(result);

/**
 *
 * shallow copy in javascript is a copy of an object or array that shares the same
 * references as the original. this means that changes to the copy will also affect
 * the original.
 *
 */
const socials = [
    { social: 'twitter', url: 'https://twitter.com', screenTime: 4 },
    { social: 'facebook', url: 'https://facebook.com', screenTime: 2 },
    { social: 'snapchat', url: 'https://snapchat.com', screenTime: 5 },
    { social: 'linkedin', url: 'https://linkedin.com', screenTime: 2 },
    { social: 'instagram', url: 'https://instagram.com', screenTime: 3 },
];
const restrictSocial = socials.filter(social => social.screenTime > 2);
// restrictSocial[0].screenTime = 100;
// console.log(socials);
// console.log(restrictSocial);
