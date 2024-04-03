window.addEventListener('DOMContentLoaded', function(){

    const screen = document.getElementById('screen')
    let prevOperand = document.getElementById('prev-operand')
    const currentOperand = document.getElementById('current-operand')
    const numbers = document.querySelectorAll('.numBtn')
    const algebraBTNs = document.querySelectorAll('.operaBtn')
    const period = document.getElementById('pBtn')

    function appendNumber(num){

        if(prevOperand.innerHTML == 0){
            prevOperand.innerHTML = num
            return
        }
        prevOperand.innerHTML += num  
 
        
    }
    function calculate(){

    }
    function allCLear(){

    }
    function deleteNum(){


    }
    numbers.forEach((e)=>{
        e.addEventListener('click', ()=>{
            appendNumber(e.textContent)
            
        })    
    }) 
    algebraBTNs.forEach((btn)=>{
        btn.addEventListener('click', ()=>{
                
        })
    })  
})