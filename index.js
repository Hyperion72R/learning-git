let tog = document.getElementById("tog");
tog.addEventListener("click", function () {
  tog.classList.toggle("m-fadeOut");
});

function Timeout() {
  setTimeout(function () {
    tog.classList.toggle("btnTest");
  }, 500);
}

console.log(tog);
