const can = document.querySelector("canvas");
let ctx = can.getContext('2d');
let width = can.width = window.innerWidth -20;
let height = can.height = window.innerHeight - 20;

let peep2 = document.createElement("img");
peep2.src="./images/peep2.png";
let wayP = document.createElement("img");
wayP.src="./images/wayPoint.png"


let xCords = 0;
let yCords = 15;
let cords = [];
let peeps = [];
while(yCords < Math.round(height / 15)*15){
	while(xCords < Math.round(width / 50)*50 -50){
		xCords+=50;
		 if(yCords%2 !=0 && xCords ==50)
			 xCords -=25;
		cords.push([xCords,yCords,0]);
	}
	xCords=0;
	yCords+=15;
}
cords.forEach(cord =>{
	updateGrassOnTile(cord[0],cord[1]);
});

can.onmouseup = function(e){
	if (typeof e === 'object') {
		console.log(e.button);
		switch (e.button) {
			case 0:
				console.log(selected)
				if(selected=="P")
					buildPath(e);
				else if(selected=="W")
					buildWayPoint(e);
				break;
			case 1:
				break;
			case 2:
				if(selected=="P"){
					deletePath(e);
			  	}
				break;
			default:
				break;
		}
	}
}

can.onmousemove = function(e){
	if(selected=="P"){
		let mX = e.clientX -10;
		let mY = e.clientY -10;
		displayTempPath(mX,mY);
	}
}

setInterval(createPeeps, 20000);
setInterval(updateTextures, 100);



function random(min, max) {
	let num = Math.floor(Math.random()*(max-min)) + min;
	return num;
}
function randomPN() {
	let num = random(1,3);
	if(num ==1)
		return -1;
	if(num ==2)
		return 1;
}