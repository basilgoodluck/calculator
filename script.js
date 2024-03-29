window.addEventListener('DOMContentLoaded', function(){

    const screen = document.getElementById('screen')
    const prevOperand = document.getElementById('prev-operand')
    const currentOperand = document.getElementById('current-operand')
    const numbers = document.querySelectorAll('.numBtn')
    const algebraBTNs = document.querySelectorAll('.operaBtn')
    const period = document.getElementById('pBtn')

    numbers.forEach(e=>{
        e.addEventListener('click', ()=>{
            
            if(prevOperand.innerHTML == 0){
                prevOperand.innerHTML = e.textContent
                return
            }
            prevOperand.innerHTML += e.textContent
        })
    })
})