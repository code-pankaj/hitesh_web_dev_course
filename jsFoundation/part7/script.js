// Log a simple message to the console
console.log("Hello, World!");

// BOM Example: Log the outer width of the browser window (including scrollbars)
// This is part of the Browser Object Model (BOM), which interacts with the browser.
console.log(window.outerWidth);

// BOM Example: Log the user agent string of the browser
// The navigator object provides information about the browser and the device.
console.log(navigator.userAgent);

// BOM Example: Log the hostname of the current web page
// The location object represents the current URL of the browser.
console.log(location.hostname);

// DOM Example: Log the entire document object
// The document object represents the HTML content of the page.
console.log(document);

// BOM Example: Log the screen object
// The screen object contains information about the user's screen, like its width and height.
console.log(screen);

// DOM Example: Log the Element object
// The Element object is a base class for all HTML elements (e.g., <div>, <span>).
console.log(Element);

// To use any tag of html in the js we need to create a variable for that tag in js or can use it using the document api.

const button = document.getElementById("button");

// const body = document.body;

button.addEventListener("click", () => {
    document.body.style.backgroundColor = "lightblue";
});

document.write("The sum is: " + (5 + 3));
