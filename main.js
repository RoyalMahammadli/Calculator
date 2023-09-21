const mainInp = document.querySelector('#mainInp')
const numbs = document.querySelectorAll("#numb")
numbs.forEach(numb => numb.addEventListener('click', () => {
    mainInp.value += numb.value

}))
const calcs = document.querySelectorAll('#operator')
calcs.forEach(calc => calc.addEventListener('click', (e) => {
    if(mainInp.value!==''){

        switch (e.target.value) {
            case '+':
                mainInp.value+=calc.value ;
                break;
            case '-':
                mainInp.value +=calc.value;
                break
            case '*':
                mainInp.value += calc.value;
                break;
            case '/':
            mainInp.value += calc.value;
    
    
    
        }
    }
}))

const equalBtn = document.querySelector('#equalBtn')
equalBtn.addEventListener('click', () => {
    if(mainInp.value !==''){
        mainInp.value = eval(mainInp.value)
    }
})
const clearBtn = document.querySelector('#clearBtn')
clearBtn.addEventListener('click', () => {
    mainInp.value = ''
})





