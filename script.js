

class Calculator {
    constructor(prevOperandTextElement, currentOperandTextElement){
        this.prevOperandTextElement = prevOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        clear()
    }
    
};

clear(){
    this.prevOperand = ""
    this.currentOperand = ""
    this.operation = undefined
};
delete(){

};
appendNumber(number){
    this.currentOperand = number
}
chooseOperation(operation){

}
compute(){

}
update(){
    this.currentOperandTextElement.innerText = this.currentOperand
}

const numberBtn = document.querySelectorAll("[data-number]")
const operationBtn = document.querySelectorAll("[data-operation]")
const equalsBtn = document.querySelector("[data-equals]")
const deleteBtn = document.querySelector("[data-delete]")
const allClearBtn = document.querySelector("[data-all-clear]")
const prevOperand = document.querySelector("[data-prev-operand]")
const currentOperand = document.querySelector("[data-current-operand]")

const calculator = new Calculator(prevOperandTextElement, currentOperandTextElement)

numberBtn.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        calculator.appendNumber(btn.innerText)
        calculator.update()
    })
})
