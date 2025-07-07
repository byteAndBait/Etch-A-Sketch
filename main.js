let container = document.querySelector(".container");
const button = document.getElementById("gridPromptOpen");
let input = 2;

makeGrid();
button.addEventListener("click", () => {
  input = prompt("Enter the number of grids");
  if (input > 100) {
    alert("input is higher than 100");
    input = 2;
    return;
  }
  document.querySelectorAll(".box").forEach((e) => {
    e.remove();
  });
  makeGrid();
});

function makeGrid() {
  for (let i = 0; i < input * input; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.cssText = `flex: 1 ${(1 / input) * 100}%`;
    container.appendChild(box);
  }
}

function getRandom(max) {
  return parseInt(Math.random() * max);
}
let rColor,gColor,bColor, tenPercentMinus;
container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("box")) {
    if (getComputedStyle(e.target).getPropertyValue("--white-back") == 1) {
      e.target.style.setProperty("--r", getRandom(255));
      e.target.style.setProperty("--g", getRandom(255));
      e.target.style.setProperty("--b", getRandom(255));
      rColor = +getComputedStyle(e.target).getPropertyValue("--r");
      gColor = +getComputedStyle(e.target).getPropertyValue("--g");
      bColor = +getComputedStyle(e.target).getPropertyValue("--b");
      tenPercentMinus = Math.max(rColor,gColor,bColor) * 0.1
      e.target.style.setProperty("--white-back", 0);
    } else {
       rColor = +getComputedStyle(e.target).getPropertyValue("--r");
       gColor = +getComputedStyle(e.target).getPropertyValue("--g");
       bColor = +getComputedStyle(e.target).getPropertyValue("--b");
      console.log(tenPercentMinus)
      e.target.style.setProperty("--r", rColor -tenPercentMinus);
      e.target.style.setProperty("--g", gColor - tenPercentMinus);
      e.target.style.setProperty("--b", bColor - tenPercentMinus);
    }
  }
});
