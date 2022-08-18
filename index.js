/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.querySelector('.length-txt')
const volumeEl = document.querySelector('.volume-txt')
const massEl = document.querySelector('.mass-txt')
const inputEl = document.getElementById("input-el")

function convert() {
    lengthEl.textContent = `${inputEl.value} meters = ${(inputEl.value*3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value/3.281).toFixed(3)} meters`
    volumeEl.textContent = `${inputEl.value} liters = ${(inputEl.value*0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value/0.264).toFixed(3)} liters`
    massEl.textContent = `${inputEl.value} kilos = ${(inputEl.value*2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value/2.204).toFixed(3)} kilos`
    inputEl.value = ""
}

convertBtn.addEventListener("click", function(){
    convert()
})

inputEl.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        convert()
    }
})