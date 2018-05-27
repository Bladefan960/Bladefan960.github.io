var game092;
(function (game092) {
    var MyGame = /** @class */ (function () {
        function MyGame() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
        }
        MyGame.prototype.start = function () {
            var _this = this;
            this.player = new RectComponent(100, 100, 100, 100, "red", 3);
            window.setInterval(function () { _this.update(); }, 20);
        };
        MyGame.prototype.update = function () {
            this.ctx.clearRect(0, 0, 1000, 1000);
            this.player.update();
            this.player.draw(this.ctx);
        };
        return MyGame;
    }());
    var RectComponent = /** @class */ (function () {
        function RectComponent(x, y, w, h, color, dx) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.color = color;
            this.dx = dx;
        }
        RectComponent.prototype.update = function () {
            if (this.x < 0 || this.x > 900) {
                this.dx *= -1;
            }
            this.x += this.dx;
        };
        RectComponent.prototype.draw = function (ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        };
        return RectComponent;
    }());
    var myGame = new MyGame();
    myGame.start();
})(game092 || (game092 = {}));
//# sourceMappingURL=game.js.map