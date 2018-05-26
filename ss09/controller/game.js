var game092;
(function (game092) {
    var Game = /** @class */ (function () {
        function Game() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext('2d');
            this.update = this.update.bind(this);
            this.start = this.start.bind(this);
            this.handleKeyDown = this.handleKeyDown.bind(this);
            this.stop = this.stop.bind(this);
            window.addEventListener('keydown', this.handleKeyDown);
            document.querySelector("#btnStart").addEventListener('click', this.start);
            document.querySelector("#btnStop").addEventListener('click', this.stop);
        }
        Game.prototype.handleKeyDown = function (ev) {
            this.keyCode = ev.keyCode;
        };
        Game.prototype.start = function () {
            if (this.isStarted) {
                return;
            }
            this.isStarted = true;
            this.player = new RectPlayer(10, 40, 100, 100, "blue", 10, 10);
            this.gameloop = window.setInterval(this.update, 20);
        };
        Game.prototype.stop = function () {
            if (this.isStarted == false) {
                return;
            }
            this.isStarted = false;
            window.clearInterval(this.gameloop);
        };
        Game.prototype.update = function () {
            this.ctx.clearRect(0, 0, this.board.width, this.board.height);
            this.player.update(this.keyCode);
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
            this.dx = 0;
            this.dy = 0;
        }
        RectPlayer.prototype.draw = function (ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        };
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
        return RectPlayer;
    }());
    var game = new Game();
})(game092 || (game092 = {}));
//# sourceMappingURL=game.js.map