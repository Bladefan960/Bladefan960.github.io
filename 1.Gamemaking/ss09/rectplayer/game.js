var game091;
(function (game091) {
    var Game = /** @class */ (function () {
        function Game() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext('2d');
            this.update = this.update.bind(this);
            this.start = this.start.bind(this);
            this.stop = this.stop.bind(this);
            document.querySelector("#btnStart").addEventListener('click', this.start);
            document.querySelector("#btnStop").addEventListener('click', this.stop);
        }
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
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        };
        RectPlayer.prototype.update = function () {
            if (this.x < 0 || this.x > 900) {
                this.dx *= -1;
            }
            this.x += this.dx;
            if (this.y < 0 || this.y > 900) {
                this.dy *= -1;
            }
            this.y += this.dy;
        };
        return RectPlayer;
    }());
    var game = new Game();
})(game091 || (game091 = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBK0RoQjtBQS9ERCxXQUFVLE9BQU87SUFFYjtRQU9JO1lBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pFLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RSxDQUFDO1FBQ00sb0JBQUssR0FBWjtZQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBQztnQkFDZixPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDTSxtQkFBSSxHQUFYO1lBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssRUFBQztnQkFDeEIsT0FBTzthQUNWO1lBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEMsQ0FBQztRQUNNLHFCQUFNLEdBQWI7WUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFL0IsQ0FBQztRQUVMLFdBQUM7SUFBRCxDQUFDLEFBdkNELElBdUNDO0lBQ0Q7UUFDSyxvQkFBbUIsQ0FBUSxFQUFTLENBQVEsRUFBUSxDQUFRLEVBQVEsQ0FBUSxFQUFRLEtBQVksRUFBUSxFQUFTLEVBQVEsRUFBUztZQUEvRyxNQUFDLEdBQUQsQ0FBQyxDQUFPO1lBQVMsTUFBQyxHQUFELENBQUMsQ0FBTztZQUFRLE1BQUMsR0FBRCxDQUFDLENBQU87WUFBUSxNQUFDLEdBQUQsQ0FBQyxDQUFPO1lBQVEsVUFBSyxHQUFMLEtBQUssQ0FBTztZQUFRLE9BQUUsR0FBRixFQUFFLENBQU87WUFBUSxPQUFFLEdBQUYsRUFBRSxDQUFPO1FBQ2xJLENBQUM7UUFDTSx5QkFBSSxHQUFYLFVBQVksR0FBNEI7WUFDckMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzNCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFDTSwyQkFBTSxHQUFiO1lBQ0ksSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBQztnQkFDM0IsSUFBSSxDQUFDLEVBQUUsSUFBRyxDQUFDLENBQUMsQ0FBQzthQUNoQjtZQUNELElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNsQixJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFDO2dCQUM1QixJQUFJLENBQUMsRUFBRSxJQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2hCO1lBQ0QsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRXJCLENBQUM7UUFDTixpQkFBQztJQUFELENBQUMsQUFsQkQsSUFrQkM7SUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzFCLENBQUMsRUEvRFMsT0FBTyxLQUFQLE9BQU8sUUErRGhCIn0=