for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

let a = 0
while (a < 5) {
    a++;
    console.log(a);
};

let b = 6
while (b <= 21) { b++; console.log(b) };

let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': "400"
}
for (item in obj)
    console.log(`${item} зарплата ${obj[item]} долларов`)

let num = 0

for (let c = 1000; c > 50; c /= 2) {
    num++;
    console.log(`Получилось число:${c}`)
};

console.log(`Всего итераций:${num}`);

for (let dayfriday = 2; dayfriday <= 31; dayfriday += 7) {
    console.log(`Сегодня пятница ${dayfriday}-е число. Необходимо подготовить отчет.`);
}