var moving;
(function (moving) {
    var board = document.querySelector("#board");
    var ctx = board.getContext("2d");
    var ballX = 400;
    var ballY = 300;
    var balldx = -10;
    var balldy = -10;
    function drawBall() {
        ctx.beginPath();
        ctx.arc(ballX, ballY, 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    var paddleX = board.width / 2;
    var paddleW = 100;
    var paddleH = 20;
    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddleX - paddleW / 2, 580, paddleW, paddleH);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }
    var leftPressed = false;
    var rightPressed = false;
    window.onkeydown = function (evt) {
        if (evt.keyCode == 37) {
            leftPressed = true;
        }
        if (evt.keyCode == 39) {
            rightPressed = true;
        }
    };
    window.onkeyup = function (evt) {
        if (evt.keyCode == 37) {
            leftPressed = false;
        }
        else if (evt.keyCode == 39) {
            rightPressed = false;
        }
    };
    function drawScore(number) {
        document.querySelector("#scoreBox").innerHTML = "Score Counter: " + number;
    }
    var count = 0;
    function draw() {
        ctx.clearRect(0, 0, board.width, board.height);
        drawBall();
        drawPaddle();
        if (ballX > 800 || ballX < 0) {
            balldx *= -1;
        }
        if (ballY > 570) {
            if (ballX > paddleX - paddleW / 2 && ballX < paddleX + paddleW / 2) {
                count++;
                drawScore(count);
                balldy *= -1;
            }
            else {
                if (ballY > 590) {
                    alert("Game Over");
                    window.clearInterval(gameLoop);
                }
            }
        }
        if (ballY < 0) {
            balldy *= -1;
        }
        ballX += balldx;
        ballY += balldy;
        if (leftPressed == true) {
            paddleX -= 12;
        }
        if (rightPressed == true) {
            paddleX += 12;
        }
    }
    var gameLoop = window.setInterval(draw, 30);
})(moving || (moving = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5wYWRkbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIzLnBhZGRsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE1BQU0sQ0F5RmY7QUF6RkQsV0FBVSxNQUFNO0lBQ1osSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQXNCLENBQUM7SUFDbEUsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqQyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDaEIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ2hCLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQ2pCLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO0lBRWpCO1FBQ0ksR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO1FBQ3pCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDOUIsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ2xCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQjtRQUNJLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQyxPQUFPLEdBQUMsQ0FBQyxFQUFDLEdBQUcsRUFBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakQsR0FBRyxDQUFDLFNBQVMsR0FB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