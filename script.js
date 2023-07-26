const drawingarea = document.querySelector('.drawingarea');
window.onload = populateDiv();
let divfill = document.querySelectorAll('.divfill');



divfill.forEach((div)=>{
    div.addEventListener("mouseover",()=>{
        div.style.cssText= "background-color: black";
    })
})

function populateDiv(){
    for(i=0; i< 16*16; ++i){
    const drawingareadivs = document.createElement('div');
    drawingareadivs.classList.add('divfill')
    drawingarea.append(drawingareadivs)
    }
}


