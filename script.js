window.onload = function() {
    var guyX = 10;
    var guyY = 25;  // Initial y position of the guy
    var speed = 5;  // Movement speed

    var chestX = 475; // x position of the chest
    var chestY = 25;  // y position of the chest

    // Get the background canvas and context
    var backgroundCanvas = document.getElementById('backgroundCanvas');
    var backgroundCtx = backgroundCanvas.getContext('2d');
    
    // Get the walls canvas and context
    var wallsCanvas = document.getElementById('wallsCanvas');
    var wallsCtx = wallsCanvas.getContext('2d');

    // Set canvas dimensions to match window dimensions for the background
    function resizeBackgroundCanvas() {
        backgroundCanvas.width = window.innerWidth;
        backgroundCanvas.height = window.innerHeight;
        drawTiledImage();
    }
    
    window.addEventListener('resize', resizeBackgroundCanvas, false);

    // draw background
    var img = new Image();
    img.src = 'https://raw.githubusercontent.com/tanoojoy/hackathon/main/grass.png';  // Replace with the path to your image

    //draw wall
    var wall = new Image();
    wall.src = 'https://raw.githubusercontent.com/tanoojoy/hackathon/main/block.png';

    //draw guy
    var guyImg = new Image();
    guyImg.src = 'https://raw.githubusercontent.com/tanoojoy/hackathon/main/guy.jpg';

    //draw chest
    var chestImg = new Image();
    chestImg.src = 'https://raw.githubusercontent.com/tanoojoy/hackathon/main/chest.png';

    //draw portal
    var destinationImg = new Image();
    destinationImg.src = 'https://raw.githubusercontent.com/tanoojoy/hackathon/main/portal.png';

    // Draw the image when it has loaded
    img.onload = function() {
        drawTiledImage();
        drawWalls();
    };

    // Function to draw the tiled image
    function drawTiledImage() {
        var pattern = backgroundCtx.createPattern(img, 'repeat');
        backgroundCtx.fillStyle = pattern;
        backgroundCtx.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
    }

    // Function to draw the L-shaped walls
    function drawWalls() {
        // Draw the top horizontal wall
        // darwImage(wall, heightFromTop, )
        wallsCtx.drawImage(wall, 0, 0, 550, 20);
        wallsCtx.drawImage(wall, 0, 70, 470, 20);

        // Draw the right vertical wall
        wallsCtx.save();
        wallsCtx.translate(520, 0);
        wallsCtx.rotate(Math.PI / 2);
        wallsCtx.drawImage(wall, 0, -20, 540, 20);  //outer wall
        wallsCtx.drawImage(wall, 70, 50, 470, 20);  //inner wall

        wallsCtx.restore();

        // Draw the guy image
        
        // var guyY = 20;  // Position below the top wall
        wallsCtx.drawImage(guyImg, guyX, guyY, 40, 40);

        //draw chest image
        wallsCtx.drawImage(chestImg, chestX, chestY, 40, 40);

        //draw destination image
        wallsCtx.drawImage(destinationImg, 475, 500, 40, 40);
    }

    function checkCollision() {
        // Define the bounding boxes of the guy and the chest
        var guyRect = {x: guyX, y: guyY, width: 40, height: 40};
        var chestRect = {x: chestX, y: chestY, width: 40, height: 40};

        // Check for collision
        if (guyRect.x < chestRect.x + chestRect.width &&
            guyRect.x + guyRect.width > chestRect.x &&
            guyRect.y < chestRect.y + chestRect.height &&
            guyRect.y + guyRect.height > chestRect.y) {
            open_popup();
        }
    }

    document.addEventListener('keydown', (event) => {
        switch(event.key) {
            case 'ArrowRight':
                guyX += speed;
                break;
            // Add cases for other arrow keys if needed
        }
        drawWalls();  // Redraw the walls and guy image
        checkCollision();
    });

    // Initial canvas setup
    resizeBackgroundCanvas();
};



