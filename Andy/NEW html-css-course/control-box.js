//board
let boardWidth=1000;
let boardHeight=1000;

//square
let squareWidth=50;
let squareHeight=50;
let squareX=boardWidth/2;
let squareY=boardHeight;

let square={
    x:squareX,
    y:squareY,
    width:squareWidth,
    height:squareHeight

};


const canvas=document.getElementById("board");
const ctx=canvas.getContext("2d");
canvas.height=1000;
canvas.width=boardWidth;



//draw square
ctx.fillRect(square.x,square.y,square.width,square.height);
ctx.fillStyle="green";




ctx.fillrectangle(20,20,150,100);
