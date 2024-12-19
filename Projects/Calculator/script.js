// GLOBAL VARIBLES
let value = 0;

let screenValue = '';
let operator = '';
let leftOperand = 0;
let rightOperand = 0;
let anOperatorSeen = false;





// OPERATIONS
const add = function(a,b) {
	return a+b
};

const sub = function(a,b) {
	return a-b
};

const mult = function(args) {
  return args.reduce((a,b)=> { return a*b}, 1);
};

const div = function(a,b)
{
    return a/b;
}

const modulo = function(a,b)
{
  return a%b;
}

function operate()
{
  if (operator == 'add') {
    value = add(leftOperand, rightOperand);
  }
  else if (operator == 'sub') {
    value = sub(leftOperand, rightOperand);
  }
  else if (operator == 'mult') {
    value = mult(leftOperand, rightOperand);
  }
  else if (operator == 'div') {
    value = div(leftOperand, rightOperand);
  }
  else if (operator == 'modulo') {
    value = modulo(a,b);
  }
  return value;
}


// Selectin buttons
const screen = document.querySelector('.screen');

const btnAc = document.querySelector('#ac');
const btnSeven = document.querySelector('#seven');
const btnFour = document.querySelector('#four');
const btnOne = document.querySelector('#one');
const btnDelete = document.querySelector('#delete');

const btnSign = document.querySelector('#sign');
const btnEight = document.querySelector('#eight');
const btnFive = document.querySelector('#five');
const btnTwo = document.querySelector('#two');
const btnZero = document.querySelector('#zero');

const btnModular  = document.querySelector('#modular');
const btnNine     = document.querySelector('#nine');
const btnSix      = document.querySelector('#six');
const btnThree    = document.querySelector('#three');
const btnPoint    = document.querySelector('#point');

const btnDiv       = document.querySelector('#div');
const btnMult      = document.querySelector('#mult');
const btnSub       = document.querySelector('#sub');
const btnAdd       = document.querySelector('#add');
const btnCalc      = document.querySelector('#calc');


btnZero.textContent = '0';
btnOne.textContent = '1';
btnTwo.textContent = '2';
btnThree.textContent = '3';
btnFour.textContent = '4';
btnFive.textContent = '5';
btnSix.textContent = '6';
btnSeven.textContent = '7';
btnEight.textContent = '8';
btnNine.textContent = '9';
btnAc.textContent = 'AC';

const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');



// ================
// EVENTS
// ================
btnAc.addEventListener('click', ()=>
{
  anOperatorSeen = false;
  screenValue = '';
  screen.textContent = screenValue;
  operator = '';
  leftOperand = 0;
  rightOperand = 0;
})



for(let digit of digits)
{
  digit.addEventListener('click' , ()=> {
    screenValue = screenValue + digit.textContent;
    screen.textContent = screenValue;
    return screenValue;
  } );
}



operators.forEach((op) => {
  op.addEventListener('click', () => {
    if (!anOperatorSeen) {
      anOperatorSeen = true;                
      leftOperand = parseInt(screenValue);
      operator = op.id; 
      screenValue = '';
      screen.textContent = screenValue;

    }
    else
    {
      rightOperand = parseInt(screenValue);
      let result = operate(leftOperand, rightOperand);
      
      screenValue = result.toString();
      screen.textContent = screenValue;

      leftOperand = result;

      operator = op.id; 
    }
  });
});

