// Show contact info on Home when "Contact" is clicked
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("contactBtn");
  const box = document.getElementById("contactBox");

  if (!btn || !box) return;

  btn.addEventListener("click", (e) => {
    // prevent jumping to top or reloading
    e.preventDefault();
    box.style.display = "block";
    box.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // If URL already has #contact, reveal on load
  if (location.hash === "#contact") {
    box.style.display = "block";
  }
});


