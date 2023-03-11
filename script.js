const question = document.querySelector(".question");
const answer = document.querySelector("#answer");
const clearBtn = document.querySelector(".clearbtn");
const removeBtn = document.querySelector(".removebtn");
const addBtn = document.querySelector(".addbtn");
const subtractBtn = document.querySelector("subtractbtn");
const multiplyBtn = document.querySelector(".multiplybtn");
const divideBtn = document.querySelector(".dividebtn");
const numbtn = document.querySelectorAll(".num");
const equalbtn = document.querySelector(".equalbtn");
const operation = document.querySelectorAll(".operate");

let questionBox = question.textContent;
let answerbox;
let firstValue = 0;
let secondValue = 0;
let sum;
let Answer;
let queso = false;
let caramba;
let ans;

answer.style.color = "grey";

numbtn.forEach((e) => {
  e.addEventListener("click", () => {
    questionBox = question.textContent;
    questionBox += e.textContent;
    question.textContent = questionBox;
    if (!queso) {
      firstValue = questionBox;
      console.log(firstValue);
    } else {
      secondValue = questionBox;
      console.log(secondValue);
      operate(firstValue, secondValue);
      ans = operate(firstValue, secondValue);
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
    clearBtn.addEventListener("click", () => {
      queso = false;
      question.textContent = "";
      answer.textContent = "";
      questionBox = question.textContent;
      firstValue = 0;
      secondValue = 0;
    });
  });
});

function clearScreen(d, e) {
  e.textContent = "";
  d.textContent = "";
}
function limit(d) {
  charNum = d.text.length;
  if (charNum >= 12) {
    return alert("you reached the text limit");
  }
}

function setCurrentMode(newMode) {
  option = newMode;
}

function addNum(a, b) {
  return a + b;
}
function subtractNum(a, b) {
  return a - b;
}
function multiplyNum(a, b) {
  return a * b;
}
function divideNum(a, b) {
  return a / b;
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
  equalbtn.addEventListener("click", () => {
    answer.style.color = "black";
  });
  return Answer;
}
