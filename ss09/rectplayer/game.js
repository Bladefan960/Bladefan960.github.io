var game091;
(function (game091) {
    var Game = /** @class */ (function () {
        function Game() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext('2d');
        }
        Game.prototype.start = function () {
            var _this = this;
            this.player = new RectPlayer(10, 10, 10, 10, "blue", 1, 1);
            window.setInterval(function () { _this.update(); }, 20);
        };
        Game.prototype.update = function () {
            this.ctx.clearRect(0, 0, 1000, 1000);
            this.player.update();
            this.player.draw(this.ctx);
        };
        return Game;
    }());
    var RectPlayer = /** @class */ (function () {
        function RectPlayer(x, y, w, h, color, dx, dy) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.color = color;
            this.dx = dx;
            this.dy = dy;
        }
        RectPlayer.prototype.draw = function (ctx) {
            ctx.fillRect(10, 10, 10, 10);
        };
        RectPlayer.prototype.update = function () {
            if (this.x < 0 || this.x > 990) {
                this.dx *= -1;
            }
            this.x += this.dx;
            if (this.y < 0 || this.y > 990) {
                this.dy *= -1;
            }
            this.y += this.dy;
        };
        return RectPlayer;
    }());
    var game = new Game();
    game.start();
})(game091 || (game091 = {}));
