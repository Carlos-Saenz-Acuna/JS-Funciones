function pintar(elemento) {
  elemento.style.backgroundColor = "yellow";
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
  pintar(ele);
});