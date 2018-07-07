var counter = 0;
function countUp(){
    document.querySelector("#display").innerHTML = counter;
    counter ++;
}
function countDown(){
    document.querySelector("#display").innerHTML = counter;
    counter --;
}