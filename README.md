

# Interview for frontend

## JS

### Basic

```
if (true) {
    const name = 'john';
    let number = '123';
    var email = '123@gmailc.om';
}

console.log(email, number, name);
```

```
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    })
}
```

### arrays

```
const persons = [
    {
        name: 'John Doe',
        email: 'John@gmail.com',
        salary: '100000',
    },
    {
        name: 'Jane Doe',
        email: 'Jane@gmail.com',
        salary: '90000',
    },
];
```

1. How to get array of names
`const names = ['John Doe', 'Jane Doe']`

2. How to get Object map
`const nameMap = { John@gmail.com: 'John Doe', Jane@gmail.com: 'Jane Doe' }`

3. How to get items where salary is higher than 1000
`const result = persons.filter(item => item.salary > 1000);`

4. How to cache upper search result for later use

```
const createSearch = () => {
    const cache = {};

    return (amount) => {
        if (!cache[amount]) {
            cache[amount] = contacts.filter(item => item.salary > amount);
        }

        return cache[amount];
    }
};
```

### inheritance

1. describe how can inheritance be achieved
```
const Vehicle = function (color, wheelCount) {
    this.color = color;
    this.wheelCount = wheelCount;
};

Vehicle.prototype = {
    getColor: function () {
        return this.color;
    },

    getWheelCount: function () {
        return this.wheelCount;
    }
};

const Car = function (color) {
    Vehicle.call(this, color, 4);
};

Car.prototype = Object.assign({}, Vehicle.prototype);
Car.prototype.constructor = 'Car';

const car = new Car('red');

console.log(car instanceof Car);
```

2. How to add to new method to Array
`Array.prototype.reduce = function() {}` 

### promises

1. What is going to be the sequence of the requests

```
fetch('//google.com')
    .then(function () {
        fetch('//yandex.ru')
    })
    .then(function () {
        fetch('//facebook.ru')
    })
    .then(() => {
        fetch('//twitter.ru')
    });

```

2. Will the thens after throw error work, what is going to be after catch

```
fetch('//google.com')
    .then(function () {
        throw new Error('some error');
    })
    .then(function () {
        fetch('//facebook.ru')
    })
    .then(() => {
        fetch('//twitter.ru')
    }).catch(() => {
        console.error('error occured');        
    }).then(() => {
        fetch('//yandex.ru');    
    });
```

3. convert promise to async await
```
fetch('https://google.com')
    .then((json) => {
        return json()
    })
    .then((data) => {
        return data
    }) 
```

## CSS

1. Tell about box model
4. inline, block, inline-block
2. Flex box, Grid, any differences
5. transition, transform, animations
6. Preprocessors
7. Custom fonts, font sizing
8. Mobile first
9. Print css

## React

1. Virtual DOM
3. setState sync or async function
2. Profits of react, UNIT test, components just functions, performance with virtual dom
3. jsx what is it
4. what is state and props, props are immutable,
5. arrow function in react
6. refs
7. Pure Component
8. HOC, why are they needed
9. flux
10. reducer,  Store, action,View

## Redux

1. Explain flux
2. Explain Actions, Store, Reducer, Container
3. Middleware
4. How we go back in time

## Tools

1. Git, release-1.0, master, need to send bugfix to release-1.0.1
2. Bundling tools, webpack, rollap, gulp, grunt
3. npm 5, 6 anything, custom packages inhouse or smth about that
4. CI/CD tools, any experience
5. linting tools, eslint
6. testing tools, jest or others, talk about unit tests

## General

1. what is session
2. what is cookies
3. authorization process
