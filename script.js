const question = document.querySelector('.question');
const answer = document.querySelector('#answer')
const clearBtn=document.querySelector('.clearbtn');
const removeBtn=document.querySelector('.removebtn');
const addBtn=document.querySelector('.addbtn');
const subtractBtn=document.querySelector('subtractbtn');
const multiplyBtn=document.querySelector('.multiplybtn')
const divideBtn=document.querySelector('.dividebtn')
const numbtn=document.querySelectorAll('.num')
const equalbtn=document.querySelector('.equalbtn')

let questionBox=question.textContent
let answerbox;
let firstValue;
let secondValue=0;
let sum;
let Answer;
let queso=false
answer.style.color='grey'

numbtn.forEach(e=>{
    e.addEventListener('click',()=>{
        questionBox+=e.textContent
        question.textContent=questionBox
        if (!queso){
            firstValue=questionBox
            console.log(firstValue)
        }
        else{
            secondValue=questionBox
            console.log(secondValue)
            operate(firstValue,secondValue)
            ans=operate(firstValue,secondValue)
            
        }
        addBtn.addEventListener('click',()=>{setCurrentMode('add');
    queso=true
    if (secondValue===0){
    question.textContent=''
    questionBox=question.textContent}
    else{
        answer.classList.remove('devcheck')
        firstValue=ans
        question.textContent=''
        questionBox=question.textContent
    }
})
    }
)
}
)

function clearScreen(e){
    e.textContent=''
}
function limit(d){
    charNum=d.text.length
    if (charNum>=12){
        return alert('you reached the text limit')
    }
}

function setCurrentMode(newMode){
    option = newMode
};

function addNum(a,b){
    return a+b;
}
function subtractNum(a,b){
    return a-b;
}
function multiplyNum(a,b){
    return a*b;
}
function divideNum(a,b){
    return a/b
}

function updateAnswer(target,value){
    target.textContent=value
}

function operate(a,b){
    a=Number(a)
    b=Number(b)
    if (option==='add'){
        Answer=addNum(a,b)
    }
    else if (option==='subtract'){
       Answer=subtractNum(a,b)
    }
    else if (option==='multiply'){
        Answer=multiplyNum(a,b)
    }
    else if (option==='divide'){
        Answer=divideNum(a,b)
    }
    updateAnswer(answer,Answer)
    equalbtn.addEventListener('click',()=>{
        answer.style.color='black'
    })
    return Answer
}

