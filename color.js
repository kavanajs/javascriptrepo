var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("body");

function changeBackground() {
    body.style.background = `linear-gradient(to right,${color1.value},${color2.value})`;//es6 template literals
}

color1.addEventListener("input",changeBackground);//alternative for onclick wrt javascript
color2.addEventListener("input",changeBackground);