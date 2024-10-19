// document.getElementById("nameForm").addEventListener("submit", function(event) {
//     event.preventDefault();
//     const name = document.getElementById("nameInput").value;
//     const greeting = document.getElementById("greetingMessage");

//     if (name) {
//         greeting.textContent = `Hello, ${name}! Welcome to our website!`;
//     } else {
//         greeting.textContent = "Enter your name";
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nameForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("nameInput").value;
        const greeting = document.getElementById("greetingMessage"); // Corrected ID

        if (name) {
            greeting.textContent = `Hello, ${name}! Welcome to our website!`; // Changed to template literal using backticks
        } else {
            greeting.textContent = "Enter your name";
        }
    });
});

