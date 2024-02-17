// задание 1
let randomnumber = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < randomnumber.length; i++)
{
    console.log(randomnumber[i]);
    if (randomnumber[i] === 10) break;
  }
  // пояснения, задаем переменную i равную 0, ведь у массива идекс начинается с 0, 
  //Задаем, что i меньше randomnumber.length(количество элементов массива, в нашем случае равно 6,
  // далее задаем, что бы i после каждого цикла увеличивалось на 1, выводим в консоль значения, 
  //но вводим дополнительное условие, при элементе равном 10 цикл останавливается и больше ничего не выводится.

// задание 2
let randomnumberTwo = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < randomnumberTwo.length; i++) {

  if (randomnumberTwo[i] === 4) {
    console.log(i);
  }
}
let result = randomnumberTwo.indexOf(4);
console.log(result);
//пояснения, метод indexOf возвращает первый индекс, по которому данный элемент может быть найден
// в массиве или -1, если такого индекса нет.
// так же, как и в задании 1 заполняем первоначальные условия, в дополнительных уловиях задаем, 
//что элемент массива равен 4, выводим в консоль индекс согласно этому условию. Далее используем 
//метод indexOf(должны получить 2 по идее, так как идет третьим по счету, начиная с 0)


// задание 3
let randomThree = [1, 3, 5, 10, 20];

let joinOne = randomThree.join('');

console.log(joinOne);
// задание 4
let randomFour = [];

for (let i = 0; i < 3; i++) {
  randomFour[i] = [];
  for (let j = 0; j < 3; j++) {
   randomFour[i][j] = 1;
  }
}
console.log(randomFour);
// тут не до конца понял, кое где подсмотрел, сначала создаем условие, что в массиве не более 3 элементов
// (индексы 0, 1, 2, все это из условия, что i < 3), потом заполняем массив на данных условиях, и 
//присваиваем, что не зависимо от i и j элементы массивов будут равны 1.

// Задание 5
let randomFive = [1, 1, 1];
randomFive.push(2, 2, 2);
console.log(randomFive);

// задание 6
let randomSix = [9, 8, 7, 'a', 6, 5];
randomSix.sort(); //сортируем, буква в конце массива
randomSix.pop(); // удаляем последний элемент массива
console.log(randomSix);

// Задание 7
const arrNumberSix = [9, 8, 7, 6, 5];

let puzzle = Number(prompt('Угадай число'));

if (arrNumberSix.includes(puzzle)) {
  console.log('Угадал');
} else {
  console.log('Не угадал');
}
// тут записали условие, если в массив входит элемент записанный пользователем, 
//то выводим в консоле «угадал», если не «не угадал».

// Задание 8
let wordOne = 'abcdef';

let arrString = wordOne.split(''); //разделил все буквы на элементы массива

arrString.reverse(); // развернул все элементы массива
wordOne = arrString.join(''); // преобразовал все в слово

console.log(wordOne);

// Задание 9
const arrNumberSeven = [
  [1, 2, 3, ],
  [4, 5, 6]
];

let arr = [].concat(arrNumberSeven[0], arrNumberSeven[1]); // просто воспользовался методом из шпаргалки

console.log(arr);

// Задание 10
const arrNumberEight = [8, 5, 3, 4, 3, 7, 9, 2, 0, 1];

for (let i = 1; i < arrNumberEight.length; i++) {
  let sum = arrNumberEight[i - 1] + arrNumberEight[i];
  console.log(sum);
} 

// Задание 11

let  randomEleven = [6, 9, 3];
let squares = randomEleven.map(num=>num**2)   // ввели стрелочную функцию вместо(function (num){return num*num})
console.log(squares);


// Задание 12
const arrWord = ['слово', '', 'слог', 'длинное предложение', 'буква'];
let getText = arrWord.map(word => word.length) // подобно заданию 12
console.log(getText);
// Задание 13
const randomThirteen = [3, 5, -5, 2, -3, -9, 2, -1];

let getNumber = randomThirteen.filter( x => x < 0 ) // другой метод, но смысл тот же

console.log(getNumber);

// Задание 14
let max = 11
const generatedNumber = Array.from({ length: 10 }, ()=> Math.floor(Math.random() * 11)); 
// с помощью array.form создаем "настоящий" массив, задаем, что в нем 10 Элементов, а то, какое число будет
//в элементе, ограничиваем  11 ( от 0 до 10)

console.log(generatedNumber);

const evenArray = generatedNumber.filter(x => x % 2 === 0); // как в 13 задании, используем тот же метод, плюс кратность 2 

console.log(evenArray);

// Задание 15
const generatedArrayTwo = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10));

console.log(generatedArrayTwo);

let Sum = generatedArrayTwo.reduce((a, b) => a + b);

console.log(Sum);

let average = Sum / generatedArrayTwo.length;

console.log(average);             