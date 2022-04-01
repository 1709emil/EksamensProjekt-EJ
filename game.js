let canvas=document.getElementById("canv");
let ctx = canvas.getContext("2d");
canvas.style.backgroundColor='lightgrey'
canvas.width=window.innerWidth*0.70;
canvas.height=window.innerHeight*0.87;
canvas.style.border='solid black 3px'

let Player;
let Gun;
//når vinduet bliver loadedt kaldes startGame
window.onload=startGame();
//sætter i gang i spillet samt starter gameloopet
function startGame(){
    Player= new player(450,330,25,25);
     Gun=new gun(undefined);
    gameloop();
    document.addEventListener('keydown',Player.pressed);
    document.addEventListener('keyup',Player.released);
    canvas.addEventListener('mousemove',Gun.mouseCoords)
    canvas.addEventListener('click',Gun.shootGun)
}


function gameloop(){
    window.requestAnimationFrame(gameloop)
    Player.controls()
}