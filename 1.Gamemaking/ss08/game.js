var game2;
(function (game2) {
    var MyGame = /** @class */ (function () {
        function MyGame() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
        }
        MyGame.prototype.start = function () {
            var _this = this;
            this.player = new RectComponent(100, 100, 10, 10, "blue", 3);
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
            if (this.x < 0 || this.x > 990) {
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
    var game = new MyGame();
    game.start();
})(game2 || (game2 = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxLQUFLLENBZ0RkO0FBaERELFdBQVUsS0FBSztJQUNYO1FBS0k7WUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBRU0sc0JBQUssR0FBWjtZQUFBLGlCQUdDO1lBRkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGFBQWEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdELE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBUSxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVNLHVCQUFNLEdBQWI7WUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0wsYUFBQztJQUFELENBQUMsQUFwQkQsSUFvQkM7SUFFRDtRQUNJLHVCQUNXLENBQVMsRUFDVCxDQUFTLEVBQ1QsQ0FBUyxFQUNULENBQVMsRUFDVCxLQUFhLEVBQ2IsRUFBVTtZQUxWLE1BQUMsR0FBRCxDQUFDLENBQVE7WUFDVCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1lBQ1QsTUFBQyxHQUFELENBQUMsQ0FBUTtZQUNULE1BQUMsR0FBRCxDQUFDLENBQVE7WUFDVCxVQUFLLEdBQUwsS0FBSyxDQUFRO1lBQ2IsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNyQixDQUFDO1FBRU0sOEJBQU0sR0FBYjtZQUNJLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDakI7WUFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdEIsQ0FBQztRQUNNLDRCQUFJLEdBQVgsVUFBWSxHQUE2QjtZQUNyQyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDM0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUNMLG9CQUFDO0lBQUQsQ0FBQyxBQXBCRCxJQW9CQztJQUdELElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7SUFDeEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2pCLENBQUMsRUFoRFMsS0FBSyxLQUFMLEtBQUssUUFnRGQifQ==