class player{
    constructor(Xpos,Ypos,wit,hei){
        this.x=Xpos;
        this.y=Ypos;
        this.width=wit;
        this.height=hei;
    }
drawPlayer(c){
    c.rect(this.x,this.y,this.width,this.height);
    c.fillStyle='red';
    c.fill();
}




}