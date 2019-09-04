


// document.querySelector('#proverka_input').onkeypress = function (e) {
//   console.info(e.keyCode);// код нажатой клавиши мыши
//   console.info(e.shiftKey);// код нажатой клавиши мыши
//   if (e.keyCode < 48 || e.KeyCode > 57) {
//     console.info('Не рабочие символы');
//   }
//   this.value += e.key;

//   //  return false;
// }



// document.onkeypress = function (e) {
//   console.info(e.keyCode);

// }
const sqWrapper = document.querySelector('.sq_wrapper');
const sqWrapperBox = document.querySelector('.sq_wrapper_box');
sqWrapper.style.padding = '10px 5px';
sqWrapper.style.border = '1px solid red';

sqWrapperBox.style.width = '100px';
sqWrapperBox.style.height = '100px';
sqWrapperBox.style.backgroundColor = '#B24439';

const left = 0;

// document.onkeypress = function (e) {
//   // evt = evt || window.event;
//   let isEscape = false;
//   console.info(e.keyCode);
//   const sqWrapperBoxer = document.querySelector('.sq_wrapper_box');
//   if (e.keyCode === 100) {
//     left += 10;
//     sqWrapperBoxer.style.marginLeft = `${left}px`;
//   } else if (e.keyCode === 113) {
//     left -= 10;
//     sqWrapperBoxer.style.marginLeft = `${left}px`;
//   } else if ("key" in evt) {
//     isEscape = (evt.keyCode === 27 || evt.key === "Escape" || evt.key === "Esc");
//     alert("Escape");

//   }
// }


/* Работа с CSS манипуляция css классами
*/
const getBlockOne = document.querySelector('.block_1');

const getBlockOneStyle = getBlockOne.style;


getBlockOne.style.width = '200px';
getBlockOneStyle.height = '230px';
getBlockOne.classList.add('class_name');

getBlockOne.classList.add('class_name_main');

console.info(getBlockOne.classList);

getBlockOne.classList.contains('red');
getBlockOne.classList.toggle('red');
getBlockOne.classList.remove('red4')
getBlockOne.classList.remove('class_name_main');



const elem = document.querySelector('#elem');


elem.style.border = '1px solid red';
elem.style.padding = '15px 10px';

const checkClass = elem.classList.contains('ggg');
if (checkClass) {
  document.querySelector('#elem_contans_class').innerHTML = "содержит";
} else {
  document.querySelector('#elem_contans_class').innerHTML = "не содержит";
}

// document.querySelector('#elem_contans') = checkClass;
// alert(checkClass);









// const classNames = elem.classList;

// for (let i = 0; i < classNames.length; i++) {
//   document.write(`${classNames[i]}<br>`);
// }










// document.querySelectorAll('.modal_show').forEach(function (element) {
//   element.onclick = showModal;

// });

// function showModal() {
//   const modalId = this.dataset.modal;
//   console.info(modalId);
//   console.info(document.querySelector(modalId));
//   console.info(document.querySelector(modalId).parentElement);

//   document.querySelector(modalId).classList.remove('hide');
//   //  document.querySelector(modalId).parentElement.classList.remove('hide');
//   document.querySelector('body').classList.add('no_scroll');

//   document.onkeydown = function (e) {
//     console.info(e);
//     if (e.keyCode == 27) {
//       document.querySelectorAll('.modal_wrap').forEach(function (element) {
//         element.classList.add('hide');
//         element.children[0].classList.add('hide');
//         document.querySelector('body').classList.remove('no_scroll');
//         document.onkeydown = null;
//       });
//     }

//   }


// };


// document.querySelectorAll('.modal_close').forEach(function (element) {
//   element.onclick = closeModal;

// });

// function closeModal() {
//   const modalId = this.dataset.modal;
//   console.info(modalId);
//   console.info(document.querySelector(modalId));
//   console.info(document.querySelector(modalId).parentElement);

//   document.querySelector(modalId).classList.add('hide');
//   // document.querySelector(modalId).parentElement.classList.add('hide');
//   document.querySelector('body').classList.remove('no_scroll');

//   document.onkeydown = null;
// };


// document.querySelectorAll('.modal_wrap').forEach(function (element) {
//   element.onclick = closeModalWrap;
// });

// function closeModalWrap() {
//   this.classList.add('hide');
//   //  this.children[0].classList.add('hide');
//   document.querySelector('body').classList.remove('no_scroll');
//   document.onkeydown = null;
// };


// document.onkeydown = function (e) {
//   console.info(e);
//   if (e.keyCode == 27) {
//     document.querySelectorAll('.modal_wrap').forEach(function (element) {
//       element.classList.add('hide');
//       element.children[0].classList.add('hide');
//       document.querySelector('body').classList.remove('no_scroll');
//     });
//   }

// }




// НОвая версия





document.querySelectorAll('.modal_show').forEach(function (element) {
  element.onclick = showModal;
});

document.querySelectorAll('.modal_close').forEach(function (element) {
  element.onclick = closeModal;
});
document.querySelectorAll('.modal_wrap').forEach(function (element) {
  element.onclick = closeModal;
});




function showModal() {
  const modalId = this.dataset.modal;
  document.querySelector(modalId).classList.remove('hide');
  document.querySelector('body').classList.add('no_scroll');
  document.onkeydown = function (e) {
    if (e.keyCode === 27) { closeModal(); }
  }
};
function closeModal() {
  document.querySelectorAll('.modal_wrap').forEach(function (element) {
    element.classList.add('hide');
    document.querySelector('body').classList.remove('no_scroll');
  });
  document.onkeydown = null;
}






function chips(massage) {
  const chips = document.createElement('div');
  chips.classList.add('chips');
  chips.innerHTML = massage;
  console.info(chips);
  document.body.appendChild(chips);

}
document.querySelector('button.chips').onclick = function () {
  e.preventDefault();
  chips('проивет мир');
}





