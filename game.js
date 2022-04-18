let canvas=document.getElementById("canv");
let ctx = canvas.getContext("2d");
canvas.style.backgroundColor='lightgrey'
canvas.width=window.innerWidth*0.70;
canvas.height=window.innerHeight*0.87;
canvas.style.border='solid black 3px';

let Player= new player(450,330,13);;
let bullets=[];
let enemies=[];
document.addEventListener('keydown',Player.pressed);
document.addEventListener('keyup',Player.released);
//når der klikkes laves der en bullet 
canvas.addEventListener('click', (event) => {
     let angle = Math.atan2(event.clientY-Player.y,event.clientX-Player.x);
     let temVelocity={
         x:Math.cos(angle)*bulletSpeed,
         y:Math.sin(angle)*bulletSpeed};

     bullets.push(new Bullets(
     Player.x,
     Player.y,
     5,
     'black',temVelocity));
    });
let scoreEl=document.querySelector('#score');
let startGamebtn=document.querySelector('#btnID');
let gameCont=document.querySelector('#gameCont')
let textScore=document.querySelector('#textScore')


function initRestart(){
    Player= new player(450,330,13);;
    bullets=[];
    enemies=[];
    console.log(enemies);
    score=0;
    scoreEl.innerHTML=0;
    textScore.innerHTML=0;
};
//sætter i gang i spillet samt starter gameloopet
function startGame(){
    Player.drawPlayer(ctx)
    gameloop();
    spawner();
};

let frameID;
let score=0;
function gameloop(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    frameID=requestAnimationFrame(gameloop);
    Player.controls();
    //kører igennem alle fjenderne og opdater dem
    enemies.forEach((enemy,identifer1)=>{
        enemy.updateEnemy();

        //tjekker om en fjende har ramt spillern samt slutter spillet
        let dist= Math.hypot(Player.x-enemy.x, Player.y-enemy.y);
        if(dist-enemy.radius-Player.radius<1){
            cancelAnimationFrame(frameID);
            gameCont.style.display='flex';
            textScore.innerHTML=score;
            //initRestart();
            
        };
        //tjekker om en bullet har ramt en fjende, samt øger scoren 
        bullets.forEach((bullet,identifer2)=>{
           let dist= Math.hypot(bullet.x-enemy.x, bullet.y-enemy.y);
        
           if(dist-enemy.radius-bullet.radius<1){
                score+=100;
                scoreEl.innerHTML=score
                setTimeout(()=>{
                enemies.splice(identifer1,1);
                bullets.splice(identifer2,1);
                },0)
            }
        });
    });
    // opdater skudne samt fjerne dem hvis de røger ud for banen
    bullets.forEach((bullet,identifer) => {
        bullet.update();
        if(bullet.x+bullet.radius<0||
           bullet.x-bullet.radius>canvas.width||
           bullet.y+bullet.radius<0||
           bullet.y-bullet.radius>canvas.heightS){
         setTimeout(()=>{
            bullets.splice(identifer,1);
            
         },0);
        };
    });
    

  
};
startGamebtn.addEventListener('click',()=>{
    initRestart();
    startGame();
    gameCont.style.display='none'
});
