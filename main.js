var player1 = new Player("Merthew", "123456");
var player2 = new Player("Merthew2", "123456");

setInterval(() => {
	var temp = player1.stringOut();
	document.getElementById("body").innerHTML = temp;
}, 1000 / 30);


function drawSoulSea(player) {
	
	var canvas = document.getElementById('soulSea');
	var ctx = canvas.getContext('2d');
	
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	var coords = [];
	
	for(let i = 1; i <= player.soulStars; i ++){
		var x = canvas.width/2 + canvas.width/4 * Math.cos(2 * Math.PI * i / player.soulStars);
		var y = canvas.height/2 + canvas.height/4 * Math.sin(2 * Math.PI * i / player.soulStars);
		coords.push([x,y]);
	}
	ctx.fillStyle = "white";
	ctx.beginPath();
	for(var i = 0; i < coords.length; i++){
		ctx.moveTo(coords[i][0], coords[i][1]);
		ctx.arc(coords[i][0], coords[i][1], 5, 0, Math.PI * 2, true);
	}
	ctx.fill();
	
}

function drawSoulSeaNum(num) {
	
	var canvas = document.getElementById('soulSea');
	var ctx = canvas.getContext('2d');
	
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	var coords = [];
	
	if(num == 1){
		coords.push([canvas.width/2,canvas.height/2]);
	}
	else{
		for(let i = 1; i <= num; i ++){
			var x = canvas.width/2 + canvas.width/4 * Math.cos(2 * Math.PI * i / num);
			var y = canvas.height/2 + canvas.height/4 * Math.sin(2 * Math.PI * i / num);
			coords.push([x,y]);
		}
	}
	ctx.fillStyle = "white";
	ctx.beginPath();
	for(var i = 0; i < coords.length; i++){
		ctx.moveTo(coords[i][0], coords[i][1]);
		ctx.arc(coords[i][0], coords[i][1], 5, 0, Math.PI * 2, true);
	}
	ctx.fill();
	
}