const textBox = document.getElementById("textBox")
const result = document.getElementById("result")
const toCelsius = document.getElementById("toCelsius")
const toFahrenheit = document.getElementById("toFahrenheit")
let temp
function convert(){
    if(toCelsius.checked){
        temp = Number(textBox.value)
        temp = (temp -32)*(5/9)
        result.textContent = temp.toFixed(1) + "°C"
    }
    else if(toFahrenheit.checked){
        temp = Number(textBox.value)
        temp = temp * 9 /5 +32
        result.textContent = temp.toFixed(1) + "°F"
    }
    else{
        result.textContent= "select a unit" 
    }
}