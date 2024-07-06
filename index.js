    document.addEventListener("DOMContentLoaded", (event) => {

        let inputForm = document.getElementById("input-form")
        let inputBox = document.getElementById("input-box")
        let errorMsg = document.getElementById("error-msg")
        let lengthEl = document.getElementById("length-element")
        let volumeEl = document.getElementById("volume-element")
        let massEl = document.getElementById("mass-element")

        function updateValue(inputValue) {
            inputValue = Number(inputValue);
            lengthEl.textContent = `${inputValue} meters = ${meterToFeet(inputValue)} feet | ${inputValue} feet = ${feetToMeter(inputValue)} meters `
            volumeEl.textContent = `${inputValue} liters = ${litsToGal(inputValue)} gallons | ${inputValue} gallons = ${galToLit(inputValue)} liters `
            massEl.textContent = `${inputValue} kilos = ${kilsToPounds(inputValue)} pounds | ${inputValue} pounds = ${pouToKils(inputValue)} kilos `

        }

        inputBox.addEventListener("input", function() {
            const inputValue = inputBox.value
            if(isNaN(Number(inputValue))){
                errorMsg.style.display = "inline"
            } else {
                errorMsg.style.display = "none"
            }
        })

        inputForm.addEventListener("submit", function(event) {
            event.preventDefault()
            const inputValue = inputBox.value.trim()
            console.log(`Input value: ${inputValue}`); 
            if (isNaN(Number(inputValue))) {
              errorMsg.style.display = "inline"
            } else if (inputValue === "") {
              inputValue = 0;
              updateValue(inputValue) 
            } else {
              updateValue(inputValue) 
            }
          })

       

        function meterToFeet(value){
            return (value*3.280839895).toFixed(3)
        }
        function feetToMeter(value){
            return (value/3.280839895).toFixed(3)
        }
        function litsToGal(value){
            return (value*0.264172052).toFixed(3)
        }
        function galToLit(value){
            return (value/0.264172052).toFixed(3)
        }
        function kilsToPounds(value){
            return (value*2.20462262).toFixed(3)
        }
        function pouToKils(value){
            return (value/2.20462262).toFixed(3)
        }
        
    })