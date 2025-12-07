// Vanilla JS: highlight active nav link based on current page
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const current = window.location.pathname.split("/").pop(); // e.g., 'resume.html'

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === current || (current === "" && href === "index.html")) {
            link.classList.add("active-link");
        }
    });
});

// jQuery example: simple fade effect on container when page loads
$(document).ready(function () {
    $(".container").hide().fadeIn(600);
});
