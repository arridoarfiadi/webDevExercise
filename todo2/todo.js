
// var firstLi = document.querySelector("li");
// firstLi.addEventListener("mouseover", function(){
// 	this.style.color = "green" ;
// });

// firstLi.addEventListener("mouseout", function(){
// 	this.style.color = "black";
// })


var allLI = document.querySelectorAll("li");
for(var i = 0; i < allLI.length; i++){
	allLI[i].addEventListener("mouseover", function(){
		//this.style.color = "pink" ;
		this.classList.add("hover");
	})
	allLI[i].addEventListener("mouseout", function(){
		//this.style.color = "black" ;
		this.classList.remove("hover");
	})
	allLI[i].addEventListener("click", function(){
		this.classList.toggle("done")
	})
}

