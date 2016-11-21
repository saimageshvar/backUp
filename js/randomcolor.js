$(document).ready(function randomColor(){
	var num1 = 1 + Math.floor(Math.random() * 255);
	var num2 = 1 + Math.floor(Math.random() * 255);
	var num3 = 1 + Math.floor(Math.random() * 255);
	$(".random").animate({"background-color":"rgba("+num1+","+num2+","+num3+",0.8)"}, 5000);
	setTimeout(randomColor, 5000);
});


	
