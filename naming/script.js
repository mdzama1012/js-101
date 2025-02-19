const person = {
    first_name: 'zama',
    last_name: 'zaidi',
    age: 20,
    address: {
        street: 'sakko wali gali, hussaini chawk',
        city: 'muradnagar',
        state: 'up',
    },
};

const {
    first_name: firstName,
    last_name: lastName,
    age,
    address: { street, city, state },
} = person;

const intro = `hello i'm ${firstName} ${lastName}, ${age} year old, i live in ${state}, ${city}, ${street}.`;

console.log(intro);
