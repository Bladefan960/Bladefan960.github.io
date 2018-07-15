namespace moving{
    let board = document.querySelector("#board") as HTMLCanvasElement;
    let ctx = board.getContext("2d");

    let ballX = 400;
    let ballY = 300;
    let balldx = -2;
    let balldy = -2;

    function drawBall(){
        ctx.beginPath();
        ctx.arc(ballX,ballY,10,0,2*Math.PI,false);
        ctx.fillStyle = "#0095DD"
        ctx.fill();
        ctx.closePath();
    }

    function draw(){
        ctx.clearRect(0,0,board.width,board.height);
        drawBall();
        if (ballX > 800 || ballX < 0){
            balldx *= -1;
        }
        if (ballY > 600 || ballY < 0){
            balldy *= -1;
        }

        ballX += balldx;
        ballY += balldy;
    }

    window.setInterval(draw,30);
    
}