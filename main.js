let container = document.querySelector(".container");
const button = document.getElementById("gridPromptOpen");
let input = 2;

makeGrid();
button.addEventListener("click", () => {
  input = prompt("Enter the number of grids");
  if (input > 100) {
    alert("input is higher than 100");
    input = 16;
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
let tenPecentMinus
container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("box")) {
    if (e.target.style.background) {
      e.target.setAttribute(
        "data-r",
        e.target.getAttribute("data-r") -tenPecentMinus
      );

      e.target.setAttribute(
        "data-g",
        e.target.getAttribute("data-g") - tenPecentMinus
      );

      e.target.setAttribute(
        "data-b",
        e.target.getAttribute("data-b") -tenPecentMinus
      );

      e.target.style.background = `rgb(${e.target.getAttribute(
        "data-r"
      )},${e.target.getAttribute("data-g")},${e.target.getAttribute(
        "data-b"
      )})`;
    } else {
      e.target.setAttribute("data-r", getRandom(255));
      e.target.setAttribute("data-g", getRandom(255));
      e.target.setAttribute("data-b", getRandom(255));
      
       tenOfR = 0.1 * e.target.getAttribute("data-r");
       tenOfG = 0.1 * e.target.getAttribute("data-g");
       tenOfB = 0.1 * e.target.getAttribute("data-b");
       tenPecentMinus = 0.1 * Math.max(e.target.getAttribute("data-r"),e.target.getAttribute("data-g"),e.target.getAttribute("data-b"))
      e.target.style.background = `rgb(${e.target.getAttribute(
        "data-r"
      )},${e.target.getAttribute("data-g")},${e.target.getAttribute(
        "data-b"
      )})`;
    }
  }
});
