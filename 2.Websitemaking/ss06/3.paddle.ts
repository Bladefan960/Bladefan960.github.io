namespace moving{
    let board = document.querySelector("#board") as HTMLCanvasElement;
    let ctx = board.getContext("2d");

    let ballX = 400;
    let ballY = 300;
    let balldx = -10;
    let balldy = -10;

    function drawBall(){
        ctx.beginPath();
        ctx.arc(ballX,ballY,10,0,2*Math.PI,false);
        ctx.fillStyle = "#0095DD"
        ctx.fill();
        ctx.closePath();
    }
    let paddleX = board.width / 2;
    let paddleW = 100;
    let paddleH = 20;
    function drawPaddle(){
        ctx.beginPath();
        ctx.rect(paddleX-paddleW/2,580,paddleW, paddleH);
        ctx.fillStyle="#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    let leftPressed = false;
    let rightPressed = false;
    window.onkeydown = (evt) => {
        if (evt.keyCode == 37){
            leftPressed = true;
        }
        if(evt.keyCode == 39){
            rightPressed = true;
        }
    }

    window.onkeyup = (evt) => {
        if (evt.keyCode == 37){
            leftPressed = false;
        }
        else if (evt.keyCode == 39){
            rightPressed = false;
        }
    }
    function drawScore(number){
        document.querySelector("#scoreBox").innerHTML = "Score Counter: " + number;
    }
    var count = 0;
    function draw(){
        ctx.clearRect(0,0,board.width,board.height);
        drawBall();
        drawPaddle();
        if (ballX > 800 || ballX < 0){
            balldx *= -1;
        }
        
        if (ballY >570){
            if (ballX > paddleX - paddleW / 2 && ballX < paddleX + paddleW/2){
                count ++;
                drawScore(count);
                balldy *= -1;
            }
            else{
                if (ballY > 590){
                    alert("Game Over");
                    window.clearInterval(gameLoop);
                }
            }
        }
        
        if (ballY < 0){
            balldy *= -1;
        }
        
        ballX += balldx;
        ballY += balldy;
        
        if (leftPressed == true){
            paddleX -= 12;
        }
        if (rightPressed == true){
            paddleX += 12;
        }
    }

    let gameLoop = window.setInterval(draw,30);
    
}