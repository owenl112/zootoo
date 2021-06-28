function updateGrassOnTile(x,y){
    ctx.beginPath();
    ctx.moveTo(x-25,y);
    ctx.lineTo(x,y+15);
    ctx.lineTo(x+25,y);
    ctx.lineTo(x,y-15);
    ctx.lineTo(x-25,y);
	ctx.fillStyle = 'rgb(10,150,10)';
	ctx.fill();
	ctx.fillStyle = 'rgb(5,100,5)';
	ctx.stroke();

}
function updatePathTile(x,y){
    ctx.beginPath();
    ctx.moveTo(x-24,y);
    ctx.lineTo(x,y+14);
    ctx.lineTo(x+24,y);
    ctx.lineTo(x,y-14);
    ctx.lineTo(x-24,y);
    ctx.fillStyle = 'rgb(89,89,89)';
    ctx.fill();
    ctx.fillStyle = 'rgb(64,44,64)';
    ctx.stroke();
}
function updatePeeps(){
    peeps.forEach(peep=>{
        peep.x += peep.movX;
        peep.y += peep.movY;
        if(!peep.feet()){
            peep.x -= peep.movX;
            peep.y -= peep.movY;
            if(peep.movX > 0)
                peep.movX = -random(1,6);
            else if(peep.movX < 0)
                peep.movX = random(1,6);
            if(peep.movY > 0)
                peep.movY = -random(1,6);
            else if(peep.movY < 0)
                peep.movY = random(1,6);
        }
        peep.draw();
    })
}

function updateTextures(){
    cords.forEach(cord=>{
        if(cord[2]==0)
            updateGrassOnTile(cord[0],cord[1]);
        if(cord[2]==1)
            updatePathTile(cord[0],cord[1]);
        
    });
    
    updatePeeps();
}
