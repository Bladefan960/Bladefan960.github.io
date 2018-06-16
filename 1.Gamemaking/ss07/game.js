var board = document.querySelector("#board");
var ctx = board.getContext("2d");
ctx.fillStyle = "blue";
var x = 100;
setInterval(update, 20);
var direction = 10;
function update() {
    ctx.clearRect(0, 0, 1000, 1000);
    x += direction;
    if (x == 1000) {
        direction = -30;
    }
    if (x == 700 && direction < 0) {
        direction = -10;
    }
    if (x == 0) {
        direction = 30;
    }
    if (x == 300 && direction > 0) {
        direction = 10;
    }
    ctx.fillRect(x, 100, 20, 20);
}
//# sourceMappingURL=game.js.map