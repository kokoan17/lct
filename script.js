const btn = document.getElementById("btn");
const sidebar = document.querySelector(".sidebar");
const historyBottom = document.querySelector(".history-bottom")

btn.addEventListener("click", function() {
    sidebar.classList.toggle("active");
    historyBottom.classList.toggle("active");
})