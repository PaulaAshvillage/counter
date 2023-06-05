// Count Event: Click  arewhite, space or enter main)
const main = document.querySelector("main");
const btn = document.querySelector(".btn");
const displayedCounter = document.querySelector("#counter");

let countingNumber = 0;
function count() {
  countingNumber++;

  //display it:
  displayedCounter.innerText = countingNumber;
  main.style.background =
    "linear-gradient(to right, #ffd700 " +
    countingNumber +
    "%, #ffffff " +
    countingNumber +
    "% 100%)";
  if (countingNumber > 100) {
    let newNumber = 0;
    newNumber = countingNumber.toString().slice(-2);
    console.log(newNumber);

    main.style.background =
      "linear-gradient(to right, #ffd700 " +
      newNumber +
      "%, #ffffff " +
      newNumber +
      "% 100%)";
  }
}

function reset() {
  countingNumber = 0;
  displayedCounter.innerText = countingNumber;
  main.style.background = "white";
}
btn.addEventListener("click", reset);
main.addEventListener("click", count);
document.addEventListener("keydown", count);
