// урок 03

'use strict'


// let string строка
// let number номер
// let sym Symbol()
// let boolen = true
// null обьект
// undefined
// var obj = {}


// префиксная
// постфиксная
// let incr; let decr;

// ++incr // префиксная форма
// --decr;


// incr++; // постфиксная форма
// decr--; // вернула старое значение и выполнила действие


// // == ПО ЗНАЧЕНИЮ
// // === ПО ТИПАМ ДАННЫХ
// // &&  - если два значения true, ответ true, если true и false ответ false

// //   || если несколько условий дает true, общий итог true


// console.info(incr);
// console.info(decr);


// условия

// if ((2 * 4) === 8) {
//   console.info('верно');
// } else {
//   console.info('неверно');
// }

const numberFive = 49;
if (numberFive < 50) {
  console.info('маловато будет');
} else if (numberFive > 50) {
  console.info('перебор');
} else {
  console.info('в тютельку');
}
// тернарный участрвуют 3 аргумента
let num;
(num == 50) ? console.info('верно') : console.info('неверно');

let numberOne;
switch (numberOne) {
  case numberOne < 49: console.info('неверно');
    break;
  case numberOne < 100: console.info('много');
    break;
  case numberOne < 80: console.info('много');
    break;
  case 50: console.info('верно');
    break;
  default: console.info('ошибка');
    break;
}



let numberTwo;

while (numberTwo < 55);
console.info(numberTwo);
numberTwo += 1;

let numberThree;
do {
  console.info(numberThree);
  numberThree += 1;
}
while (numberThree < 55);


for (let cyrylicType = 0; cyrylicType < 8; cyrylicType += 1) {
  console.log(cyrylicType);
}




for (let cyrylicType = 0; cyrylicType < 8; cyrylicType += 1) {
  if (cyrylicType == 6) {
    break;
  }
  console.log(cyrylicType);
}


for (let cyrylicType = 0; cyrylicType < 8; cyrylicType += 1) {
  if (cyrylicType == 6) {
    continue;
  }
  console.log(cyrylicType);
}












const money = +prompt('Ваш бюджет на месяц', '');
const time = prompt('Введите дату в формате YYYY-MM-DD', '');

const appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  saveing: false
};
// const a1 = prompt('Введите обязательную статью расходов в этом месяце', '');
// const a2 = prompt('Во сколько обойдется', '');
// const a3 = prompt('Введите обязательную статью расходов в этом месяце', '');
// const a4 = prompt('Во сколько обойдется', '');
// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;


for (let i = 0; i < 2; i += 1) {
  const a = promt("Введите статью расхода в месяце", '');
  const b = promt("Сколько стоит статья?", '');

  if ((typeof (a)) === 'string' && a !== '' && b !== '' && a.length < 50) {
    console.info('все условия выполнено!');
    appData.expenses[a] = b;
  } else {

  }

};
appData.moneyPerDay = appData.budget / 30;
alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);



if (appData.moneyPerDay > 0 && appData.moneyPerDay < 100) {
  console.info('Минимальный достаток!');
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
  console.info('Нормальный достаток!');
} else if (appData.moneyPerDay >= 2000) {
  console.info('Высокий достаток!');
} else {
  console.info('Вы не имеете дохода!');
}
