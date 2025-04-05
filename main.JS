// Page Load Animation
document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.querySelector(".hero-text");
    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0)";
});

// Smooth Scroll for Navigation
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Hover Effect on Buttons
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.05)";
        this.style.transition = "0.3s";
    });
    button.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });
});