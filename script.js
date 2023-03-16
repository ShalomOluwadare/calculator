const question = document.querySelector(".question");
const answer = document.querySelector("#answer");
const clearBtn = document.querySelector(".clearbtn");
const deleteBtn = document.querySelector(".deletebtn");
const addBtn = document.querySelector(".addbtn");
const subtractBtn = document.querySelector("subtractbtn");
const multiplyBtn = document.querySelector(".multiplybtn");
const divideBtn = document.querySelector(".dividebtn");
const numbtn = document.querySelectorAll(".num");
const equalbtn = document.querySelector(".equalbtn");
const decimalbtn = document.querySelector(".decimalbtn");
const operation = document.querySelectorAll(".operate");

let questionBox = question.textContent;
let answerbox;
let firstValue = 0;
let secondValue = 0;
let sum;
let Answer;
let queso = false;
let ans;

clearBtn.addEventListener("click", clearobtn);
decimalbtn.addEventListener("click", decimalobtn);
deleteBtn.addEventListener("click", deleteobtn);
equalbtn.addEventListener("click", equalsto);

numbtn.forEach((e) => {
  e.addEventListener("click", () => {
    answer.style.color = "grey";
    inputNumber(e);
  });
});

function inputNumber(e) {
  questionBox = question.textContent;
  questionBox += e.textContent;
  question.textContent = questionBox;
  if (!queso) {
    firstValue = questionBox;
    console.log(firstValue);
  } else {
    secondValue = questionBox;
    console.log(secondValue);
    ans = operate(firstValue, secondValue);
  }
}

function equalsto() {
  answer.style.color = "black";
  ans = operate(firstValue, secondValue);
}

function decimalobtn() {
  if (!questionBox.includes(".")) {
    questionBox += decimalbtn.textContent;
    question.textContent = questionBox;
    console.log(questionBox);
  } else {
    return;
  }
}

function deleteobtn() {
  if (questionBox.length > 1) {
    question.textContent = question.textContent.substring(
      0,
      question.textContent.length - 1
    );
    questionBox = question.textContent;
    console.log(questionBox);
    if (!queso) {
      firstValue = questionBox;
    } else if (queso) {
      secondValue = questionBox;
    }
  }
}

operation.forEach((s) => {
  s.addEventListener("click", () => {
    setCurrentMode(s.textContent);
    queso = true;
    if (secondValue === 0) {
      question.textContent = "";
      questionBox = question.textContent;
    } else {
      answer.classList.remove("devcheck");
      firstValue = ans;
      question.textContent = "";
      questionBox = question.textContent;
    }
  });
});

function clearobtn() {
  queso = false;
  question.textContent = "";
  answer.textContent = "0";
  questionBox = question.textContent;
  firstValue = 0;
  secondValue = 0;
}

function setCurrentMode(newMode) {
  option = newMode;
}

function addNum(a, b) {
  num = a + b;
  return num.toFixed(1);
}
function subtractNum(a, b) {
  num = a - b;
  return num.toFixed(1);
}
function multiplyNum(a, b) {
  num = a * b;
  return num.toFixed(1);
}
function divideNum(a, b) {
  num = a / b;
  return num.toFixed(1);
}

function updateAnswer(target, value) {
  target.textContent = value;
}

function operate(a, b) {
  a = Number(a);
  b = Number(b);
  if (option === "+") {
    Answer = addNum(a, b);
  } else if (option === "-") {
    Answer = subtractNum(a, b);
  } else if (option === "x") {
    Answer = multiplyNum(a, b);
  } else if (option === "/") {
    Answer = divideNum(a, b);
  }
  updateAnswer(answer, Answer);
  return Answer;
}
