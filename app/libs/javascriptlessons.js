'use strict';

// первый урок по изучению Джаваскрипт
// 1. Учу Стартуем и пишем первую программу

const taskOneZagolovok = document.getElementsByClassName('block_h2');

for (let i = 0; i < taskOneZagolovok.length; i += 1) {
  taskOneZagolovok[i].style.marginBottom = '40px';
}
const taskOne = document.getElementById('tastone_li');

taskOne.style.color = 'red';
document.getElementById('tastone_li').innerHTML = 'Манипуляция содержимым';
const taskTwo = document.getElementById('tastone_litwo');
taskTwo.style.cssText =
  'color: blue !important; background-color: yellow;width: 100px;text-align: center;';
const projectOne = 34;
const resultOne = projectOne + 345;
const resultTwo = `${projectOne}строка для документов`;

document.getElementById('result_ones').innerHTML = resultOne;

document.getElementById('result_one').innerText = resultTwo;

document.querySelector('#result_three').innerHTML =
  ': проверка нового заполнения';
document.querySelector('#result_foure').innerHTML = ': проверка';
document.getElementById('result_foure').innerHTML = ': проверка перезатирания';

const pictureOver = document.getElementById('picture_over');
pictureOver.style.cssText =
  ' background: url(https://mirpozitiva.ru/uploads/posts/2016-08/medium/1472042903_31.jpg); width: 400px; height:400px; text-align: center;';

// 2.Учу Основы ввода данных

const inputIn = document.querySelector('.input-in');
const inputGo = document.querySelector('.input-go');

inputGo.onclick = function() {
  document.querySelector('.input-out').innerText = inputIn.value;
};
