var game091;
(function (game091) {
    var Game = /** @class */ (function () {
        function Game() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext('2d');
            this.update = this.update.bind(this);
            this.start = this.start.bind(this);
            this.handleKeyDown = this.handleKeyDown.bind(this);
            this.handleKeyUp = this.handleKeyUp.bind(this);
            this.stop = this.stop.bind(this);
            window.addEventListener('keydown', this.handleKeyDown);
            window.addEventListener('keyup', this.handleKeyUp);
            document.querySelector("#btnStart").addEventListener('click', this.start);
            document.querySelector("#btnStop").addEventListener('click', this.stop);
        }
        Game.prototype.handleKeyDown = function (ev) {
            this.keyCode = ev.keyCode;
        };
        Game.prototype.handleKeyUp = function (ev) {
            this.keyCode = null;
        };
        Game.prototype.start = function () {
            if (this.isStarted) {
                return;
            }
            this.isStarted = true;
            this.player = new RectPlayer(10, 40, 100, 100, "blue", 10, 10);
            this.spaceship = new SpaceshipComponent(10, 100, 150, 150, 1, 1);
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
            this.spaceship.update(this.keyCode);
            this.spaceship.draw(this.ctx);
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
                this.dx = -5;
                this.dy = 0;
            }
            else if (keyCode == 38) {
                this.dx = 0;
                this.dy = -5;
            }
            else if (keyCode == 39) {
                this.dx = 5;
                this.dy = 0;
            }
            else if (keyCode == 40) {
                this.dx = 0;
                this.dy = 5;
            }
            else if (keyCode == null) {
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
    var SpaceshipComponent = /** @class */ (function () {
        function SpaceshipComponent(x, y, w, h, dx, dy) {
            var _this = this;
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.dx = dx;
            this.dy = dy;
            this.dx = 0;
            this.dy = 0;
            var image = new Image(w, h);
            image.src = "Spaceship.png";
            image.addEventListener('load', function () { _this.loadedImage = image; });
        }
        SpaceshipComponent.prototype.draw = function (ctx) {
            if (this.loadedImage) {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(Math.PI / 2);
                ctx.drawImage(this.loadedImage, this.w / -2, this.h / -2, this.w, this.h);
                ctx.restore();
            }
        };
        SpaceshipComponent.prototype.update = function (keyCode) {
            if (keyCode == 65) {
                this.dx = -5;
                this.dy = 0;
            }
            else if (keyCode == 87) {
                this.dx = 0;
                this.dy = -5;
            }
            else if (keyCode == 68) {
                this.dx = 5;
                this.dy = 0;
            }
            else if (keyCode == 83) {
                this.dx = 0;
                this.dy = 5;
            }
            else if (keyCode == null) {
                this.dx = 0;
                this.dy = 0;
            }
            if (this.x < 0 || this.x > 900) {
                this.dx *= -1;
                //this.dy *= 1;
            }
            this.x += this.dx;
            if (this.y < 0 || this.y > 900) {
                this.dy *= -1;
                //this.dx *= 1;
            }
            this.x += this.dx;
            this.y += this.dy;
        };
        return SpaceshipComponent;
    }());
    var ObstacleComponent = /** @class */ (function () {
        // x,dx,color
        // barH, gapH
        function ObstacleComponent(x, dx, color, barH, gapH) {
            this.x = x;
            this.dx = dx;
            this.color = color;
            this.barH = barH;
            this.gapH = gapH;
            this.barH = Math.floor(Math.random() * 1000);
            this.dx = -2;
        }
        ObstacleComponent.prototype.draw = function (ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(990, 0, 50, this.barH);
        };
        ObstacleComponent.prototype.update = function () {
            if (this.x < 0 || this.x > 990) {
                this.dx *= -1;
            }
            this.x += this.dx;
        };
        return ObstacleComponent;
    }());
    var game = new Game();
})(game091 || (game091 = {}));
//# sourceMappingURL=game.js.map