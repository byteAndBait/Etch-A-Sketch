const mainContainer = document.querySelector(".etch-a-sketch-container");
const gridsContainer = mainContainer.querySelector(".container");
const gridsInputElement = document.getElementById("numberOfGridsInput");
const labelForInput = mainContainer.querySelector(".numberOfGridsLabel");
const colorInputElement = document.getElementById("colorInput")
// Modes
const solidColorModeElement = document.getElementById("solidColorMode");
const rainbowModeElement = document.getElementById("rainbowMode");
const eraserModeElement = document.getElementById("eraserMode")

let currentMode = solidColorModeElement.id;
let r = 0, g = 0, b = 0;

makeGrid();

function makeGrid() {
  gridsContainer.textContent = "";
  for (let i = 0; i < gridsInputElement.value ** 2; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.flexBasis = `${(1 / gridsInputElement.value) * 100}%`;
    gridsContainer.appendChild(box);
  }
}
function setRGBVariablesFromHex(hexColor) {
  r = parseInt(hexColor.substring(1, 3), 16)
  g = parseInt(hexColor.substring(3, 5), 16)
  b = parseInt(hexColor.substring(5, 7), 16)
}
function getRandom(max) {
  return parseInt(Math.random() * max);
}
function setRGB(element) {
  element.style.setProperty("--r", r);
  element.style.setProperty("--g", g);
  element.style.setProperty("--b", b);
  element.style.setProperty("--brightness", 1);
}
gridsContainer.addEventListener("mouseover", (e) => {
  const element = e.target;
  if (element.classList.contains("box")) {
    if(currentMode == eraserModeElement.id)
    {
      r = g = b = 255
      setRGB(element);
      element.classList.remove("colored")
      return;
    }
    
    if (!element.classList.contains("colored")) {
      if(currentMode == rainbowModeElement.id)
      {
        r = getRandom(255);
        g = getRandom(255);
        b = getRandom(255);
        setRGB(element);
      }
      else if (currentMode == solidColorModeElement.id)
      {
        setRGBVariablesFromHex(colorInputElement.value)
        setRGB(element)
      }
      element.classList.add("colored")
    }
  }
});

mainContainer.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("box")) {


    if (element.classList.contains("colored"))
    {
      let currentBrightness = +getComputedStyle(element).getPropertyValue("--brightness") * 100;
      if (currentBrightness > 0) {
        element.style.setProperty("--brightness", (currentBrightness - 10) / 100);
      }
    }
  }
  else if(element.classList.contains("mode"))
  {
    currentMode = element.id;
  }
})

mainContainer.addEventListener("input", (e) => {
  const element = e.target;
  if (element.id == colorInputElement.id) {
    const hexColor = element.value
    setRGBVariablesFromHex(hexColor)
  }
  else if (element.id == gridsInputElement.id) {
    makeGrid();
    labelForInput.textContent = gridsInputElement.value;
  }
})