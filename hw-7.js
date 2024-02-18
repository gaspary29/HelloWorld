//задание 1
let str = 'js'
console.log(str.toUpperCase());

// задание 2 
let strWord = ['яблоко', 'груша', 'гриб', 'огурец']
let strW = 'гру' 

function searchStart(array, str) {
    return array.filter(el => el.toLowerCase().startsWith(str));
}
console.log(searchStart(strWord, strW)); 
// все есть в шпаргалке

// задание 3

let num = 32.58884
console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.round(num))
// обожаю задания, которые полностью можно взять из шпаргалки 

// задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// задание 5

function randomNum() {console.log(Math.round(Math.random()*11));}

  randomNum()
  // задание 6 
  function getRandomArrNumbers(a) { let Numberarr = Array.from({length:Math.floor(a/2)},
   ()=> Math.floor(Math.random() * 10)); return Numberarr } 
   
   console.log(getRandomArrNumbers(20))
  

// задание 7 ( в задании следующим курсам дайте подсказку, тут понятно, что через рандом, но прибавить минимальное значение, додумывать долго очень)
function getRandomNumber(minA, maxA) {
    let anyNumber = Math.round(Math.random() * (maxA-minA))+minA;
    return anyNumber;
}

console.log(getRandomNumber(1, 5));


// Задание 8 
let myData = new Date();
console.log(myData);

// задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate) // в итоге просто вывел то, что получилось

// задание 10
let data = new Date();
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
"Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря" ];

// записал для собственного понимания
let year = data.getFullYear();
let month = data.getMonth();
let day = data.getDay();
console.log(year)
console.log(month)
console.log(day)

function formatedDate(currentDate) {
    let fullDate = currentDate.getDate() + ' ' + months[month].toLowerCase() + ' ' + year + ' -  это ' + days[day].toLowerCase();
    let fullTime = currentDate.getHours()+ ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds();
    let dateResult = `${fullDate} ${fullTime}`;
    return dateResult;
}
//  fullDate равно дата+пробел+(вызов из массива месяц элемента с индексом раным инексу нынешнего месяца)+ нынешний год+ это + (вызов элемента в соответствии с днем ) и тд
//

console.log(formatedDate(data));


