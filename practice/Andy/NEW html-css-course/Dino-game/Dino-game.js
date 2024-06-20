document.addEventListener("keydown",moveDino)
function moveDino(e){
    if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyW") {
        //jump
        velocityY = -6;

        //reset game
        if (gameOver) {
            bird.y = birdY;
            score = 0;
            gameOver = false;
        }
    }
}
