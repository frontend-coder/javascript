



/* простой калькулятор  */


const calculateDate = document.querySelector('.calculate_date');
const calculateDateSpan = document.querySelector('.calculate_date span');
const calculateDateInput = document.querySelector('.calculate_date input');



calculateDateSpan.style.display = 'block';
calculateDateSpan.style.marginBottom = '5px';

calculateDate.style.marginBottom = '5px';

calculateDateInput.style.height = '40px';
calculateDateInput.style.textIndent = '10px';
calculateDateInput.style.lineHeight = '40px';


document.querySelector('#simple_button');


function simpleResulting() {
  const simpleWidth = document.querySelector('#simple_width').value;
  const simpleHeight = document.querySelector('#simple_height').value;
  const simpleDeep = document.querySelector('#simple_deep').value;
  let costDevelop;
  let costFilter;

  if (document.querySelector('#simple_develop').checked) {
    costDevelop = 12333;
  } else {
    costDevelop = 0;
  }

  if (document.querySelector('#simple_costfilter').checked) {
    costFilter = 33000;
  } else {
    costFilter = 0;
  }
  let simpleRadioValue;
  let simpleRadioValueCost;
  const simpleRadio = document.querySelectorAll('.calculate_radio');


  for (let i = 0; i < simpleRadio.length; i += 1) {

    if (simpleRadio[i].checked) {
      simpleRadioValue = simpleRadio[i].value;
    }
    if (simpleRadioValue === 'Круглая') {
      simpleRadioValueCost = 3000;
    } else if (simpleRadioValue === 'Овальная') {
      simpleRadioValueCost = 4000;
    } else if (simpleRadioValue === 'Прямоугольная') {
      simpleRadioValueCost = 5000;
    } else {
      simpleRadioValueCost = 1000;
    }
  }
  const simpleResult = (simpleWidth * simpleHeight * simpleDeep) + costDevelop + costFilter + simpleRadioValueCost;
  const simpleResultFinal = simpleResult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");


  //  allSumm.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");


  document.querySelector('#simple_result').innerHTML = simpleResultFinal;
}


document.querySelector('#simple_button').onclick = simpleResulting;








/* вычисляю циклы    */
const cycleOne = 20;
/* t++ на t += 1 */

for (let t = 0; t <= cycleOne; t += 1) {
  document.querySelector('.cycle_one').innerHTML = t;
}

for (let l = 0; l <= cycleOne; l += 1) {
  document.querySelector('.cycle_two').innerHTML = l;
}


const leto = 5;

const letoResult = 6 + leto;

const foterPersy = 30;
if (foterPersy) {
  const rtZ = 40;
  document.querySelector('.cycle_try').innerText = rtZ;
}//   \r\n Как использовать клавиатуру для вычисления


document.querySelector('#keybord input').onkeypress = function () {
  const keyPressInput = document.querySelector('#keybord input').value;
  // return keyPressInput;
  document.querySelector('#keybord_out').innerHTML = keyPressInput;
};
function getkeyboerd() {
  const keyPressInputTwo = document.querySelector('#keybord input').value;
  return keyPressInputTwo;
}
document.querySelector('#keybord input').onkeypress = function () {
  document.querySelector('#keybord_out_two').innerHTML = getkeyboerd();
};
const getDataTens = document.querySelector('#get_data');
getDataTens.style.width = '300px';
getDataTens.style.height = '50px';
getDataTens.style.textIndent = '10px';
document.querySelector('#get_data').onkeypress = function (b) {

  document.querySelector('#get_data_altkey').innerHTML += b.keyCode;
};


function fadioclick() {
  const radioGroupInput = document.querySelectorAll('.radio_group_input');
  for (let i = 0; i < radioGroupInput.length; i += 1) {

    if (radioGroupInput[i].checked) {

      document.querySelector('.radio_group_lebel').innerHTML = radioGroupInput[i].defaultValue;
      return radioGroupInput[i].value;
    }
  }

}




document.querySelector('.radio_group').onclick = fadioclick;

document.querySelector('#get_result_count').onclick = function () {
  const fadioClick = fadioclick();

  const getNumberOne = Number(document.querySelector('#get_reklama_test').value);
  const getNumberTwo = Number(document.querySelector('#get_reklama_test2').value);
  document.querySelector('#get_reklama_result').innerText = fadioClick * (getNumberOne + getNumberTwo);

  document.querySelector('#get_reklama_result2').innerText = fadioClick;
};






// let radioPutten  = document.querySelectorAll('.radio_check');

// console.info(radioPutten );
// for( let i=0 ; i<radioPutten.length; i++) {
// // console.info(radioPutten[i].checked);
// if(radioPutten[i].checked) {
//   document.querySelector('.input_radio_checked').innerHTML = radioPutten[i].value;
// }
// }











// Как использовать return для вычисления


function usedOne() {
  const a = 44 / 3 * 4;
  return a;
}
function usedTwo() {
  const b = 5 * (33344 / 3) * (1 / 4);
  return b;
}

document.querySelector('#block_return').innerHTML = usedTwo() * 4 * usedOne();




const blockBlocksResultOne = document.querySelectorAll('#block_blocks p');

for (let i = 0; i < blockBlocksResultOne.length; i += 1) {
  blockBlocksResultOne[i].onclick = function () {
    document.querySelector('#block_blocks_result_one').innerHTML = blockBlocksResultOne[i].innerHTML;
    document.querySelector('#block_blocks_result_two').innerHTML = blockBlocksResultOne[i].getAttribute('dataset');
  };

}


// let blockBlocksResultTwo = document.querySelectorAll('#block_blocks p');

// console.info( blockBlocksResultTwo.getAttribute('dataset[length]') );


//   blockBlocksResultTwo.forEach(function(e){
// e.onclick = function() {
//   document.querySelector('#block_blocks_result_three').innerHTML = e.innerHTML;
//   document.querySelector('#block_blocks_result_four').innerHTML = e.getAttribute('dataset');
// }

// });




// const oformInput = document.querySelector('.oform_inputed');
// oformInput.style.display = 'block';
// oformInput.style.marginBottom = '10px';


// let getInput = document.querySelector('.get_input');
// getInput.style.display = 'block';


// ананимная функция вызывается только один раз без имени


document.querySelector('.sendbuttonsout').onclick = function () {
  const refNew = document.querySelector('.input_text').value;
  document.querySelector('.text_inwert').innerHTML = refNew;

  const passNew = document.querySelector('.input_pass').value;
  document.querySelector('.input_pass_inwert').innerHTML = passNew;


  if (document.querySelector('#testiryu_checkbox').checked) {
    document.querySelector('.input_checkbox_checked').innerHTML = 'да';
  } else {
    document.querySelector('.input_checkbox_checked').innerHTML = 'нет';
  }


  const radioPutten = document.querySelectorAll('.radio_check');

  //  console.info(radioPutten );
  for (let i = 0; i < radioPutten.length; i += 1) {
    // console.info(radioPutten[i].checked);
    if (radioPutten[i].checked) {
      document.querySelector('.input_radio_checked').innerHTML = radioPutten[i].value;
    }
  }


  const getSelect = document.querySelectorAll('#nothing_select option');

  for (let i = 0; i < getSelect.length; i += 1) {
    if (getSelect[i].selected) {
      // document.querySelector('.selected_info').innerHTML = getSelect[i].value;
      document.querySelector('.selected_info').innerHTML = getSelect[i].innerHTML;
    }
  }


};


// Событие мыши

const lockingRongOff = document.querySelectorAll('#lockingrong p');

// console.info(lockingRongOff);
for (let i = 0; i < lockingRongOff.length; i += 1) {
  lockingRongOff[i].style.width = '600px';
  lockingRongOff[i].style.height = '100px';
  lockingRongOff[i].style.border = '5px solid red';
  lockingRongOff[i].style.marginBottom = '5px';
}




document.querySelector('.onclick').onclick = function () {
  document.querySelector('.onclick2').innerHTML = 'click';
};

document.querySelector('.ondblclick').ondblclick = function () {
  document.querySelector('.ondblclick2').innerHTML = 'blclick';
};

document.querySelector('.onmousedown').onmousedown = function () {
  document.querySelector('.onmousedown2').innerHTML = 'onmousedown';
};

document.querySelector('.onmousemove').onmousemove = function () {
  document.querySelector('.onmousemove2').innerHTML = 'onmousemove';
};

document.querySelector('.onmouseenter').onmouseenter = function () {
  document.querySelector('.onmouseenter2').innerHTML = 'onmouseenter';
};

document.querySelector('.onmouseleave').onmouseleave = function () {
  document.querySelector('.onmouseleave2').innerHTML = 'onmouseleave';
};

document.querySelector('.onmouseout').onmouseout = function () {
  document.querySelector('.onmouseout2').innerHTML = 'onmouseout';
  document.querySelector('.onmouseout2').style.backgroundColor = 'blue';
  document.querySelector('.onmouseout2').style.color = 'red';
};

document.querySelector('.onmouseover').onmouseover = function () {
  document.querySelector('.onmouseover2').innerHTML = 'onmouseover';
};

document.querySelector('.onmouseup').onmouseup = function () {
  // console.info('3444334');
  document.querySelector('.onmouseup2').innerHTML = 'onmouseover';
};

document.querySelector('.onwheel').onwheel = function () {
  document.querySelector('.onwheel2').innerHTML = 'onwheel';
};




























const getInput = document.querySelector('#get_input');
const getInputTwo = document.querySelector('#get_input2');
const getInputThree = document.querySelector('#get_input3');

getInput.style.display = 'block';
getInputTwo.style.display = 'block';
getInputThree.style.display = 'block';

getInput.style.marginBottom = '10px';
getInput.style.padding = '10px';


getInputTwo.style.marginBottom = '10px';
getInputThree.style.marginBottom = '10px';

// const notationPray = document.querySelector('.notation_pray');
// notationPray.style.paddingTop = '30px';
// notationPray.style.textAlign = 'center';

const submitPush = document.querySelector('#submit_push');
// console.log(submitPush);

submitPush.style.padding = '10px 20px';

function getData() {
  const getInputValue = document.querySelector('#get_input').value;
  // console.log(getInputValue);
  return getInputValue;
}


submitPush.onclick = getData;




