// GLOBAL VARIBLES
let value = 0;
let screen = value.toString();
let operator = '';
let leftOperand = 0;
let rightOperand = 0;



// OPERATIONS
const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const multiply = function(args) {
  return args.reduce((a,b)=> { return a*b}, 1);
};

const div = function(a,b)
{
    return a/b;
}

function operate()
{
  if (operator == '+') {
    value = add(leftOperand, rightOperand);
  }
  else if (operator == '-') {
    value = subtract(leftOperand, rightOperand);
  }
  else if (operator == '*') {
    value = multiply(leftOperand, rightOperand);
  }
  else if (operator == '/') {
    value = div(leftOperand, rightOperand);
  }
  else if (operator == '%') {
    value = leftOperand % rightOperand;
  }
}


// Selectin buttons
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
const btnNine     = document.querySelector('#none');
const btnSix      = document.querySelector('#six');
const btnThree    = document.querySelector('#three');
const btnPoint    = document.querySelector('#point');

const btnDiv       = document.querySelector('#div');
const btnMult      = document.querySelector('#mult');
const btnSub       = document.querySelector('#sub');
const btnAdd       = document.querySelector('#add');
const btnCalc      = document.querySelector('#calc');






