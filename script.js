// highlight active nav
(function(){
  const file = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a=>{
    const href = a.getAttribute("href");
    if (file === href || (file === "" && href.includes("index.html"))) a.classList.add("active");
  });
})();

// footer year (kept constant per your ask; change if you want dynamic)
document.getElementById("year").textContent = "2025";


