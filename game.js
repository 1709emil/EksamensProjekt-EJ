let canvas=document.getElementById("canv");
let ctx= canvas.getContext("2d");


window.onload=startGame();
function startGame(){
    gameloop()
}
function gameloop(){
    window.requestAnimationFrame(gameloop)
}