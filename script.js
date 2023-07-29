const drawingarea = document.querySelector('.drawingarea');
let input = document.querySelector('input');
populateDiv(input.value);
let buttonColor = document.querySelectorAll('.colorbutton');
let color = "black";
let reset = document.querySelector('.reset');
reset.addEventListener('click',clearGrid);
input.addEventListener("change",clearGrid);
let random = document.querySelector('.random');


random.addEventListener('click',()=>{
    return color = `hsl(${Math.floor(Math.random()* 360)},${Math.floor(Math.random()* 100)}%,${Math.floor(Math.random()* 100)}%)`

})




function clearGrid(){
    drawingarea.innerHTML = "";
    populateDiv(input.value);
}

function populateDiv(a){
    for(i=0; i< a*a; ++i){
    const drawingareadivs = document.createElement('div');
    drawingarea.append(drawingareadivs);
    drawingarea.style.cssText = `grid-template-rows:repeat(${a},1fr); grid-template-columns: repeat(${a},1fr)`;
    drawingareadivs.addEventListener("mouseover",()=>{
    drawingareadivs.style.backgroundColor = `${color}`;
    })
    }
}

buttonColor.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        return color = btn.innerText
    })
})




