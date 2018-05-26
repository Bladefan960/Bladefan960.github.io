namespace game092{
    class MyGame{
        public board: HTMLCanvasElement;
        public ctx: CanvasRenderingContext2D;
        public player: RectComponent;

        constructor(){
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext("2d");
        }
        
        public start(){
            this.player = new RectComponent(100,100,100,100,"red",3);
            window.setInterval(() => {this.update();},20);
        }
        public update(){
            this.ctx.clearRect(0,0,1000,1000);
            this.player.update();
            this.player.draw(this.ctx);
        }
        

    }
    class RectComponent{
        constructor(public x:number,
        public y: number,
        public w:number,
        public h :number,
        public color: string,
        public dx: number){

        }
        public update(){
            if (this.x < 0 || this.x > 900){
                this.dx *= -1;
            }
            this.x += this.dx;
        }
        public draw(ctx: CanvasRenderingContext2D){
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x,this.y,this.w, this.h);
        }

    }
    var myGame = new MyGame();
    myGame.start();
}