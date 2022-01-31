let milisecondsElement = document.querySelector('.miliseconds');
let secondsElement = document.querySelector('.seconds');
let minutesElement = document.querySelector('.minutes');
let hoursElement = document.querySelector('.hours');


let buttonStart = document.querySelector('.start');
let buttonStop = document.querySelector('.stop');
let buttonReset = document.querySelector('.reset');

let miliseconds = '00',
    seconds = '00',
    minutes = '00',
    hours = '00',
    interval


buttonStart.addEventListener('click', ()=>{
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})




function startTimer(){
    miliseconds++
    if(miliseconds<9){
        milisecondsElement.innerHTML = '0' + miliseconds
    }
    if(miliseconds>99){
        seconds++
        secondsElement.innerHTML = '0' + seconds
        miliseconds = 0
        milisecondsElement.innerHTML = '0' + miliseconds
    }

}