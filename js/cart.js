let counter = 0;
 
const counterValue = document.getElementsByClassName('.counter-value');
const incrementBtn = document.getElementsByClassName('.increment-btn');
const decrementBtn = document.getElementsByClassName('.decrement-btn');
 
// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
 
// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});
 
// To reset the counter to zero
resetBtn.addEventListener('click', reset);
 
function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}