function buildPath(e){
        let mX = e.clientX -10;
        let mY = e.clientY -10;
        cords.forEach(cord => {
            for (let i=cord[0]-25;i<=cord[0]+25;i++){
                if(mX == i && mY > cord[1]-(-Math.abs((i-cord[0])*.6)+15) && mY < cord[1]+(-Math.abs((i-cord[0])*.6)+15)){
                        ctx.beginPath();
                        ctx.moveTo(cord[0]-24,cord[1]);
                        ctx.lineTo(cord[0],cord[1]+14);
                        ctx.lineTo(cord[0]+24,cord[1]);
                        ctx.lineTo(cord[0],cord[1]-14);
                        ctx.lineTo(cord[0]-24,cord[1]);
                        ctx.fillStyle = 'rgb(89,89,89)';
                        ctx.fill();
                        ctx.fillStyle = 'rgb(64,44,64)';
                        ctx.stroke();
                        cord[2]=1;
                }
            }
            
        });
}
function deletePath(e){
    let mX = e.clientX -10;
    let mY = e.clientY -10;
    cords.forEach(cord => {
        for (let i=cord[0]-25;i<=cord[0]+25;i++){
            if(mX == i && mY > cord[1]-(-Math.abs((i-cord[0])*.6)+15) && mY < cord[1]+(-Math.abs((i-cord[0])*.6)+15)){
                updateGrassOnTile(cord[0],cord[1]);
                cord[2]=0;
            }
        }
    });
}
function displayTempPath(mX,mY){
    if(selected="P"){
        cords.forEach(cord => {
            if(cord[2]==2){
                updateGrassOnTile(cord[0],cord[1]);
                cord[2]=0;
            }
            if(cord[2]==0){
                for (let i=cord[0]-25;i<=cord[0]+25;i++){
                    if(mX == i && mY > cord[1]-(-Math.abs((i-cord[0])*.6)+15) && mY < cord[1]+(-Math.abs((i-cord[0])*.6)+15 )){
                        
                            ctx.beginPath();
                            ctx.moveTo(cord[0]-24,cord[1]);
                            ctx.lineTo(cord[0],cord[1]+14);
                            ctx.lineTo(cord[0]+24,cord[1]);
                            ctx.lineTo(cord[0],cord[1]-14);
                            ctx.lineTo(cord[0]-24,cord[1]);
                            ctx.fillStyle = 'rgba(89,89,89,.5)';
                            ctx.fill();
                            ctx.fillStyle = 'rgb(64,44,64)';
                            ctx.stroke();
                            cord[2]=2;
                        
                    }
                    
                }
            }	
        });
    }
}
function buildWayPoint(e){
    let mX = e.clientX-10;
    let mY = e.clientY-10;
    ctx.drawImage(wayP,mX-12,mY-40,24,40.);
}