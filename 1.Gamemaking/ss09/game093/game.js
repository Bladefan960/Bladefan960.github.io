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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBcUdoQjtBQXJHRCxXQUFVLE9BQU87SUFDYjtRQVFJO1lBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUduRCxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRXRELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNNLDhCQUFhLEdBQXBCLFVBQXFCLEVBQWdCO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8s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