/*
  WRITE YOUR SOLUTION HERE
*/

function * getStop() {
  yield "Poughkeepsie";
  yield "Newburgh";
  yield "Peekskill";
  yield "Yonkers";
  yield "Bronx";
  yield "Grand Central";
}

const nycTrainLine = getStop();
const nextButton = document.getElementById("next-stop");
nextButton.addEventListener("click", () => {
  let currStop = nycTrainLine.next();
  if (currStop.done) {
    console.log("We made it!");
    nextButton.setAttribute("disabled", true);
  } else {
    console.log(currStop.value);
  }
});
