const decBtn = document.querySelector(".decrement");
const incBtn = document.querySelector(".increment");
const resetBtn = document.querySelector(".reset");

const countDisplay = document.querySelector(".counter-display")

let currentCount = 0;

decBtn.addEventListener("click",()=>{
  currentCount--;
  countDisplay.textContent = currentCount;
})

incBtn.addEventListener("click",()=>{
  currentCount++;
  countDisplay.textContent = currentCount;
})

resetBtn.addEventListener("click",()=>{
  currentCount=0;
  countDisplay.textContent = currentCount;
})