function Person(name,x,y,movX,movY,goTo){
    this.name=name;
    this.x=x;
    this.y=y;
    this.movX=movX;
    this.movY=movY;
    this.goTo=goTo;
}

let names = ["Sharon R. Jackson","Michael T. Shaw", "Terica D. Beckham", "Norman K. Sharma", "Patricia M. Karnes", "Joseph C. Matos", "Robert A. McCrary", "Heather B. Williams", "John A. Holcombe", "Bill S. Gutierrez", "Wesley D. Smith", "Pamela T. Hook", "Sandra T. Stone" ];

Person.prototype.draw = function() {
    ctx.drawImage(peep2,this.x,this.y,12,24);

}
Person.prototype.feet = function() {
    let feet = [this.x+6,this.y+24,0];
    cords.forEach(cord=>{
        if(cord[2] ==1){
            for (let i=cord[0]-25;i<=cord[0]+25;i++){
                if(feet[0]==i){
                    if(feet[1] > cord[1]-(-Math.abs((i-cord[0])*.6)+15)){
                        if(feet[1] < cord[1]+(-Math.abs((i-cord[0])*.6)+15))
                            feet[2]=1;
                    }
                }
            }
        }
    });
    if(feet[2]==1)
        return true;
    else 
        return false;
}
function createPeeps(){
    let numP = 0 ;
    let opts = [];
    cords.forEach(cord=>{
        if(cord[2]==1){
            numP++;
            opts.push([cord[0]-6,cord[1]-24]);
        }
    });
    numP-= peeps.length;
    while(numP >0){
        let pos = random(0,opts.length);
        let opt= opts[pos];
        opts = opts.splice(pos,1);
        let peep = new Person(names[random(0,names.length-1)],opt[0],opt[1],random(1,6)*randomPN(),random(1,6)*randomPN(),0);
        peeps.push(peep);
        peep.draw();
        numP--;
    }
}