function rememberWords() {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);

    alert(list);

    let answerOne = prompt('Что было первым в списке?');

    let answerTwo = prompt('Что было последним в списке?');

    if (list[0] === answerOne && list[list.length - 1] === answerTwo) {
        return alert('Держи с полки пирожок, угадал!');
    } else if (list[0]=== answerOne || list[list.length - 1] === answerTwo) {
        return alert('Вы близки к победе!');
    } else {
        return alert('Не угадал');
    }}