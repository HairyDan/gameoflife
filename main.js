function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i<arr.length; i++){
        arr[i] = new Array(rows);
                
    }
    return arr;
}

let grid;
let cols,rows;
let squaresize = 20;
let xres = yres = 400;

var canvas;
var ctx;

function setup(){
    canvas = document.createElement('canvas');
    canvas.width = xres+1;
    canvas.height = yres+1;
    //set up number of columns/rows for game tiles of a certain size
    //TODO: make this typesafe for conditions where res%squaresize != 0
    cols = xres / squaresize;
    rows = yres / squaresize;

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);

    ctx = canvas.getContext("2d");

    grid = make2DArray(cols,rows);

    //randomly populate the grid matrix with T/F, instantiating the "logic" of the board
    for (let i=0; i<cols;i++){
        for (let j = 0; j < rows; j++){
            //grid[i][j] = Math.floor(Math.random()*2);
            if (Math.floor(Math.random()*2) > 0){
                grid[i][j] = true;
            } else grid[i][j] = false;
        }
    }
}

function drawsquares(){
    //fill canvas with black
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    for (let i=0; i<rows;i++){
        for(let j=0; j<cols; j++){
           // console.log(grid[j][i]);
           let x = j*squaresize
           let y = i*squaresize

           if(grid[i][j]){
               ctx.fillStyle = "rgb(255,255,255)";
               //+1 and -1 surrounding to maintain black grid around all squares
               ctx.fillRect(x+1,y+1,squaresize-1, squaresize-1);
           }
        }
    }
}


setup();
drawsquares();
