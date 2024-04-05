class Calculator {
    constructor(prevOperandTextElement, currentOperandTextElement){
        this.prevOperandTextElement = prevOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){    
        this.currentOperand = ''
        this.prevOperand = ''   
        this.operation = undefined 

    }
    appendNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString() 
    }
    chooseOperation(operation){

    }
    compute(){

    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
    }
    delete(){

    }
}


const prevOperandTextElement = document.getElementById('prev-operand')
const currentOperandTextElement = document.getElementById('current-operand')
const numBTNs = document.querySelectorAll('.numBtn')
const operaBTNs = document.querySelectorAll('.operaBtn')
const allClearBtn = document.querySelector('.clearBtn')
const deleteBtn = document.querySelector('.deleteBtn')
const equalBtn = document.querySelector('.eBtn')

const calculator = new Calculator(prevOperandTextElement, currentOperandTextElement)

numBTNs.forEach(btn => {
    btn.addEventListener('click', ()=>{
        calculator.appendNumber(btn.innerText)
        calculator.updateDisplay()
    })
})