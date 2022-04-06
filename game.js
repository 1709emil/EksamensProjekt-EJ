let canvas=document.getElementById("canv");
let ctx = canvas.getContext("2d");
canvas.style.backgroundColor='lightgrey'
canvas.width=window.innerWidth*0.70;
canvas.height=window.innerHeight*0.87;
canvas.style.border='solid black 3px'

let Player= new player(450,330,25,25);;
let bullets=[];
let enemies=[];


//når vinduet bliver loadedt kaldes startGame
window.onload=startGame();

//sætter i gang i spillet samt starter gameloopet
function startGame(){
    Player.drawPlayer(ctx)
    gameloop();
    spwaner();
    document.addEventListener('keydown',Player.pressed);
    document.addEventListener('keyup',Player.released);
    canvas.addEventListener('click', (event) => {
     let angle = Math.atan2(event.clientY-Player.y,event.clientX-Player.x);
     let temVelocity={
         x:Math.cos(angle),
         y:Math.sin(angle)};

     bullets.push(new Bullets(
     Player.x+(Player.width/2),
     Player.y+(Player.height/2),
     5,
     'black',temVelocity));
    });
};

function gameloop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    window.requestAnimationFrame(gameloop)
    Player.controls();
    enemies.forEach((enemy)=>{
        enemy.updateEnemy();
    });
    bullets.forEach((bullet) => {
        bullet.update();
    });
    

  
}