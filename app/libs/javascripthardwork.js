'use strict';

// 1. Выполняю задачу: Стартуем и пишем первую программу

console.info('Мое имя Олег Василенко');
console.info('16.03.1975');
console.info('Добро ' + 'пожаловать ' + ' на курс');

// alert(2019 - 200);
document.getElementById('one').innerHTML = 'Привет, мир';
const oneType = document.getElementById('one');
oneType.style.color = 'red';
oneType.style.cssText =
  'font-size:30px; font-weight:900; color: orange; padding:20px 10px; border:1px solid red; display:inline-block;';
document.getElementById('two').innerHTML = 12 * 12;
document.getElementById('two').style.cssText =
  'font-size:30px; font-weight:900; color: orange; padding:20px 10px; border:1px solid red; display:block; margin-top:20px';
document.querySelector('h2 span').innerHTML = 'word';
document.querySelector('#three').innerHTML =
  '<h3>Заголовок с произвольным текстом</h3>';
document.querySelector('.four').innerHTML =
  '<h4>Заголовок с произвольным текстом</h4>';
document.querySelector('.four').style.marginTop = '30px';
document.querySelector('.four').style.color = 'blue';
document.querySelector('.four').style.fontSize = '45px';
document.querySelector('.four').innerHTML +=
  '<p>Предложение с произвольным текстом</p>';

const Y1 = 6;
const y2 = 3;
document.querySelector('.conteiner_mnoz').innerHTML = Y1 * y2;
document.querySelector('.conteiner_delen').innerHTML = Y1 / y2;
const x1 = 'Hello ';
const x2 = 5;
document.querySelector('.conteiner_pluss').innerHTML = x1 + x2;
const d2 = document.querySelector('.test-2').innerHTML;
console.log(d2);

const inputGoTwo = document.querySelector('.input-gotwo');
const inputIntwo = document.querySelector('.input-intwo');
inputGoTwo.onclick = function() {
  document.querySelector('.input-outwo').innerHTML += `${inputIntwo.value  }<br>`;
};
