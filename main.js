let outputField = document.getElementById('output');
let numberBtns = document.getElementById('numbers');
let operatorBtns = document.getElementById('operators');
let clearBtn = document.getElementById('clear');
let equalsBtn = document.getElementById('equals');

let output = '';
let nums = [];
let operators = [];
let result = 0;

clearAll = () => {
  output = '';
  nums = [];
  operators = [];
  result = 0;
  showOutput(output);
};

clearOutput = () => {
  output = '';
  showOutput(output);
};

showOutput = num => {
  outputField.innerText = num;
};

getInput = e => {
  output = output + e.target.innerText;
  showOutput(output);
};

numberBtns.addEventListener('click', getInput);

getOperator = e => {
  operators.push(e.target.innerText);
};

getResult = () => {
  let newOutput = Number(output);
  nums.push(newOutput);

  if (operators[0] === '+') {
    result = nums[0] + nums[1];
  } else if (operators[0] === '-') {
    result = nums[0] - nums[1];
  } else if (operators[0] === '*') {
    result = nums[0] * nums[1];
  } else {
    result = nums[0] / nums[1];
  }

  if (nums.length > 2) {
    for (i = 2; i < nums.length; i++) {
      if (operators[i - 1] === '+') {
        result = result + nums[i];
      } else if (operators[i - 1] === '-') {
        result = result - nums[i];
      } else if (operators[i - 1] === '*') {
        result = result * nums[i];
      } else {
        result = result / nums[i];
      }
    }
  }
  console.log(nums, operators, result);
  showOutput(result);
};

pushOperator = e => {
  let newOutput = Number(output);
  nums.push(newOutput);
  clearOutput();
  getOperator(e);
};

operatorBtns.addEventListener('click', pushOperator);

clearBtn.addEventListener('click', clearAll);
equalsBtn.addEventListener('click', getResult);
