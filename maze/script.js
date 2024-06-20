window.onload = function() {
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
    img.src = '/grass.png';  // Replace with the path to your image

    //draw wall
    var wall = new Image();
    wall.src = '/block.png';

    //draw guy
    var guyImg = new Image();
    guyImg.src = '/guy.jpg';

    //draw chest
    var chestImg = new Image();
    chestImg = '/chest.png';

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
        // var guyX = horizontalOffset;
        // var guyY = 20;  // Position below the top wall
        wallsCtx.drawImage(guyImg, 10, 25, 40, 40);

        //draw chest image
        wallsCtx.drawImage(chestImg, 480, 25, 40, 40);
        
    }

    // Initial canvas setup
    resizeBackgroundCanvas();
};



