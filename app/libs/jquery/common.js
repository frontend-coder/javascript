$(document).ready(function() {
  // http://jquery.page2page.ru/index.php5/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0

  // 	$("body").niceScroll({
  // horizrailenabled:false
  // });

  // вверхнее красиво-вращающееся меню
  // 1 и 2 строка это анимация крестика
  //3 строка - слайдер вниз меню
  //слайдер вниз меню отвечает за работу мобильного меню к переносу
  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-menu").slideToggle();
    return false;
  });
  $("body, .top-menu ul li a").click(function() {
    $(".hidden-mnu").hide("slow");
  });

  // pagination on lending pages
  $(".top_line_menu ul li a, .hidden_mnu ul li a").mPageScroll2id({
    layout: "auto",
    offset: ".top_line_box",
    scrollEasing: "linear",
    highlightByNextTarget: true,
    keepHighlightUntilNext: true,
    autoScrollSpeed: true,
    scrollSpeed: 1000
  });

  // блок типы данных

  var tNumber = 34;
  var string = "Это строка";
  var boolean = true;
  var obj = {
    a: 232
  };
  var nulledTypeDan = null;
  var noDataSite = undefined;

  console.log(tNumber);
  console.log(string);
  console.log(boolean);
  console.log(obj);
  console.log(noDataSite);

  document.getElementById("listNumberEnter").innerHTML = tNumber;
  document.getElementById("listStringEnter").innerHTML = string;
  document.getElementById("listBooleanEnter").innerHTML = boolean;

  document.getElementById("listObjEnter").innerHTML = obj;
  document.getElementById("listNulledEnter").innerHTML = nulledTypeDan;
  document.getElementById("noDataSite").innerHTML = noDataSite;

  document.getElementById("listNumberEnterOf").innerHTML = typeof tNumber;
  document.getElementById("listStringEnterOf").innerHTML = typeof string;
  document.getElementById("listBooleanEnterOf").innerHTML = typeof boolean;

  document.getElementById("listObjEnterOf").innerHTML = typeof obj;
  document.getElementById("listNulledEnterOf").innerHTML = typeof nulledTypeDan;
  document.getElementById("noDataSiteOf").innerHTML = typeof noDataSite;

  // базовые операции

  var bazPeremenOne = 78;
  var bazPeremenTwoo = 34;

  document.getElementById("listbazzOne").innerHTML = bazPeremenOne;
  document.getElementById("listbazzTwo").innerHTML = bazPeremenTwoo;

  document.getElementById("listbazzR").innerHTML = bazPeremenOne;
  document.getElementById("listbazzRwo").innerHTML = bazPeremenTwoo;
  var summResultOne = bazPeremenOne + bazPeremenTwoo;
  document.getElementById("summResultOne").innerHTML = summResultOne;

  document.getElementById("listbazzW").innerHTML = bazPeremenOne;
  document.getElementById("listbazzWwo").innerHTML = bazPeremenTwoo;
  var vidnimResultOne = bazPeremenOne - bazPeremenTwoo;
  document.getElementById("vidnimResultOne").innerHTML = vidnimResultOne;

  document.getElementById("delenieO").innerHTML = bazPeremenOne;
  document.getElementById("delenieT").innerHTML = bazPeremenTwoo;
  var delenieResultOne = bazPeremenOne / bazPeremenTwoo;
  document.getElementById("delenieResultOne").innerHTML = delenieResultOne;

  document.getElementById("ostatkO").innerHTML = bazPeremenOne;
  document.getElementById("ostatkT").innerHTML = bazPeremenTwoo;
  var ostatkResultOne = bazPeremenOne % bazPeremenTwoo;
  document.getElementById("ostatkResultOne").innerHTML = ostatkResultOne;

  var firstString = "Это моя строка ";
  var secondString = ", которая не может быть верной ";
  var secondStringNumber = "34";
  var thirdNumberCon = 58;

  var firstConcatResult = firstString + secondString;
  document.getElementById("firstConcatString").innerHTML = firstConcatResult;

  var secondConcatResult = firstString + secondStringNumber;
  document.getElementById(
    "secondStringNumberResult"
  ).innerHTML = secondConcatResult;

  var thirdStringNumberResult = firstString + thirdNumberCon;

  document.getElementById(
    "thirdStringNumberResult"
  ).innerHTML = thirdStringNumberResult;

  var lineString = "345";
  var numberNumber = 45;
  var lineSumResult = lineString + numberNumber;
  var lineSumResultSecond = numberNumber + lineString;
  document.getElementById("lineSumResult").innerHTML = lineSumResult;
  document.getElementById(
    "lineSumResultSecond"
  ).innerHTML = lineSumResultSecond;

  var booleanTrue = true;
  var booleanNumber = 343;
  var booleanFalse = false;

  var booleanSum = booleanTrue + booleanNumber;
  var booleanSumTwoo = booleanFalse + booleanNumber;
  var booleanDif = booleanNumber - booleanFalse;

  document.getElementById("booleanNumber").innerHTML = booleanNumber;
  document.getElementById("booleanNumber1").innerHTML = booleanNumber;
  document.getElementById("booleanNumber2").innerHTML = booleanNumber;

  document.getElementById("booleanSum").innerHTML = booleanSum;
  document.getElementById("booleanSumTwoo").innerHTML = booleanSumTwoo;

  document.getElementById("booleanDif").innerHTML = booleanDif;

  var restDellNumberOne = 543;
  var restDellNumberTwo = 23;

  var restDellNumberResult = restDellNumberOne % restDellNumberTwo;

  document.getElementById("restDellNumberOne").innerHTML = restDellNumberOne;

  document.getElementById("restDellNumberTwo").innerHTML = restDellNumberTwo;

  document.getElementById(
    "restDellNumberResult"
  ).innerHTML = restDellNumberResult;

  //  Сложные операции<
  var dowdleBase = 51;
  document.getElementById("dowdleBase").innerHTML = dowdleBase;
  dowdleBase++;
  document.getElementById("dowdleBaseResult").innerHTML = dowdleBase;

  var dowdleVichet = 37;
  document.getElementById("dowdleVichet").innerHTML = dowdleVichet;
  dowdleVichet--;
  document.getElementById("dowdleVichetResult").innerHTML = dowdleVichet;

  var dowdleUmnogen = 65;
  document.getElementById("dowdleUmnogen").innerHTML = dowdleUmnogen;
  dowdleUmnogenY = ++dowdleUmnogen;
  document.getElementById("dowdleUmnogenResult").innerHTML = dowdleUmnogenY;

  var prefVichet = 68;
  document.getElementById("prefVichet").innerHTML = prefVichet;
  prefVichetY = --prefVichet;
  document.getElementById("prefVichetY").innerHTML = prefVichetY;

  var slogSlogenieBaceZ = 4;
  var slogSlogenieBace = 4;
  var slogSlogenieModule = 5;
  slogSlogenieBace += slogSlogenieModule;

  document.getElementById("slogSlogenieBaceZ").innerHTML = slogSlogenieBaceZ;
  document.getElementById("slogSlogenieBace").innerHTML = slogSlogenieBace;
  document.getElementById("slogSlogenieModule").innerHTML = slogSlogenieModule;

  var slogVichetBaceZ = 14;
  var slogVichetBace = 14;
  var slogVichetModule = 8;
  slogVichetBace -= slogVichetModule;

  document.getElementById("slogVichetBaceZ").innerHTML = slogVichetBaceZ;
  document.getElementById("slogVichetBace").innerHTML = slogVichetBace;
  document.getElementById("slogVichetModule").innerHTML = slogVichetModule;

  var slogUmnogenBaceZ = 5;
  var slogUmnogBace = 5;
  var slogUmnogModule = 6;
  slogUmnogBace *= slogUmnogModule;

  document.getElementById("slogUmnogenBaceZ").innerHTML = slogUmnogenBaceZ;
  document.getElementById("slogUmnogBace").innerHTML = slogUmnogBace;
  document.getElementById("slogUmnogModule").innerHTML = slogUmnogModule;

  var slogDelenieBaceZ = 5;
  var slogDelenieBace = 5;
  var slogDelenieModule = 6;
  slogDelenieBace /= slogDelenieModule;

  document.getElementById("slogDelenieBaceZ").innerHTML = slogDelenieBaceZ;
  document.getElementById("slogDelenieBace").innerHTML = slogDelenieBace;
  document.getElementById("slogDelenieModule").innerHTML = slogDelenieModule;

  var sravnBolsheOne = 8;
  var sravnBolsheTwo = 7;
  var sravRezult_one = false;

  document.getElementById("sravnBolsheOne").innerHTML = sravnBolsheOne;
  document.getElementById("sravnBolsheTwo").innerHTML = sravnBolsheTwo;
  document.getElementById("sravnBolshethree").innerHTML =
    sravnBolsheOne > sravnBolsheTwo;

  var proverksRavestvoOne = 8;
  var proverksRavestvoTwo = 98;
  var proverksRavestvothree = false;

  document.getElementById(
    "proverksRavestvoOne"
  ).innerHTML = proverksRavestvoOne;
  document.getElementById(
    "proverksRavestvoTwo"
  ).innerHTML = proverksRavestvoTwo;
  document.getElementById("proverksRavestvothree").innerHTML =
    proverksRavestvoOne == proverksRavestvoTwo;

  var proverksNeRavestvoOne = 8;
  var proverksNeRavestvoTwo = 8;
  var proverksNeRavestvothree = false;

  document.getElementById(
    "proverksNeRavestvoOne"
  ).innerHTML = proverksNeRavestvoOne;
  document.getElementById(
    "proverksNeRavestvoTwo"
  ).innerHTML = proverksNeRavestvoTwo;
  document.getElementById("proverksNeRavestvothree").innerHTML =
    proverksNeRavestvoOne != proverksNeRavestvoTwo;

  var absoluteRavestvoOne = 8;
  var absoluteRavestvoTwo = "8";
  var absoluteRavestvothree = false;

  document.getElementById(
    "absoluteRavestvoOne"
  ).innerHTML = absoluteRavestvoOne;
  document.getElementById(
    "absoluteRavestvoTwo"
  ).innerHTML = absoluteRavestvoTwo;
  document.getElementById("absoluteRavestvothree").innerHTML =
    absoluteRavestvoOne === absoluteRavestvoTwo;

  var absoluteNeRavestvoOne = 8;
  var absoluteNeRavestvoTwo = "8";
  var absoluteNeRavestvothree = false;

  document.getElementById(
    "absoluteNeRavestvoOne"
  ).innerHTML = absoluteNeRavestvoOne;
  document.getElementById(
    "absoluteNeRavestvoTwo"
  ).innerHTML = absoluteNeRavestvoTwo;
  document.getElementById("absoluteNeRavestvothree").innerHTML =
    absoluteNeRavestvoOne !== absoluteNeRavestvoTwo;

  // Логические операторы

  let cbFirst = 10;
  const cbSecond = 3555;
  cbFirst = 34;
  var testData = 29,
    testDataOn = 34;
  var cbThird = 1,
    cbFirstModal = 25;
  var cbFore = 1,
    cbForeFirst = 201,
    cbForeTw = 1;

  if (cbForeFirst > 200 && cbForeTw > 0) {
    cbFore = "все положительно";
  } else {
    cbFore = "что то не сложилось";
  }

  if (cbFirst <= cbFirstModal) {
    cbThird = "меньше или равно";
  } else {
    cbThird = "больше";
  }

  var cbFiveOn = 45,
    cbFive = 1;
  if (cbFiveOn < 200 || -4 * cbFiveOn > 0) {
    cbFive = "все выдержано";
  } else {
    cbFive = "между делом";
  }

  document.getElementById("cb_five").innerHTML = cbFive;
  document.getElementById("cb_fore").innerHTML = cbFore;
  document.getElementById("cb_third").innerHTML = cbThird;

  document.getElementById("cb_first").innerHTML = cbFirst;
  document.getElementById("cb_second").innerHTML = cbSecond;

  // сложные условия

  var currentYear = 2018,
    carName = "Ford",
    carYear = 2015,
    carAge = 0,
    carMesage = "";
  carAge = currentYear - carYear;
  if (carAge < 5) {
    carMesage = "младьше 5 лет";
  } else if (carAge >= 5 && carAge <= 10) {
    carMesage = "от 5 до 10 лет";
  } else if (carAge > 10) {
    carMesage = " 10 лет или старше";
  }

  //  0, null, undefined, '', NaN - false
  //  1, 'текст в строке', true   - true

  document.getElementById("cb_car_age").innerHTML =
    "Автомобиль мартки " + carName + " " + carMesage;

  // тернарный оперптор

  // число 0 - отдает false, ? - заменяет оператор if
  // знак вдоеточие (:) - заменяет оператор иначе
  var mesTern = "";
  0 ? (mesTern = "Тридцать четыре") : (mesTern = "Не тридцать четыре");
  document.getElementById("cb_tern").innerHTML = "Первый тернарный " + mesTern;

  var maineTern = "";
  534 > 43 && 54 > 56
    ? (maineTern = "Все правда")
    : (maineTern = "Все не правда");
  document.getElementById("maine_tern").innerHTML =
    "Сложное тернарное условие " + maineTern;

  var slogTern = "";
  34 > 43 || 54 > 56
    ? (slogTern = "Правда при одном условии")
    : (slogTern = "Все не правда");
  document.getElementById("slog_tern").innerHTML =
    "Второе сложное условие " + slogTern;

  var sostavTern = "";
  !(true || false || !false)
    ? (sostavTern = "Значение true")
    : (sostavTern = "Значение false");
  document.getElementById("sostav_tern").innerHTML =
    "Сосотавное тернарное условие " + sostavTern;

  // задача на совершелоление 1

  var personAge = 16,
    sovershenMessage = "";
  if (personAge < 18) {
    sovershenMessage = "Человек не совершенолетний";
  } else {
    sovershenMessage = "Человек совершенолетний";
  }
  document.getElementById("sovershen_message").innerHTML = sovershenMessage;

  var personAgeTwo = 21;
  var sovershenMessageTwo =
    personAgeTwo < 18
      ? "Человек не совершенолетний"
      : "Человек совершенолетний";
  document.getElementById(
    "sovershen_messagetwo"
  ).innerHTML = sovershenMessageTwo;

  //Логические операторы Switch Case

  var carColor = "black";
  var carColorMemssage = "";
  if (carColor === "black") {
    // сравнивание по типу и значению
    carColorMemssage = "Цвет машины черный";
  } else if (carColor === "green") {
    carColorMemssage = "Цвет машины зеленый";
  } else if (carColor === "white") {
    carColorMemssage = "Цвет машины белый";
  } else if (carColor === "yellow") {
    carColorMemssage = "Цвет машины зеленый";
  } else {
    carColorMemssage = "Цвет машины не определен";
  }
  document.getElementById("switch_first").innerHTML = carColorMemssage;

  var carColorSwich = "orrange";
  var carColorMemssageSwich = "";

  switch (carColorSwich) {
    case "black":
      carColorMemssageSwich = "Цвет машины черный";
      break;
    case "orrange":
      carColorMemssageSwich = "Цвет машины оранжевый";
      break;
    case "red":
      carColorMemssageSwich = "Цвет машины красный";
      break;
    case "white":
      carColorMemssageSwich = "Цвет машины белый";
      break;
    default:
      carColorMemssageSwich = "Цвет машины не определен";
  }
  document.getElementById("switch_second").innerHTML = carColorMemssageSwich;
  
  
  // Первые функции


  
  
  
  
  
  
  
  
  //  Сложные операции<
  // var doleBase = 4;
  // document.getElementById("doleBase").innerHTML =  doleBase;
  // var doleBaseResult = doleBase+=5;
  // document.getElementById("doleBaseResult").innerHTML =  doleBaseResult;

  $(function() {
    $("#phone_key").mask("+7(000)000-00-00", {
      placeholder: "+7(___)___-__-__",
      clearIfNotMatch: true
    });
    $("#phone_header").mask("+7(000)000-00-00", {
      placeholder: "+7(___)___-__-__",
      clearIfNotMatch: true
    });
    $("#phone_calcul").mask("+7(000)000-00-00", {
      placeholder: "+7(___)___-__-__",
      clearIfNotMatch: true
    });
    $("#phone_calcultwo").mask("+7(000)000-00-00", {
      placeholder: "+7(___)___-__-__",
      clearIfNotMatch: true
    });
    $("#phone_calculthree").mask("+7(000)000-00-00", {
      placeholder: "+7(___)___-__-__",
      clearIfNotMatch: true
    });
    $("#phone_calculaitethree").mask("+7(000)000-00-00", {
      placeholder: "+7(___)___-__-__",
      clearIfNotMatch: true
    });
  });

  $("#mounth").customSelect({
    // Adds input to filter options
    search: false,
    // Class name (BEM block name)
    block: "custom-select",
    // Fires after dropdown closes
    hideCallback: false,
    // Shows chosen value option in dropdown, if enabled also cancels dropdown options refresh
    includeValue: false,
    // True to enable keyboard control
    keyboard: false,
    // Additional class, e.g. BEM modifier
    modifier: false,
    // Input placeholder
    placeholder: "Тип мероприятия",
    // Fires after dropdown opens
    showCallback: false,
    // jQuery slideUp/Down speed
    transition: 1000
  });

  $("#person_order").customSelect({
    // Adds input to filter options
    search: false,
    // Class name (BEM block name)
    block: "custom-select",
    // Fires after dropdown closes
    hideCallback: false,
    // Shows chosen value option in dropdown, if enabled also cancels dropdown options refresh
    includeValue: false,
    // True to enable keyboard control
    keyboard: false,
    // Additional class, e.g. BEM modifier
    modifier: false,
    // Input placeholder
    placeholder: "В какой стране",
    // Fires after dropdown opens
    showCallback: false,
    // jQuery slideUp/Down speed
    transition: 1000
  });

  $("#year").customSelect({
    // Adds input to filter options
    search: false,
    // Class name (BEM block name)
    block: "custom-select",
    // Fires after dropdown closes
    hideCallback: false,
    // Shows chosen value option in dropdown, if enabled also cancels dropdown options refresh
    includeValue: false,
    // True to enable keyboard control
    keyboard: false,
    // Additional class, e.g. BEM modifier
    modifier: false,
    // Input placeholder
    placeholder: "Сколько человек",
    // Fires after dropdown opens
    showCallback: false,
    // jQuery slideUp/Down speed
    transition: 1000
  });

  // формление селектов из второго калькулятора
  $("#select_one").customSelect({
    // Adds input to filter options
    search: false,
    // Class name (BEM block name)
    block: "custom-select",
    // Fires after dropdown closes
    hideCallback: false,
    // Shows chosen value option in dropdown, if enabled also cancels dropdown options refresh
    includeValue: false,
    // True to enable keyboard control
    keyboard: false,
    // Additional class, e.g. BEM modifier
    modifier: false,
    // Input placeholder
    placeholder: "Тип мероприятия",
    // Fires after dropdown opens
    showCallback: false,
    // jQuery slideUp/Down speed
    transition: 1000
  });

  $("#select_two").customSelect({
    // Adds input to filter options
    search: false,
    // Class name (BEM block name)
    block: "custom-select",
    // Fires after dropdown closes
    hideCallback: false,
    // Shows chosen value option in dropdown, if enabled also cancels dropdown options refresh
    includeValue: false,
    // True to enable keyboard control
    keyboard: false,
    // Additional class, e.g. BEM modifier
    modifier: false,
    // Input placeholder
    placeholder: "В каком городе",
    // Fires after dropdown opens
    showCallback: false,
    // jQuery slideUp/Down speed
    transition: 1000
  });

  $("#select_three").customSelect({
    // Adds input to filter options
    search: false,
    // Class name (BEM block name)
    block: "custom-select",
    // Fires after dropdown closes
    hideCallback: false,
    // Shows chosen value option in dropdown, if enabled also cancels dropdown options refresh
    includeValue: false,
    // True to enable keyboard control
    keyboard: false,
    // Additional class, e.g. BEM modifier
    modifier: false,
    // Input placeholder
    placeholder: "Сколько человек",
    // Fires after dropdown opens
    showCallback: false,
    // jQuery slideUp/Down speed
    transition: 1000
  });

  // Програмирование второго калькулятора услуг

  //пишу второй калькутор услуг

  // $("#select_one").onСhange(function(){

  // var selectuing_one, options, select_onerezult;
  //  selectuing_one = document.getElementById('select_one').selectedIndex;
  // options = document.getElementById('select_one').options;
  // select_onerezult = (options[selectuing_one].text);
  // document.getElementById("select_one_bissness").innerHTML = select_oneresult;
  // });

  $("#select_one")
    .change(function() {
      var str = "";
      $("#select_one option:selected").each(function() {
        str += $(this).text() + " ";
      });
      $("#select_one_bissness").text(str);
    })
    .change();

  $("#select_two")
    .change(function() {
      var str = "";
      $("#select_two option:selected").each(function() {
        str += $(this).text() + " ";
      });
      $("#select_two_country").text(str);
    })
    .change();

  $("#select_three")
    .change(function() {
      var str = "";
      $("#select_three option:selected").each(function() {
        str += $(this).text() + " ";
      });
      $("#select_three_persons").text(str);
    })
    .change();

  $("#select_one").change(function() {
    $(".ooo .custom-select__option").addClass("active");
  });
  $("#select_two").change(function() {
    $(".ooo2 .custom-select__option").addClass("active");
  });
  $("#select_three").change(function() {
    $(".ooo3").addClass("active");
  });
  $("#phone_calculaitethree").change(function() {
    $(".calculator_idea_neactive").addClass("active");
  });
  // сщздание обьекта

  var obj = {
    one: "2",
    two: "3",
    three: "4",
    foure: "54"
  };
  document.getElementById("cont_one").innerHTML = obj["one"];
  document.getElementById("cont_two").innerHTML = obj["two"];
  document.getElementById("cont_three").innerHTML = obj["three"];
  document.getElementById("cont_foure").innerHTML = obj["foure"];

  // типа делаю третий калькулятор услуг

  // типа пытаю джаваскрипт
  var wrapblock = document.getElementById("wrapblock");
  //загнать свойства #wrapblock в переменгную
  function changeclass() {
    wrapblock.style.color = "black";
    // меняю в  #wrapblock свойство color: на черное
  }
  // вызываю функцию через такое то время
  setTimeout(changeclass, 5000);

  // function explode(){
  //   alert("Boom!");
  // }
  // setTimeout(explode, 2000);

  $(".f_d").css("border", "2px solid red");
  $(".f_k").css({
    border: "2px solid red",
    color: "red",
    padding: "20px 15px 54px 7px"
  });
  //parent > child
  // $('h4 span').css('color', 'gray').html('Бомба, епт!');
  $("h4 > span")
    .css("color", "gray")
    .html("Бомба, епт!");
  //parent + child
  $("h3 + p")
    .css("color", "gray")
    .html("Это вторая бомба, епт!");

  $("a#terpilotero").attr({
    href: "seomans.ru",
    class: "newclass",
    title: "Это текст титла"
  });

  $(".bigtimo ~ p")
    .css("color", "gray")
    .html("Это вторая бомба, епт!");
  // не очень понятно как это все работает

  // Взаимодействие с элментами по атрибутам

  $(".boxcurico a[href]").css("color", "red");
  $(".boxcurico a[title]").css("color", "blue");
  $('.boxcurico a[href="lediseo.ru"]').css("color", "blue");

  $('.boxcurico a[href!="lediseo.ru"]').css("color", "blue");
  $('.boxcurico a[href^="tell:"]').css("color", "blue");
  //атрибут который начинается
  $('.boxcurico a[href$=".com"]').css("color", "yellow");
  //атрибут который завершается

  $('.boxcurico a[href*="lediseo"]').css("color", "blue");
  //атрибут который содержит

  $('.boxcurico a[data-target|="admin"]').css("color", "yellow");

  $(".boxcurico a[data-target], [download]").css("color", "red");
  //имеет одновременно несколько атрибутов : и с теми аттриббутами и другми могут бюыть
  //2 разных тега

  $(".boxcurico a[data-target][download]").css("color", "red");
  //если имеет одновременно несколько атрибутов один тег
  //2 разных тега

  //>Простые фильтры JQUERY

  $(".simpleel p:first").css("color", "red");
  $(".simpleel p:last").css("color", "blue");
  $(".simpleel p:eq(4)")
    .css("color", "grey")
    .attr({
      href: "seomans.ru",
      class: "newclass",
      title: "Это текст титла"
    }); // 0, 1, 2 тоесть третий
  // 5-й эллемент р в классе
  // $('*:not(p)').css('color', 'red'); //выделятся все элементы кроме р
  // $('*:not(p,h2)').css('color', 'red'); //выделятся все элементы кроме р & h2

  $(".simpleel_list li:odd").css("color", "red"); //четные
  $(".simpleel_list li:even").css("color", "blue"); //нечетные
  $(".simpleel_list li:gt(15)").css("color", "#800080"); //li идущие после 16-го тоесть 17 и так далее
  $(".simpleel_list li:lt(3)").css("border", "1px solid grey"); //li идущие до 3-го(не включ) 0, 1, 2
  $(".simpleel_list :header").css({
    color: "red",
    border: "1px dotted blue"
  }); //заголовки
  // $('*:animated').css('color', 'red');  //заголовки
  $(".develo:hidden").css("display", "block"); //скрытые элементы станут видимые

  $(".visibl:visible").css("visibility", "hidden"); //видимые станут невидимими
  //  $('li:lang(ru)').css('border', '1px solid red');  //видимые станут невидимими

  // http://jquery.page2page.ru/index.php5/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0

  //>Фильтры по содержимому JQUERY 5 урок
  // $('p').css('visibility', 'hidden');
  // $( ".cderjanie p:contains('попытка')" ).css('color', 'red'); // содержит слово далеко
  // $( "p:contains('djom')" ).css( "text-decoration", "underline" );

  // $('p:emty').css('visibility', 'hidden'); //тег без содержимого
  // $('.cderjanie:has(span)').css('text-decoration', 'underline'); // h2 содержит span
  //$('span:parent').css('text-decoration', 'underline'); // ищет родителя тега span

  //>Фильтры форм JQUERY 6 урок

  // $('.form_input input').css({'border':'2px solid red', 'color':'red', 'padding':'5px 15px 5px 15px'});
  // $('input:button').css('border', '1px solid grey');
  //.css({'border':'2px solid red', 'color':'red', 'padding': '20px 15px 54px 7px'});
  // $('input:checkbox').css('border', '1px solid grey');
  // $('input:text').css('border', '1px solid grey');
  // $('input:password').css('border', '1px solid grey');
  // $('input:file').css('border', '1px solid grey');
  // $('input:submit').css('border', '1px solid grey');
  // $('input:reset').css('border', '1px solid grey');
  // $('input:image').css('border', '1px solid grey');
  // $('input:focus').css('border', '1px solid grey');
  // $('input:checked').css('border', '1px solid grey');
  // $('input:enabled').css('border', '1px solid grey');
  // $('input:disabled').css('border', '1px solid grey');

  //События мыши JQUERY   7
  // $('.mouse_text').css('border', '1px solid grey');
  $(".mouse_text_b button").click(function() {
    $(".mouse_text").css("border", "1px solid grey");
  }); // йфункция которая возвражается
  // $('.mouse_text_b button').dblclick(function(){
  // $('.mouse_text').css('border', '1px solid red');
  //    });

  $(".mouse_text").hover(function() {
    $(".mouse_text").css("border", "1px solid red");
    $(this).fadeOut(100);
    $(this).fadeIn(500);
  });
  // Устанавливает обработчик(и) двух событий: mouseenter и mouseleave:

  $(".button_click a").mousedown(function(event) {});
  // момент нажатия кнопки мыши и держит
  $(".button_click a").mouseup(function(event) {});
  // момент отжатия кнопки мыши и держит

  $(".mouse_text_b button").mouseenter(function() {
    $(".mouse_text").css({
      padding: "20px 10px",
      border: "1px solid red"
    });
  });
  //  наезжает  на элемент появление курсора в области элемента
  $(".button_click a").mouseover(function(event) {});
  //  наезжает  на элемент появление курсора в области элемента

  $(".button_click a").mouseleave(function(event) {});
  $(".button_click a").mouseout(function(event) {});
  // мышь покидает область элемента лучше чем тот что ниже

  $(".button_click a").mousemove(function(event) {});
  // курсор движется над областью
  $(".button_click a").toggle(function(event) {});
  // Поочередно выполняет одно из нескольких заданных действий. Имеет четыре варианта использования:
  $(".cuprinisimo li").toggle(
    function() {
      $(this).css({
        "list-style-type": "disc",
        color: "blue"
      });
    },
    function() {
      $(this).css({
        "list-style-type": "disc",
        color: "red"
      });
    },
    function() {
      $(this).css({
        "list-style-type": "",
        color: ""
      });
    }
  );

  //События клавиатуры JQUERY
  $(".button_click a").keydown(function(event) {});

  $(".button_click a").keyup(function(event) {});
  $(".button_click a").keypress(function(eventObject) {
    console.log(eventObject.which);
  });
  //отлавливает коды клавиши

  // События брузера и страницы JQUERY   9
  jQuery(document).ready(function() {});

  $(document).ready(function() {
    // все ли элементы - теги загрузились
  });

  $(window).load(function() {
    // все все ли элементы - не только теги загрузились
  });

  $(window).unload(function() {
    // все все ли элементы - не только теги загрузились
  });

  $(window).resize(function() {
    // все все ли элементы - не только теги загрузились
  });

  // Базовые события on and off JQUERY  10

  // Переменные и их свойства JQUERY

  // Практика Драм машина JQUERY  12

  // Практика Всплывающие окна JQUERY

  // Практика Табы  JQUERY 14

  // Практика Слайдеры JQUERY  15

  // 16 - Практика. Адаптивное меню

  // Практика Калькулятор на сайт JQUERY 17

  // Практика Коредитная карточка JQUERY 18

  // Основы AJAX  JQUERY

  // 20 - Введение в библиотеку jQuery UI

  //

  //

  // код подключения плагина Vertical-Horizontal-Tabs
  // $('#verticalTab').jqTabs();

  // всплывающие окна обратной связи позвонить мне
  $(
    "a[href='#politics'], a[href='#call-backtimer'], a[href='#call-back'], a[href='#call-back4s'], a[href='#call-back6s'], a[href='#call-back8s'], a[href='#call-back10s']"
  ).magnificPopup({
    mainClass: "mfp-fade",
    removalDelay: 400,
    type: "inline"
  });

  /*чтобы в формах был индивидуальный заголовок */
  $(
    "a[href='#politics'], a[href='#call-backtimer'], a[href='#call-back'], a[href='#call-back4s'], a[href='#call-back6s'], a[href='#call-back8s'], a[href='#call-back10s']"
  ).click(function() {
    var dataForm = $(this).data("form");
    var dataText = $(this).data("text");
    $(".forms-call h4").text(dataText);
    $(".forms-call [name=admin-data]").val(dataForm);
  });

  //Ajax push mesege http://api.jquery.com/jquery.ajax/

  $("form").submit(function() {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(".forms-calldecor .success").addClass("active");
      setTimeout(function() {
        // Done Functions
        $(".forms-calldecor .success").removeClass("active");
        th.trigger("reset");
        $.magnificPopup.close();
      }, 3000);
    });
    return false;
  });
  //castom code
});
