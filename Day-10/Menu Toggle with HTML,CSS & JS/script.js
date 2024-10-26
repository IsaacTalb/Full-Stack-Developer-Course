// Select the hamburger and navigation elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const body = document.body;
const spans = document.querySelectorAll('.hamburger span'); // Get the spans inside the hamburger

// Toggle the .menu-open class on the body when clicking the hamburger
hamburger.addEventListener('click', () => {
    body.classList.toggle('menu-open');
    
    // Change span color when menu is open
    spans.forEach(span => {
        span.style.backgroundColor = body.classList.contains('menu-open') ? 'white' : '#333';
    });
});

// Close the menu if a click occurs outside the menu
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        body.classList.remove('menu-open');
        
        // Reset the span color when closing the menu
        spans.forEach(span => {
            span.style.backgroundColor = '#333';
        });
    }
});
