// ✅ Show contact info on Home page when Contact is clicked
document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.getElementById("contactBtn");
    const contactBox = document.getElementById("contactBox");

    if (contactBtn && contactBox) {
        contactBtn.addEventListener("click", () => {
            contactBox.style.display = "block";     // show
            window.scrollTo({ top: window.innerHeight / 1.5, behavior: "smooth" });
        });
    }
});

