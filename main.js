let container = document.querySelector(".container");
const button = document.getElementById("gridPromptOpen")
let input = 4;
makeGrid()
button.addEventListener("click", ()=>{
    input = prompt("Enter the number of grids")
    if(input > 100){
        alert("input is higher than 100")
        input = 4;
        return;
    }
    document.querySelectorAll(".box").forEach((e)=>{
        e.remove()
    })
    makeGrid()
})

function makeGrid(){
    for(let i = 0; i < input * input; i++){
        let box = document.createElement("div")
        box.classList.add("box")
        box.style.cssText = `flex: 1 ${input / (input * input) * 100}%`;
        container.appendChild(box)
    }
}
