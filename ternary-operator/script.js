// basic use of ternary operator without conditional assignment.
const a = 5,
    b = 7;
a > b ? console.log('a is greater') : console.log('b is greater');

// basics use of ternary operator for conditional assignment.
const age = 12;
const canVote = age >= 18 ? 'can' : 'can not';
console.log(`you ${canVote} vote!`);

// ternary operator with multiple lines and conditional assignment.
const auth = true;
const redirect = auth
    ? (console.log('welcome to your dashboard!'), '/dashboard')
    : (console.log('you enter wrong password!'), '/login');
console.log(redirect);

// conditional assignment without else part.
const toRedirect = false;
const url = toRedirect ? '/dashboard' : null;
console.log(url);

// no conditional assignment, and no else part.
auth && console.log('welcome to your dashboard!');
