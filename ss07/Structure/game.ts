class MyGame {
    board: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    player: RectComponent;
    players: RectComponent[]; 

    constructor() {
        this.board = document.querySelector("#board");
        this.ctx = this.board.getContext('2d');
    }
    public start() {
        this.players = [];
        for (let i = 0; i < 10; i++) {
            var p = new RectComponent(0, 100+i*50, 30, 30, "blue");
            p.dx = i * 5;
            this.players.push(p);
        }
        this.player = new RectComponent(100, 100, 20, 20, "red");
        this.player.dx = 5;
        window.setInterval(() => { this.update() }, 20);
    }

    public update() {
        this.ctx.clearRect(0, 0, this.board.width, this.board.height);
        this.player.update();
        for (let i = 0; i < this.players.length; i++) {
            const element = this.players[i];
            this.players[i].update();
            this.players[i].draw(this.ctx);
        }
        this.player.draw(this.ctx);
    }
}

class RectComponent {
    x: number;
    y: number;
    w: number;
    h: number;
    color: string;
    dx: number;

    constructor(x, y, w, h, c){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = c;
    }

    public update() {
        if (this.x > 1000 || this.x < 0) {
            this.dx *= -1;
        }
        this.x += this.dx;
        if (this.y > 1000 || this.y < 0) {
            this.dx *= 1;
        }
        this.y += this.dx;
    }

    public draw (ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}


var game = new MyGame();
game.start();
