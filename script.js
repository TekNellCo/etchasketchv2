const drawingarea = document.querySelector('.drawingarea');
let input = document.querySelector('input');
populateDiv(input.value)
let divfill = document.querySelectorAll('.divfill');
let buttonColor = document.querySelectorAll('.colorbutton');
let color = "black"
let reset = document.querySelector('.reset')
reset.addEventListener('click',clear)

input.addEventListener("change",()=>{
    clearGrid();
    populateDiv(input.value);
})

function clearGrid(){
    drawingarea.innerHTML = ""
}

function clear(){
    divfill.forEach((div)=>{
        div.style.cssText = "background-color : white"
    })
}

function populateDiv(a){
    for(i=0; i< a*a; ++i){
    const drawingareadivs = document.createElement('div');
    drawingareadivs.classList.add('divfill');
    drawingarea.append(drawingareadivs);
    drawingarea.style.cssText = `grid-template-rows:repeat(${a},1fr); grid-template-columns: repeat(${a},1fr)`;
    }
}

buttonColor.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        return color = btn.innerText
    })
})

divfill.forEach((div)=>{
    div.addEventListener("mouseover",()=>{
        div.style.cssText= `background-color: ${color}`;
    })
})


// function brush(){
//     divfill.forEach((div)=>{
//         div.addEventListener("mouseover",()=>{
//             div.style.cssText=`background-color: ${color}`
//         })
//     })
// }


