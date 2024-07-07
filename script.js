window.onload = function(){
    initColorPicker();
}

function initColorPicker(){
    let colorBox = document.getElementById("color-box")
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue"),
    }
let colorPickers = document.getElementsByClassName("picker");
   setColorPickerEventListeners(colorBox, rgb, colorPickers)
}
function setColorPickerEventListeners(element, colors, pickerElements){
    let pickLength = pickerElements.length
    for(let i = 0; i < pickLength; i++){
        pickerElements[i].addEventListener('change', ()=>{
            let red = colors.red.value;
            let green = colors.green.value;
            let blue = colors.blue.value;
            setElementBGColor(element, red, green, blue);
            setDisplayValues(red, green, blue);
        })
    }


}

function setElementBGColor(colorBox, red, green, blue){
   let rgbVal = [red, green, blue].join(',')
    colorBox.style.backgroundColor = "rgb("+ rgbVal +")"
}
// I know I deviated a little, but I like using arrow functions :)
const setDisplayValues=(red, green, blue)=>{
    let redVal = document.getElementById("redVal")
    let greenVal = document.getElementById("greenVal")
    let blueVal = document.getElementById("blueVal")

    redVal.innerText = red
    greenVal.innerText = green
    blueVal.innerText = blue
}