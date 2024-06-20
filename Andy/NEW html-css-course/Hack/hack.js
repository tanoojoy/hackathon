document.addEventListener("DOMContentLoaded", () => {
    const player = document.getElementById("player");
    const gameContainer = document.getElementById("gameContainer");
    const chest = document.getElementById("chest");

    let playerPosition = 0;

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            movePlayer(10);
        }
    });

    function movePlayer(distance) {
        playerPosition += distance;
        if (playerPosition >= gameContainer.clientWidth - player.clientWidth) {
            playerPosition = gameContainer.clientWidth - player.clientWidth;
            alert("You reached the chest! You win!");
        }
        player.style.left = playerPosition + "px";
    }
});
