

let inputString="";

let numarray = ['7','8','9','DEL','4','5','6','+','1','2','3','-','.','0','/','X',]
let body = document.querySelector('body')
let numberContainer1 = body.querySelector('.input-box-1')
let numberContainer = body.querySelector('.input-box')
let unwantedStarters = ['X','/']
let resultContainer = body.querySelector('.result-box h1')
for (let each in numarray){
    if(numarray[each].length==1){
        let numBtn = document.createElement('h1')
        numBtn.innerHTML=numarray[each]
        numBtn.className='item-card'
        numBtn.addEventListener("click",()=>{
            inputString+=numBtn.innerText
            resultContainer.innerHTML=inputString
        })
        numberContainer.appendChild(numBtn)

    }
    else{
        let opsBtn = document.createElement('h1')
        opsBtn.innerHTML=numarray[each]
        opsBtn.className='del-reset-btns'
        opsBtn.addEventListener("click",()=>{
            if(inputString.length===1){
                inputString=""
                resultContainer.innerText = inputString
            }else{
                inputString=inputString.slice(0,-1)
                resultContainer.innerText = inputString
            }
        })
        numberContainer.appendChild(opsBtn)
    }
}
let childNumContainer = numberContainer1.appendChild(document.createElement('div'))
childNumContainer.className='childNumContainerStyle'

for (let i=0;i<2;i++){
    if(i==0){
        let bottomBtns = document.createElement('h1')
        bottomBtns.innerHTML = 'RESET'
        bottomBtns.classList="big-btns resetbtn"
        bottomBtns.addEventListener("click",()=>{
            inputString=""
            resultContainer.innerHTML=inputString

        })
        childNumContainer.appendChild(bottomBtns)

    }else{
        let bottomBtns = document.createElement('h1')
        bottomBtns.innerHTML = '='
        bottomBtns.classList='big-btns equalbtn'
        bottomBtns.addEventListener("click",()=>{
            inputString=inputString.replace('X','*')
            if(inputString.length>0){
                for (let each in unwantedStarters){
                    if (inputString[0] === unwantedStarters[each] || inputString[-1]===unwantedStarters[each]){
                        resultContainer.innerText = "Not a valid expression";
                        break;
                    }
                    else{
                        inputString = String(eval(inputString)) ;
                        resultContainer.innerText = inputString
    
                    }
                }
 
            }

        })
        childNumContainer.appendChild(bottomBtns)

    }



}

let evaluate = ()=>{
    if(inputString.length<=0){
        ele.innerHTML="PROVIDE INPUT" 
    }
    eval(inputString)
}