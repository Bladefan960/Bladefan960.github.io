var game093;
(function (game093) {
    var MyGame = /** @class */ (function () {
        function MyGame() {
            this.isStarted = false;
            this.update = this.update.bind(this);
            this.start = this.start.bind(this);
            this.stop = this.stop.bind(this);
            this.handleKeyDown = this.handleKeyDown.bind(this);
            var start = document.addEventListener('click', this.start);
            var stop = document.addEventListener('click', this.stop);
            this.board = document.querySelector("#board");
            this.ctx = board.getContext("2d");
        }
        MyGame.prototype.handleKeyDown = function (ev) {
            this.keyCode = ev.keyCode;
        };
        MyGame.prototype.start = function () {
            if (this.isStarted) {
                return;
            }
            this.isStarted = true;
            this.player = new RectPlayer(10, 10, 100, 100, "red", 3);
            this.gameloop = window.setInterval(this.gameloop, 20);
        };
        MyGame.prototype.stop = function () {
            if (this.isStarted == false) {
                return;
            }
            this.isStarted = false;
            window.clearInterval(this.gameloop);
        };
        MyGame.prototype.update = function () {
            this.ctx.clearRect(0, 0, 1000, 1000);
            this.player.update();
            this.player.draw(this.ctx);
        };
        return MyGame;
    }());
    var RectPlayer = /** @class */ (function () {
        function RectPlayer(x, y, w, h, color, dx) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.color = color;
            this.dx = dx;
        }
        RectPlayer.prototype.update = function () {
            if (this.x < 0 || this.x > 900) {
                this.dx *= -1;
            }
            this.x += this.dx;
        };
        RectPlayer.prototype.draw = function (ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        };
        return RectPlayer;
    }());
    var mygame = new MyGame;
    mygame.start();
})(game093 || (game093 = {}));
//# sourceMappingURL=game.js.map