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
            this.Obstacle = new ObstacleComponent(990, 0, 50, -5, "red");
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
            this.Obstacle.update();
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
        function ObstacleComponent(x, y, w, dx, color) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.dx = dx;
            this.color = color;
            this.barH = Math.floor(Math.random() * 1000);
            this.gapH = Math.floor(Math.random() * 1000);
        }
        ObstacleComponent.prototype.draw = function (ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.barH);
        };
        ObstacleComponent.prototype.update = function () {
            this.x -= this.dx;
            if (this.x + this.w < 0) {
                this.x = 950;
                // this.draw();
            }
        };
        return ObstacleComponent;
    }());
    var game = new Game();
})(game091 || (game091 = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBd0xoQjtBQXhMRCxXQUFVLE9BQU87SUFFYjtRQVNJO1lBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRWxELFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RSxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFB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