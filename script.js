

const numBtn = document.querySelectorAll('.numBtn')
const operaBtn = document.querySelectorAll('.operaBtn')
const clearBtn = document.querySelector('.clearBtn')
const deleteBtn = document.querySelector('.deleteBtn')
const prevScreen = document.querySelector('prev-operand')
const currentScreen = document.querySelector('.current-operand')




const calculator = {

    numBtn : document.querySelectorAll('.numBtn'),
    operaBtn : document.querySelectorAll('.operaBtn'),
    clearBtn : document.querySelector('.clearBtn'),
    deleteBtn : document.querySelector('.deleteBtn'),
    prevScreen : document.querySelector('.prev-operand'),
    currentScreen : document.querySelector('.current-operand'),

    display () {
        numBtn.forEach((num)=>{
            num.addEventListener('click', ()=>{
                var prevScreen = document.getElementById('prev-operand');
                console.log(typeof prevScreen)

                prevScreen.innerHTML += num.innerHTML
            })
        })
    },

    calculator () {

    }
      
}

calculator.display()