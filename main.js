function promptForName() {
    let name = prompt("Please enter your name:");
    document.getElementById("outputName").innerText = "Hello, " + name + "!";
}

function enlargedImage() {
    document.getElementById("Snapchat-1805152574").style.display = "none";
    document.getElementById("enlargedImage").style.display = "inline";
}

function shrinkImage() {
    document.getElementById("Snapchat-1805152574").style.display = "inline";
    document.getElementById("enlargedImage").style.display = "none";
}

function highlightNavItem(navItem) {
    navItem.style.color = "blue";
}

function unhighlightNavItem(navItem) {
    navItem.style.color = "black";
}

function submitForm() {
    // Add logic to handle form submission
    console.log("Form submitted");
}

function clearForm() {
    // Add logic to clear form fields
    console.log("Form cleared");
    document.getElementById("userForm").reset();
}

function startIncrease() {
    intervalIncrease = setInterval(increaseFontSize, 100);
}

function startDecrease() {
    intervalDecrease = setInterval(decreaseFontSize, 100);
}

function stop() {
    clearInterval(intervalIncrease);
    clearInterval(intervalDecrease);
}

// Rest of your functions...

// Function to increase font size
function increaseFontSize() {
    // Get the current font size of the body
    var currentFontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    // Increase the font size by 2px
    document.body.style.fontSize = (currentFontSize + 2) + 'px';
}

// Function to decrease font size
function decreaseFontSize() {
    // Get the current font size of the body
    var currentFontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    // Decrease the font size by 2px
    document.body.style.fontSize = (currentFontSize - 2) + 'px';
}

function enlargedImage() {
    document.getElementById("normalImage").style.display = "none";
    document.getElementById("enlargedImage").style.display = "inline";
}

function shrinkImage() {
    document.getElementById("normalImage").style.display = "inline";
    document.getElementById("enlargedImage").style.display = "none";
}

function highlightNavItem(navItem) {
    navItem.style.color = "blue";
}

function unhighlightNavItem(navItem) {
    navItem.style.color = "black";
}

function submitForm() {
    // Add logic to handle form submission
    console.log("Form submitted");
}

function clearForm() {
    // Add logic to clear form fields
    console.log("Form cleared");

    document.getElementById("userForm").reset();
}

//Accessibility Dark Mode
function toggleColorTheme() {
    var body = document.body;
    body.classList.toggle('dark-theme'); // Toggle the 'dark-theme' class
}
