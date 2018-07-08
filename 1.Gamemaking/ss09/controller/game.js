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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBaUdoQjtBQWpHRCxXQUFVLE9BQU87SUFFYjtRQU9JO1lBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVqQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUV0RCxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVFLENBQUM7UUFDTSw0QkFBYSxHQUFwQixVQUFxQixFQUFpQjtZQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDOUIsQ0FBQztRQUdNLG9CQUFL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