let enemySpeed=1.5;
class Enemy{
    constructor(x,y,radius,color3,velocity){
       this.x=x;
       this.y=y;
       this.radius=radius;
       this.color3=color3;
       this.velocity;
       this.tempVelocity={x:null,y:null};
       this.angle;
    };


    drawEnemy(ct){
    ct.beginPath();
    ct.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
    ct.fillStyle=this.color3;
    ct.fill();
    ct.closePath();
    }

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
function spawner(){
    clearInterval(idInterval);
    idInterval=setInterval(()=> {
        enemySpeed+=0.005;
        
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
        let tempRadius=12;
        let tempColor='red';
        enemies.push(new Enemy(tempX,tempY,tempRadius,tempColor,));
        },spawnRate)
};
