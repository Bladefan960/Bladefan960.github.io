var board = document.querySelector("#board");
var ctx = board.getContext("2d");
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.arc(300, 300, 40, 0, Math.PI * 2);
ctx.fill();
for (var i = 1; i < 6; i++) {
    ctx.beginPath();
    ctx.arc(i * 100, 300, 40, 0, Math.PI * 2);
    ctx.fill();
}
for (var i = 1; i < 6; i++) {
    for (var j = 1; j < 6; j++) {
        if (i % 2 == 0) {
            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(i * 100, j * 100, 40, 0, Math.PI * 2);
            ctx.fill();
        }
        else {
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.arc(i * 100, j * 100, 40, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
//# sourceMappingURL=test.js.map