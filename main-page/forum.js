// forum.js

function height() {
    // Get the user input for the new height
    var userInput = prompt("Enter new height:");

    // Convert the user input to an integer
    var newHeight = parseInt(userInput);

    // Check if the conversion was successful and the value is not NaN
    if (!isNaN(newHeight)) {
        // Get the userHeight element
        var userHeightElement = document.getElementById('userHeight');

        // Update the text content of userHeight with the new height
        userHeightElement.textContent = newHeight + 'cm';
    } else {
        // Handle the case where the input is not a valid number
        alert("Please enter a valid number for the height.");
    } 
}

function weight() {
    // Get the user input for the new height
    var userInput = prompt("Enter new weight:");

    // Convert the user input to an integer
    var newWeight= parseInt(userInput);

    // Check if the conversion was successful and the value is not NaN
    if (!isNaN(newWeight)) {
        // Get the userWeight element
        var userWeightElement = document.getElementById('userWeight');

        // Update the text content of userWeight with the new height
        userWeightElement.textContent = newWeight + ' kg';
    } else {
        // Handle the case where the input is not a valid number
        alert("Please enter a valid number for the weight.");
    } 
}

function updateSteps() {
    var stepsInput = document.getElementById('stepsInput');
    var stepsValue = stepsInput.value;
    // You can use stepsValue as needed
}

function updateWater() {
    var waterInput = document.getElementById('waterInput');
    var waterValue = waterInput.value;
    // You can use waterValue as needed
}
