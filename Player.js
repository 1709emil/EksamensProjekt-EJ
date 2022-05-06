//variable der skal bruges i metode controls()
let up=false,
    down=false,
    left=false,
    right=false;

class player{
    constructor(Xpos,Ypos,r){
        this.x=Xpos;
        this.y=Ypos;
        this.radius=r
        this.speed=2.5
        this.color1='blue';
    }
// tegner spiller
drawPlayer(c){ 
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
    c.fillStyle=this.color1;
    c.fill();
    c.closePath();
};
//metoden der styrer spillerens movment
controls(){
    this.drawPlayer(ctx)
    if(up){
        this.y-= this.speed;
        if(this.y <= 0+this.radius){
            this.y +=this.speed
            this.drawPlayer(ctx);
            return
        }
        else{this.drawPlayer(ctx)}
        
    };

    if(down){
        this.y+= this.speed;
        if(this.y >= (canvas.height-this.radius)){
            this.y -=this.speed
            this.drawPlayer(ctx);
            return
        }
        else{this.drawPlayer(ctx)}
    };

    if(left){
        this.x-= this.speed;
        if(this.x <= 0+this.radius){
            this.x +=this.speed
            this.drawPlayer(ctx);
            return
        }
        else{this.drawPlayer(ctx)}
    };

    if(right){
        this.x+= this.speed;
        if(this.x >= (canvas.width-this.radius)){
            this.x -=this.speed
            this.drawPlayer(ctx);
            return
        }
        else{this.drawPlayer(ctx)}
    };
};

pressed(w){
    if(w.key==='w'){
    up=true}

    if(w.key==='s'){
    down=true}

    if(w.key==='a'){
    left=true} 

    if(w.key==='d'){
    right=true}
};
released(e){
    if(e.key==='w'){
    up=false}

    if(e.key==='s'){
    down=false}
    
    if(e.key==='a'){
    left=false} 
    
    if(e.key==='d'){
    right=false}

};
};

let bulletSpeed=6;


class Bullets{
    constructor(x,y,r,color2,velocity){
        this.x=x;
        this.y=y;
        this.radius=r;
        this.color2=color2;
        this.velocity=velocity;
        
    };
    // tegner skudne  
    drawBullets(c){
    c.beginPath()
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
    c.fillStyle=this.color2
    c.fill()
    
    };
    // opdater skudne postition
    update(){
    this.x= this.x + this.velocity.x;
    this.y= this.y + this.velocity.y
    this.drawBullets(ctx);
    };
};

