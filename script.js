// highlight active nav based on current file
(function(){
  const file = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a=>{
    const href = a.getAttribute("href");
    if (file === href || (file === "" && href.includes("index.html"))) {
      a.classList.add("active");
    }
  });
})();

// footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

