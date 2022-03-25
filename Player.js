let up=false,
    down=false,
    left=false,
    right=false;

class player{
    constructor(Xpos,Ypos,wit,hei){
        this.x=Xpos;
        this.y=Ypos;
        this.width=wit;
        this.height=hei;
        this.speed=2.5
    }

drawPlayer(c){ 
    c.beginPath();
    c.rect(0,0,canvas.width,canvas.height);
    c.fillStyle='lightgrey';
    c.fill();
    c.beginPath();
    c.rect(this.x,this.y,this.width,this.height);
    c.fillStyle='red';
    c.fill();
};

controls(){
    this.drawPlayer(ctx)
    if(up){
        this.y-= this.speed;
        if(this.y <= 0){
            this.y +=this.speed
            this.drawPlayer(ctx);
            return
        }
        else{this.drawPlayer(ctx)}
        
    };

    if(down){
        this.y+= this.speed;
        if(this.y >= (canvas.height-this.height)){
            this.y -=this.speed
            this.drawPlayer(ctx);
            return
        }
        else{this.drawPlayer(ctx)}
    };

    if(left){
        this.x-= this.speed;
        if(this.x <= 0){
            this.x +=this.speed
            this.drawPlayer(ctx);
            return
        }
        else{this.drawPlayer(ctx)}
    };

    if(right){
        this.x+= this.speed;
        if(this.x >= (canvas.width-this.width)){
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


}