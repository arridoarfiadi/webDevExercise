//Define Variables
var colors = newColors(6);
var squares = document.querySelectorAll(".square");
var goalColor = pickColor();
var goal = document.getElementById("goal");
var statusDisplay = document.getElementById("status");
var header = document.getElementById("heading");
var reset = document.getElementById("replay");
var difficulty = 6;
var mode = document.querySelectorAll(".mode");
goal.textContent = goalColor;


init();

function init(){
	//Set the squares
	resetColor();

	//Event Listener for reset
	reset.addEventListener("click", resetUI);
	modeButtonListener();
	squareListener();
	
}

//Event Listener for the Modes
function modeButtonListener() {
	
	for(var i = 0; i< mode.length; i++){
		mode[i].addEventListener("click", function(){
			mode[0].classList.remove("selected")
			mode[1].classList.remove("selected")
			this.classList.add("selected");
			this.textContent === "Easy" ? difficulty =3: difficulty =6;
			resetUI();
		})
	}
}

//Event Listener for the squares
function squareListener() {
	
	for(var i = 0; i< squares.length; i++){
		//add click listeners
		squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === goalColor){
			statusDisplay.textContent = "Correct";
			reset.textContent = "Play Again?"
			changeColors(goalColor, difficulty) 
			header.style.backgroundColor = goalColor;
		}
		else {
			this.style.backgroundColor = "#232323";
			statusDisplay.textContent = "Try Again";
		}
		})
	}
}



//Changing colors for the Correct answer and for resetting
function changeColors(color, nums){
	for(var i = 0; i < nums; i++){
		squares[i].style.backgroundColor = color;
	}
}

//Put color on squares
function resetColor() {
	for(var i = 0; i< squares.length; i++){
	//add colors to squares
	squares[i].style.backgroundColor = colors[i];
	}
}

//Pick a color for the goal
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//Get new colors 
function newColors(numColors){
	var arr = [];
	for(var i =0; i<numColors;i++){
		arr.push(randomColor())
	}

	return arr;
}

//get a random color
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Resets the UI for the reset button
function resetUI() {
	changeColors("#232323", 6);
	colors = [];
	colors = newColors(difficulty);
	goalColor = pickColor();
	goal.textContent = goalColor;
	statusDisplay.textContent = "";
	header.style.backgroundColor = "pink";
	reset.textContent = "New Color";
	resetColor();
}