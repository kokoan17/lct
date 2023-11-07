const btn = document.getElementById("btn");
const sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", function() {
    sidebar.classList.toggle("active");
})