function number(a, b) {
    if (a => b) {
        return b
    } else { return a }

}
console.log(number(8,4));

function evenNum(a) {if (a%2 === 0) { return 'число четное'
    
} else { return 'число не четное'
    
}}
console.log(evenNum(553))


function findingNumbSquare(myNumber = 4) {
    console.log(myNumber ** 2);
}

findingNumbSquare(100);


function findingNumbSquare2(myNumber = 4) {
    return myNumber ** 2;
}

console.log(findingNumbSquare2(12));



function sayhello(){
let howyouyears = prompt('Сколько тебе лет?')
if (howyouyears <0  ) { alert ('Вы ввели неправильное значение')
    
} else if (howyouyears=>0 && howyouyears<= 12) { alert('Привет, друг')
    
} else { alert('Добро пожаловать')
    
}

}
sayhello()

function Twonumbers(numberOne, numberTwo) {
    if (isNaN(numberOne) || isNaN(numberTwo)) {
        return `Одно или оба значения не являются числом`;
    } else {
        return numberOne * numberTwo;
    }
}

console.log(Twonumbers(6, 4));

function trunumber() {
    let randomnumber = prompt('Введите любое число')
    if (isNaN(randomnumber)) { return 'Переданный параметр не является числом'
        
    } else { return randomnumber+' в кубе равняется '+randomnumber ** 3
        
    }
    
}
console.log(trunumber());







function getArea1() {  return Math.PI * this.radius ** 2;
    
}
function getPerimeter1() {  return 2*Math.PI * this.radius;
    
}

const circle1 = {radius: 50,
    getArea: getArea1,
    getPerimeter: getPerimeter1
}
const circle2 = {radius: 100,
    getArea: getArea1,
    getPerimeter: getPerimeter1
}

console.log('Площадь первого круга составляет ' + circle1.getArea() + ' кв. мм');
console.log('Периметр первого круга составляет ' + circle1.getPerimeter() + ' мм');
console.log('Площадь второго круга составляет ' + circle2.getArea() + ' кв. мм');
console.log('Периметр второго круга составляет ' + circle2.getPerimeter() + ' мм');

function TimeOfYear() {
    let monthNumber = prompt('Введите номер месяца');

    if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {
        return 'Зима';
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        return 'Весна';
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        return 'Лето';
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        return 'Осень';
    } else {
        return 'Такого месяца не существует';
    }
}