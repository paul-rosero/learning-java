/*
  WRITE YOUR SOLUTION HERE
*/
function changeBackgroundColor(color) {
  return function() { 
    document.body.style.backgroundColor = color 
  };
};

document.getElementById("blue").addEventListener("click", changeBackgroundColor("blue"));
document.getElementById("green").addEventListener("click", changeBackgroundColor("green"));
document.getElementById("pink").addEventListener("click", changeBackgroundColor("pink"));


