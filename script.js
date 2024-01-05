//Javascript code for a simple calculator using object

const calculator = {

    numBtn : document.querySelectorAll('.numBtn'),
    operaBtn : document.querySelectorAll('.operaBtn'),
    clearBtn : document.querySelector('.clearBtn'),
    deleteBtn : document.querySelector('.deleteBtn'),
    prevScreen : document.querySelector('.prev-operand'),
    currentScreen : document.querySelector('.current-operand'),

    display () {

        let accumulatedNumbers = ''; 
        let initialNum = '';
        let finalNum = '';
        this.numBtn.forEach((num)=>{
            num.addEventListener('click', ()=>{
                
                accumulatedNumbers += num.innerHTML

                this.prevScreen.innerHTML = accumulatedNumbers;

            })
        })

        this.operaBtn.forEach((opera) => {
            opera.addEventListener('click', ()=>{
                initialNum = accumulatedNumbers
                
                accumulatedNumbers = ''
                
            })
        })
    }   
}

calculator.display()