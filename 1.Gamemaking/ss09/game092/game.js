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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxPQUFPLENBOENoQjtBQTlDRCxXQUFVLE9BQU87SUFDYjtRQUtJO1lBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVNLHNCQUFLLEdBQVo7WUFBQSxpQkFHQztZQUZHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQU8sS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFDTSx1QkFBTSxHQUFiO1lBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUdMLGFBQUM7SUFBRCxDQUFDLEFBckJELElBcUJDO0lBQ0Q7UUFDSSx1QkFBbUIsQ0FBUSxFQUNwQixDQUFTLEVBQ1QsQ0FBUSxFQUNSLENBQVMsRUFDVCxLQUFhLEVBQ2IsRUFBVTtZQUxFLE1BQUMsR0FBRCxDQUFDLENBQU87WUFDcEIsTUFBQyxHQUFELENBQUMsQ0FBUTtZQUNULE1BQUMsR0FBRCxDQUFDLENBQU87WUFDUixNQUFDLEdBQUQsQ0FBQyxDQUFRO1lBQ1QsVUFBSyxHQUFMLEtBQUssQ0FBUTtZQUNiLE9BQUUsR0FBRixFQUFFLENBQVE7UUFFakIsQ0FBQztRQUNNLDhCQUFNLEdBQWI7WUFDSSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFDO2dCQUMzQixJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO1lBQ0QsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUFDTSw0QkFBSSxHQUFYLFVBQVksR0FBNkI7WUFDckMsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzNCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFFTCxvQkFBQztJQUFELENBQUMsQUFwQkQsSUFvQkM7SUFDRCxJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQzFCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNuQixDQUFDLEVBOUNTLE9BQU8sS0FBUCxPQUFPLFFBOENoQiJ9