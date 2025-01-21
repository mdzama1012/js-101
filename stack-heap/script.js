// values are stored on the stack.
let fullName = 'Mohd Zama';

// reference values are stored on the heap.
const person = {
    fullName: 'Mohd Zama',
    age: 20,
    email: 'zamazaidi777@gmail.com',
    phoneNumber: '+91 8791365544'
}

let newFullName = fullName;
console.log(fullName);
console.log(newFullName);
newFullName = 'Mohd Zama Zaidi';
console.log(fullName);
console.log(newFullName);

const newPerson = person;
console.table(person);
console.table(newPerson);
newPerson.fullName = 'Salman Khan';
console.table(person);
console.table(newPerson);
