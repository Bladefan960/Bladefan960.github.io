var game093;
(function (game093) {
    var MyGame = /** @class */ (function () {
        function MyGame() {
            this.isStarted = false;
            this.update = this.update.bind(this);
            this.start = this.start.bind(this);
            this.stop = this.stop.bind(this);
            this.handleKeyDown = this.handleKeyDown.bind(this);
            document.querySelector("#btnStart").addEventListener('click', this.start);
            document.querySelector("#btnStop").addEventListener('click', this.stop);
            window.addEventListener('keydown', this.handleKeyDown);
            this.board = document.querySelector("#board");
            this.ctx = board.getContext("2d");
        }
        MyGame.prototype.handleKeyDown = function (ev) {
            this.keyCode = ev.keyCode;
        };
        MyGame.prototype.start = function () {
            var _this = this;
            if (this.isStarted) {
                return;
            }
            this.isStarted = true;
            this.player = new RectPlayer(10, 10, 100, 100, "red", 3, 3);
            this.gameloop = window.setInterval(function () { _this.update(); }, 20);
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
            this.player.update(this.keyCode);
            this.player.draw(this.ctx);
        };
        return MyGame;
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
        RectPlayer.prototype.update = function (keyCode) {
            if (keyCode == 37) {
                this.dx = -1;
                this.dy = 0;
            }
            else if (keyCode == 38) {
                this.dx = 0;
                this.dy = -1;
            }
            else if (keyCode == 39) {
                this.dx = 1;
                this.dy = 0;
            }
            else if (keyCode == 40) {
                this.dx = 0;
                this.dy = 1;
            }
            else {
                this.dx = 0;
                this.dy = 0;
            }
            if (this.x < 0 || this.x > 900) {
                this.dx *= -1;
                this.dy *= 1;
            }
            this.x += this.dx;
            if (this.y < 0 || this.y > 900) {
                this.dy *= -1;
                this.dx *= 1;
            }
            this.y += this.dy;
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