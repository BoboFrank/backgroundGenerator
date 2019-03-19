var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttonHolder = document.getElementById("button");

function setInputToBackgroundColorAndDisplayInitialStyle(){
	var randomColorGenerator = document.createElement("button");
	randomColorGenerator.appendChild(document.createTextNode("Random"));
	buttonHolder.appendChild(randomColorGenerator);
	setGradient();
	css.textContent = body.style.background + ";"
}

setInputToBackgroundColorAndDisplayInitialStyle();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function makeBackgroundUsingRandomNumbers(){
	color1.value = createRandomNumbers();
	color2.value = createRandomNumbers();
	setGradient();
}

function createRandomNumbers(){
	var random = "#" + (Math.random()*0xFFFFFF << 0).toString(16);
	return random;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

buttonHolder.addEventListener("click", makeBackgroundUsingRandomNumbers);
// linear-gradient(to right, rgb(202, 246, 249), rgb(120, 210, 156))

