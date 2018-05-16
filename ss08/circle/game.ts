namespace circlegame{
    class MyGame{
        public board: HTMLCanvasElement;
        public ctx: CanvasRenderingContext2D;
        public player: CircleComponent[];

        constructor(){
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
        }
        public start(){
            this.player = new Array<CircleComponent>();
            for (let i = 0; i < 10; i++) {
                this.player[i] = new CircleComponent(i*5+3,i*50, 10,20,30,"blue");
            }
            window.setInterval(()=>{this.update();},20);
        }
        public update(){
            this.ctx.clearRect(0,0,1000,1000);
            for (let i = 0; i < this.player.length; i++) {
                this.player[i].update();
                this.player[i].draw(this.ctx);
            }
            

        }
    }
    class CircleComponent{
        constructor(public x:number, public y:number,public r:number, public dx:number, public dy: number, public color:string){
        }
        public update(){
            if (this.x < 0 || this.x > 990){
                this.dx *= -1;
            }
            this.x += this.dx;
            if (this.y < 0 || this.y > 990){
                this.dy *= -1;
            }
            this.y += this.dy;
            
        }
        public draw(ctx:CanvasRenderingContext2D){
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x,this.y, this.r,0,Math.PI *2);
            ctx.stroke();
            ctx.fill();
        }
    }

    

  
    var game = new MyGame();
    game.start();
}