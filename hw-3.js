let password = 'пароль';
let passworduser = prompt("Введите пароль")
if (passworduser === password) { alert("Пароль введен верно") } else { alert("Пароль введен неверно") };

let c = Number(prompt("Запишите любое число"));
if (c < 10 && c > 0) { alert("Верно") } else { alert("Неверно") };

let d = Number(prompt("введите любое число номер 1"));
let e = Number(prompt("введите любое число номер 2"));
if (d > 100 || e > 100) { alert("Верно") } else { alert("Неверно") };

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

let monthnumber = Number(prompt("Введите номер месяца, чтобы узнать время года"));
switch (monthnumber) {
    case 12:
        console.log("Зима");
        break;
    case 1:
        console.log("Зима");
        break;
    case 2:
        console.log("Зима");
        break;
    case 3:
        console.log("Весна");
        break;
    case 4:
        console.log("Весна");
        break;
    case 5:
        console.log("Весна");
        break;
    case 6:
        console.log("Лето");
        break;
    case 7:
        console.log("Лето");
        break;
    case 8:
        console.log("Лето");
        break;
    case 9:
        console.log("Осень");
        break;
    case 10:
        console.log("Осень");
        break;
    case 11:
        console.log("Осень");
        break;
    default: console.log("Месяца с таким номером в году нет!")
        break;
}