var circlegame;
(function (circlegame) {
    var MyGame = /** @class */ (function () {
        function MyGame() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
        }
        MyGame.prototype.start = function () {
            var _this = this;
            this.player = new Array();
            for (var i = 0; i < 10; i++) {
                this.player[i] = new CircleComponent(i * 5 + 3, i * 50, 10, 20, 30, "blue");
            }
            window.setInterval(function () { _this.update(); }, 20);
        };
        MyGame.prototype.update = function () {
            this.ctx.clearRect(0, 0, 1000, 1000);
            for (var i = 0; i < this.player.length; i++) {
                this.player[i].update();
                this.player[i].draw(this.ctx);
            }
        };
        return MyGame;
    }());
    var CircleComponent = /** @class */ (function () {
        function CircleComponent(x, y, r, dx, dy, color) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.dx = dx;
            this.dy = dy;
            this.color = color;
        }
        CircleComponent.prototype.update = function () {
            if (this.x < 0 || this.x > 990) {
                this.dx *= -1;
            }
            this.x += this.dx;
            if (this.y < 0 || this.y > 990) {
                this.dy *= -1;
            }
            this.y += this.dy;
        };
        CircleComponent.prototype.draw = function (ctx) {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.stroke();
            ctx.fill();
        };
        return CircleComponent;
    }());
    var game = new MyGame();
    game.start();
})(circlegame || (circlegame = {}));
//# sourceMappingURL=game.js.map