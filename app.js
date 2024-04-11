const counter  = document.querySelector('.counter');
const buttons  = document.querySelector('.buttons');

buttons.addEventListener('click', e => {
    if(e.target.classList.contains('increase')){
        counter.innerHTML++;
        setColor();
    }

    if(e.target.classList.contains('decrease')){
        counter.innerHTML--;
        setColor();
    }

    if(e.target.classList.contains('reset'))
        counter.innerHTML = 0;
        setColor();
})


//change color when i click

function setColor(){

    if(counter.innerHTML > 0){
        counter.style.color = "yellow";
    }else if(counter.innerHTML < 0){
        counter.style.color = "red";
    }else{
        counter.style.color = "fff"
    }

}