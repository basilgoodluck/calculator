class Calculator {
    constructor(prevOperandTextElement, currentOperandTextElement){
        this.prevOperandTextElement = prevOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){  
        this.prevOperand = ''  
        this.currentOperand = ''
        this.operation = undefined 

    }
    appendNumber(number){
        if((number == '.') && (this.currentOperand.includes('.'))) return
        this.currentOperand = this.currentOperand.toString() + number.toString() 
    }
    chooseOperation(operation){
        if(this.currentOperand === '') return
        if(this.prevOperand !== ''){
            this.compute()
        }
        this.operation= operation
        this.prevOperand = this.currentOperand
        this.currentOperand = ''
        

    }
    compute(){
        let computation
        const prev = parseFloat(this.prevOperand)
        const current = parseFloat(this.currentOperand)

        if(isNaN(prev) || isNaN(current)) return
        
        switch(this.operation){
            case '+' :
                computation = prev + current
                break
            case '-' :
                computation = prev - current
                break
            case '*' :
                computation = prev * current
                break
            case '/' :
                computation = prev / current
                break
            default :
                return
        }

        this.currentOperand = computation
        this.prevOperand = ''
        this.operation = undefined
            
            
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay = ''
        }else{
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay
        }
        
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null){
            this.prevOperandTextElement.innerText = 
                `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`
        }
        else{
            this.prevOperandTextElement.innerText = ''
        }
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1) 
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

operaBTNs.forEach(btn => {
    btn.addEventListener('click', ()=>{
        calculator.chooseOperation(btn.innerText)
        calculator.updateDisplay()
    })
})

equalBtn.addEventListener('click', ()=>{
    calculator.compute()
    calculator.updateDisplay()
})

allClearBtn.addEventListener('click', ()=>{
    calculator.clear()
    calculator.updateDisplay()
})

deleteBtn.addEventListener('click', ()=>{
    calculator.delete()
    calculator.updateDisplay()
})