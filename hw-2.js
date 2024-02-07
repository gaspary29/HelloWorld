let a = 20;
alert(a);
let b = 2007;
alert(`Год выпуска первого айфона ${b}`);
let c = "Brendan Eich";
alert(`${c}-создатель Js`);
let two = 2;
let ten = 10;
let result1 = two + ten;

let result2 = ten - two;

let result3 = ten * two;

let result4 = ten / two;
alert(
    `Сумма ${result1}\nРазность ${result2}\nПроизведение ${result3}\nЧастное ${result4}`
  );
let two5 = 2 ** 5;
alert(`Два в пятой стеепени это ${two5}`);
let a1 = 9;
let b1 = 2;
let result5 = 9 % 2;
alert(`остаток от деления ${result5}`);
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
let age1 = Number(prompt('Сколько Вам лет?'));
alert(age1);
const User = {
    name: "Ivan",
    age: 31,
    isAdmin: true

};
User.age = "30";
alert(User.name)
alert(User.age)
alert(User.isAdmin)
User.cityOfResidence = "Severodvinsk"
delete User["cityOfResidence"];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert (User.info);

let names= (prompt("Привет, как тебя зовут?"));
let greeting= `Привет ${names}!`;
alert (greeting);
