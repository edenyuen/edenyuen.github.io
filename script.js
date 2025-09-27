// Initialize the counter variable
let count = 0;

// Get the button element by its ID
const clickButton = document.getElementById('click-button');

// Get the counter display element by its ID
const counterDisplay = document.getElementById('counter');

// Add a click event listener to the button
clickButton.addEventListener('click', () => {
  // Increment the counter every time the button is clicked
  count++;
  // Update the text of the counter display with the new count
  counterDisplay.textContent = count;
});
