// * the forEach() method of Array instances executes a provided function once for element and returns undefined.

const socials = ['twitter', 'facebook', 'whatsapp', 'snapchat', 'instagram', 'linkedin'];

// function logNumber(num) {
//   console.log(num);
// }

const logNumber = function (num) {
  console.log(num);
};

socials.forEach(logNumber);
socials.forEach(num => console.log(num));
socials.forEach((element, index, currArray) => console.log(index, element, currArray.length));
