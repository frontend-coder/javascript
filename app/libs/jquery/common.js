$(document).ready(function() {
// http://jquery.page2page.ru/index.php5/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0

	$("body").niceScroll({
horizrailenabled:false
});
// вверхнее красиво-вращающееся меню
// 1 и 2 строка это анимация крестика
//3 строка - слайдер вниз меню
//слайдер вниз меню отвечает за работу мобильного меню к переносу
$(".toggle-mnu").click(function() {
$(this).toggleClass("on");
$(".top-menu").slideToggle();
return false;
});
$('body, .top-menu ul li a').click(function () {
$('.hidden-mnu').hide("slow");
});

// pagination on lending pages
$(".top_line_menu ul li a, .hidden_mnu ul li a").mPageScroll2id({
layout                 : "auto",
offset                 : ".top_line_box",
scrollEasing           : "linear",
highlightByNextTarget  : true,
keepHighlightUntilNext : true,
autoScrollSpeed        : true,
scrollSpeed            : 1000
});

$(function() {
	$("#phone_key").mask("+7(000)000-00-00", {placeholder: "+7(___)___-__-__",clearIfNotMatch: true});
	$("#phone_header").mask("+7(000)000-00-00", {placeholder: "+7(___)___-__-__",clearIfNotMatch: true});
	$("#phone_calcul").mask("+7(000)000-00-00", {placeholder: "+7(___)___-__-__",clearIfNotMatch: true});
	$("#phone_calcultwo").mask("+7(000)000-00-00", {placeholder: "+7(___)___-__-__",clearIfNotMatch: true});
	$("#phone_calculthree").mask("+7(000)000-00-00", {placeholder: "+7(___)___-__-__",clearIfNotMatch: true});
	$("#phone_calculaitethree").mask("+7(000)000-00-00", {placeholder: "+7(___)___-__-__",clearIfNotMatch: true});

});

$('#mounth').customSelect({
  // Adds input to filter options
 search: false,
 // Class name (BEM block name)
  block: 'custom-select',
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

$('#person_order').customSelect({
  // Adds input to filter options
 search: false,
 // Class name (BEM block name)
  block: 'custom-select',
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

$('#year').customSelect({
  // Adds input to filter options
 search: false,
 // Class name (BEM block name)
  block: 'custom-select',
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
$('#select_one').customSelect({
  // Adds input to filter options
 search: false,
 // Class name (BEM block name)
  block: 'custom-select',
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


$('#select_two').customSelect({
  // Adds input to filter options
 search: false,
 // Class name (BEM block name)
  block: 'custom-select',
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


$('#select_three').customSelect({
  // Adds input to filter options
 search: false,
 // Class name (BEM block name)
  block: 'custom-select',
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

$("#select_one").change(function () {
  var str = "";
  $( "#select_one option:selected" ).each(function() {
     str += $( this ).text() + " ";
   });
   $( "#select_one_bissness" ).text( str );
  }).change();

$("#select_two").change(function () {
  var str = "";
  $( "#select_two option:selected" ).each(function() {
     str += $( this ).text() + " ";
   });
   $( "#select_two_country" ).text( str );
  }).change();

$("#select_three").change(function () {
  var str = "";
  $( "#select_three option:selected" ).each(function() {
     str += $( this ).text() + " ";
   });
   $( "#select_three_persons" ).text( str );
  }).change();

$("#select_one").change(function () {
$(".ooo .custom-select__option").addClass("active");
});
$("#select_two").change(function () {
$(".ooo2 .custom-select__option").addClass("active");
});
$("#select_three").change(function () {
$(".ooo3").addClass("active");
});
$("#phone_calculaitethree").change(function () {
$(".calculator_idea_neactive").addClass("active");
});
// сщздание обьекта

var obj = {
one : "2",
two : "3",
three : "4",
foure : "54"
};
document.getElementById("cont_one").innerHTML = obj['one'];
document.getElementById("cont_two").innerHTML = obj['two'];
document.getElementById("cont_three").innerHTML = obj['three'];
document.getElementById("cont_foure").innerHTML = obj['foure'];





// типа делаю третий калькулятор услуг









// типа пытаю джаваскрипт
var wrapblock = document.getElementById('wrapblock');
//загнать свойства #wrapblock в переменгную
function changeclass() {
wrapblock.style.color = 'black';
// меняю в  #wrapblock свойство color: на черное
}
// вызываю функцию через такое то время
 setTimeout(changeclass, 5000);

// function explode(){
//   alert("Boom!");
// }
// setTimeout(explode, 2000);

$('.f_d').css('border', '2px solid red');
$('.f_k').css({'border':'2px solid red', 'color':'red', 'padding': '20px 15px 54px 7px'});
//parent > child
// $('h4 span').css('color', 'gray').html('Бомба, епт!');
$('h4 > span').css('color', 'gray').html('Бомба, епт!');
//parent + child
$('h3 + p').css('color', 'gray').html('Это вторая бомба, епт!');

$('a#terpilotero').attr({href:"seomans.ru", "class":"newclass", "title":"Это текст титла"});

$('.bigtimo ~ p').css('color', 'gray').html('Это вторая бомба, епт!');
// не очень понятно как это все работает

// Взаимодействие с элментами по атрибутам

$('.boxcurico a[href]').css('color', 'red');
$('.boxcurico a[title]').css('color', 'blue');
$('.boxcurico a[href="lediseo.ru"]').css('color', 'blue');

$('.boxcurico a[href!="lediseo.ru"]').css('color', 'blue');
$('.boxcurico a[href^="tell:"]').css('color', 'blue');
//атрибут который начинается
$('.boxcurico a[href$=".com"]').css('color', 'yellow');
//атрибут который завершается

$('.boxcurico a[href*="lediseo"]').css('color', 'blue');
//атрибут который содержит

$('.boxcurico a[data-target|="admin"]').css('color', 'yellow');

$('.boxcurico a[data-target], [download]').css('color', 'red');
//имеет одновременно несколько атрибутов : и с теми аттриббутами и другми могут бюыть
//2 разных тега

$('.boxcurico a[data-target][download]').css('color', 'red');
//если имеет одновременно несколько атрибутов один тег
//2 разных тега



//>Простые фильтры JQUERY

$('.simpleel p:first').css('color', 'red');
$('.simpleel p:last').css('color', 'blue');
$('.simpleel p:eq(4)').css('color', 'grey').attr({href:"seomans.ru", "class":"newclass", "title":"Это текст титла"}); // 0, 1, 2 тоесть третий
// 5-й эллемент р в классе
// $('*:not(p)').css('color', 'red'); //выделятся все элементы кроме р
// $('*:not(p,h2)').css('color', 'red'); //выделятся все элементы кроме р & h2

$('.simpleel_list li:odd').css('color', 'red'); //четные
$('.simpleel_list li:even').css('color', 'blue');  //нечетные
$('.simpleel_list li:gt(15)').css('color', '#800080');  //li идущие после 16-го тоесть 17 и так далее
 $('.simpleel_list li:lt(3)').css('border', '1px solid grey');  //li идущие до 3-го(не включ) 0, 1, 2
 $('.simpleel_list :header').css({'color':'red', 'border':'1px dotted blue'});  //заголовки
 // $('*:animated').css('color', 'red');  //заголовки
 $('.develo:hidden').css('display', 'block');  //скрытые элементы станут видимые

  $('.visibl:visible').css('visibility', 'hidden');  //видимые станут невидимими
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
$('.mouse_text_b button').click(function(){
$('.mouse_text').css('border', '1px solid grey');

   });  // йфункция которая возвражается
// $('.mouse_text_b button').dblclick(function(){
// $('.mouse_text').css('border', '1px solid red');
//    });

$('.mouse_text').hover(function(){
$('.mouse_text').css('border', '1px solid red');
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
  });
// Устанавливает обработчик(и) двух событий: mouseenter и mouseleave:

$('.button_click a').mousedown(function(event){   });
// момент нажатия кнопки мыши и держит
$('.button_click a').mouseup(function(event){   });
// момент отжатия кнопки мыши и держит

$('.mouse_text_b button').mouseenter(function(){
$('.mouse_text').css({'padding':'20px 10px', 'border' : '1px solid red'});

  });
//  наезжает  на элемент появление курсора в области элемента
$('.button_click a').mouseover(function(event){   });
//  наезжает  на элемент появление курсора в области элемента

$('.button_click a').mouseleave(function(event){   });
$('.button_click a').mouseout(function(event){   });
// мышь покидает область элемента лучше чем тот что ниже

$('.button_click a').mousemove(function(event){   });
// курсор движется над областью
$('.button_click a').toggle(function(event){   });
// Поочередно выполняет одно из нескольких заданных действий. Имеет четыре варианта использования:
    $(".cuprinisimo li").toggle(
      function () {
        $(this).css({"list-style-type":"disc", "color":"blue"});
      },
      function () {
        $(this).css({"list-style-type":"disc", "color":"red"});
      },
      function () {
        $(this).css({"list-style-type":"", "color":""});
      }
    );


//События клавиатуры JQUERY
$('.button_click a').keydown(function(event){   });

$('.button_click a').keyup(function(event){   });
$('.button_click a').keypress(function(eventObject){
console.log(eventObject.which);   });
//отлавливает коды клавиши
















// События брузера и страницы JQUERY   9
jQuery(document).ready(function() {

});

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
$("a[href='#politics'], a[href='#call-backtimer'], a[href='#call-back'], a[href='#call-back4s'], a[href='#call-back6s'], a[href='#call-back8s'], a[href='#call-back10s']").magnificPopup ({
	mainClass:'mfp-fade',
	removalDelay:400,
	type:'inline'
});


/*чтобы в формах был индивидуальный заголовок */
$("a[href='#politics'], a[href='#call-backtimer'], a[href='#call-back'], a[href='#call-back4s'], a[href='#call-back6s'], a[href='#call-back8s'], a[href='#call-back10s']").click(function(){
	var dataForm = $(this).data("form");
	var dataText = $(this).data("text");
	$(".forms-call h4").text(dataText);
	$(".forms-call [name=admin-data]").val(dataForm);
});









//Ajax push mesege http://api.jquery.com/jquery.ajax/

$("form").submit(function() { //Change
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