const count = document.querySelector(".count");
const subtract = document.querySelector(".subtract");
const resetCount = document.querySelector(".reset");
const add = document.querySelector(".add");

add.addEventListener("click", () => {
  count.innerHTML++;
  setColor()
})
subtract.addEventListener("click", () => {
  count.innerHTML--;
  setColor()
})
resetCount.addEventListener("click", () => {
  count.innerHTML = 0;
  setColor()
})

function setColor() {
if(count.innerHTML > 0) {
  count.style.color = "yellow"
} else if (count.innerHTML < 0) {
  count.style.color = "red"
} else {
  count.style.color = "#fff"
}}


