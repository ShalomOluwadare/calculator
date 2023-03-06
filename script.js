const question = document.querySelector('.question');
const answer = document.querySelector('.answer')
const clearBtn=document.querySelector('.clearbtn');
const removeBtn=document.querySelector('.removebtn');
const addBtn=document.querySelector('.addbtn');
const subtractBtn=document.querySelector('subtractbtn');
const multiplyBtn=document.querySelector('.multiplybtn')
const divideBtn=document.querySelector('.dividebtn')
const numbtn=document.querySelectorAll('.num')

let questionBox=question.textContent
let answerbox;
let firstValue;
let secondValue;
let queso=false
addBtn.addEventListener('click',()=>{setCurrentMode('add');
    queso=true
})

numbtn.forEach(e=>{
    e.addEventListener('click',()=>{
       
       
        if (!queso){
            questionBox+=e.textContent
            question.textContent=questionBox
            firstValue=questionBox
            console.log(firstValue)
        }
        else{
            
            console.log(questionBox)
            questionBox+=e.textContent
            question.textContent=questionBox
            //checkValue(e,questionBox,question)
            secondValue=questionBox
            console.log(secondValue)
        }
    }
)
}
)
/*function checkValue(ai,bi,ci){
    question.textContent=''
    if(queso===true){
        questionBox=question.textContent
        questionBox+=ai.textContent
        question.textContent=questionBox

    } 
    
}*/

function clearScreen(){
    question.textContent='vhb'
}
function limit(d){
    charNum=d.text.length
    if (charNum>=12){
        return alert('you reached the text limit')
    }
}

function setCurrentMode(newMode){
    option = newMode
    operate(firstValue,secondValue)
};

function addNum(...args){
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;

}
addNum(2,4,5,6,7,8)
function subtractNum(...args){
    let sum=args[0];
    reg=args.slice(1,)
        for (re of reg){
        sum -=re
        }
    console.log(sum)
    return sum;
}
subtractNum(2,4,1)
function multiplyNum(...args){
    let sum = 1;
    for (let arg of args) sum *= arg;
    console.log (sum)
    return sum;
}
multiplyNum(2,2,2)
function divideNum(a,b){
    return a/b
}


function operate(a,b){
    if (option==='add'){
        addNum(a,b)
    }
    if (option==='subtract'){
        subtractNum(a,b)
    }
    if (option==='multiply'){
        multiplyNum(a,b)
    }
    if (option==='divide'){
        divideNum(a,b)
    }
}