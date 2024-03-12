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
