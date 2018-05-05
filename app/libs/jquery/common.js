$(document).ready(function() {
	$("body").niceScroll({
horizrailenabled:false
});
// вверхнее красиво-вращающееся меню
// 1 и 2 строка это анимация крестика
//3 строка - слайдер вниз меню
$(".toggle-mnu").click(function() {
$(this).toggleClass("on");
$(".hidden-mnu").slideToggle();
return false;
});
$('body, .top-menu ul li a').click(function () {
$('.hidden-mnu').hide("slow");
});


// всплывающие окна обратной связи позвонить мне
$("a[href='#call-back']").magnificPopup ({
  mainClass:'mfp-fade',
  removalDelay:400,
  type:'inline',
});


/*чтобы в формах был индивидуальный заголовок */
$("a[href='#call-back']").click(function(){
  var dataForm = $(this).data("form");
  var dataText = $(this).data("text");
  $(".forms-call h4").text(dataText);
  $(".forms-call [name=admin-data]").val(dataForm);
});



// pagination on lending pages
$(".top-menu ul li a, .hidden-mnu ul li a").mPageScroll2id({
layout                 : "auto",
offset                 : ".top-line",
scrollEasing           : "linear",
highlightByNextTarget  : true,
keepHighlightUntilNext : true,
autoScrollSpeed        : true,
scrollSpeed            : 1000
});





// одинаковой высоты разные по длине ашки
$(".bl").equalHeights();


//Кнопка наверх с права от контента
$("body").append('<div class="button-top"><i class="fa fa-angle-double-up" aria-hidden="true"></i></div>');
// Заставляет кнопку работать как ссылку на самый вверх
$("body").on("click", ".button-top", function() {
  $("html, body").animate({scrollTop: 0}, "slow");
});
// Заставляет прятаться кнопку, если посетитель на хедере
$(window).scroll(function() {
if ($(this).scrollTop() > $(this).height()) {
  $(".button-top").addClass("active");
} else
{   $(".button-top").removeClass("active");
}
});

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
//ниже вставлять js код


// урок 1
// $(function() {
//   });
// jQuery(document).ready(function() {
//   });
// когда все загрузятся в DOM дерево анонимная функция







});

jQuery(document).ready(function($) {
// ковычки потому что как строковая срока
// var j = $("*");
// alert(j);  // в пременной содержит объет

// var j = $("*");
// alert (j.html());  // в пременной содержит html код страницы

var j = $(".first");
j.css({"border":"2px solid red"});  // выделяются все элементы к которым привязан этот класс

var j = $("#first");
j.css({"border":"1px solid red"});  // выделяется только один элемент с id или первый элемент с этим id

$("#second").css({"border":"1px solid red"});
// селекторы по атрибутам

// $("[name]").css({"border":"4px solid blue"});
 // $("[class]").css({"border":"4px solid blue"});

// $("[name]").css({"border":"4px solid blue"});
$("[name=doun]").css({"border":"44px solid purple"});

$("[id=redi]").css({"border":"44px solid red"});
$("[class=b_lock]").css({"border":"44px solid grey"});
//не работает если в class прописано несколько классов через пробел
// $("[id!=chemil]").css({"border":"5px solid brown"});
// $("[id!=chemil]").css({"border":"5px solid brown"});
$("[name^=str]").css({"border":"5px solid black"});
//если атрибут начинаеся на str
$("[name$=str]").css({"border":"5px solid #fff"});
//если атрибут начинаеся на str
$("[name*=gulp]").css({"border":"5px solid #fff"});
//если атрибут содержит слово, в которм есть слово  gulp
$("[name~=dura]").css({"border":"5px solid #000"});
//если атрибут содержит слово dura
$("[name|=pref]").css({"border":"5px solid red"});
//если атрибут содержит префикс pref-
$("[name] [class]").css({"border":"5px solid red"});
//те теги где есть сразу же class and name
$("[name] [class][id=id]").css({"border":"5px solid red"});
//те теги где есть сразу же class and name and id
$("[name=turuk] [class=sho]").css({"border":"5px solid red"});
var terecusg = $("h2");
for(var v in terecusg) {
// document.write("<strong>" + v + "<strong>" + terecusg[v] + "<br>");
if (v==2) {
  terecusg[v].innerHTML = "Это пиздец как просто";
}
}
//простые фильтры
//первый найденный элемент
var ullil = $(".list_ul li:first");
ullil.css({"border":"5px  solid red"});
var ullast = $(".list_ul li:last");
ullast.css({"border":"5px solid black"});
//:not(selector)
var ullastp = $(".list_ul:not(p)");
ullastp.css({"border-bottom":"5px solid blue"});
//все кроме содержимого в теге р
var chet = $(".chet li:even");
chet.css({"border-bottom":"1px solid blue"});
//работает со всеми четными li
var chet = $(".chet li:odd");
chet.css({"border-bottom":"1px solid Crimson "});
//работает со всеми четными li
var ind = $(".ind li:gt(4)");
ind.css({"border-bottom":"1px solid Crimson "});
//в выборку все больше 4
var indmen = $(".indmen li:lt(6)");
indmen.css({"border-bottom":"1px solid Crimson "});
//в выборку все меньше 6
var hea = $(".headere:header");
hea.css({"border-bottom":"1px dotted DarkOrange"});
//если к нескольким тегам или классам проивязать фильтр, то работать будут только теги заголовком
var anim = $(".headere:animated");
anim.css({"border-bottom":"1px dotted DarkOrange"});
//если к нескольким тегам или классам проивязать фильтр, то работать будут только теги заголовком
var indmened = $(".indmen li:lt(6):odd");
indmened.css({"border-bottom":"1px solid Crimson "});
//использование нескольких фильтров
//фильтры по содержимому
var con = $("h2:contains(Архив)");
con.css({"border-bottom":"1px solid red"});
//ищу h2 везде, в них слово Архив регистрозависомый фильтр
$("*:empty").css({"border-bottom":"1px dashed red"});
//ищет и работает с пустыми контейнерами
$(".includ_p:has(span)").css({"border-bottom":"1px dashed Fuchsia"});
$("div:has(span)").css({"border-bottom":"1px dashed Fuchsia"});
$("pre:parent").css({"border-bottom":"1px dashed Fuchsia"});
//если в конетйнере содержится содержимое работает (выделяет), если пустые - не работает

//фильтры дочерних элементов лесон 5
var firstch = $(".f_ch_ul li:first-child");
firstch.css({"border-bottom":"1px dotted DarkOrange"});

var firstch = $(".f_ch_ul li:last-child");
firstch.css({"border-bottom":"1px dotted DarkOrange"});

var nthstch = $(".f_ch_ul li:nth-child(4)");
firstch.css({"border-bottom":"1px dotted DarkOrange"});

var conch = $(".conch p:nth-child(4)");
conch.css({"border-bottom":"1px dotted DarkOrange"});
//нумерация начинается с единицы (1)
// var conch = $(".conch p:nth-child(even)"); //четные
// conch.css({"border-bottom":"1px dotted DarkOrange"});
// var conch = $(".conch p:nth-child(odd)"); //нечетные
// conch.css({"border-bottom":"1px dotted DarkOrange"});
//работа с элементами формами лесон 6


// var conch = $(".conch p:nth-child(2n+3)"); //фолрмула
// conch.css({"border-bottom":"1px dotted DarkOrange"});
//фолрмула если n=0 , 2*0+3 = 3
//фолрмула если n=1 , 2*1+3 = 5


var onlych = $(".only-ch p:only-child");
onlych.css({"color":"red"});

// фильтры элементов форм

// :button - работа с кнопками  type="button"
$(":button").css({"color":"purple"});
// :radio - работа с кнопками  type="radio"
$("input:radio").css({"color":"purple"});
$(".forma-test input:radio").css({"color":"purple"});//лучший вариант
$(".forma-test input:radio").css({"color":"purple"});
// работа со всеми input c type="checkbox"
$(".forma-test input:checkbox").css({"color":"purple"});

//:text работа со всеми input c type="text"
$(".forma-test input:checkbox").css({"color":"purple"});
//:password работа со всеми input c type="password"
$(".forma-test input:password").css({"color":"purple"});
//:file работа со всеми input c type="file"
$(".forma-test input:file").css({"color":"purple"});
// поля отправки файлов
//:submit работа со всеми input c type="submit"
// работа с кнопкой отправки данных из формы
$(".forma-test input:submit").css({"color":"purple"});
//  :reset работа со всеми input c type="reset"
$(".forma-test input:reset").css({"color":"purple"});
// работа с кнопкой сбрасывания данных из полей  формы

//  :image работа со всеми input c type="image"
$(".forma-test input:image").css({"color":"purple"});
// Поле input с фоновым изображением.

//  :input работа со всеми input c type="input"
$(".forma-test :input").css({"color":"purple"});
//  все элементы с форме с type button, text,

//  :selected работа со всеми input c type="selected" не понятно как работает
// function my_func() {
// alert(jQuery(".forma_g :selected").val());
// }


//   :chected
// $(".forma-test input:chected").css({"color":"purple"});
function my_func() {
alert(jQuery(".forma_d :checked").val());
}







//   :enabled
// $(".forma-test input:enabled").css({"color":"purple"});
// находит только активные inputs
//disable="true"


//   :disabled
// $(".forma-test input:disabled").css({"color":"purple"});
// находит только неактивные inputs


// ИСПОЛЬЗОВАНИЕ НЕСКОЛЬКИХ СЕЛЕКТОРОРОВ

$(".viboe p, .viboe span").css({"color":"purple"});

// "parent > child" .class > прямой потомок

// "parent + child" .class + один братский узел
// "parent ~ child" .class + все братские узлы


$("li:eq(3)").css({"color":"purple"});


// урок 7 14 мин




// работа с атрибутами элементов


// работа с css работа с параметрами объекта




// работа с css 2 работа с полосами прокрутки

// работа с добавлением элементов  11


// работа с добавлением элементов 2 часть   11

// работа с удалением элементов 2 часть   11

// работа с заменой элементов    11


 });
