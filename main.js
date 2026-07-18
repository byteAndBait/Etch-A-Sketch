const container = document.querySelector(".container");
const inputElement = document.getElementById("numberOfGridsInput");
const labelForInput = document.getElementById("numberOfGridsLabel");
const mainContainer = document.querySelector(".etch-a-sketch-container");
let r = null, g = null, b = null;
makeGrid();
inputElement.addEventListener("input", () => {
  makeGrid();
  labelForInput.textContent = inputElement.value;
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
  element.style.setProperty("--r", r);
  element.style.setProperty("--g", g);
  element.style.setProperty("--b", b);
}
container.addEventListener("mouseover", (e) => {
  const element = e.target;
  if (element.classList.contains("box")) {
    if (r + g + b == 255 * 3) {
      setRGB(element);
      element.style.setProperty("--white-back", 1);
      return;
    }
    const isWhite = getComputedStyle(element).getPropertyValue("--white-back")
    if (isWhite == 1) {
      if (r == null) {
        r = getRandom(255);
        g = getRandom(255);
        b = getRandom(255);
        r = g = b = null;
        setRGB(element);
      }
      else
      {
        setRGB(element);
      }
      element.style.setProperty("--white-back", 0);
    }
  }
});

mainContainer.addEventListener("click", (e) => {
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
  else if (element.classList.contains("rainbow")) {
    r = g = b = null;
  }
  else if (element.classList.contains("eraser")) {
    r = g = b = 255;
  }
})

mainContainer.addEventListener("input", (e) => {
  const element = e.target;
  if (element.id == "colorInput") {
    const hexColor = element.value
    r = parseInt(hexColor.substr(1, 2), 16)
    g = parseInt(hexColor.substr(3, 2), 16)
    b = parseInt(hexColor.substr(5, 2), 16)
  }
})