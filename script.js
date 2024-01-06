//Javascript code for a simple calculator using object

const calculator = {

    numBtn : document.querySelectorAll('.numBtn'),
    operaBtn : document.querySelectorAll('.operaBtn'),
    clearBtn : document.querySelector('.clearBtn'),
    deleteBtn : document.querySelector('.deleteBtn'),
    prevScreen : document.querySelector('.prev-operand'),
    currentScreen : document.querySelector('.current-operand'),
    equation : '',
    initialNum : '',
    finalNum : '',
    


    display () {

        let accumulatedNumbers = ''; 
        this.numBtn.forEach((num)=>{
            num.addEventListener('click', ()=>{
                accumulatedNumbers += num.innerHTML
                this.prevScreen.innerHTML = accumulatedNumbers;gi
            })
        })

        this.operaBtn.forEach((opera) => {
            opera.addEventListener('click', ()=>{
                initialNum = accumulatedNumbers
                this.equation += initialNum
                accumulatedNumbers = ''

                this.numBtn.forEach((num) => {
                    num.addEventListener('click', ()=>{
                        this.finalNum += num.textContent
                        this.equation += this.finalNum
                        
                    })
                })

            })
        })
        console.log(this.equation += this.initialNum)
        
    }   
}

calculator.display()