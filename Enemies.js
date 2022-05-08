let enemySpeed=1.5;
class Enemy{
    constructor(x,y,radius,color3){
       this.x=x;
       this.y=y;
       this.radius=radius;
       this.color3=color3;
       this.tempVelocity={x:null,y:null};
       this.angle;
    };

    // tegner fjenderne
    drawEnemy(ct){
    ct.beginPath();
    ct.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
    ct.fillStyle=this.color3;
    ct.fill();
    ct.closePath();
    }
    //opdater fjendernes positioner 
    updateEnemy(){
    this.drawEnemy(ctx);
    this.angle=Math.atan2((Player.y+12.5)-this.y,(Player.x+12.5)-this.x);
    this.tempVelocity={
        x:Math.cos(this.angle)*enemySpeed,
        y:Math.sin(this.angle)*enemySpeed
        }
    this.x=this.x+this.tempVelocity.x
    this.y=this.y+this.tempVelocity.y
    }
};

let spawnRate=950;
let idInterval;
//laver indstancer af enemy classen og spawer dem i random lokationer
function spawner(){
    clearInterval(idInterval);
    idInterval=setInterval(()=> {
        enemySpeed+=0.01;
        
        let tempX,
        tempY;
     
        function randomPos(){
            let dis=Math.random()*200;
            if(0<=dis&&dis<50){
                tempY=0;
                tempX=Math.random()*canvas.width;
                return [tempX,tempY]
            };
            if(50<=dis&&dis<100){
                tempX=0;
                tempY=Math.random()*canvas.height;
                return[tempX,tempY]
            };
            if(100<=dis&&dis<150){
                tempY=canvas.height;
                tempX=Math.random()*canvas.width;
                return [tempX,tempY]
            };
            if(150<=dis&&dis<200){
                tempX=canvas.width;
                tempY=Math.random()*canvas.height;
                return[tempX,tempY]
            };
        };
    randomPos();
        enemies.push(new Enemy(tempX,tempY,12,'red',));
        },spawnRate)
        
};
