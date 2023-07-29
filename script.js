const drawingarea = document.querySelector('.drawingarea');
let input = document.querySelector('input');
populateDiv(input.value);
let buttonColor = document.querySelectorAll('.colorbutton');
let color = "black";
let reset = document.querySelector('.reset');
reset.addEventListener('click',clearGrid);
input.addEventListener("change",clearGrid);
let random = document.querySelector('.random');
let rainbow = document.querySelector('.rainbow');





random.addEventListener('click',()=>{
    return color = `hsl(${Math.floor(Math.random()* 360)},100%,50%)`

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
        if(color == "Rainbow"){
            drawingareadivs.style.backgroundColor = `hsl(${Math.floor(Math.random()* 360)},100%,50%)`;
        }else {
    drawingareadivs.style.backgroundColor = `${color}`; }})}}

buttonColor.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        return color = btn.innerText
    })
})




