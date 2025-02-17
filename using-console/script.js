// .log() used to print on console.
console.log('Hello!');

// print console object.
console.log(typeof console, console);

// print objects on console in form of table.
const tempObj = {
  fullName: 'Mohd Zama',
  age: 18,
  rollNumber: '2100330130020',
  collegeName: 'RKGIT',
};
console.table(tempObj);

// used to group all the console.log() statements.
console.group('My Group');
console.error('Use of console.error() method');
console.warn('Use of console.warn() method');
console.log('Inside the group');
console.groupEnd();

console.log('Outside the Group');
