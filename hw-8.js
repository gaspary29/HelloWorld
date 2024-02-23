// тренеровался, не смотреть
function callbackWithArrayLength(arr, callback) {
    // console.log(arr);
    /* Писать код тут */
    callback(arr.length);
}

callbackWithArrayLength([1], (length) => {
    console.log(length);
});

callbackWithArrayLength([1, 1], (len) => {
    console.log(len);
});
callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
    console.log(l);
});

function log(arrItem) {
    console.log("Элемент массива:", arrItem);
}

function each(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i]);
    }
}

each(["Глеб", "Олег", "Татьяна", "Платон"], log);

// задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
}));
// не совсем понял, но этот пример просто 1 к 1 из документации

// задание 2
function isPositive(item) {
    if (item > 0) {
        return item

    }

}
function isMale(item) {
    if (item.gender === 'male') {
        return item

    }

}
function filter(array, func) {
    const output = [];

    for (let i = 0; i < array.length; i++) {
        if (func(array[i])) {
            output.push(func(array[i]));
        }
    }
    return output;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const peopleGender = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopleGender, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]


//задание 3

let printCurrentDate = () => {
    const currentDate = new Date();
    console.log(currentDate);
    const interval = setInterval(() => {
        console.log(new Date());
    }, 3000)

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло');
    }, 30 * 1000)
}

printCurrentDate();


// задание 4


function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 5000)
}
delayForSecond(function () {
    console.log('Привет, Глеб!');
})
delayForSecond()

// задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => {
    sayHi('Глеб');
})