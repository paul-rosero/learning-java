/*
  WRITE YOUR SOLUTION HERE
*/
const clock = document.getElementById("clock");
setInterval(() => {
  clock.innerText = new Date().toLocaleTimeString();
}, 1000);

console.log(clock)