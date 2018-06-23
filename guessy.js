//Getters
var squares = document.getElementsByClassName("square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var displayStatus = document.querySelector("#displayStatus");
var h1 = document.querySelector("h1");
var ncbtn = document.querySelector("#newColorBtn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var easyFlag= 3;
var hardFlag = 6;
var easyMode = false;

ncbtn.addEventListener("click", function(){
	if (easyMode)
		createSquares(easyFlag,squares.length);
	else
		createSquares(hardFlag,squares.length);

	displayStatus.textContent = "";
	h1.style.background = "steelblue";
	colorDisplay.textContent = pickedColor;
	ncbtn.textContent = "New Colors";
});

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	createSquares(easyFlag,squares.length);
	colorDisplay.textContent = pickedColor;
	easyMode = true;
	h1.style.background = "steelblue";
	console.log("After createSquares");
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	createSquares(hardFlag,squares.length);
	colorDisplay.textContent = pickedColor;
	easyMode = false;
	h1.style.background = "steelblue";
});

//main
createSquares(hardFlag,squares.length);


console.log("Picked Color: "+pickedColor);

colorDisplay.innerHTML = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function(){
		currentColor = this.style.backgroundColor;
		if (currentColor === pickedColor){
			displayStatus.textContent = "Correct";
			changeAllColors(currentColor);
			h1.style.background = currentColor;
			ncbtn.textContent = "Play Again!";
		}else{
			this.style.backgroundColor = "#232323";
			displayStatus.textContent = "Try Again";
		}
	});
}


function changeAllColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

//Functions
function getRandomColor(val) {
  return Math.floor(Math.random() * Math.floor(val));
}

function createSquares(flag,squareSize){
	for (var i = 0; i < squareSize; i++) {
		if(i<flag){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = "rgb("+getRandomColor(255)+","+getRandomColor(255)+","+getRandomColor(255)+")"; 
		}else
			squares[i].style.display = "none";
	}
	randomColor(flag);
}

function randomColor(flag){
	pickedColor = squares[getRandomColor(flag)].style.backgroundColor;
}