var player1 = 0;
var player2 = 0;
var gameOver = false;
var winningScore = 5;
var maxInput = document.querySelector("input[type ='number']")


//Listener to player 1 button
document.getElementById("player1").addEventListener("click", function(){
	if(!gameOver){
		player1++;
		updateUI();
		if (player1 >= winningScore){
			alert("Game Over");
			gameOver = true;
		}
	}
	
});

//Listener to player 2 button
document.getElementById("player2").addEventListener("click", function(){
	if(!gameOver){
		player2++;
		updateUI();
		if (player2 >= winningScore){
			alert("Game Over");
			gameOver = true;
		}
	}
	
});

//Listener to reset button
document.getElementById("reset").addEventListener("click", function(){
	resetUI()
});

//Listener to max input
maxInput.addEventListener("change",function(){
	document.getElementById("max").textContent = this.value;
	winningScore = Number(this.value); //set the input to number
	resetUI();

});

function resetUI(){
	player1 = 0;
	player2 = 0;
	gameOver = false;
	updateUI();
}
function updateUI(){
	document.querySelector("h1").textContent = player1 + " to " + player2
}


