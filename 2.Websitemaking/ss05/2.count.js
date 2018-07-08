var counter = 0;
function countUp(){
    document.querySelector("#display").innerHTML = counter;
    counter ++;
}
function countDown(){
    document.querySelector("#display").innerHTML = counter;
    counter --;
}

// mapping/searching
document.querySelector("#btnCountUp").onclick = () => {
    countUp();
};
document.querySelector("#btnCountDown").onclick = () => {
    countDown();
};