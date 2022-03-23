let canvas=document.getElementById("canv");
let ctx = canvas.getContext("2d");
canvas.style.backgroundColor='lightgrey'
canvas.width=window.innerWidth*0.70;
canvas.height=window.innerHeight*0.87;
canvas.style.border='solid black 3px'


let Player;
//når vinduet bliver loadedt kaldes startGame
window.onload=startGame();
//sætter i gang i spillet samt starter gameloopet
function startGame(){
    Player= new player(450,330,50,50);
    gameloop()
}


function gameloop(){
    window.requestAnimationFrame(gameloop)
    Player.drawPlayer(ctx);
}