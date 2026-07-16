const container = document.querySelector(".container");
const inputElement = document.getElementById("numberOfGridsInput");

makeGrid();
inputElement.addEventListener("input", () => {
  makeGrid();
});

function makeGrid() {
  container.textContent = "";
  for (let i = 0; i < inputElement.value ** 2; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.flexBasis = `${(1 / inputElement.value) * 100}%`;
    container.appendChild(box);
  }
}

function getRandom(max) {
  return parseInt(Math.random() * max);
}
function setRGB(element) {
  element.style.setProperty("--r", getRandom(255));
  element.style.setProperty("--g", getRandom(255));
  element.style.setProperty("--b", getRandom(255));
}
container.addEventListener("mouseover", (e) => {
  const element = e.target;
  if (element.classList.contains("box")) {
    const isWhite = getComputedStyle(element).getPropertyValue("--white-back")
    if (isWhite == 1) {
      setRGB(element);
      element.style.setProperty("--white-back", 0);
    }
  }
});

container.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("box")) {
    const isWhite = getComputedStyle(element).getPropertyValue("--white-back")

    if (isWhite == 0) // if it is has a value
    {
      let currentBrightness = +getComputedStyle(element).getPropertyValue("--brightness") * 100;
      if (currentBrightness > 0) {
        element.style.setProperty("--brightness", (currentBrightness - 10) / 100);
      }
    }
  }
})