class Enemy{
    constructor(x,y,radius,color3,velocity){
       this.x=x;
       this.y=y;
       this.radius=radius;
       this.color3=color3;
       this.velocity=velocity; 
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
    this.x=this.x+this.velocity.x
    this.y=this.y+this.velocity.y
    }
};
let spawnRate=1000;

function spwaner(){
    setInterval(()=> {
    let tempX=100;
    let tempY=100;
    let tempRadius=10;
    let tempColor='green';
    let tempVelocity={x:1,y:1};
console.log(tempColor);
    enemies.push(new Enemy(tempX,tempY,tempRadius,tempColor,tempVelocity));
    console.log(enemies);
    },spawnRate)
};
