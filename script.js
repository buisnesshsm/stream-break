// You can add interactive features here later.
// Example: Fade-in effect when loaded
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1.5s ease-in-out";
    requestAnimationFrame(() => {
        document.body.style.opacity = "1";
    });
});
