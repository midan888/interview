const persons = [
    {
        name: 'John Doe',
        email: 'John@gmail.com',
        salary: '100000',
    },
    {
        name: 'Jane Doe',
        email: 'John@gmail.com',
        salary: '90000',
    },
];

// map

persons.map(({ name }) => name);

//  reduce
const total = persons.reduce((acc, item) => {
    acc[item.email] = item.name;

    return acc;
}, {});

// 2 return all salaries that higher then given value;
const result = persons.filter(item => item.salary > 100000);


// 3 search for email
const createSearch = () => {
    const cache = {};

    return (amount) => {
        if (!cache[amount]) {
            cache[amount] = contacts.filter(item => item.salary > amount);
        }

        return cache[amount];
    }
};

const search = createSearch();

search(3000);


