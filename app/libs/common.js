

  'use strict';

// вывод на страницу

document.querySelector('.motion_pray p:first-child').innerHTML = 'заменю эту строку той самой';

document.querySelector('.motion_pray p:nth-child(2)').innerHTML += ': дополню строку новой информацией';


const notationPray = document.querySelector('.notation_pray');
notationPray.style.paddingTop = '30px';
notationPray.style.textAlign = 'center';


const notationPrayPath = document.querySelector('.notation_pray p');
notationPrayPath.style.paddingTop = '25px';


document.querySelector('.notation_pray_h').outerHTML = '<h3 class="notation_pray_ha">Новое содержание заглавия</h3>';
// заголовок заменил вместе с обверткой

document.querySelector('.notation_title').outerHTML = '<h4 class="notation_title active">Новое заглавие блока</h4>';

document.querySelector('.nothing_title').outerText = '<h4 class="nothing_title">Заглавие без тегов</h4>';

// Тонкая работа по замене содержимого или мультивставка

let tochVstavka = document.querySelector('.braike_title_span');
console.log = (tochVstavka);

//tochVstavka.insertAdjacentHTML('beforebegin', 'юефобегин' );


tochVstavka.insertAdjacentHTML('beforebegin', '<b>до спана в начале/</b>' );
tochVstavka.insertAdjacentHTML('afterbegin', '<b> после спана в начале </b>' );
tochVstavka.insertAdjacentHTML('beforeend', '<b>до спана в конце/</b>' );
tochVstavka.insertAdjacentHTML('afterend', '<b> после спана в конце</b>' );


const boxTwoContain = document.querySelector('.two');
boxTwoContain.style.display = 'inline-block';

const boxInnerTitle = document.querySelector('.box_inner h1');
boxInnerTitle.style.display = 'inline-block';
boxInnerTitle.style.fontWeight = 'normal';

// манипулирование непарным тегом

document.querySelector('#fiest_img_change').onclick = changeing;

function changeing() {

let newAsressImg = "https://cdn4.iconfinder.com/data/icons/hospital-19/512/14_hospital-128.png";
document.querySelector('#fiest_img').src = newAsressImg;

}

// let linkStyle = document.querySelector('link').href;
//console.log(document.querySelector('link').href);
//console.log('kjk');
const iiei = 5;
console.info(iiei);

//document.querySelector('link').href="style2.css";
//linkStyle = 'style2.css';

document.querySelector('title').innerText = "Я мучу Javascript - это новый заголовок";






  // // повторяю

  let myTextBold = 'Привет, я первая строка по Джаваскрипт';
  let myTextBoldInTo = '';
  console.info(myTextBoldInTo);
  myTextBoldInTo = document.getElementById('my_text_bold');
  //myTextBoldInTo.innerHTML = 'Привет, я первая строка по Джаваскрипт';

  myTextBoldInTo.innerHTML = myTextBold;
  console.info(myTextBoldInTo);
  //myTextBoldInTo.css('border','1px solid red');


  let myTextTwo = document.getElementById('my_text_two').innerHTML;
  let myTextTwoQuery = document.querySelector('#my_text_two').innerHTML;



  document.getElementById('my_text_two_first_query').innerHTML = '<span>' + myTextTwoQuery +'</span>';

  document.getElementById('my_text_two_first').innerHTML = '<span>' + myTextTwo +'</span>';


  document.getElementById('my_text_two_second').innerText = '<span>' + myTextTwo +'</span>';
  document.getElementById('my_text_two_third').innerText = '<span>myTextTwo</span>';

  let inputFirst = document.getElementById('input_first').innerHTML;
  document.getElementById('my_text_two_two').innerHTML = inputFirst;



  let innoyChild = '<i>4343</i>';
  document.getElementById('innoyChild').innerText = innoyChild;
  document.querySelector('#innoyChildQuery').innerText = innoyChild;
  document.getElementById('innoyChildSecond').innerHTML = innoyChild;
  document.querySelector('#innoyChildQuerySecond').innerHTML = innoyChild;

  /*Результат <i>4343</i>
              <i>4343</i>
                 4343
                 4343     */


  // самая простая функция
  function help() {
    let firstFunc = 'Работает первая функция'
   document.querySelector('#invertFunc').innerHTML = firstFunc + ' - Вывод строки';
  }
  help();


  let btnFirsr = document.querySelector('#btn_firsr');

  document.querySelector('#btn_firsr_height').innerHTML = btnFirsr.autofocus;
  document.querySelector('#btn_firsr_height1').innerHTML = btnFirsr.nodeType;

  document.querySelector('#btn_firsr_height2').innerHTML = btnFirsr.offsetWidth;
  document.querySelector('#btn_firsr_height3').innerHTML = btnFirsr.onkeypress;





  function letsgo() {
    let theFunc = 'действие при клике';
   document.querySelector('#btn_firsr_height4').innerHTML = theFunc + ' - запуск функции';
  }

  let btnSecond = document.querySelector('#btn_second');
 // console.log(btnSecond);
  btnSecond.onclick = letsgo;


  function show() {
  let modal = document.querySelector('.modal');
  modal.style.display = 'block';
  modal.style.backgroundColor = '#232323';
  modal.style.color = '#fff';
  modal.style.marginTop = '20px';
  modal.style.border = '1px solid red';
  modal.style.borderRadius = '20px';
  }

  const btnThender = document.querySelector('#btn_thender');
  //console.log(btnThender);
  btnThender.onclick = show;

  function hide() {
  let modal = document.querySelector('.modal');
  modal.style.display = 'none';
  }

  const btnDell = document.querySelector('#btn_dell');
  //console.log(btnThender);
  btnDell.onclick = hide;


  // сравнение
  // = присвоение
  // == сравнение по содержимому
  // != не равно по содержимому
  //  >    <    >=    <=
  // === сравнение по содержимому и типу
  // !== не равно по содержимому и типу
  // &&
  // ||
  let a = 8;
  a = 9;

  if (a > 11) {
  document.querySelector('#operat_srav').innerHTML = 'Условие выполняться';
  } else {
  document.querySelector('#operat_srav').innerHTML = 'Условие не выполняться';
  }


  let terDer = 34;
  let terDertwo = 24;
  if (terDer >= terDertwo ) {
  document.querySelector('.operat_srav').innerHTML = 'Условие выполняться';
  } else {
    document.querySelector('.operat_srav').innerHTML = 'Условие не выполняться';
  }


  let manipNumber = 34;
  let manipString = 'тридцать четыре';
  if (manipNumber === manipString ) {
  document.querySelector('.manipul_srav').innerHTML = 'Условие сравнение по содержимому и типу выполняться';
  } else {
  document.querySelector('.manipul_srav').innerHTML = 'Условие сравнение по содержимому и типу не выполняться';
  }

  let manipNumberTwo = 'тридцать четыре2';
  let manipStringTwo = 'тридцать четыре';
  let manip = document.querySelector('.manipul_srav2');
  if (manipNumberTwo === manipStringTwo ) {

  document.querySelector('.manipul_srav2').innerHTML = 'Условие сравнение по содержимому и типу выполняться';
  manip.style.border = '1px solid red';

  } else {

  document.querySelector('.manipul_srav2').innerHTML = 'Условие сравнение по содержимому и типу не выполняться';
  manip.style.border = '1px solid olive';
  manip.style.display = 'inline-block';
  manip.style.padding = '1px 20px';
  }



  let numberFlat = 1;
  let numberPodegd;

  if( numberFlat > 0 && numberFlat <= 30 ) {
  numberPodegd = 1;
  }
   else if( numberFlat > 30 && numberFlat <= 60 ) {
  numberPodegd = 2;
  } else if( numberFlat > 60 && numberFlat <= 80 ) {
   numberPodegd = 3;
  } else {
   numberPodegd = 'Такого подьезда нет';
  }


  document.querySelector('.numberPodegd').innerHTML = numberPodegd;

  let colichPod = document.querySelector('.numberPodegd');

  colichPod.style.border = '1px solid olive';
  colichPod.style.display = 'inline-block';
  colichPod.style.padding = '5px 20px';
  colichPod.style.fontSize = '20px';
  colichPod.style.marginBottom = '20px';







  let claakaValue = document.querySelector( '#claakaq23' );
  // console.log(claakaValue);


let rere = 3+4;

document.querySelector('#get_number_test').innerText = 'Вы угадали число';



  // Первая игра


  // генерация случайного числа   -  Math.random();


  let randomNumber = Math.random();
  randomNumber = randomNumber * 10;
  randomNumber = Math.round(randomNumber); // округление до целого числа
  console.info(randomNumber);

  let inputNumber = document.querySelector('#number_past');
  document.querySelector('#number_submit').onclick = checkNumber;

  function checkNumber() {
//   let getInputNumber = Number(inputNumber.value);
let getInputNumber = parseInt(inputNumber.value);
if (isNaN(getInputNumber)) {
 document.querySelector('#number_past_input').innerText = 'Введите коректное число';
} else {
  if (getInputNumber == randomNumber) {
   document.querySelector('#number_past_input').innerText = 'Вы угадали число';
   document.querySelector('#number_past_input').style.fontColor = '##BDC3C7';
   location.reload();
 }
 else {
   document.querySelector('#number_past_input').innerText = 'Вы не угадали число';
   document.querySelector('#number_past_input').style.fontColor = '#CD5C5C';
 }
}
}

// console.log(getInputNumber);
// 06 05



let blocksLabelInput =  document.querySelector('.novytest');
blocksLabelInput.style.height = '30px';
blocksLabelInput.style.display = 'block';
blocksLabelInput.style.marginBottom = '10px';
blocksLabelInput.style.marginTop = '5px';
blocksLabelInput.style.textIndent = '5px';

let blocksLabelInputShirin =  document.querySelector('.shirinnovytest');
blocksLabelInputShirin.style.height = '30px';
blocksLabelInputShirin.style.display = 'block';
blocksLabelInputShirin.style.marginBottom = '10px';
blocksLabelInputShirin.style.marginTop = '5px';
blocksLabelInputShirin.style.textIndent = '5px';

let blocksLabelInputVisota =  document.querySelector('.visotatest');
blocksLabelInputVisota.style.height = '30px';
blocksLabelInputVisota.style.display = 'block';
blocksLabelInputVisota.style.marginBottom = '10px';
blocksLabelInputVisota.style.marginTop = '5px';
blocksLabelInputVisota.style.textIndent = '5px';
blocksLabelInputVisota.style.textIndent = '5px';



let novotestSubmit =  document.querySelector('.novotest_submit');
novotestSubmit.style.height = '30px';
novotestSubmit.style.padding = '0 20px';
novotestSubmit.style.marginTop = '30px';
novotestSubmit.style.lineHeight = '30px';
novotestSubmit.style.display = 'inline-block';







  function checkInput() {
let getDlinaAcvariuma = parseInt(document.querySelector('.novytest').value);
let getShirinaAcvariuma = parseInt(document.querySelector('.shirinnovytest').value);
let getVisotaAcvariuma = parseInt(document.querySelector('.visotatest').value);

if (!isNaN(getDlinaAcvariuma) && !isNaN(getShirinaAcvariuma) && !isNaN(getVisotaAcvariuma)) {

getDlinaAcvariuma = getDlinaAcvariuma / 10;
getShirinaAcvariuma = getShirinaAcvariuma / 10;
getVisotaAcvariuma = getVisotaAcvariuma / 10;


let getObem = getDlinaAcvariuma * getShirinaAcvariuma * getVisotaAcvariuma;

document.querySelector(".novytest_input").innerHTML = 'Объем вашего аквариума - ' + getObem + ' литров';
}
else {
 document.querySelector(".novytest_input").innerHTML = 'Введите корректные величины';
}
// 0.2







let rezultGetNovotest = getNovotest *4;
 document.querySelector('.novytest_input').innerText = rezultGetNovotest;
}

document.querySelector('.novotest_submit').onclick = checkInput;



  // window.addEventListener('scroll', function () {
  //     let scroll = window.pageYOffset;
  //     let banner = document.querySelector('.header_img');
  //     banner.style.transform = ('translateY(' + (scroll / 100) + '%)');
  // });

































// /* jshint browser:true, jquery:true */

// $(document).ready(function() {

//   'use strict';


//   // блок типы данных

//   var tNumber = 34; // переменная видна везде
//   let peremLets = 45; //создается в момент использования, сначала переменная, потом операции не иначе
//   const pI = 3.14; // ее не возможно переопределить
//   var string = "Это строка";
//   var boolean = true;
//   var obj = {a: 232};
//   var nulledTypeDan = null;
//   var unSel = undefined;

//   console.log(tNumber);
//   console.log(string);
//   console.log(boolean);
//   console.log(obj);
//   console.log(unSel);

//   document.getElementById("listNumberEnter").innerHTML = tNumber;
//   document.getElementById("listStringEnter").innerHTML = string;
//   document.getElementById("listBooleanEnter").innerHTML = boolean;

//   document.getElementById("listObjEnter").innerHTML = obj;
//   document.getElementById("listNulledEnter").innerHTML = nulledTypeDan;
//   document.getElementById("noDataSite").innerHTML = unSel;

//   document.getElementById("listNumberEnterOf").innerHTML = typeof tNumber;
//   document.getElementById("listStringEnterOf").innerHTML = typeof string;
//   document.getElementById("listBooleanEnterOf").innerHTML = typeof boolean;

//   document.getElementById("listObjEnterOf").innerHTML = typeof obj;
//   document.getElementById("listNulledEnterOf").innerHTML = typeof nulledTypeDan;
//   document.getElementById("noDataSiteOf").innerHTML = typeof noDataSite;

//   // базовые операции

//   var bazPeremenOne = 78;
//   var bazPeremenTwoo = 34;

//   newFunction(bazPeremenOne);
//   document.getElementById("listbazzTwo").innerHTML = bazPeremenTwoo;

//   document.getElementById("listbazzR").innerHTML = bazPeremenOne;
//   document.getElementById("listbazzRwo").innerHTML = bazPeremenTwoo;
//   var summResultOne = bazPeremenOne + bazPeremenTwoo;
//   document.getElementById("summResultOne").innerHTML = summResultOne;

//   document.getElementById("listbazzW").innerHTML = bazPeremenOne;
//   document.getElementById("listbazzWwo").innerHTML = bazPeremenTwoo;
//   var vidnimResultOne = bazPeremenOne - bazPeremenTwoo;
//   document.getElementById("vidnimResultOne").innerHTML = vidnimResultOne;

//   document.getElementById("delenieO").innerHTML = bazPeremenOne;
//   document.getElementById("delenieT").innerHTML = bazPeremenTwoo;
//   var delenieResultOne = bazPeremenOne / bazPeremenTwoo;
//   document.getElementById("delenieResultOne").innerHTML = delenieResultOne;

//   document.getElementById("ostatkO").innerHTML = bazPeremenOne;
//   document.getElementById("ostatkT").innerHTML = bazPeremenTwoo;
//   var ostatkResultOne = bazPeremenOne % bazPeremenTwoo;
//   document.getElementById("ostatkResultOne").innerHTML = ostatkResultOne;

//   var firstString = "Это моя строка ";
//   var secondString = ", которая не может быть верной ";
//   var secondStringNumber = "34";
//   var thirdNumberCon = 58;

//   var firstConcatResult = firstString + secondString;
//   document.getElementById("firstConcatString").innerHTML = firstConcatResult;

//   var secondConcatResult = firstString + secondStringNumber;
//   document.getElementById("secondStringNumberResult").innerHTML = secondConcatResult;

//   var thirdStringNumberResult = firstString + thirdNumberCon;

//   document.getElementById("thirdStringNumberResult").innerHTML = thirdStringNumberResult;

//   var lineString = "345";
//   var numberNumber = 45;
//   var lineSumResult = lineString + numberNumber;
//   var lineSumResultSecond = numberNumber + lineString;
//   document.getElementById("lineSumResult").innerHTML = lineSumResult;
//   document.getElementById("lineSumResultSecond").innerHTML = lineSumResultSecond;

//   var booleanTrue = true;
//   var booleanNumber = 343;
//   var booleanFalse = false;

// var decte = 1234;
// decte = decte++;
// document.querySelector('#decteout').textContent = decte;
// console.log(decte++);


// var mindecte = 24;
// mindecte = ++mindecte;
// document.querySelector('#mindecte').textContent = mindecte;
// console.log(decte++);


// var minte = 5;
// minte = minte--;
// document.querySelector('#minteout').textContent = minte;
// console.log(decte++);



// var muxout = 45;
// muxout = --muxout;
// document.querySelector('#muxout').textContent = muxout;



// var checkMe = 123456;
// checkMe = ++checkMe;
// document.querySelector('#checkMe').textContent = checkMe;





//   var booleanSum = booleanTrue + booleanNumber;
//   var booleanSumTwoo = booleanFalse + booleanNumber;
//   var booleanDif = booleanNumber - booleanFalse;

//   document.getElementById("booleanNumber").innerHTML = booleanNumber;
//   document.getElementById("booleanNumber1").innerHTML = booleanNumber;
//   document.getElementById("booleanNumber2").innerHTML = booleanNumber;

//   document.getElementById("booleanSum").innerHTML = booleanSum;
//   document.getElementById("booleanSumTwoo").innerHTML = booleanSumTwoo;

//   document.getElementById("booleanDif").innerHTML = booleanDif;

//   var restDellNumberOne = 543;
//   var restDellNumberTwo = 23;

//   var restDellNumberResult = restDellNumberOne % restDellNumberTwo;

//   document.getElementById("restDellNumberOne").innerHTML = restDellNumberOne;

//   document.getElementById("restDellNumberTwo").innerHTML = restDellNumberTwo;

//   document.getElementById("restDellNumberResult").innerHTML = restDellNumberResult;

//   //  Сложные операции<
//   var dowdleBase = 51;
//   document.getElementById("dowdleBase").innerHTML = dowdleBase;
//   dowdleBase++;
//   document.getElementById("dowdleBaseResult").innerHTML = dowdleBase;

//   var dowdleVichet = 37;
//   document.getElementById("dowdleVichet").innerHTML = dowdleVichet;
//   dowdleVichet--;
//   document.getElementById("dowdleVichetResult").innerHTML = dowdleVichet;

//   var dowdleUmnogen = 65;
//   document.getElementById("dowdleUmnogen").innerHTML = dowdleUmnogen;
//   dowdleUmnogen = ++dowdleUmnogen;
//   document.getElementById("dowdleUmnogenResult").innerHTML = dowdleUmnogen;

//   var prefVichet = 68;
//   document.getElementById("prefVichet").innerHTML = prefVichet;
//   prefVichet = --prefVichet;
//   document.getElementById("prefVichetY").innerHTML = prefVichet;

//   var slogSlogenieBaceZ = 4;
//   var slogSlogenieBace = 4;
//   var slogSlogenieModule = 5;
//   slogSlogenieBace += slogSlogenieModule;

//   document.getElementById("slogSlogenieBaceZ").innerHTML = slogSlogenieBaceZ;
//   document.getElementById("slogSlogenieBace").innerHTML = slogSlogenieBace;
//   document.getElementById("slogSlogenieModule").innerHTML = slogSlogenieModule;

//   var slogVichetBaceZ = 14;
//   var slogVichetBace = 14;
//   var slogVichetModule = 8;
//   slogVichetBace -= slogVichetModule;

//   document.getElementById("slogVichetBaceZ").innerHTML = slogVichetBaceZ;
//   document.getElementById("slogVichetBace").innerHTML = slogVichetBace;
//   document.getElementById("slogVichetModule").innerHTML = slogVichetModule;

//   var slogUmnogenBaceZ = 5;
//   var slogUmnogBace = 5;
//   var slogUmnogModule = 6;
//   slogUmnogBace *= slogUmnogModule;

//   document.getElementById("slogUmnogenBaceZ").innerHTML = slogUmnogenBaceZ;
//   document.getElementById("slogUmnogBace").innerHTML = slogUmnogBace;
//   document.getElementById("slogUmnogModule").innerHTML = slogUmnogModule;

//   var slogDelenieBaceZ = 5;
//   var slogDelenieBace = 5;
//   var slogDelenieModule = 6;
//   slogDelenieBace /= slogDelenieModule;

//   document.getElementById("slogDelenieBaceZ").innerHTML = slogDelenieBaceZ;
//   document.getElementById("slogDelenieBace").innerHTML = slogDelenieBace;
//   document.getElementById("slogDelenieModule").innerHTML = slogDelenieModule;

//   var sravnBolsheOne = 8;
//   var sravnBolsheTwo = 7;
//   var sravRezultOne = false;

//   document.getElementById("sravnBolsheOne").innerHTML = sravnBolsheOne;
//   document.getElementById("sravnBolsheTwo").innerHTML = sravnBolsheTwo;
//   document.getElementById("sravnBolshethree").innerHTML = sravnBolsheOne > sravnBolsheTwo;

//   var proverksRavestvoOne = 8;
//   var proverksRavestvoTwo = 98;
//   var proverksRavestvothree = false;

//   document.getElementById("proverksRavestvoOne").innerHTML = proverksRavestvoOne;
//   document.getElementById("proverksRavestvoTwo").innerHTML = proverksRavestvoTwo;
//   document.getElementById("proverksRavestvothree").innerHTML =
//     proverksRavestvoOne == proverksRavestvoTwo;

//   var proverksNeRavestvoOne = 8;
//   var proverksNeRavestvoTwo = 8;
//   var proverksNeRavestvothree = false;

//   document.getElementById("proverksNeRavestvoOne").innerHTML = proverksNeRavestvoOne;
//   document.getElementById("proverksNeRavestvoTwo").innerHTML = proverksNeRavestvoTwo;
//   document.getElementById("proverksNeRavestvothree").innerHTML =
//     proverksNeRavestvoOne != proverksNeRavestvoTwo;

//   var absoluteRavestvoOne = 8;
//   var absoluteRavestvoTwo = "8";
//   var absoluteRavestvothree = false;

//   document.getElementById("absoluteRavestvoOne").innerHTML = absoluteRavestvoOne;
//   document.getElementById("absoluteRavestvoTwo").innerHTML = absoluteRavestvoTwo;
//   document.getElementById("absoluteRavestvothree").innerHTML =
//     absoluteRavestvoOne === absoluteRavestvoTwo;

//   var absoluteNeRavestvoOne = 8;
//   var absoluteNeRavestvoTwo = "8";
//   var absoluteNeRavestvothree = false;

//   document.getElementById("absoluteNeRavestvoOne").innerHTML = absoluteNeRavestvoOne;
//   document.getElementById("absoluteNeRavestvoTwo").innerHTML = absoluteNeRavestvoTwo;
//   document.getElementById("absoluteNeRavestvothree").innerHTML = absoluteNeRavestvoOne !== absoluteNeRavestvoTwo;

//   // Логические операторы

//   let cbFirst = 10;
//   const cbSecond = 3555;
//   cbFirst = 34;
//   var testData = 29,
//     testDataOn = 34;
//   var cbThird = 1,
//     cbFirstModal = 25;
//   var cbFore = 1,
//     cbForeFirst = 201,
//     cbForeTw = 1;

//   if (cbForeFirst > 200 && cbForeTw > 0) {
//     cbFore = "все положительно";
//   } else {
//     cbFore = "что то не сложилось";
//   }

//   if (cbFirst <= cbFirstModal) {
//     cbThird = "меньше или равно";
//   } else {
//     cbThird = "больше";
//   }

//   var cbFiveOn = 45,
//     cbFive = 1;
//   if (cbFiveOn < 200 || -4 * cbFiveOn > 0) {
//     cbFive = "все выдержано";
//   } else {
//     cbFive = "между делом";
//   }

//   document.getElementById("cb_five").innerHTML = cbFive;
//   document.getElementById("cb_fore").innerHTML = cbFore;
//   document.getElementById("cb_third").innerHTML = cbThird;

//   document.getElementById("cb_first").innerHTML = cbFirst;
//   document.getElementById("cb_second").innerHTML = cbSecond;

//   // сложные условия

//   var currentYear = 2018,
//     carName = "Ford",
//     carYear = 2015,
//     carAge = 0,
//     carMesage = "";
//   carAge = currentYear - carYear;
//   if (carAge < 5) {
//     carMesage = "младьше 5 лет";
//   } else if (carAge >= 5 && carAge <= 10) {
//     carMesage = "от 5 до 10 лет";
//   } else if (carAge > 10) {
//     carMesage = " 10 лет или старше";
//   }

//   //  0, null, undefined, '', NaN - false
//   //  1, 'текст в строке', true   - true

//   document.getElementById("cb_car_age").innerHTML =
//     "Автомобиль мартки " + carName + " " + carMesage;

//   // тернарный оперптор

//   // число 0 - отдает false, ? - заменяет оператор if
//   // знак вдоеточие (:) - заменяет оператор иначе
//   var mesTern = "";
//   0 ? (mesTern = "Тридцать четыре") : ( mesTern = 'Не тридцать четыре' );
//   document.getElementById("cb_tern").innerHTML = "Первый тернарный " + mesTern;

//   var maineTern = "";
//   534 > 43 && 54 > 56 ? (maineTern = "Все правда") : (maineTern = "Все не правда");
//   document.getElementById("maine_tern").innerHTML = "Сложное тернарное условие " + maineTern;

//   var slogTern = "";
//   34 > 43 || 54 > 56 ? (slogTern = "Правда при одном условии") : (slogTern = "Все не правда");
//   document.getElementById("slog_tern").innerHTML ="Второе сложное условие " + slogTern;

//   var sostavTern = "";
//   !(true || false || !false) ? (sostavTern = "Значение true") : (sostavTern = "Значение false");
//   document.getElementById("sostav_tern").innerHTML = "Сосотавное тернарное условие " + sostavTern;

//   // задача на совершелоление 1

//   var personAge = 16,
//     sovershenMessage = "";
//   if (personAge < 18) {
//     sovershenMessage = "Человек не совершенолетний";
//   } else {
//     sovershenMessage = "Человек совершенолетний";
//   }
//   document.getElementById("sovershen_message").innerHTML = sovershenMessage;

//   var personAgeTwo = 21;
//   var sovershenMessageTwo = personAgeTwo < 18 ? "Человек не совершенолетний" : "Человек совершенолетний";
//   document.getElementById("sovershen_messagetwo").innerHTML = sovershenMessageTwo;

//   //Логические операторы Switch Case

//   var carColor = "black";
//   var carColorMemssage = "";
//   if (carColor === "black") {
//     // сравнивание по типу и значению
//     carColorMemssage = "Цвет машины черный";
//   } else if (carColor === "green") {
//     carColorMemssage = "Цвет машины зеленый";
//   } else if (carColor === "white") {
//     carColorMemssage = "Цвет машины белый";
//   } else if (carColor === "yellow") {
//     carColorMemssage = "Цвет машины зеленый";
//   } else {
//     carColorMemssage = "Цвет машины не определен";
//   }
//   document.getElementById("switch_first").innerHTML = carColorMemssage;

//   var carColorSwich = "orrange";
//   var carColorMemssageSwich = "";

//   switch (carColorSwich) {
//     case "black":
//       carColorMemssageSwich = "Цвет машины черный";
//       break;
//     case "orrange":
//       carColorMemssageSwich = "Цвет машины оранжевый";
//       break;
//     case "red":
//       carColorMemssageSwich = "Цвет машины красный";
//       break;
//     case "white":
//       carColorMemssageSwich = "Цвет машины белый";
//       break;
//     default:
//       carColorMemssageSwich = "Цвет машины не определен";
//   }
//   document.getElementById("switch_second").innerHTML = carColorMemssageSwich;

//   // Первые функции

//   // Работа со строками
//   // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Methods_Index
//   var strokenOne = "первая строка предназначенная для теста с которой буду работать";
//   document.getElementById("stroken_one").innerHTML = strokenOne;
//   var strokenTwo ='первая строка предназначенная "раставляю здесь ковычки" для теста с которой буду работать';
//   document.getElementById("stroken_two").innerHTML = strokenTwo;

//   var strokenTri = "первая строка предназначенная 'раставляю здесь ковычки' для теста с которой буду работать";
//   document.getElementById("stroken_tri").innerHTML = strokenTri;
//   var strokenChetiry =
//     'первая строка предназначенная "раставляю здесь ковычки" для теста с которой буду работать';
//   document.getElementById("stroken_chetiry").innerHTML = strokenChetiry;

//   var strokenConcatsPrice = 123;
//   var strokenConcats = "это строка пример конкатинации" +  " " + strokenConcatsPrice + " " +  "работать будет, но не пойму как буду применять";
//   document.getElementById("stroken_concat").innerHTML = strokenConcats;

//   var strokeLengths = document.getElementById("stroke_length").innerText;
//   var strokeLengthsNumber = strokeLengths.length;
// // browserType[browserType.length-1];

//  function setPseudoElContent(selector, value) {
//  document.styleSheets[0].addRule(selector, 'content: "' + value + '";');
//   }
//   setPseudoElContent("#stroke_length::before", strokeLengthsNumber);

//   var strokeUpperCase = "Делаем символы в верхнем регистре .toUpperCase()";
//   // strokeUppercase = strokeUppercase.toUpperCase();
//   document.getElementById("strok_uppercase").innerHTML = strokeUpperCase.toUpperCase();

//   var strokeUpperCaseNumber = strokeUpperCase.length;
//   setPseudoElContent("#strok_uppercase::before", strokeUpperCaseNumber);

//   var strokLowerCase = "Работаю с методом строчного элемента .toLowerCase()";
//   document.getElementById("strok_lowercase").innerHTML = strokLowerCase.toUpperCase();
//   var strokLowerCaseNumber = strokLowerCase.length;
//   setPseudoElContent("#strok_lowercase::before", strokLowerCaseNumber);

//   //.charAt() Возвращает символ по указанному индексу.
//   var strokCharAt = "Определяю первую букву предложения c помощью метода.charAt()";
//   document.getElementById("strok_charat").innerHTML = strokCharAt.charAt(2);
//   var strokCharAtNumber = strokCharAt.length;
//   setPseudoElContent("#strok_charat::before", strokCharAtNumber);

// //.charCodeAt(index) Возвращает число, представляющее значение символа в Юникоде по указанному индексу.
// var strokeCharCodeAt = "ABCОпределяю первую букву предложения c помощью метода .charCodeAt()";
// document.getElementById("strok_charcodeat").innerHTML = strokeCharCodeAt.charCodeAt(0);
// var strokeCharCodeAtNumber = strokeCharCodeAt.length;
// setPseudoElContent("#strok_charcodeat::before", strokeCharCodeAtNumber);


// // .concat() объединяет текст из двух или более строк и возвращает новую строку. Изменения в тексте в одной строке не затрагивают остальные строки.

// var strokFirstConcat =  document.getElementById("strok_first_concat").innerText;
// var strokSecondConcat =  document.getElementById("strok_second_concat").innerText;
// var strokResultConcat = strokFirstConcat.concat( ' но проблема в пробелах ', strokSecondConcat);
// document.getElementById("strok_result_concat").innerHTML = strokResultConcat;

// var strokIncludes =  document.getElementById("strok_includes").innerText;
// document.getElementById("strok_includes_result_no").innerHTML = strokIncludes.includes('Быть');
// document.getElementById("strok_includes_result_yes").innerHTML = strokIncludes.includes('Эту строку');
// document.getElementById("strok_includes_result_yesregictr").innerHTML = strokIncludes.includes('эту строку');


// //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
// //String.prototype.endsWith()
// // Определяет, заканчивается ли строка символами другой строки.


// // если слова нет, метод возвращет -1
//   var strokIndexOf = "Определяю позицию заданного слова с начала строки в предложениии с помощью метода .indexOf()";
//   document.getElementById("strok_indexof").innerHTML = strokIndexOf.indexOf('предложении');
//   var strokIndexOfNumber = strokIndexOf.length;
//   setPseudoElContent("#strok_indexof::before", strokIndexOfNumber);


// // задать кординату с коотрой начать забор данных и сколько символов брать

// var strokSubStr = "Определяю c какой позиции забирать символы с сколько символов брать .substr(23, 5)";
//   document.getElementById("strok_substr").innerHTML = strokSubStr.substr(20, 8);
//   var strokSubStrNumber = strokSubStr.length;
//   setPseudoElContent("#strok_substr::before", strokSubStrNumber);


// var strokeSubstrIndexOf ="Работаю сразу же с двумя методами .indexOf('предложении') и .substr(23, 5)";
//   document.getElementById("stroke_Substr_IndexOf").innerHTML = strokeSubstrIndexOf.substr(strokeSubstrIndexOf.indexOf('методами'), 20);
//   var strokeSubstrIndexOfNumber = strokeSubstrIndexOf.length;
//   setPseudoElContent("#stroke_Substr_IndexOf::before", strokeSubstrIndexOfNumber);


// // начать с 2 символа и забрать часть теста отсчет ведется от нудеовго символа начала
//   var strokeSubstring ="Работаю сразу же с двумя методами .substring(2, 5)";
//   document.getElementById("stroke_substring").innerHTML = strokeSubstring.substring(2, 15);
//   var strokeSubstringNumber = strokeSubstring.length;
//   setPseudoElContent("#stroke_substring::before", strokeSubstringNumber);

// // метод .slice(1, 2); отсчет с конца строки


// // заменить слово ofctybnmначать с 2 символа и забрать часть теста отсчет ведется от нудеовго символа начала строки
//   var strokeReplace ="Как заменить это слово на другое, которое идет после этого \"с помощью метода\" .replase('с помощью метода', 'вот так работает метод')";
//   document.getElementById("stroke_replace").innerHTML = strokeReplace.replace('с помощью метода', 'вот так работает метод');
//   var strokeReplaceNumber = strokeReplace.length;
//   setPseudoElContent("#stroke_replace::before", strokeReplaceNumber);


// // подсчитать количепство символов в строке
// var strokeValueOf ="Nen Как подсчитать количества символов в строке с помощью метода .valueOf()";
// document.getElementById("stroke_volueof").innerHTML = strokeValueOf.valueOf();
// var strokeValueOfNumber = strokeValueOf.length;
// setPseudoElContent("#stroke_volueof::before", strokeValueOfNumber);


// /*
// 'quote',
// 'charCodeAt',
// lastIndexOf',

// 'startsWith',
// 'endsWith',
// 'trim',
// 'trimLeft',
// 'trimRight',
// 'toLocaleLowerCase',
// 'toLocaleUpperCase',
// 'localeCompare',
// 'match',
// 'search',
// 'split',
// 'concat',
// 'slice'

// */



// // Работа с числами
// document.getElementById("number_one").innerHTML = 12/12.4;

// document.getElementById("number_two").innerHTML = 12/0;
// document.getElementById("number_three").innerHTML = 12/'10строка';
// document.getElementById("number_Umnog").innerHTML = 12*'04oi';
// document.getElementById("number_summ").innerHTML = 12+'04oi';
// document.getElementById("number_unsumm").innerHTML = '04oi'-34;
// document.getElementById("number_tostring").innerHTML = (345 /34.554).toString();


// document.getElementById("number_tofixed").innerHTML = (345 /34.554).toFixed(4);
// var numberToFixedsr = typeof((345 /34.554).toFixed(4));
// document.getElementById("number_tofixedsr").innerText = numberToFixedsr ;
// var numberToPreo =+(345 /34.554).toFixed() - 8;
// document.getElementById("number_tonumberppreobraz").innerText = numberToPreo;

// // дрбное число
// var numberParse = 18/8.5;
// document.getElementById("number_tonumberparsefloat").innerHTML = parseFloat((numberParse).toFixed(2));
// document.getElementById("number_tonumbertype").innerHTML = typeof (parseFloat((numberParse).toFixed(2)));
// //целое число
// document.getElementById("number_tonumberparseint").innerHTML = parseInt((numberParse).toFixed(2));



// document.getElementById("number_toisnan").innerHTML = isNaN((numberParse).toFixed(2));

// document.getElementById("number_toisnan1").innerHTML = isNaN( parseInt((numberParse).toFixed(2)) );
// var isNumberTest = 455 + 433;
// document.getElementById("number_toisnan2").innerHTML = isNaN(isNumberTest);

// document.getElementById("number_finite").innerHTML = isFinite(1/0);
// document.getElementById("number_finitetrue").innerHTML = isFinite(99999999999999999999999999999);




// document.getElementById("number_mathfloor").innerHTML = Math.floor(numberParse);
// document.getElementById("number_mathceil").innerHTML = Math.ceil(numberParse);
// document.getElementById("number_mathround").innerHTML = Math.round(numberParse);




// // работа с массивами
// var masiveOne = ['автомобиль', 'компьтер', 'мебель', 'посуда' ]
// document.getElementById("masive_one").innerHTML = masiveOne;

// document.getElementById("masive_one_viborka").innerHTML = masiveOne[2];

// masiveOne.push('Жигули');
// document.getElementById("masive_two_viborka").innerHTML = masiveOne;
// document.getElementById("masive_three_viborka").innerHTML = masiveOne[4];

//  masiveOne.pop();
// document.getElementById("masive_foure_viborka").innerHTML = masiveOne;

// masiveOne.shift();
// document.getElementById("masive_five_viborka").innerHTML = masiveOne;
// masiveOne.unshift('гардероб');
// document.getElementById("masive_six_viborka").innerHTML = masiveOne;
// var masNumber = masiveOne.indexOf(';buekb');
// document.getElementById("masive_seven_viborka").innerHTML = masNumber;
// var masNumber1 = masiveOne.indexOf('гардероб');
// document.getElementById("masive_eight_viborka").innerHTML = masNumber1;

// //document.getElementById("").innerHTML = Math.round(numberParse);


// // Работа с объектами



// var objectOne = {
// name : 'Василий',
// family : 'Василенко',
// year: '1980',
// car : {
// yaer: '2017',
// model: 'Лада 0511'
// }
// }
// // document.getElementById("object_one").innerHTML = objectOne;
// console.log(objectOne);
// document.getElementById("object_two").innerHTML = objectOne.name;
// document.getElementById("object_two").innerHTML = objectOne.name;
// document.getElementById("object_three").innerHTML = objectOne.car.model;
// document.getElementById("object_four").innerHTML = objectOne['year']; // строковое значение

// // объект с функцией

// var objectFunct = {
//   name : 'Олег',
//   family : 'Василенко',
//   year: '1975',
//   comp : {
//   yaer: '2018',
//   model: 'Pentium'
//   },
//   myAgeProgramm: function() {
// var myAge = 2018 - this.year;
// document.getElementById("object_five").innerHTML = myAge;
// }

// }
//   objectFunct.myAgeProgramm();


// // var cauntPools ={
// //   getWidthPool : document.getElementById("getWidthPool").innerText;
// //   getHeightPool : document.getElementById("getHeightPool").innerText;
// //   getMinDeepPool : document.getElementById("getMinDeepPool").innerText;
// //   getMaxDeepPool : document.getElementById("getMaxDeepPool").innerText;
// // }


// // Работа с циклами


// var numberCycle = [ 0,1,2,3,4,5,6,7];


// //for (var i = 0; i < 10; i++) {
// //  document.getElementById("masive_one").innerHTML = numberCycle[i];
// // console.log(i);
// // console.log('-------------------');
// // }
// // console.log('**************************************');

// // i - начало отсчета  с нуля начитается итерация любого массива
// // до какой границы должны выполняться итерации 6 - количество элементов в массиве
// // i++ - что делать с элементом массива
// // i++ => i =5   пока i< 6
// //  for (i = 0; i<6; i++) {
// // for (var n = 0; n < numberCycle.length; n++) {
// //   document.getElementById("masive_one").innerHTML = numberCycle[n];
// // console.log(numberCycle[n]);
// // }



// // Работа со циклами

// var numbersCycles = [1, 2, 3, 4, 5, 6,7];
// // в консоли выводит от 0 до 97
// // for(var ni = 0; ni < 98; ni++) {
// //   console.log(ni);
// // }

// numbersCycles.push('приколы', 'недочеты')
// // for(var ni = 0; ni < 8; ni++) {
// //   console.log(ni);
// // }
// // выводится то что лежит в массиве. отсчитывает от 1 до 7 числа так как в условии задано < 8
// // for(var ni = 0; ni < 9; ni++) {
// //   console.log(numbersCycles[ni]);
// // }

// // проверка на четность
// //  for(var ni = 0; ni < numbersCycles.length; ni++) {
// //   if (numbersCycles[ni] % 2 === 0) {
// //     console.log(numbersCycles[ni]);
// //   }
// //  }

// // проверка на не четность
// // for(var ni = 0; ni < numbersCycles.length; ni++) {
// //   if (numbersCycles[ni] % 2 !== 0) {
// //     console.log(numbersCycles[ni]);
// //   }
// //  }

// // for(var ni = 0; ni < numbersCycles.length; ni++) {
// //   if (numbersCycles[ni] % 2 !== 0) {
// //    continue; // если результат  true возврат в цикл
// //   }
// //   console.log(numbersCycles[ni]);
// //  }

// // var checkString = [1,23, 3, 'строка', 4, 'проверка на строку',5, 6]
// // for(var ni = 0; ni < checkString.length; ni++) {
// //   if (typeof checkString[ni] !== 'string') { //если ni не строка по типу
// //     continue; // если результат  true возврат в цикл
// //   }
// //   console.log(checkString[ni]); //выводит только строки
// //  }

// var checkString = [1,23, 3, 'строка', 4, 'проверка на строку',5, 6]
// for(var ni = 0; ni < checkString.length; ni++) {
//   if (typeof checkString[ni] === 'string') { //если ni есть строка по типу
//     continue; // если результат  true возврат в цикл
//   }
//   console.log(checkString[ni]); //выводит только числа
//   document.getElementById("cycles_twu").innerHTML = checkString[ni];
//  }

// var $checkString = [1,23, 3, 'строка', 4, 'проверка на строку',5, 6]
// for(var n = 0; n < $checkString.length; n++) {
//   if (typeof $checkString[n] === 'number') { //если ni есть число по типу
//     continue; // если результат  true возврат в цикл
//   }
//   console.log(checkString[n]); //выводит только строка
//   document.getElementById("cycles_one").innerHTML = checkString[n];
//  }

// //Работаю с DOM


// var gerDomById =  document.getElementById("dom_one");
// console.log(gerDomById);
// document.getElementById("dom_one_input").innerHTML = gerDomById;

// var gerDomByClass =  document.getElementsByClassName("dom_twu");
// console.log(gerDomByClass);

// var zaglavieH1 = document.getElementsByTagName('h1')
// console.log(zaglavieH1);
// console.log('новые методы');
// // выводит только один узел
// var querySelectId = document.querySelector('#dom_one');
// console.log(querySelectId);
// var querySelectClass = document.querySelectorAll('.dom_twu');
// console.log(querySelectClass);
// var querySelectUl  = document.querySelector('.list ul');
// //console.log(querySelectUl  );

// var vstavkaCont = 'Этот текст загнать в заголоовок';
// //Чтобы загнать какой то текст в дом
// //h2.textContent = 'Этот текст загнать в заголоовок';

// //document.getElementById("vstavka_cont").innerHTML = vstavkaCont;
// document.getElementById("vstavka_cont").innerHTML = vstavkaCont;

// // var idInputGet = document.querySelector('#id_input_get');
// var idInputGet = document.getElementById('id_input_get').value;
// document.getElementById("id_input_out").innerHTML = idInputGet;

// console.log(idInputGet);

// var getLinks = document.querySelector('.get_links');
// var OldsHref = getLinks.getAttribute('href');

// getLinks.setAttribute('href', 'https://developer.mozilla.org/ru/docs/Web/API/Element/attributes');
// getLinks.textContent = 'Моя дорогая';


// var getAllAtrib = document.querySelector('.get_links');


// console.log(OldsHref);
// document.getElementById("id_kinks").innerHTML = OldsHref;
// document.getElementById("id_kinks2").textContent = OldsHref;
// document.querySelector("#id_kinks3").textContent = OldsHref;
// document.querySelector(".id_kinks4").textContent = OldsHref;
// var getAllAtribRez = getAllAtrib.attributes;
// console.log(getAllAtribRez);
// document.querySelector(".id_kinks5").textContent = getAllAtribRez;


// var manipulDigest = document.querySelector('#manipul_digest');
// manipulDigest.classList.add('red'); //взять содержимое id добавить класс

// var manipulDigest1 = document.querySelector('#manipul_digest1');

// manipulDigest1.classList.remove('red');

// //содердится ли класс в элементе DOM
// var hasClass = manipulDigest.classList.contains('red');

// document.querySelector("#manipul_digest_in").textContent = hasClass;


// // добавтить события на элемент дом



// // Функция изменяет содержимое t2

// function modifyText() {
//   var t2 = document.getElementById("t2");
//   if (t2.firstChild.nodeValue == "три") {
//     t2.firstChild.nodeValue = "два";
//   } else {
//     t2.firstChild.nodeValue = "три";
//   }
// }

// // Добавляет слушателя событий для таблицы
// var el = document.getElementById("outside");
// el.addEventListener("click", modifyText, false);



// function cleakMe() {
//   var clickMe = document.querySelector('#clickme');
//   clickMe.classList.add('red');
//   var cleakMe = document.getElementById("clickme_text");
//   alert(cleakMe);
// }

// var cleakMe7 = document.getElementById("clickme_text");
// cleakMe7.addEventListener("click", cleakMe, false);
// // button.addEventListener("click", function() {
// //   var clickMe = document.querySelector('#clickme');
// //   clickMe.classList.add('red');
// //   document.querySelector("#clickme_text").textContent = 'Должна залететь';
// // }








//   //  Сложные операции<
//   // var doleBase = 4;
//   // document.getElementById("doleBase").innerHTML =  doleBase;
//   // var doleBaseResult = doleBase+=5;
//   // document.getElementById("doleBaseResult").innerHTML =  doleBaseResult;

//   $(function() {
//     $("#phone_key").mask("+7(000)000-00-00", {
//       placeholder: "+7(___)___-__-__",
//       clearIfNotMatch: true
//     });
//     $("#phone_header").mask("+7(000)000-00-00", {
//       placeholder: "+7(___)___-__-__",
//       clearIfNotMatch: true
//     });
//     $("#phone_calcul").mask("+7(000)000-00-00", {
//       placeholder: "+7(___)___-__-__",
//       clearIfNotMatch: true
//     });
//     $("#phone_calcultwo").mask("+7(000)000-00-00", {
//       placeholder: "+7(___)___-__-__",
//       clearIfNotMatch: true
//     });
//     $("#phone_calculthree").mask("+7(000)000-00-00", {
//       placeholder: "+7(___)___-__-__",
//       clearIfNotMatch: true
//     });
//     $("#phone_calculaitethree").mask("+7(000)000-00-00", {
//       placeholder: "+7(___)___-__-__",
//       clearIfNotMatch: true
//     });
//   });

//   $("#mounth").customSelect({
//     // Adds input to filter options
//     search: false,
//     // Class name (BEM block name)
//     block: "custom-select",
//     // Fires after dropdown closes
//     hideCallback: false,
//     // Shows chosen value option in dropdown, if enabled also cancels dropdown options refresh
//     includeValue: false,
//     // True to enable keyboard control
//     keyboard: false,
//     // Additional class, e.g. BEM modifier
//     modifier: false,
//     // Input placeholder
//     placeholder: "Тип мероприятия",
//     // Fires after dropdown opens
//     showCallback: false,
//     // jQuery slideUp/Down speed
//     transition: 1000
//   });

//   $("#person_order").customSelect({
//     // Adds input to filter options
//     search: false,
//     // Class name (BEM block name)
//     block: "custom-select",
//     // Fires after dropdown closes
//     hideCallback: false,
//     // Shows chosen value option in dropdown, if enabled also cancels dropdown options refresh
//     includeValue: false,
//     // True to enable keyboard control
//     keyboard: false,
//     // Additional class, e.g. BEM modifier
//     modifier: false,
//     // Input placeholder
//     placeholder: "В какой стране",
//     // Fires after dropdown opens
//     showCallback: false,
//     // jQuery slideUp/Down speed
//     transition: 1000
//   });

//   $("#year").customSelect({
//     // Adds input to filter options
//     search: false,
//     // Class name (BEM block name)
//     block: "custom-select",
//     // Fires after dropdown closes
//     hideCallback: false,
//     // Shows chosen value option in dropdown, if enabled also cancels dropdown options refresh
//     includeValue: false,
//     // True to enable keyboard control
//     keyboard: false,
//     // Additional class, e.g. BEM modifier
//     modifier: false,
//     // Input placeholder
//     placeholder: "Сколько человек",
//     // Fires after dropdown opens
//     showCallback: false,
//     // jQuery slideUp/Down speed
//     transition: 1000
//   });

//   // формление селектов из второго калькулятора
//   $("#select_one").customSelect({
//     // Adds input to filter options
//     search: false,
//     // Class name (BEM block name)
//     block: "custom-select",
//     // Fires after dropdown closes
//     hideCallback: false,
//     // Shows chosen value option in dropdown, if enabled also cancels dropdown options refresh
//     includeValue: false,
//     // True to enable keyboard control
//     keyboard: false,
//     // Additional class, e.g. BEM modifier
//     modifier: false,
//     // Input placeholder
//     placeholder: "Тип мероприятия",
//     // Fires after dropdown opens
//     showCallback: false,
//     // jQuery slideUp/Down speed
//     transition: 1000
//   });

//   $("#select_two").customSelect({
//     // Adds input to filter options
//     search: false,
//     // Class name (BEM block name)
//     block: "custom-select",
//     // Fires after dropdown closes
//     hideCallback: false,
//     // Shows chosen value option in dropdown, if enabled also cancels dropdown options refresh
//     includeValue: false,
//     // True to enable keyboard control
//     keyboard: false,
//     // Additional class, e.g. BEM modifier
//     modifier: false,
//     // Input placeholder
//     placeholder: "В каком городе",
//     // Fires after dropdown opens
//     showCallback: false,
//     // jQuery slideUp/Down speed
//     transition: 1000
//   });

//   $("#select_three").customSelect({
//     // Adds input to filter options
//     search: false,
//     // Class name (BEM block name)
//     block: "custom-select",
//     // Fires after dropdown closes
//     hideCallback: false,
//     // Shows chosen value option in dropdown, if enabled also cancels dropdown options refresh
//     includeValue: false,
//     // True to enable keyboard control
//     keyboard: false,
//     // Additional class, e.g. BEM modifier
//     modifier: false,
//     // Input placeholder
//     placeholder: "Сколько человек",
//     // Fires after dropdown opens
//     showCallback: false,
//     // jQuery slideUp/Down speed
//     transition: 1000
//   });

//   // Програмирование второго калькулятора услуг

//   //пишу второй калькутор услуг

//   // $("#select_one").onСhange(function(){

//   // var selectuing_one, options, select_onerezult;
//   //  selectuing_one = document.getElementById('select_one').selectedIndex;
//   // options = document.getElementById('select_one').options;
//   // select_onerezult = (options[selectuing_one].text);
//   // document.getElementById("select_one_bissness").innerHTML = select_oneresult;
//   // });

//   $("#select_one")
//     .change(function() {
//       var str = "";
//       $("#select_one option:selected").each(function() {
//         str += $(this).text() + " ";
//       });
//       $("#select_one_bissness").text(str);
//     })
//     .change();

//   $("#select_two")
//     .change(function() {
//       var str = "";
//       $("#select_two option:selected").each(function() {
//         str += $(this).text() + " ";
//       });
//       $("#select_two_country").text(str);
//     })
//     .change();

//   $("#select_three")
//     .change(function() {
//       var str = "";
//       $("#select_three option:selected").each(function() {
//         str += $(this).text() + " ";
//       });
//       $("#select_three_persons").text(str);
//     })
//     .change();

//   $("#select_one").change(function() {
//     $(".ooo .custom-select__option").addClass("active");
//   });
//   $("#select_two").change(function() {
//     $(".ooo2 .custom-select__option").addClass("active");
//   });
//   $("#select_three").change(function() {
//     $(".ooo3").addClass("active");
//   });
//   $("#phone_calculaitethree").change(function() {
//     $(".calculator_idea_neactive").addClass("active");
//   });
//   // сщздание обьекта

//   var objectNew = {
//     one: "2",
//     two: "3",
//     three: "4",
//     foure: "54"
//   };
//   document.getElementById("cont_one").innerHTML = objectNew['one'];
//   document.getElementById("cont_two").innerHTML = objectNew['two'];
//   document.getElementById("cont_three").innerHTML = objectNew["three"];
//   document.getElementById("cont_foure").innerHTML = objectNew["foure"];

//   // типа делаю третий калькулятор услуг

//   // типа пытаю джаваскрипт
//   var wrapblock = document.getElementById("wrapblock");
//   //загнать свойства #wrapblock в переменгную
//   function changeclass() {
//     wrapblock.style.color = "black";
//     // меняю в  #wrapblock свойство color: на черное
//   }
//   // вызываю функцию через такое то время
//   setTimeout(changeclass, 5000);

//   // function explode(){
//   //   alert("Boom!");
//   // }
//   // setTimeout(explode, 2000);

//   $(".f_d").css("border", "2px solid red");
//   $(".f_k").css({
//     border: "2px solid red",
//     color: "red",
//     padding: "20px 15px 54px 7px"
//   });
//   //parent > child
//   // $('h4 span').css('color', 'gray').html('Бомба, епт!');
//   $("h4 > span")
//     .css("color", "gray")
//     .html("Бомба, епт!");
//   //parent + child
//   $("h3 + p")
//     .css("color", "gray")
//     .html("Это вторая бомба, епт!");

//   $("a#terpilotero").attr({
//     href: "seomans.ru",
//     class: "newclass",
//     title: "Это текст титла"
//   });

//   $(".bigtimo ~ p")
//     .css("color", "gray")
//     .html("Это вторая бомба, епт!");
//   // не очень понятно как это все работает

//   // Взаимодействие с элментами по атрибутам

//   $(".boxcurico a[href]").css("color", "red");
//   $(".boxcurico a[title]").css("color", "blue");
//   $('.boxcurico a[href="lediseo.ru"]').css("color", "blue");

//   $('.boxcurico a[href!="lediseo.ru"]').css("color", "blue");
//   $('.boxcurico a[href^="tell:"]').css("color", "blue");
//   //атрибут который начинается
//   $('.boxcurico a[href$=".com"]').css("color", "yellow");
//   //атрибут который завершается

//   $('.boxcurico a[href*="lediseo"]').css("color", "blue");
//   //атрибут который содержит

//   $('.boxcurico a[data-target|="admin"]').css("color", "yellow");

//   $(".boxcurico a[data-target], [download]").css("color", "red");
//   //имеет одновременно несколько атрибутов : и с теми аттриббутами и другми могут бюыть
//   //2 разных тега

//   $(".boxcurico a[data-target][download]").css("color", "red");
//   //если имеет одновременно несколько атрибутов один тег
//   //2 разных тега

//   //>Простые фильтры JQUERY

//   $(".simpleel p:first").css("color", "red");
//   $(".simpleel p:last").css("color", "blue");
//   $(".simpleel p:eq(4)")
//     .css("color", "grey")
//     .attr({
//       href: "seomans.ru",
//       class: "newclass",
//       title: "Это текст титла"
//     }); // 0, 1, 2 тоесть третий
//   // 5-й эллемент р в классе
//   // $('*:not(p)').css('color', 'red'); //выделятся все элементы кроме р
//   // $('*:not(p,h2)').css('color', 'red'); //выделятся все элементы кроме р & h2

//   $(".simpleel_list li:odd").css("color", "red"); //четные
//   $(".simpleel_list li:even").css("color", "blue"); //нечетные
//   $(".simpleel_list li:gt(15)").css("color", "#800080"); //li идущие после 16-го тоесть 17 и так далее
//   $(".simpleel_list li:lt(3)").css("border", "1px solid grey"); //li идущие до 3-го(не включ) 0, 1, 2
//   $(".simpleel_list :header").css({
//     color: "red",
//     border: "1px dotted blue"
//   }); //заголовки
//   // $('*:animated').css('color', 'red');  //заголовки
//   $(".develo:hidden").css("display", "block"); //скрытые элементы станут видимые

//   $(".visibl:visible").css("visibility", "hidden"); //видимые станут невидимими
//   //  $('li:lang(ru)').css('border', '1px solid red');  //видимые станут невидимими

//   // http://jquery.page2page.ru/index.php5/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0

//   //>Фильтры по содержимому JQUERY 5 урок
//   // $('p').css('visibility', 'hidden');
//   // $( ".cderjanie p:contains('попытка')" ).css('color', 'red'); // содержит слово далеко
//   // $( "p:contains('djom')" ).css( "text-decoration", "underline" );

//   // $('p:emty').css('visibility', 'hidden'); //тег без содержимого
//   // $('.cderjanie:has(span)').css('text-decoration', 'underline'); // h2 содержит span
//   //$('span:parent').css('text-decoration', 'underline'); // ищет родителя тега span

//   //>Фильтры форм JQUERY 6 урок

//   // $('.form_input input').css({'border':'2px solid red', 'color':'red', 'padding':'5px 15px 5px 15px'});
//   // $('input:button').css('border', '1px solid grey');
//   //.css({'border':'2px solid red', 'color':'red', 'padding': '20px 15px 54px 7px'});
//   // $('input:checkbox').css('border', '1px solid grey');
//   // $('input:text').css('border', '1px solid grey');
//   // $('input:password').css('border', '1px solid grey');
//   // $('input:file').css('border', '1px solid grey');
//   // $('input:submit').css('border', '1px solid grey');
//   // $('input:reset').css('border', '1px solid grey');
//   // $('input:image').css('border', '1px solid grey');
//   // $('input:focus').css('border', '1px solid grey');
//   // $('input:checked').css('border', '1px solid grey');
//   // $('input:enabled').css('border', '1px solid grey');
//   // $('input:disabled').css('border', '1px solid grey');

//   //События мыши JQUERY   7
//   // $('.mouse_text').css('border', '1px solid grey');
//   $(".mouse_text_b button").click(function() {
//     $(".mouse_text").css("border", "1px solid grey");
//   }); // йфункция которая возвражается
//   // $('.mouse_text_b button').dblclick(function(){
//   // $('.mouse_text').css('border', '1px solid red');
//   //    });

//   $(".mouse_text").hover(function() {
//     $(".mouse_text").css("border", "1px solid red");
//     $(this).fadeOut(100);
//     $(this).fadeIn(500);
//   });
//   // Устанавливает обработчик(и) двух событий: mouseenter и mouseleave:

//   $(".button_click a").mousedown(function(event) {});
//   // момент нажатия кнопки мыши и держит
//   $(".button_click a").mouseup(function(event) {});
//   // момент отжатия кнопки мыши и держит

//   $(".mouse_text_b button").mouseenter(function() {
//     $(".mouse_text").css({
//       padding: "20px 10px",
//       border: "1px solid red"
//     });
//   });
//   //  наезжает  на элемент появление курсора в области элемента
//   $(".button_click a").mouseover(function(event) {});
//   //  наезжает  на элемент появление курсора в области элемента

//   $(".button_click a").mouseleave(function(event) {});
//   $(".button_click a").mouseout(function(event) {});
//   // мышь покидает область элемента лучше чем тот что ниже

//   $(".button_click a").mousemove(function(event) {});
//   // курсор движется над областью
//   $(".button_click a").toggle(function(event) {});
//   // Поочередно выполняет одно из нескольких заданных действий. Имеет четыре варианта использования:
//   $(".cuprinisimo li").toggle(
//     function() {
//       $(this).css({
//         "list-style-type": "disc",
//         color: "blue"
//       });
//     },
//     function() {
//       $(this).css({
//         "list-style-type": "disc",
//         color: "red"
//       });
//     },
//     function() {
//       $(this).css({
//         "list-style-type": "",
//         color: ""
//       });
//     }
//   );

//   //События клавиатуры JQUERY
//   $(".button_click a").keydown(function(event) {});

//   $(".button_click a").keyup(function(event) {});
//   $(".button_click a").keypress(function(eventObject) {
//     console.log(eventObject.which);
//   });
//   //отлавливает коды клавиши

//   // События брузера и страницы JQUERY   9
//   jQuery(document).ready(function() {});

//   $(document).ready(function() {
//     // все ли элементы - теги загрузились
//   });

//   $(window).load(function() {
//     // все все ли элементы - не только теги загрузились
//   });

//   $(window).unload(function() {
//     // все все ли элементы - не только теги загрузились
//   });

//   $(window).resize(function() {
//     // все все ли элементы - не только теги загрузились
//   });

//   // Базовые события on and off JQUERY  10

//   // Переменные и их свойства JQUERY

//   // Практика Драм машина JQUERY  12

//   // Практика Всплывающие окна JQUERY

//   // Практика Табы  JQUERY 14

//   // Практика Слайдеры JQUERY  15

//   // 16 - Практика. Адаптивное меню

//   // Практика Калькулятор на сайт JQUERY 17

//   // Практика Коредитная карточка JQUERY 18

//   // Основы AJAX  JQUERY

//   // 20 - Введение в библиотеку jQuery UI

//   //

//   //

//   // код подключения плагина Vertical-Horizontal-Tabs
//   // $('#verticalTab').jqTabs();

//   // всплывающие окна обратной связи позвонить мне
//   $(
//     "a[href='#politics'], a[href='#call-backtimer'], a[href='#call-back'], a[href='#call-back4s'], a[href='#call-back6s'], a[href='#call-back8s'], a[href='#call-back10s']"
//   ).magnificPopup({
//     mainClass: "mfp-fade",
//     removalDelay: 400,
//     type: "inline"
//   });

//   /*чтобы в формах был индивидуальный заголовок */
//   $(
//     "a[href='#politics'], a[href='#call-backtimer'], a[href='#call-back'], a[href='#call-back4s'], a[href='#call-back6s'], a[href='#call-back8s'], a[href='#call-back10s']"
//   ).click(function() {
//     var dataForm = $(this).data("form");
//     var dataText = $(this).data("text");
//     $(".forms-call h4").text(dataText);
//     $(".forms-call [name=admin-data]").val(dataForm);
//   });

//   //Ajax push mesege http://api.jquery.com/jquery.ajax/

//   $("form").submit(function() {
//     //Change
//     var th = $(this);
//     $.ajax({
//       type: "POST",
//       url: "mail.php", //Change
//       data: th.serialize()
//     }).done(function() {
//       $(".forms-calldecor .success").addClass("active");
//       setTimeout(function() {
//         // Done Functions
//         $(".forms-calldecor .success").removeClass("active");
//         th.trigger("reset");
//         $.magnificPopup.close();
//       }, 3000);
//     });
//     return false;
//   });
//   //castom code
// });
// function newFunction(bazPeremenOne) {
//   document.getElementById("listbazzOne").innerHTML = bazPeremenOne;
// }

