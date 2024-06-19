
//board
let board;
let boardWidth = 900;  //width and height of board
let boardHeight = 450;
let context;

//dino
let dinoWidth = 108;
let dinoHeight = 94;
let dinoX = 100;
let dinoY = boardHeight - dinoHeight;
let dinoImg;

let dino = {
    x : dinoX,
    y : dinoY,
    width : dinoWidth,
    height : dinoHeight
}

//bird
let birdHeight = 70;
let birdWidth = 100;
let birdX = 700;
let birdY = boardHeight - birdHeight;
let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}
//fire
let fireArray=[];
let fireHeight = 50;
let fireWidth = 50;
let fireX = 677;
let fireY = (boardHeight - fireHeight)-20;
let fire = {
    x : fireX,
    y : fireY,
    width : fireWidth,
    height : fireHeight
}


//physics
let velocityX = -8; // speed of fire moving to the left




window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); //used for drawing on the board

    //draw initial dinosaur
     // context.fillStyle="green";
    // context.fillRect(dino.x, dino.y, dino.width, dino.height);

    //dino image
    dinoImg = new Image();
    dinoImg.src = "dino_files/dino.png";
    dinoImg.onload = function() {
    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

    //bird image
    birdImg = new Image();
    birdImg.src = "bird_files/bird1.png";
    birdImg.onload = function() {
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height); 
    }
     //fire image

     fireImg = new Image();
     fireImg.src = "fireball2.jpg";
     fireImg.onload = function() {
     context.drawImage(fireImg, fire.x, fire.y, fire.width, fire.height); 
     }

   
    requestAnimationFrame(update);
    setInterval(placefire, 1500);

    function update() {
        requestAnimationFrame(update);
        context.clearRect(0, 0, board.width, board.height);
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
        context.drawImage(fireImg, fire.x, fire.y, fire.width, fire.height); 
        //fire
        for (let i = 0; i < fireArray.length; i++) {
            let fire = fireArray[i];
            fire.x += velocityX;
            context.drawImage(fire.img, fire.x, fire.y, fire.width, fire.height);
    
            if (!fire.passed && dino.x > fire.x + fire.width) {
                 //hitpoint substracts
                fire.passed = true;
            }
    
        
        }
        //clear fire when collide
        while  (fireArray[0].x < dinoX+(dinoWidth-50)) {
        fireArray.shift(); //removes first element from the array
    }
    
    }

    
    function placefire(){  //remove this function later and set interval ln 86 as well
    let fire = {
        img : fireImg,
        x : fireX,
        y : fireY,
        width : fireWidth,
        height : fireHeight,
        passed : false
    }
    fireArray.push(fire);
    }
}
}
